"use client";

import { useId, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactFormValues, contactSchema } from "@/lib/schemas/contact";
import { contactFormAction } from "@/lib/actions/contact";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const ids = {
    name: useId(),
    email: useId(),
    company: useId(),
    phone: useId(),
    serviceType: useId(),
    message: useId(),
  };

  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      serviceType: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setServerError(null);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await contactFormAction(formData);
    if (result.success) {
      setSuccess(true);
      form.reset();
    } else {
      setServerError(
        result.message ?? "Something went wrong. Please try again.",
      );
    }
  }

  if (success) {
    return (
      <div className="relative flex min-h-[400px] flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-white/12 bg-white/3 px-5 py-8 text-center backdrop-blur-[50px]">
        <div className="pointer-events-none absolute -left-[133px] -top-[274px] h-[376px] w-[376px] rounded-full bg-[rgba(99,99,177,0.32)] mix-blend-plus-lighter blur-[200px]" />
        <p className="text-lg font-medium text-white">Message sent!</p>
        <p className="text-sm text-white/50">
          We&apos;ll get back to you shortly.
        </p>
        <Button variant="ghost" onClick={() => setSuccess(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/3 px-5 py-8 backdrop-blur-[50px]">
      <div className="pointer-events-none absolute -left-[133px] -top-[274px] h-[376px] w-[376px] rounded-full bg-[rgba(99,99,177,0.32)] mix-blend-plus-lighter blur-[200px]" />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7"
      >
        <FieldGroup className="gap-6">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex flex-col gap-4">
                  <Label htmlFor={ids.name}>Full name</Label>
                  <Input
                    {...field}
                    id={ids.name}
                    type="text"
                    placeholder="Himanshu Tomar"
                    className="h-auto bg-black px-3 py-3 placeholder:text-white/30"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              </Field>
            )}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex flex-col gap-4">
                    <Label htmlFor={ids.email}>Email</Label>
                    <Input
                      {...field}
                      id={ids.email}
                      type="email"
                      placeholder="name@company.com"
                      className="h-auto bg-black px-3 py-3 placeholder:text-white/30"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </div>
                </Field>
              )}
            />
            <Controller
              name="company"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex flex-col gap-4">
                    <Label htmlFor={ids.company}>Company</Label>
                    <Input
                      {...field}
                      id={ids.company}
                      type="text"
                      placeholder="Company Name"
                      className="h-auto bg-black px-3 py-3 placeholder:text-white/30"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </div>
                </Field>
              )}
            />
          </div>

          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex flex-col gap-4">
                  <Label htmlFor={ids.phone}>Phone (optional)</Label>
                  <Input
                    {...field}
                    id={ids.phone}
                    type="tel"
                    placeholder="+1 xxx-xxxx-xxx"
                    className="h-auto bg-black px-3 py-3 placeholder:text-white/30"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              </Field>
            )}
          />

          <Controller
            name="serviceType"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex flex-col gap-4">
                  <Label htmlFor={ids.serviceType}>Product/Service Type</Label>
                  <Input
                    {...field}
                    id={ids.serviceType}
                    type="text"
                    placeholder="eg. Coaching Program, SAAS, Physical Product"
                    className="h-auto bg-black px-3 py-3 placeholder:text-white/30"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              </Field>
            )}
          />

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex flex-col gap-4">
                  <Label htmlFor={ids.message}>Additional notes</Label>
                  <Textarea
                    {...field}
                    id={ids.message}
                    className="border border-white/12 bg-black px-3 py-4"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              </Field>
            )}
          />
        </FieldGroup>

        {serverError && (
          <p className="text-sm text-destructive">{serverError}</p>
        )}

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : "Submit form"}
        </Button>
      </form>
    </div>
  );
}
