"use client";

import { useI18n } from "@/lib/i18n/i18n-context";
import Image from "next/image";
import React from "react";
import quoteSectionStyles from "@/styles/modules/section.quote.module.scss";

export default function QuoteSection() {
  const { t } = useI18n();
  return (
    <section className={quoteSectionStyles["quote-section"]}>
      <Image
        className={quoteSectionStyles["icon"]}
        src="/icons/parentheses.svg"
        alt="parentheses icon"
        aria-hidden
        height={25}
        width={6.82}
      />
      <Image
        className={quoteSectionStyles["image"]}
        src="/assets/image.webp"
        alt="image of team management meeting from Unsplash"
        height={586}
        width={577}
      />
      <p>{t("home.quote")}</p>
    </section>
  );
}
