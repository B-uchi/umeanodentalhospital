"use client";

import { createElement, useEffect, useRef } from "react";

const delayClass: Record<number, string> = {
  0: "",
  1: "delay-[80ms]",
  2: "delay-[160ms]",
  3: "delay-[240ms]",
  4: "delay-[320ms]",
  5: "delay-[400ms]",
  6: "delay-[480ms]",
};

interface RevealProps<TTag extends keyof HTMLElementTagNameMap = "div"> {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: TTag;
}

export function Reveal<TTag extends keyof HTMLElementTagNameMap = "div">({
  children,
  delay = 0,
  className = "",
  as,
}: RevealProps<TTag>) {
  const Tag = (as ?? "div") as TTag;
  const ref = useRef<HTMLElementTagNameMap[TTag] | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-7");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    Tag as any,
    {
      ref,
      className: `opacity-0 translate-y-7 transition-all duration-[650ms] ease-out ${delayClass[delay]} ${className}`,
    },
    children
  );
}
