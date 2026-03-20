import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <div className={cn("max-w-3xl", alignClass, className)}>
      {eyebrow && (
        <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        "font-serif text-3xl md:text-4xl font-bold leading-tight mb-4",
        theme === "light" ? "text-navy" : "text-white"
      )}>
        {title}
      </h2>
      {/* Gold divider */}
      <div className={cn("w-16 h-0.5 bg-gold mb-5", align === "center" ? "mx-auto" : "")}>
      </div>
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg leading-relaxed",
          theme === "light" ? "text-gray-600" : "text-white/70"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
