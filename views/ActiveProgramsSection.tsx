"use client";

import React from "react";
import activeProgramsSectionsStyle from "@/styles/modules/section.active-programs.module.scss";
import { useI18n } from "@/lib/i18n/i18n-context";
import { programs } from "@/data/programs";

export default function ActiveProgramsSections() {
  const { t } = useI18n();
  return (
    <section
      id="active-programs"
      className={activeProgramsSectionsStyle["active-program-section"]}
    >
      <h3 className={activeProgramsSectionsStyle["title"]}>
        {t("home.our-active-programs")}
      </h3>
      <div className={activeProgramsSectionsStyle["active-program-list"]}>
        {programs.map((program) => (
          <div
            className={activeProgramsSectionsStyle["active-program-card"]}
            key={program.title}
          >
            <header>
              <h5>{program.title}</h5>
            </header>
            <div
              className={
                activeProgramsSectionsStyle["active-program-card__description"]
              }
            >
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
