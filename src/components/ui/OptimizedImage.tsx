import Image from "next/image";
import { cn } from "@/lib/utils";
import { BLUR_PLACEHOLDER } from "@/lib/images";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 80,
}: OptimizedImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn("object-cover", className)}
        sizes={sizes}
        quality={quality}
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDER}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      priority={priority}
      className={cn("object-cover", className)}
      sizes={sizes}
      quality={quality}
      placeholder="blur"
      blurDataURL={BLUR_PLACEHOLDER}
    />
  );
}
