"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "orange" | "white";
}

const AFC_LOGO_SRC = "/afc-logo.webp";

export function OneAndOnlyLogo({ className, variant = "orange" }: LogoProps) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <Image
        src={AFC_LOGO_SRC}
        alt="AFC"
        width={214}
        height={142}
        priority
        sizes="(max-width: 768px) 120px, 160px"
        className={cn(
          "h-full w-auto object-contain",
          variant === "white" && "brightness-0 invert opacity-95",
        )}
      />
    </div>
  );
}
