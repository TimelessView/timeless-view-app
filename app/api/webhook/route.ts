import { NextRequest, NextResponse } from 'next/server';
import { buffer } from 'micro';
import Stripe from 'stripe';
import axios from 'axios';
import { IncomingMessage } from 'node:http';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia'
});

export const config = {
  api: {
    bodyParser: false
  }
};

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  let event: Stripe.Event;

  try {
    const buf = await buffer(req as unknown as IncomingMessage);
    const sig = req.headers.get('stripe-signature')!;

    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err);
    return NextResponse.json({ error: `Webhook Error: ${(err as Error).message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log('Checkout session completed:', session);

    if (session.metadata) {
      const {
        email,
        name,
        phone,
        // serviceChosen,
        preferredWayOfCommunication
        // package: servicePackage
      } = session.metadata;

      // console.log('Metadata:', { email, name, phone, serviceChosen, preferredWayOfCommunication, servicePackage });

      try {
        // Send emails
        await axios.post('/api/resend', {
          subject: `New Booking is made at TimelessView! Service`,
          html: `
            <b>Please go to your Stripe Account and ensure that the payment from ${email} was actually successful!</b>
            <br>
<!--            <p><strong>Service Chosen:</strong> serviceChosen</p>-->
            <p><strong>Name:</strong> ${name};</p>
            <p><strong>Email:</strong> ${email};</p>
            <p><strong>Phone:</strong> ${phone};</p>
            <p><strong>Preferred Way of Communication:</strong> ${preferredWayOfCommunication};</p>
<!--            <p><strong>Package:</strong> servicePackage</p>-->
          `
        });

        await axios.post('/api/resend-to-user', {
          email,
          subject: `Your Booking at TimelessView!`,
          html: `
            <h1>Dear ${name},</h1>
            <p>Thank you for booking my services. I have received your deposit payment and will contact you shortly with further details.</p>
            <p>Right now, please feel free to fulfill this form, which would help me understand your needs better: <a href="">LINK</a></p>
            <h2>Booking Details:</h2>
<!--            <p>Service Chosen: {serviceChosen}</p>-->
            <p>Name: ${name};</p>
            <p>Email: ${email};</p>
            <p>Phone: ${phone};</p>
            <p>Preferred Way of Communication: ${preferredWayOfCommunication};</p>
<!--            <p>Package: {servicePackage};</p>-->
            <br>
            <p>Best regards,</p>
            <p>TimelessView, Olena Vinytska</p>
          `
        });

        console.log('Emails sent successfully');
      } catch (err) {
        console.error('Error handling checkout session completed event:', err);
        return NextResponse.json({ error: `Webhook Error: ${(err as Error).message}` }, { status: 500 });
      }
    } else {
      console.error('No metadata found in session.');
      return NextResponse.json({ error: 'No metadata found in session.' }, { status: 400 });
    }
  }

  return NextResponse.json({ received: true });
}