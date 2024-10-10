import React from "react";
import { BlogBody, BlogHeader } from "@/components/layout/BlogLayout";
import TOC from "@/components/base/TOC";
import { Metadata } from "next";

const blogHead = {
  title: "La formation ultime pour les développeurs de demain.",
  subtitle: `Une formation pratique et concentré, dédié à former les étudiants en
          mode Entreprise pour développer des solutions informatique qui
          résoudre des problèmes.`,
  author: "Mehdi JAI",
  date: "10/10/2024",
};

export const metadata: Metadata = {
  title: blogHead.title,
  description: blogHead.subtitle,
  openGraph: {
    title: blogHead.title,
    description: blogHead.subtitle,
    type: "article",
    url: "https://coders-ma.pages.dev/blog/formation/",
  },
};

export default function TrainingCoursePage() {
  return (
    <>
      <BlogHeader {...blogHead} />
      <TOC title="Table des matière" />
      <BlogBody>
        <section>
          <h3 id="introduction-au-web-et-outils-essentiels">
            Introduction au Web et outils essentiels
          </h3>
          <ol>
            <li>
              <h4 id="qu'est-ce-que-le-web-?">Qu'est-ce que le Web ?</h4>
              <p>
                Aperçu de l'internet, des navigateurs web et des serveurs web.
              </p>
            </li>
            <li>
              <h4 id="fonctionnement-du-web">Fonctionnement du Web</h4>
              <p>
                Comprendre comment les sites web sont hébergés et servis aux
                utilisateurs.
              </p>
            </li>
            <li>
              <h4 id="outils-de-développement">Outils de Développement</h4>
              <p>
                Introduction aux outils essentiels de développement web, y
                compris les éditeurs de texte (comme VS Code), le contrôle de
                version (Git et GitHub), et les outils de développement des
                navigateurs.
              </p>
            </li>
            <li>
              <h4 id="introduction-aux-protocoles-web">
                Introduction aux Protocoles Web
              </h4>
              <p>
                Brève présentation des protocoles HTTP/HTTPS et de l'importance
                de la sécurité web.
              </p>
            </li>
            <li>
              <h4 id="créer-un-environnement-de-développement">
                Créer un Environnement de Développement
              </h4>
              <p>Configuration d'un environnement de développement local.</p>
            </li>
          </ol>
        </section>
        <section>
          <h3 id="html-et-css-pour-la-création-de-sites-web">
            HTML et CSS pour la création de sites web
          </h3>
          <ol>
            <li>
              <h4 id="html-de-base">HTML de Base</h4>
              <p>
                Comprendre la structure des documents HTML, y compris les
                balises, les éléments et les attributs.
              </p>
            </li>
            <li>
              <h4 id="sémantique-html">Sémantique HTML</h4>
              <p>
                Introduction au HTML sémantique pour l'accessibilité et le SEO.
              </p>
            </li>
            <li>
              <h4 id="fondamentaux-de-css">Fondamentaux de CSS</h4>
              <p>
                Introduction à CSS, aux sélecteurs, aux propriétés et aux
                valeurs.
              </p>
            </li>
            <li>
              <h4 id="mise-en-page">Mise en Page</h4>
              <p>
                Techniques de conception de mise en page utilisant Flexbox et
                Grid.
              </p>
            </li>
            <li>
              <h4 id="design-réactif">Design Réactif</h4>
              <p>
                Création de sites web adaptés aux mobiles avec des requêtes
                média.
              </p>
            </li>
            <li>
              <h4 id="pratiques-de-meilleures">Pratiques de Meilleures</h4>
              <p>
                Meilleures pratiques pour écrire un HTML/CSS propre et
                maintenable.
              </p>
            </li>
          </ol>
        </section>
        <section>
          <h3 id="javascript-et-interactivité">JavaScript et interactivité</h3>
          <ol>
            <li>
              <h4 id="introduction-à-javascript">Introduction à JavaScript</h4>
              <p>
                Comprendre ce qu'est JavaScript et son rôle dans le
                développement web.
              </p>
            </li>
            <li>
              <h4 id="syntaxe-et-structure">Syntaxe et Structure</h4>
              <p>
                Apprendre la syntaxe, les variables, les types de données et les
                opérateurs en JavaScript.
              </p>
            </li>
            <li>
              <h4 id="contrôle-de-flux">Contrôle de Flux</h4>
              <p>
                Utilisation d'instructions conditionnelles et de boucles pour un
                comportement dynamique.
              </p>
            </li>
            <li>
              <h4 id="fonctions-et-événements">Fonctions et Événements</h4>
              <p>
                Création de fonctions et réponse aux événements utilisateurs
                (clics, saisie au clavier).
              </p>
            </li>
            <li>
              <h4 id="manipulation-du-dom">Manipulation du DOM</h4>
              <p>
                Accéder et manipuler le Document Object Model (DOM) pour mettre
                à jour les pages web de manière dynamique.
              </p>
            </li>
            <li>
              <h4 id="es6-et-structure-des-données">
                ES6 et structure des données
              </h4>
              <p>
                Introduction aux nouvelles fonctionnalités de JavaScript (ES6)
                comme les fonctions fléchées, les promesses, et les classes,
                ainsi qu'aux structures de données telles que les tableaux et
                les objets.
              </p>
            </li>
          </ol>
        </section>
        <section>
          <h3 id="bases-du-backend-et-bases-de-données">
            Bases du backend et bases de données
          </h3>
          <ol>
            <li>
              <h4 id="concepts-de-base-du-backend">
                Concepts de Base du Backend
              </h4>
              <p>Comprendre le rôle du serveur, des API et des frameworks.</p>
            </li>
            <li>
              <h4 id="langages-de-programmation-serveur">
                Langages de Programmation Serveur
              </h4>
              <p>
                Introduction aux langages côté serveur tels que Node.js, PHP, Ou
                C# (.NET).
              </p>
            </li>
            <li>
              <h4 id="bases-de-données">Bases de Données</h4>
              <p>
                Compréhension des bases de données, des bases de données
                relationnelles (SQL) et des bases de données non relationnelles
                (NoSQL).
              </p>
            </li>
            <li>
              <h4 id="opérations-crud">Opérations CRUD</h4>
              <p>
                Créer, lire, mettre à jour et supprimer des données dans une
                base de données.
              </p>
            </li>
            <li>
              <h4 id="apis-restful">APIs RESTful</h4>
              <p>
                Introduction à la création et à la consommation d'APIs RESTful
                pour l'échange de données entre le client et le serveur.
              </p>
            </li>
            <li>
              <h4 id="sécurité-des-applications-web">
                Sécurité des Applications Web
              </h4>
              <p>
                Pratiques de base de sécurité pour protéger les données des
                utilisateurs et prévenir les vulnérabilités courantes.
              </p>
            </li>
          </ol>
        </section>
        <section>
          <h3 id="projets-pratiques-et-certification">
            Projets pratiques et certification
          </h3>
          <ol>
            <li>
              <h4 id="projets-collaboratifs">Projets Collaboratifs</h4>
              <p>
                Travailler en équipe pour développer une application web
                complète, de la conception au déploiement.
              </p>
            </li>
            <li>
              <h4 id="développement-d'un-portfolio">
                Développement d'un Portfolio
              </h4>
              <p>
                Création d'un site web personnel de portfolio pour présenter
                leurs projets et compétences.
              </p>
            </li>
            <li>
              <h4 id="présentation-de-projets">Présentation de Projets</h4>
              <p>
                Présentation de leurs projets à leurs pairs pour obtenir des
                retours et des améliorations.
              </p>
            </li>
            <li>
              <h4 id="examen-de-certification">Examen de Certification</h4>
              <p>
                Une évaluation pour évaluer leur compréhension et leurs
                compétences à travers les modules.
              </p>
            </li>
          </ol>
        </section>
      </BlogBody>
    </>
  );
}
