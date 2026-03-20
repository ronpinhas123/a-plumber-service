import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-gold hover:bg-gold-dark text-navy shadow-gold hover:shadow-gold-lg",
        secondary: "bg-navy hover:bg-navy-light text-white border border-navy hover:border-navy-light",
        outline: "border-2 border-gold text-gold hover:bg-gold hover:text-navy",
        ghost: "text-navy hover:bg-navy/10",
        white: "bg-white text-navy hover:bg-white/90 shadow-lg",
        "white-outline": "border-2 border-white text-white hover:bg-white hover:text-navy",
      },
      size: {
        sm: "text-sm px-4 py-2",
        md: "text-sm px-6 py-3",
        lg: "text-base px-8 py-4",
        xl: "text-lg px-10 py-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  "aria-label"?: string;
}

export default function Button({
  href,
  children,
  className,
  variant,
  size,
  onClick,
  type = "button",
  disabled,
  external,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
