"use client";

import Link from "next/link";
import React from "react";
import footerStyles from "@/styles/modules/footer.module.scss";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/i18n-context";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className={footerStyles["footer"]}>
      <Link href="/">
        <Image
          height={33}
          width={47}
          src="/logo-icon-light.svg"
          alt={t("common.description")}
        />
      </Link>
      <p>
        © Coders.ma {new Date().getFullYear()} | Designed & Developed By{" "}
        <Link href="https://mjdev.pages.dev" className="ext-link">
          Mehdi Jai
        </Link>
      </p>
    </footer>
  );
}
