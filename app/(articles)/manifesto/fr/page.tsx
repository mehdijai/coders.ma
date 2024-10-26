import TOC from "@/components/base/TOC";
import { BlogBody } from "@/components/layout/BlogBody";
import { BlogHeader } from "@/components/layout/BlogHeader";
import { Metadata } from "next";
import React from "react";

const blogHead = {
  title:
    "Le Manifeste de Coders.ma : Construire l'Avenir de l'Ingénierie Logicielle",
  subtitle: `Chez Coders.ma, nous avons une mission unique : former une nouvelle génération d’ingénieurs logiciels qui ne sont pas seulement compétents techniquement, mais aussi des leaders, des innovateurs et des créateurs à part entière.`,
  author: "Mehdi JAI",
  date: "26/10/2024",
};

export const metadata: Metadata = {
  title: blogHead.title,
  description: blogHead.subtitle,
  openGraph: {
    title: blogHead.title,
    description: blogHead.subtitle,
    type: "article",
    url: "https://coders-ma.pages.dev/manifesto/fr",
    alternateLocale: [
      "https://coders-ma.pages.dev/manifesto/en",
      "https://coders-ma.pages.dev/manifesto/fr",
      "https://coders-ma.pages.dev/manifesto",
    ],
  },
};

export default function Page() {
  return (
    <>
      <BlogHeader {...blogHead} />
      <TOC title="Summary" />
      <BlogBody>
        <section>
          <h3 id="why-we-exist">Pourquoi Nous Existons</h3>
          <p>
            Coder n’est pas juste une compétence, c’est un art. Comme tout art,
            il nécessite de la rigueur, de la discipline et, surtout, la quête
            de la qualité. Coders.ma est né d’un besoin de transformer la
            manière dont le développement logiciel est enseigné—une quête
            personnelle faite de tentatives et de perfectionnement. Après près
            de dix ans d’apprentissage autodidacte, il est devenu évident que
            l’éducation traditionnelle ne prépare souvent pas les développeurs
            aux réalités du monde professionnel. Il m'a fallu des années
            d'expérience et de mentorat avant de commencer à livrer un code que
            je pouvais appeler "de qualité".
          </p>
          <p>
            <strong>
              Coders.ma offre aux aspirants développeurs ce que je n’ai pas eu
            </strong>
            —une expérience immersive, basée sur des projets concrets, qui
            reflète le monde professionnel. Nous ne nous contentons pas
            d’enseigner le code ; nous formons nos candidats à penser comme des
            ingénieurs, à résoudre des problèmes concrets et à maîtriser l'art
            de fournir des solutions de qualité dès le premier jour.
          </p>
        </section>

        <section>
          <h3 id="mission">Notre Mission</h3>
          <p>
            Nous façonnons la prochaine génération de leaders de la tech—des
            futurs CTO, des développeurs innovants, des contributeurs aux
            projets open source, des auteurs et des conférenciers publics. Nous
            ne voulons pas que nos diplômés se contentent de travailler dans un
            bureau. Nous voulons qu'ils influencent l'industrie, repoussent les
            limites et créent des œuvres significatives et percutantes.
          </p>
          <p>
            Notre objectif n’est pas seulement d’enseigner le code, mais
            d’inculquer les valeurs de la rigueur, du leadership et de
            l'innovation dans tout ce qu'ils entreprennent.
          </p>
        </section>
        <section>
          <h3 id="principles">Ce Que Nous Défendons</h3>
          <ul>
            <li>
              <h4 id="excellence">Excellence dans l’exécution:</h4>
              <p>
                Chaque ligne de code compte. Nous enseignons l'importance de la
                qualité dans le développement logiciel, pas seulement la
                fonctionnalité.
              </p>
            </li>
            <li>
              <h4 id="real-world-experience">Expérience du monde réel: </h4>
              <p>
                Nos cours simulent des environnements professionnels, offrant
                aux candidats une expérience pratique directement applicable
                dans l'industrie.
              </p>
            </li>
            <li>
              <h4 id="innovation">Innovation: </h4>
              <p>
                Nous encourageons nos candidats à penser de manière créative, à
                aller au-delà du statu quo et à se challenger avec des
                technologies de pointe.
              </p>
            </li>
            <li>
              <h4 id="leadership">Leadership: </h4>
              <p>
                Coders.ma ne forme pas seulement des développeurs, nous formons
                des leaders. Nous mettons l'accent sur la gestion de projets, la
                résolution de problèmes et la prise de décision pour préparer
                nos candidats aux rôles de leadership.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3 id="vision">Notre Vision</h3>
          <p>
            Nous voyons <strong>Coders.ma</strong> comme le centre de formation
            en ingénierie logicielle de référence au Maroc, un lieu où des
            candidats sérieux et disciplinés viennent transformer leurs
            compétences techniques en capacités de leadership. En mettant
            l’accent sur la qualité et une formation pratique, nous visons à
            établir une nouvelle norme pour l’éducation technologique non
            seulement au Maroc, mais à l’échelle mondiale.
          </p>
        </section>
        <section>
          <h3 id="quality">Notre Engagement envers la Qualité</h3>
          <p>
            La qualité n'est pas négociable chez Coders.ma. Des projets que nous
            réalisons aux interactions avec nos candidats, la qualité est au
            cœur de tout ce que nous faisons. Nous encourageons une mentalité de
            discipline, d'attention aux détails et d'innovation, garantissant
            que nos diplômés quittent Coders.ma avec bien plus que des
            compétences techniques : ils partent avec la capacité de livrer des
            résultats exceptionnels, encore et encore.
          </p>
        </section>
        <section>
          <h3 id="niche">Pour Qui Nous Sommes Pour</h3>
          <p>
            Nous ne nous adressons pas à tout le monde—et c’est intentionnel.
            Coders.ma est destiné à
            <strong>des candidats sérieux et ambitieux</strong> prêts à investir
            dans leur avenir et à s'engager dans un processus d'apprentissage
            rigoureux, basé sur des expériences du monde réel. Nos candidats
            proviennent d’un milieu social allant de la classe moyenne
            supérieure à l'élite, et ils comprennent que l’éducation de qualité
            mérite un investissement.
          </p>
          <p>Nous nous adressons aux individus qui sont :</p>
          <ul>
            <li>
              <strong>Aspiration à devenir plus que des développeurs</strong>
              —ils veulent être des leaders dans la tech.
            </li>
            <li>
              <strong>Engagés dans l’excellence</strong> et prêts à fournir des
              efforts supplémentaires.
            </li>
            <li>
              <strong>Désireux de travailler dans des scénarios réels</strong>,
              d'apprendre des experts de l'industrie et de collaborer en équipe
              pour résoudre des problèmes complexes.
            </li>
          </ul>
        </section>
        <section>
          <h3 id="promise">Notre Promesse</h3>
          <p>
            Chez Coders.ma, nous promettons une éducation qui va bien au-delà de
            la salle de classe. Nos candidats travaillent dans un environnement
            qui reflète une entreprise de logiciels, apprenant aux côtés de
            développeurs expérimentés et acquérant de l’expérience sur des
            projets concrets. À leur départ, ils ne seront pas seulement prêts à
            travailler—ils seront prêts à diriger, à innover et à avoir un
            impact durable dans l’industrie technologique.
          </p>
          <p>
            Nous créons une nouvelle génération de développeurs qui ne sont pas
            seulement compétents, mais influents. Nous continuerons de repousser
            les limites de ce que signifie être un ingénieur logiciel, en dotant
            nos diplômés des compétences, de l’état d’esprit et du réseau
            nécessaires pour réussir dans n’importe quel environnement qu’ils
            choisissent.
          </p>
          <blockquote>
            C’est <strong>Coders.ma</strong>, là où les leaders tech de demain
            se forment.
          </blockquote>
        </section>
      </BlogBody>
    </>
  );
}
