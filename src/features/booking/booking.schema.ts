import { z } from "zod";

export const bookingRequestSchema = z.object({
  name: z.string().min(2, "Skriv dit navn"),
  contactMethod: z.enum(["email", "phone"]),
  email: z.string().email("Skriv en gyldig email").optional().or(z.literal("")),
  phone: z.string().min(6, "Skriv et telefonnummer").optional().or(z.literal("")),
  service: z.string().min(1, "Vælg en behandling"),
  date: z.string().min(1, "Vælg en dato"),
  time: z.string().min(1, "Vælg et tidspunkt"),
  note: z.string().max(500).optional(),
}).superRefine((booking, context) => {
  const hasEmail = booking.email !== undefined && booking.email !== "";
  const hasPhone = booking.phone !== undefined && booking.phone !== "";

  if (hasEmail === hasPhone) {
    context.addIssue({ code: z.ZodIssueCode.custom, message: "Vælg enten email eller telefon", path: ["contactMethod"] });
  }

  if (booking.contactMethod === "email" && !hasEmail) {
    context.addIssue({ code: z.ZodIssueCode.custom, message: "Skriv din email", path: ["email"] });
  }

  if (booking.contactMethod === "phone" && !hasPhone) {
    context.addIssue({ code: z.ZodIssueCode.custom, message: "Skriv dit telefonnummer", path: ["phone"] });
  }
});

export type BookingRequestInput = z.infer<typeof bookingRequestSchema>;
