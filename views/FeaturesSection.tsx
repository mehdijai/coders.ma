import React from "react";
import featuresSectionStyles from "@/styles/modules/section.features.module.scss";

export default function FeaturesSection() {
  const features = [
    "Formation pratique et adaptée aux besoins du marché",
    "Présentée par des développeurs senior",
    "“Learn by doing”",
    "Développer un portfolio avec des projets réels",
    "Certification en fin de formation",
    "En partenariat avec des société d'IT",
  ];
  return (
    <section
      id="features"
      className={featuresSectionStyles["features-section"]}
    >
      <h3>Pourquoi notre formation?</h3>
      <div className={featuresSectionStyles["features-list"]}>
        {features.map((feature, index) => (
          <div key={index} className={featuresSectionStyles["features-card"]}>
            <span>&lt;/&gt;</span>
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
