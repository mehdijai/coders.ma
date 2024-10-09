"use client";

import { useHighlight } from "@/hooks/useHighlight";
import React from "react";
import "@/styles/training-course.scss";
import Link from "next/link";
import ToTopButton from "@/components/ToTopButton";

export default function TrainingCoursePage() {
  useHighlight();
  return (
    <main className="training-course-page">
      <ToTopButton />
      <div className="print-instruction">
        <span className="btn">CTRL</span> + <span className="btn">P</span> pour
        imprimer ce doc
      </div>
      <div className="back-home">
        <Link href="/">Page d’accueil</Link>
      </div>
      <header className="tcp-cover-page">
        <h1>La formation ultime pour les développeurs de demain.</h1>
        <h2>
          Une formation pratique et concentré, dédié à former les étudiants de
          développer des solutions informatique qui résoudre des problèmes
        </h2>
        <span className="tcp-symbol">&lt;/&gt;</span>

        <span className="tcp-creator">
          Créé par:{" "}
          <span className="code-block language-javascript">"Mehdi JAI"</span>
        </span>
      </header>
      <section className="tcp-section">
        <h2>Le programme</h2>
      </section>
    </main>
  );
}
