import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Le nom est trop obigatoire"),
  phone: z.string().min(1, "Le numéro est obigatoire"),
  address: z.string().optional(),
});

export type contactFormData = z.infer<typeof contactSchema>;
