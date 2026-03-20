import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";
import { cn } from "@/lib/utils";

interface PhoneLinkProps {
  className?: string;
  showIcon?: boolean;
  variant?: "default" | "gold" | "white";
}

export default function PhoneLink({
  className,
  showIcon = true,
  variant = "default",
}: PhoneLinkProps) {
  const variantClasses = {
    default: "text-navy hover:text-gold",
    gold: "text-gold hover:text-gold-dark",
    white: "text-white hover:text-gold",
  };

  return (
    <a
      href={SITE_CONFIG.phoneHref}
      className={cn("inline-flex items-center gap-2 font-semibold transition-colors", variantClasses[variant], className)}
      data-track="phone-click"
    >
      {showIcon && <Phone className="w-4 h-4" />}
      {SITE_CONFIG.phoneFormatted}
    </a>
  );
}
