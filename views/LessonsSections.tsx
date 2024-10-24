"use client";

import React from "react";
import featuresSectionStyles from "@/styles/modules/section.features.module.scss";
import { useI18n } from "@/lib/i18n/i18n-context";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProgramsSection() {
  const { t } = useI18n();

  const lessons = [
    "Front-end development",
    "QA & Testing",
    "Back-end development",
    "Building APIs",
    "Databases",
    "Desktop apps",
  ];
  return (
    <section
      id="formation"
      className={featuresSectionStyles["features-section"]}
    >
      <h3 className={featuresSectionStyles["title"]}>
        {t("home.our-programs")}
      </h3>
      <div
        className={cn(
          featuresSectionStyles["features-list"],
          featuresSectionStyles["grid"]
        )}
      >
        {lessons.map((lesson, index) => (
          <div key={index} className={featuresSectionStyles["features-card"]}>
            <Image
              src="/icons/parentheses.svg"
              alt="parentheses icon"
              aria-hidden
              height={25}
              width={6.82}
            />
            <span>{lesson}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
