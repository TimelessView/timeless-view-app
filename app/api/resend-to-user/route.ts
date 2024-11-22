import { NextRequest, NextResponse } from 'next/server';
import { SendingEmailDetailsToUserInterface } from '@/utils/interfaces/resend';
import { sendingEmailDetailsToUserSchema } from '@/utils/schemas';
import { sendEmailDetailsToUser } from '@/utils/functions/sendEmailDetailsToUser';

export async function POST(request: NextRequest) {
  try {

    const { email, subject, html } = await request.json() as SendingEmailDetailsToUserInterface;

    const validation = sendingEmailDetailsToUserSchema.safeParse({ email, subject, html });

    if (!validation.success) {
      return NextResponse.json({
        status: `error`,
        message: validation.error.errors[0].message || `something went wrong! Please try again later.`
      });
    }

    await sendEmailDetailsToUser({ email, subject, html });

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
