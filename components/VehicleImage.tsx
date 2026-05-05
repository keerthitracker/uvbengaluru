import Image from "next/image";

interface VehicleImageProps {
  src: string;
  alt: string;
  label: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export default function VehicleImage({
  src,
  alt,
  fill,
  width,
  height,
  priority,
  className,
  sizes,
}: VehicleImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        sizes={sizes}
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
      className={className}
      sizes={sizes}
    />
  );
}
