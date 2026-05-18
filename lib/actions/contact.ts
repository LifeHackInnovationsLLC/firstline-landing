// NOTE: This was previously a Next.js Server Action ("use server").
// Server Actions are incompatible with `output: 'export'` (a static export
// has no server runtime). The original action did NOT send email or persist
// anything — it only validated input and console.logged a TODO. This is now
// a plain client-safe async function with the IDENTICAL signature and return
// shape, so the contact form keeps its exact UX. No real email was ever sent
// before this change, and none is sent now — zero user-visible difference.

import { contactSchema } from "@/lib/schemas/contact";

export async function contactFormAction(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    phone: formData.get("phone") ?? undefined,
    serviceType: formData.get("serviceType"),
    message: formData.get("message") ?? undefined,
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Invalid form data.",
    };
  }

  try {
    // --- Business logic ---
    // TODO: send email / save to DB / call external API
    console.log("Contact form submission:", parsed.data);
    // ----------------------

    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error("Contact form action error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
