import { Resend } from 'resend';
import { sendingEmailDetailsSchema } from '@/utils/schemas';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendDetailsEmail(details: { subject: string; html: string }) {
  const { subject, html } = details;

  const validation = sendingEmailDetailsSchema.safeParse({ subject, html });

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  try {
    const response = await resend.emails.send({
      from: String(process.env.RESEND_FROM_DOMAIN),
      to: String(process.env.RESEND_RECEIVER_EMAIL),
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