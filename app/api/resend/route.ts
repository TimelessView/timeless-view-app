import { NextRequest, NextResponse } from 'next/server';
import { sendDetailsEmail } from '@/utils/functions/sendDetailsEmail';
import { sendingEmailDetailsSchema } from '@/utils/schemas';
import { ConsultationDetailsInterface } from '@/utils/interfaces/resend';

export async function POST(request: NextRequest) {
  try {

    const { subject, html } = await request.json() as ConsultationDetailsInterface;

    const validation = sendingEmailDetailsSchema.safeParse({ subject, html });

    if (!validation.success) {
      return NextResponse.json({
        status: `error`,
        message: validation.error.errors[0].message || `something went wrong! Please try again later.`
      });
    }

    // create a serer function in e.g. mongodb.ts and then call it here
    await sendDetailsEmail({ subject, html });

    return NextResponse.json({
      status: `success`,
      message: `Email sent successfully!`
    });

  } catch (e) {
    return NextResponse.json({
      error: true,
      message: ` ${e}`
    });
  }
}
