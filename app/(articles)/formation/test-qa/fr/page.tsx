import TOC from "@/components/base/TOC";
import { BlogBody } from "@/components/layout/BlogBody";
import { BlogHeader } from "@/components/layout/BlogHeader";
import { Metadata } from "next";
import React from "react";

const blogHead = {
  title: "Testing and QA Program",
  subtitle:
    "Ce programme se concentre sur l'aspect test d'une solution logicielle. Nous aborderons la qualification et le test d'une solution logicielle à l'aide d'un outil appelé « Postman ». Le programme durera 2 heures avec des exemples réels et des discussions en temps réel.",
  author: "Mehdi JAI",
  date: "24/10/2024",
};

export const metadata: Metadata = {
  title: blogHead.title,
  description: blogHead.subtitle,
  openGraph: {
    title: blogHead.title,
    description: blogHead.subtitle,
    type: "article",
    url: "https://coders-ma.pages.dev/formation/test-qa/fr",
    alternateLocale: [
      "https://coders-ma.pages.dev/formation/test-qa/en",
      "https://coders-ma.pages.dev/formation/test-qa/fr",
      "https://coders-ma.pages.dev/formation/test-qa",
    ],
  },
};

export default function Page() {
  return (
    <>
      <BlogHeader {...blogHead} />
      <TOC title="Sommaire" />
      <BlogBody>
        <section>
          <h3 id="introduction">Introduction</h3>
          <p>
            Ce programme se concentre sur la phase essentielle des tests dans le
            développement de solutions logicielles. Nous aborderons la
            qualification et le test d'une solution logicielle en utilisant
            l'outil de référence, **Postman**. La session durera deux heures et
            inclura des exemples concrets ainsi que des discussions interactives
            pour enrichir l'apprentissage.
          </p>
        </section>

        <section>
          <h3 id="details">Aperçu du Programme</h3>
          <p>
            Animé par notre expert, <strong>Mehdi Jai</strong>, ce programme vous permettra
            de découvrir les fondements de la théorie des tests logiciels. Nous
            travaillerons sur des projets réels pour illustrer les défis
            rencontrés et les solutions apportées, tout en mettant l'accent sur
            l'automatisation et la pensée orientée qualité. La structure du
            programme est la suivante :
          </p>
          <ol>
            <li>Introduction aux Tests Logiciels</li>
            <li>Fondamentaux des API pour Utilisateurs Non Techniques</li>
            <li>Présentation Complète de Postman</li>
            <li>Création d'un Environnement de Test</li>
            <li>Utilisation des Collections et des Variables dans Postman</li>
            <li>Compréhension des Environnements Postman</li>
            <li>Exploration d'OpenAPI et Swagger</li>
            <li>Implémentation de Tests Automatisés</li>
          </ol>
        </section>

        {/* <section>
          <h3 id="price">Prix</h3>
          <p>
            Ce programme prend en charge entre 6 et 10 candidats par groupe. Le
            prix est de 200Dhs.
          </p>
        </section> */}
      </BlogBody>
    </>
  );
}
