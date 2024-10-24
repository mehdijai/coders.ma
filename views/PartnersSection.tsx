import React from "react";
import Image from "next/image";
import partnersSectionStyles from "@/styles/modules/section.partners.module.scss";
import { useI18n } from "@/lib/i18n/i18n-context";

export default function PartnersSection() {
  const { t } = useI18n();
  return (
    <section
      id="partners"
      className={partnersSectionStyles["partners-section"]}
    >
      <h3 className={partnersSectionStyles["title"]}>
        {t("home.our-partners")}
      </h3>
      <div className={partnersSectionStyles["partners-list"]}>
        <div className={partnersSectionStyles["partner-item"]}>
          <Image
            src="/partners/mjdev.svg"
            alt="mjdev.me"
            height={100}
            width={83.93}
          />
          <span>MJDev</span>
        </div>
        <div className={partnersSectionStyles["partner-item"]}>
          <Image
            src="/partners/sogesoft.svg"
            alt="sogesoft.fr"
            height={100}
            width={105.51}
          />
          <span>Sogesoft</span>
        </div>
      </div>
    </section>
  );
}
