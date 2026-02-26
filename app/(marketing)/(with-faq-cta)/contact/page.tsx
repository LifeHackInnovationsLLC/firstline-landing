import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";

export default function ContactPage() {
  return (
    <Section id="contact" className="pt-12 lg:pt-40 lg:pb-25">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-13">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
