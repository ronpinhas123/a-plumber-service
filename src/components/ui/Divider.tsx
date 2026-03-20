import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  variant?: "gold" | "white" | "gray";
  width?: "sm" | "md" | "lg" | "full";
  align?: "left" | "center" | "right";
}

export default function Divider({
  className,
  variant = "gold",
  width = "md",
  align = "center",
}: DividerProps) {
  const variantClass = {
    gold: "bg-gold",
    white: "bg-white",
    gray: "bg-gray-200",
  }[variant];

  const widthClass = {
    sm: "w-8",
    md: "w-16",
    lg: "w-24",
    full: "w-full",
  }[width];

  const alignClass = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  }[align];

  return (
    <div
      className={cn("h-0.5 rounded-full", variantClass, widthClass, alignClass, className)}
      aria-hidden="true"
    />
  );
}
