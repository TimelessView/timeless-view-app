import { NextRequest, NextResponse } from 'next/server';
import { buffer } from 'micro';
import Stripe from 'stripe';
import axios from 'axios';

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
  // @ts-ignore
  const buf = await buffer(req);
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err);
    // @ts-ignore
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Handle successful payment here
    const {
      // @ts-ignore
      email,
      // @ts-ignore
      name,
      // @ts-ignore
      phone,
      // @ts-ignore
      serviceChosen,
      // @ts-ignore
      preferredWayOfCommunication,
      // @ts-ignore
      package: servicePackage
    } = session.metadata;

    // Send emails
    await axios.post('/api/resend', {
      subject: `New Booking is made at TimelessView! ${serviceChosen === `both` ? `Both Videography and Photography` : serviceChosen} Service`,
      html: `
        <b>Please go to your Stripe Account and ensure that the payment from ${email} was actually successful!</b>
        <br>
        <p><strong>Service Chosen:</strong> ${serviceChosen}</p>
        <p><strong>Name:</strong> ${name};</p>
        <p><strong>Email:</strong> ${email};</p>
        <p><strong>Phone:</strong> ${phone};</p>
        <p><strong>Preferred Way of Communication:</strong> ${preferredWayOfCommunication};</p>
        <p><strong>Package:</strong> ${servicePackage};</p>
      `
    });

    await axios.post('/api/resend-to-user', {
      email,
      subject: `Your Booking at TimelessView!`,
      html: `
        <h1>Dear ${name},</h1>
        <p>Thank you for booking my ${serviceChosen === `both` ? `Videography and Photography` : serviceChosen} service. I have received your deposit payment and will contact you shortly with further details.</p>
        <p>Right now, please feel free to fulfill this form, which would help me understand your needs better: <a href="">LINK</a></p>
        <h2>Booking Details:</h2>
        <p>Service Chosen: ${serviceChosen}</p>
        <p>Name: ${name};</p>
        <p>Email: ${email};</p>
        <p>Phone: ${phone};</p>
        <p>Preferred Way of Communication: ${preferredWayOfCommunication};</p>
        <p>Package: ${servicePackage};</p>
        <br>
        <p>Best regards,</p>
        <p>TimelessView, Olena Vinytska</p>
      `
    });
  }

  return NextResponse.json({ received: true });
}