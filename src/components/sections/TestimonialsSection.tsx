import Link from "next/link";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  theme?: "light" | "dark";
}

export default function TestimonialsSection({
  title = "What Houston Homeowners Are Saying",
  subtitle = "Don't just take our word for it. Here's what our clients across the Houston area say about working with A Plumber Service.",
  limit = 6,
  theme = "light",
}: TestimonialsSectionProps) {
  const displayTestimonials = testimonials.slice(0, limit);
  const bgClass = theme === "dark" ? "bg-navy" : "bg-white";
  const cardBgClass = theme === "dark" ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-100";

  return (
    <section className={`py-20 md:py-28 ${bgClass}`} aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Customer Reviews"
            title={title}
            subtitle={subtitle}
            theme={theme}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayTestimonials.map((t) => (
            <div
              key={t.id}
              className={`rounded-2xl p-7 border ${cardBgClass} hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-5">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-gold/20" />
                <p className={`text-sm leading-relaxed pl-4 ${theme === "dark" ? "text-white/80" : "text-gray-700"}`}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/50">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className={`font-semibold text-sm ${theme === "dark" ? "text-white" : "text-navy"}`}>{t.name}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Link
                      href={`/service-areas/${t.citySlug}`}
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      {t.city}, TX
                    </Link>
                    <span>•</span>
                    <span>{t.service}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
          >
            Read All Reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
