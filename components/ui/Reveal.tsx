"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  id?: string;
  /** Retraso en ms para escalonar elementos hermanos. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * Animación de entrada: lo que está fuera de pantalla arranca con opacity 0 y
 * translateY(18px) y aparece al entrar en el viewport. Se omite con movimiento reducido.
 */
export function Reveal({ as: Tag = "div", id, delay = 0, className, style, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.8s cubic-bezier(.2,.7,.2,1) ${delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        el.style.opacity = "1";
        el.style.transform = "";
        io.disconnect();
        // Libera transform/transition inline para que los hover de las clases sigan funcionando.
        window.setTimeout(() => {
          el.style.transition = "";
          el.style.opacity = "";
        }, 800 + delay);
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} id={id} className={className} style={style}>
      {children}
    </Tag>
  );
}
