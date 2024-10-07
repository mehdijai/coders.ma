import React from "react";
import buttonStyle from "@/styles/modules/button.module.scss";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <button
      className={cn(buttonStyle["button"], buttonStyle[`variant-${variant}`])}
    >
      {children}
    </button>
  );
}
