import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Readable } from 'stream';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia'
});

export const config = {
  api: {
    bodyParser: false
  }
};

// Helper to convert a Readable stream to a buffer
async function toBuffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  let event: Stripe.Event;

  try {
    // Convert request body to a buffer
    // @ts-ignore
    const buf = await toBuffer(req.body as Readable);
    const sig = req.headers.get('stripe-signature')!;

    // Construct the Stripe event
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', (err as Error).message);
    return NextResponse.json({ error: `Webhook Error: ${(err as Error).message}` }, { status: 400 });
  }

  // Handle the webhook event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log('Checkout session completed:', session);

    if (session.metadata) {
      const { email, name, phone, preferredWayOfCommunication } = session.metadata;

      try {
        // Send emails
        await Promise.all([
          fetch(`${process.env.BASE_URL}/api/resend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              subject: `New Booking at TimelessView!`,
              html: `
                <b>Please visit your Stripe Account to ensure that the payment from ${email} was successful! 
                Also you can see all the details about the booking there.</b>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Preferred Way of Communication:</strong> ${preferredWayOfCommunication}</p>
                <p>Date of booking: ${new Date(session.created * 1000).toLocaleString()}
                </p>
              `
            })
          }),
          fetch(`${process.env.BASE_URL}/api/resend-to-user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email,
              subject: `Your Booking at TimelessView!`,
              html: `
                <h1>Dear ${name},</h1>
                <p>Thank you for booking my services! I will contact you shortly.</p>
                <p>Now, please feel free to fill in this form here - <a href="#" style="
                color: #fbbf24; text-decoration: underline; font-weight: 600">Google Form</a>, so I would 
                be able to understand your needs better.</p>
                <h2>Booking Details:</h2>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Preferred Way of Communication: ${preferredWayOfCommunication}</p>
                <p>Best regards,</p>
                <p>TimelessView, Olena Vinytska</p>
              `
            })
          })
        ]);

        console.log('Emails sent successfully');
      } catch (err) {
        console.error('Error sending emails:', (err as Error).message);
        return NextResponse.json({ error: `Webhook Error: ${(err as Error).message}` }, { status: 500 });
      }
    } else {
      console.error('No metadata found in session.');
      return NextResponse.json({ error: 'No metadata found in session.' }, { status: 400 });
    }
  }

  // Acknowledge receipt of the webhook
  return NextResponse.json({ received: true });
}
