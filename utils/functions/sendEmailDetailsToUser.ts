import { Resend } from 'resend';
import { sendingEmailDetailsToUserSchema } from '@/utils/schemas';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailDetailsToUser(details: { email: string, subject: string; html: string, }) {
  const { email, subject, html } = details;

  const validation = sendingEmailDetailsToUserSchema.safeParse({ subject, html, email });

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  try {
    const response = await resend.emails.send({
      from: String(process.env.RESEND_FROM_DOMAIN),
      to: email,
      subject: subject,
      html: html
    });

    // console.log(`Executing response in sendConsultationDetailsEmail: `, response);

    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
}
