import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Product/service type is required"),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
