"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface FitOptions {
  min?: number;
  max?: number;
}

interface FitResult {
  scale: number;
  /** Alto del lienzo de diseño ya medido (sin escalar). */
  height: number;
  /** True si el lienzo escalado no cabe y hay que permitir scroll horizontal. */
  scrolls: boolean;
}

/**
 * Escala un lienzo de ancho fijo (baseWidth) al ancho de su contenedor.
 * `outerRef` es el contenedor; `innerRef` el lienzo de diseño.
 */
export function useFitScale(
  outerRef: RefObject<HTMLElement | null>,
  innerRef: RefObject<HTMLElement | null>,
  baseWidth: number,
  { min = 0, max = 1 }: FitOptions = {},
): FitResult {
  const [state, setState] = useState<FitResult>({ scale: 1, height: 0, scrolls: false });
  const frame = useRef(0);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const apply = () => {
      const w = outer.clientWidth;
      if (!w) return;
      const scale = Math.round(Math.max(min, Math.min(max, w / baseWidth)) * 1000) / 1000;
      const next = { scale, height: inner.offsetHeight, scrolls: baseWidth * scale > w + 2 };
      setState((prev) =>
        prev.scale === next.scale && prev.height === next.height && prev.scrolls === next.scrolls ? prev : next,
      );
    };
    const schedule = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(apply);
    };

    apply();
    const ro = new ResizeObserver(schedule);
    ro.observe(outer);
    ro.observe(inner);
    return () => {
      cancelAnimationFrame(frame.current);
      ro.disconnect();
    };
  }, [outerRef, innerRef, baseWidth, min, max]);

  return state;
}
