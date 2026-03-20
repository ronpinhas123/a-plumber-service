"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  theme?: "light" | "dark";
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  theme = "light",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const bgClass = theme === "dark" ? "bg-navy" : "bg-gray-50";
  const borderClass = theme === "dark" ? "border-white/10" : "border-gray-200";
  const questionClass = theme === "dark" ? "text-white" : "text-navy";
  const answerClass = theme === "dark" ? "text-white/70" : "text-gray-600";
  const cardBg = theme === "dark" ? "bg-white/5" : "bg-white";

  return (
    <section className={`py-20 md:py-28 ${bgClass}`} aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading
            eyebrow="FAQ"
            title={title}
            subtitle={subtitle}
            theme={theme}
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl border overflow-hidden transition-all duration-200",
                borderClass,
                cardBg
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className={cn("font-semibold text-sm md:text-base pr-4", questionClass)}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gold flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className={cn("px-6 pb-5 text-sm leading-relaxed", answerClass)}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
