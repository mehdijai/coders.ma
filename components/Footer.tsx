import Link from "next/link";
import React from "react";
import footerStyles from "@/styles/modules/footer.module.scss";

export default function Footer() {
  return (
    <footer className={footerStyles["footer"]}>
      <p>
        © Coders.ma {new Date().getFullYear()} | Designed & Developed By{" "}
        <Link href="https://mj-dev.pages.dev" className="ext-link">Mehdi Jai</Link>
      </p>
    </footer>
  );
}
