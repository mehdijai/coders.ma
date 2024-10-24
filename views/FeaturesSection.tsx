"use client";

import React from "react";
import featuresSectionStyles from "@/styles/modules/section.features.module.scss";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/i18n-context";

export default function FeaturesSection() {
  const { t } = useI18n();

  const features = [
    t("home.offers.practical"),
    t("home.offers.solution-driven"),
    t("home.offers.high-quality"),
    t("home.offers.learn-by-doing"),
  ];
  return (
    <section
      id="about"
      className={featuresSectionStyles["features-section"]}
    >
      <aside>
        <Image
          src="/assets/coder.webp"
          alt="Coder working on his laptop"
          width={250}
          height={250}
        />
        <p>{t("home.offers.description")}</p>
      </aside>
      <h3>{t("home.offers.tagline")}</h3>
      <div className={featuresSectionStyles["features-list"]}>
        {features.map((feature, index) => (
          <div key={index} className={featuresSectionStyles["features-card"]}>
            <Image
              src="/icons/parentheses.svg"
              alt="parentheses icon"
              aria-hidden
              height={25}
              width={6.82}
            />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
