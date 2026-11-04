import { z } from "zod";

/** Shared by the browser form and the server function. No server imports here. */

export const SERVICE_OPTIONS = [
  { value: "body", label: "Body & collision", hint: "Dents, damage, paint" },
  { value: "mechanical", label: "Mechanical", hint: "Warning lights, brakes, noises" },
  { value: "unsure", label: "Not sure", hint: "Tell us what's happening" },
] as const;

export const DRIVABLE_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unsure", label: "Not sure" },
] as const;

export const CONTACT_PREF_OPTIONS = [
  { value: "call", label: "Call" },
  { value: "text", label: "Text" },
  { value: "email", label: "Email" },
] as const;

const phoneMsg = "Please enter a phone number with area code.";
const emailMsg = "That email doesn't look right.";

export const estimateSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Please enter your name.")
      .max(80, "Please enter your name."),
    phone: z
      .string()
      .trim()
      .max(25, phoneMsg)
      .refine((v) => v.replace(/\D/g, "").length >= 10, phoneMsg),
    email: z
      .string()
      .trim()
      .refine((v) => v === "" || z.email().safeParse(v).success, emailMsg),
    service: z.enum(["body", "mechanical", "unsure"], { error: "Pick the closest option." }),
    vehicle: z
      .string()
      .trim()
      .min(3, "Year, make and model helps us prepare.")
      .max(80, "Year, make and model helps us prepare."),
    drivable: z.enum(["yes", "no", "unsure", ""]),
    contactPref: z.enum(["call", "text", "email"]).default("call"),
    description: z
      .string()
      .trim()
      .min(10, "A sentence or two about what's happening, please.")
      .max(2000, "A sentence or two about what's happening, please."),
    consent: z.literal(true, { error: "Please confirm so we can contact you." }),
    /** Honeypot: real people leave this empty. */
    company: z.string().optional(),
  })
  .refine((v) => v.contactPref !== "email" || v.email !== "", {
    path: ["email"],
    message: "Add an email so we can reach you that way.",
  });

export type EstimateInput = z.infer<typeof estimateSchema>;

/** A saved request as returned to the inbox. */
export type EstimateRow = {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  vehicle: string;
  drivable: string | null;
  contact_pref: string;
  description: string;
};
