import React from "react";
import buttonStyle from "@/styles/modules/button.module.scss";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  variant = "primary",
  loading,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "alt";
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(buttonStyle["button"], buttonStyle[`variant-${variant}`])}
      {...props}
      disabled={loading || props.disabled}
    >
      {loading && <span className="spinner" />}
      {children}
    </button>
  );
}
