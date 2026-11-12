import Image from "next/image";

interface BrandLogoProps {
  priority?: boolean;
  className?: string;
}

export default function BrandLogo({ priority, className }: BrandLogoProps) {
  return (
    <span className={`inline-flex flex-col items-end ${className ?? ""}`}>
      <Image
        src="/images/ultraviolette-logo-footer-official.svg"
        alt="Ultraviolette"
        width={330}
        height={43}
        priority={priority}
        className="h-[22px] w-auto"
      />
      <span className="mt-1.5 flex items-center gap-2 text-[10px] font-bold uppercase leading-none tracking-[0.42em] text-[#FF3B3B]">
        <span aria-hidden="true" className="h-px w-6 bg-[#FF3B3B]/60" />
        <span className="-mr-[0.42em]">Bengaluru</span>
      </span>
    </span>
  );
}
