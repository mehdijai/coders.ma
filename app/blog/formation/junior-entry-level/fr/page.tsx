import TOC from "@/components/base/TOC";
import { BlogBody } from "@/components/layout/BlogBody";
import { BlogHeader } from "@/components/layout/BlogHeader";
import { Metadata } from "next";
import React from "react";

const blogHead = {
  title: "Junior Entry-Level Program",
  subtitle:
    "Ce programme se concentre sur la construction des bases nécessaires pour répondre aux exigences du marché et obtenir un poste de développeur. Après l'avoir terminé, vous aurez un portfolio et serez prêt à commencer un rôle de débutant.",
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
    url: "https://coders-ma.pages.dev/blog/formation/junior-entry-level/fr",
    alternateLocale: [
      "https://coders-ma.pages.dev/blog/formation/junior-entry-level/en",
      "https://coders-ma.pages.dev/blog/formation/junior-entry-level/fr",
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
            L'objectif de ce cours est d'introduire nos candidats au marché
            professionnel des développeurs. Nous nous concentrerons sur les
            bases nécessaires pour répondre aux exigences du marché et obtenir
            un poste de Junior. Chaque module se terminera par un projet, et
            vous travaillerez sur un projet réel à la fin du cours. Ainsi, à
            l'issue de la formation, vous aurez un portfolio et serez prêt à
            commencer un stage. Après avoir réussi votre parcours, vous recevrez
            un certificat de notre entreprise IT partenaire en France, attestant
            de vos compétences en tant que Développeur Junior. Ce cours ouvrira
            la voie à des formations plus avancées, où nous approfondirons les
            concepts de programmation.
          </p>
        </section>
        <section>
          <h3 id="details">Ce que vous apprendrez dans ce cours</h3>
          <p>
            Ce cours couvre les fondamentaux du développement web, du front-end
            au back-end, en passant par les bases de données. Nous commencerons
            par le front-end avec HTML, CSS et JavaScript, puis nous
            approfondirons notre compréhension de JavaScript et des frameworks.
            En maîtrisant ces compétences, vous pourrez travailler efficacement
            avec n'importe quel framework front-end. Ensuite, vous apprendrez à
            gérer et manipuler des bases de données avec SQL. La dernière partie
            portera sur le back-end, où nous apprendrons à construire des API
            robustes et à connecter notre front-end aux bases de données. Vous
            aurez l'occasion de travailler sur des projets réels pour développer
            des solutions répondant à des problématiques métiers, tout en
            apprenant à être autonome et à collaborer en équipe.
          </p>
        </section>
        <section>
          <h3 id="structure">Structure du cours</h3>
          <ol>
            <li>
              <h4 id="front-end">Débuter avec le Front-end</h4>
              <ol>
                <li>Introduction au web, navigateur et protocole HTTP.</li>
                <li>Introduction à HTML.</li>
                <li>Introduction à CSS.</li>
                <li>Sémantique HTML et accessibilité.</li>
                <li>Créer un site web optimisé pour le SEO.</li>
                <li>Introduction à JavaScript.</li>
                <li>Manipulations du DOM avec JS.</li>
                <li>Projet du module.</li>
              </ol>
            </li>

            <li>
              <h4 id="database">Bases de données</h4>
              <ol>
                <li>Introduction aux bases de données.</li>
                <li>Introduction à SQL.</li>
                <li>Opérations CRUD avec SQL.</li>
                <li>Procédures stockées et vues.</li>
                <li>Projet du module.</li>
              </ol>
            </li>

            <li>
              <h4 id="back-end">Débuter avec le Back-end</h4>
              <ol>
                <li>Introduction au monde côté serveur.</li>
                <li>Introduction au développement back-end.</li>
                <li>Introduction aux API RESTful.</li>
                <li>Créer une API basique avec NodeJS.</li>
                <li>Normes et meilleures pratiques.</li>
                <li>Connexion aux bases de données.</li>
                <li>Projet des modules.</li>
              </ol>
            </li>
            <li>
              <h4 id="projects">Capstone Project</h4>
              <p>
                Les détails seront définis en fonction de la progression du
                programme.
              </p>
            </li>
          </ol>
        </section>
        <section>
          <h3 id="projects-details">À propos des projets</h3>
          <p>
            Ce cours est axé sur des projets. Vous apprendrez en pratiquant.
            Nous vous enseignerons les bases, mais il vous appartiendra de
            résoudre les problèmes. Les projets commenceront par la création de
            formulaires avec une interface utilisateur attrayante, et
            s'étendront à la consommation d'API publiques, telles que les API
            météo et financières, en visualisant le contenu avec JavaScript,
            HTML et CSS. L'objectif est d'affiner vos compétences et de vous
            immerger dans un environnement réel.
          </p>
        </section>
      </BlogBody>
    </>
  );
}
