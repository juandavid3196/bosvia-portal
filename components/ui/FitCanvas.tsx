"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { useFitScale } from "@/hooks/useFitScale";

interface FitCanvasProps {
  /** Ancho de diseño del lienzo en px. */
  baseWidth: number;
  min?: number;
  max?: number;
  /** Alto de diseño; si se omite se mide. */
  baseHeight?: number;
  label: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/** Lienzo de diseño de ancho fijo escalado con transform al ancho del contenedor. */
export function FitCanvas({ baseWidth, min, max, baseHeight, label, className = "", style, children }: FitCanvasProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { scale, height, scrolls } = useFitScale(outerRef, innerRef, baseWidth, { min, max });
  const h = baseHeight ?? height;

  return (
    <div ref={outerRef} className="w-full" style={{ overflowX: scrolls ? "auto" : "hidden", overflowY: "hidden" }}>
      <div className="relative" style={{ width: Math.floor(baseWidth * scale), height: Math.ceil(h * scale) }}>
        <div
          ref={innerRef}
          role="img"
          aria-label={label}
          className={`absolute left-0 top-0 origin-top-left ${className}`}
          style={{ width: baseWidth, height: baseHeight, transform: `scale(${scale})`, ...style }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
