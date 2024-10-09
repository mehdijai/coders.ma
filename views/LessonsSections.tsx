import React from "react";
import featuresSectionStyles from "@/styles/modules/section.features.module.scss";

export default function LessonsSection() {
  const lessons = [
    "Introduction au Web et outils essentiels",
    "HTML et CSS pour la création de sites web",
    "JavaScript et interactivité",
    "Bases du backend et bases de données",
    "Projets pratiques et certification",
  ];
  return (
    <section
      id="formation"
      className={featuresSectionStyles["features-section"]}
    >
      <h3>Notre formation comprend</h3>
      <div className={featuresSectionStyles["features-list"]}>
        {lessons.map((lesson, index) => (
          <div key={index} className={featuresSectionStyles["features-card"]}>
            <span>&#x7B;...&#x7D;</span>
            <p>{lesson}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
