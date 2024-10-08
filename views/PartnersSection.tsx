import React from "react";
import Image from "next/image";
import sogesoft from "@/assets/partners/sogesoft.svg";
import mjdev from "@/assets/partners/mj-dev.svg";
import partnersSectionStyles from "@/styles/modules/section.partners.module.scss";

export default function PartnersSection() {
  return (
    <section
      id="partners"
      className={partnersSectionStyles["partners-section"]}
    >
      <h3>Nos partenaires</h3>
      <div className={partnersSectionStyles["partners-list"]}>
        <div className={partnersSectionStyles["partner-item"]}>
          <Image src={sogesoft} alt="sogesoft.fr" height={56} />
          <span>Sogesoft</span>
        </div>
        <div className={partnersSectionStyles["partner-item"]}>
          <Image src={mjdev} alt="mjdev.me" height={56} />
          <span>MJ.dev</span>
        </div>
      </div>
    </section>
  );
}
