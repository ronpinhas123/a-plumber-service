import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-lg">
        <p className="font-serif text-8xl font-bold text-gold mb-4">404</p>
        <h1 className="font-serif text-3xl font-bold text-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-10">
          Sorry, the page you&apos;re looking for doesn&apos;t exist. But we&apos;re still here to help with all your plumbing needs!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-flex items-center gap-2 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            {SITE_CONFIG.phoneFormatted}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {[
            { href: "/services", label: "Services" },
            { href: "/service-areas", label: "Service Areas" },
            { href: "/contact", label: "Contact" },
            { href: "/blog", label: "Blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gold hover:text-gold-dark font-semibold text-sm flex items-center gap-1 transition-colors"
            >
              {link.label} <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
