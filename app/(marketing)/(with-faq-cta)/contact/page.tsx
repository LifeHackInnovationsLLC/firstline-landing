import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the Firstline team. Have questions about commissions, partnerships, or our platform? We're here to help.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section id="contact" className="pt-12 lg:pt-32 lg:pb-25">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-13 [--page-section-content-width:31.25rem] max-w-(--page-section-content-width) mx-auto lg:max-w-none">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
