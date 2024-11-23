import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia'
});

export async function POST(request: NextRequest) {
  try {
    const {
      serviceChosen,
      name,
      email,
      phone,
      preferredWayOfCommunication,
      package: packageChosen
    } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: `Deposit for ${serviceChosen === `both` ? `Both Photography and Videography` : serviceChosen} service`,
              description: `Booking details:\n
              Service chosen: ${serviceChosen};\n
              Name: ${name};\n
              Email: ${email};\n
              Phone: ${phone};\n
              Preferred way of communication: ${preferredWayOfCommunication};\n
              Package chosen: ${packageChosen};`
            },
            unit_amount: 10000 // 100 CAD in cents
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/cancel`,
      metadata: {
        name,
        email,
        phone,
        preferredWayOfCommunication
      }
    });

    return NextResponse.json({ id: session.id });
  } catch (e) {
    return NextResponse.json({ error: `Failed to create Stripe Checkout session: ${e}` }, { status: 500 });
  }
}