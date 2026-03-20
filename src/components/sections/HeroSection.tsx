import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { SITE_CONFIG } from "@/data/site-config";
import { unsplashUrl } from "@/lib/images";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  imageId: string;
  imageAlt: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  badges?: string[];
  minHeight?: string;
  overlay?: number;
}

export default function HeroSection({
  headline,
  subheadline,
  imageId,
  imageAlt,
  ctaPrimary = { label: "Get a Free Estimate", href: "/contact" },
  ctaSecondary,
  badges = ["Licensed & Insured", "20+ Years Experience", "Free Estimates"],
  minHeight = "min-h-[85vh]",
  overlay = 60,
}: HeroSectionProps) {
  return (
    <section className={cn("relative flex items-center", minHeight)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={unsplashUrl(imageId, 1920)}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, rgba(26,39,68,${overlay / 100}) 0%, rgba(26,39,68,0.5) 100%)` }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            Houston&apos;s Most Trusted
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {headline}
          </h1>

          {subheadline && (
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              {subheadline}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href={ctaPrimary.href}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-lg transition-all duration-200 text-base shadow-gold hover:shadow-gold-lg group"
            >
              {ctaPrimary.label}
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

          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
