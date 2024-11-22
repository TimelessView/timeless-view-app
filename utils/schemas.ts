import { z } from 'zod';

export const consultationFormSchema = z.object({
  name: z.string().min(1, { message: `Name is required` }).max(255),
  email: z.string().email({ message: `Invalid email address` }),
  phone: z.string().min(10, { message: `Please provide a valid phone number!` }).max(15)
});

export const sendingEmailDetailsSchema = z.object({
  subject: z.string().min(1, { message: `Subject is required` }).max(255),
  html: z.string().min(1, { message: `Content is required` })
});

export const serviceBookingSchema = z.object({
  serviceChosen: z.enum([`photography`, `videography`, `both`]),
  name: z.string().min(1, { message: `Name is required` }).max(255),
  email: z.string().email({ message: `Invalid email address` }),
  phone: z.string().min(10, { message: `Please provide a valid phone number!` }),
  preferredWayOfCommunication: z.enum([`email`, `phone`, `socialMedia`]),
  package: z.enum([`photoSession`, `videoShoot`, `both`, `none`])
});
