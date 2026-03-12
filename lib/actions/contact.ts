"use server";

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
