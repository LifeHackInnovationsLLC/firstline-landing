import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How secure is my data with Firstline?",
    answer:
      "Your data is protected with enterprise-grade security. We use end-to-end encryption, secure cloud infrastructure, and follow industry best practices to ensure your sales network and commission data remain safe and private.",
  },
  {
    question: "Can I access Firstline on both mobile and desktop?",
    answer:
      "Yes! Firstline is fully responsive and works seamlessly across all devices. Access your dashboard, track commissions, and manage your sales network from anywhere - whether you're on your phone, tablet, or desktop.",
  },
  {
    question: "What happens after my free trial?",
    answer:
      "After your free trial ends, you can choose a plan that fits your needs. All your data and configurations will be preserved, so you can continue right where you left off with no interruption to your sales network.",
  },
  {
    question: "How can I upgrade or downgrade my plan?",
    answer:
      "You can change your plan at any time from your account settings. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle. No long-term contracts required.",
  },
  {
    question: "What if I forget my password?",
    answer:
      "Simply click the 'Forgot Password' link on the login page. We'll send you a secure reset link to your registered email address. You can also enable two-factor authentication for added security.",
  },
];

export function FAQList() {
  return (
    <Accordion defaultValue={[0]}>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={index}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
