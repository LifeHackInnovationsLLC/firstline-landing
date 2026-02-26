"use client";

import { useActionState } from "react";
import { contactFormAction } from "@/lib/actions/contact";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [_prevState, formAction, isPending] = useActionState(
    async (state: unknown, formData: FormData) => {
      // validate with zod
      //call the server action also validate in the server action
      const result = await contactFormAction(formData);
      if (result.success) {
        return {
          success: true,
          message: result.message,
        };
      }
      return {
        success: false,
        message: result.message,
      };
    },
    null,
  );

  return (
    <form action={formAction}>
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
