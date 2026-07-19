"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    q: "What services do you offer at home?",
    a: "We offer Elderly Care, Nursing Care, Physiotherapy, Dementia Care, Palliative Care, and Post-Surgery Care — all delivered by trained professionals at your home.",
  },
  {
    q: "Are your caregivers background verified?",
    a: "Yes, every caregiver undergoes thorough background verification, identity checks, and professional training before being placed with a family.",
  },
  {
    q: "How quickly can care start?",
    a: "In most cases we can arrange a caregiver within 24-48 hours of your consultation and assessment.",
  },
  {
    q: "What areas in Bengaluru do you serve?",
    a: "We currently serve Vijayanagar, Rajajinagar, Basaveshwaranagar, Malleshwaram, and surrounding areas. Contact us to confirm your area.",
  },
  {
    q: "How do I pay for the services?",
    a: "We accept UPI, bank transfer, and cash payments. Pricing is transparent with no hidden charges — you'll receive a full quote before care begins.",
  },
  {
    q: "Can I change my caregiver if needed?",
    a: "Absolutely. Your comfort is our priority. If you're not satisfied with a caregiver match, we'll arrange a replacement at no extra cost.",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-16 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <Badge
          variant="outline"
          className="mb-3 text-[#0d4d4d] border-[#0d4d4d]"
        >
          Resources
        </Badge>
        <h2 className="text-3xl font-bold text-[#0a2e2e]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#4a7070] mt-2 text-sm">
          Everything you need to know before getting started.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="border border-[#eef2f2] rounded-xl px-5 shadow-sm"
          >
            <AccordionTrigger className="text-left text-[#0a2e2e] font-medium hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-[#4a7070] text-sm leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
