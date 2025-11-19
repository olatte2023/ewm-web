"use client";

import React, { MouseEvent, useEffect, useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";

export function RippleButton({
  children,
  onClick,
  className,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<
    { x: number; y: number; size: number; id: number }[]
  >([]);

  useEffect(() => {
    const timeouts = ripples.map(
      (ripple) =>
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
        }, 600) // Matches animation duration
    );
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [ripples]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    const x = e.clientX - rect.left - radius;
    const y = e.clientY - rect.top - radius;

    const newRipple = { x, y, size: diameter, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    if (onClick) onClick(e);
  };

  return (
    <Button
      className={`relative overflow-hidden ${className || ""}`}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          // Changed 'bg-white' to 'bg-current' for auto dark/light mode support
          // Added 'opacity-25' so the solid color isn't too strong
          className="absolute rounded-full bg-current opacity-25 pointer-events-none animate-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </Button>
  );
}
