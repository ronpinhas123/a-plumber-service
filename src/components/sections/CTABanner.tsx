import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
}

export default function CTABanner({
  title = "Ready to Transform Your Houston Home?",
  subtitle = "Get a free, no-obligation estimate from Houston's most trusted plumbing and home remodeling team.",
  primaryCta = { label: "Get Your Free Estimate", href: "/contact" },
}: CTABannerProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-dark via-navy to-navy-light" aria-label="Call to action">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-lg transition-all duration-200 text-base shadow-gold hover:shadow-gold-lg group"
          >
            {primaryCta.label}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-4 rounded-lg transition-all duration-200 text-base"
          >
            <Phone className="w-5 h-5" />
            {SITE_CONFIG.phoneFormatted}
          </a>
        </div>
        <p className="mt-6 text-white/40 text-sm">
          Serving Houston and 32 surrounding communities • Licensed & Insured • {SITE_CONFIG.yearsInBusiness} Years of Excellence
        </p>
      </div>
    </section>
  );
}
