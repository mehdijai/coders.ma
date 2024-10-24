"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo-icon-light.svg";
import topNavStyles from "@/styles/modules/top-nav.module.scss";
import LanguageSwitcher from "./base/language-switcher";
import { useI18n } from "@/lib/i18n/i18n-context";

export default function TopNav() {
  const { t } = useI18n();
  return (
    <nav className={topNavStyles["top-nav"]}>
      <ul>
        <li>
          <Link href="/">
            <Image height={32} src={Logo} alt={t("common.description")} />
          </Link>
        </li>
        <li>
          <Link href="/#about">
            <span>{t("nav.about")}</span>
          </Link>
        </li>
        <li>
          <Link href="/#partners">
            <span>{t("nav.partners")}</span>
          </Link>
        </li>
        <li>
          <Link href="/#instructors">
            <span>{t("nav.instructors")}</span>
          </Link>
        </li>
        <li>
          <Link href="/#active-programs">
            <span>{t("nav.programs")}</span>
          </Link>
        </li>
        <li>
          <Link href="/blog/manifesto">
            <span>{t("nav.more")}</span>
          </Link>
        </li>
        <div className="spacer" />
        <li className={topNavStyles["cta"]}>
          <Link href="/#contact">
            <span>{t("nav.subscribe")}</span>
          </Link>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </nav>
  );
}
