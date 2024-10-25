import Link from "next/link";
import React from "react";
import buttonStyle from "@/styles/modules/button.module.scss";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404 | Page Not found</h1>
      <Link
        className={cn(buttonStyle["button"], buttonStyle["variant-alt"])}
        href="/"
      >
        Back home
      </Link>
    </main>
  );
}
