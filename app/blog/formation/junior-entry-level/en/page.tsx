import TOC from "@/components/base/TOC";
import { BlogBody } from "@/components/layout/BlogBody";
import { BlogHeader } from "@/components/layout/BlogHeader";
import { Metadata } from "next";
import React from "react";

const blogHead = {
  title: "Junior Entry-Level Program",
  subtitle: `This program focuses on building the basics of the market's requirements to land a dev job. After finishing, you'll have a portfolio and ready to start an entry level role.`,
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
    url: "https://coders-ma.pages.dev/blog/formation/junior-entry-level/en",
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
      <TOC title="Summary" />
      <BlogBody>
        <section>
          <h3 id="introduction">Introduction</h3>
          <p>
            The purpose of this program is to prepare candidates for the
            professional developer market. We will emphasize the foundational
            skills required to secure a Junior Developer position. The program
            is structured around practical projects, with each module
            culminating in a hands-on project. By the end of the program, you
            will have a comprehensive portfolio and be well-prepared to embark
            on an internship. Upon successful completion of the program, you
            will receive a certificate from our sponsoring IT company in France,
            validating your abilities and competencies as a Junior Developer.
            This program serves as a gateway to more advanced studies, where we
            will delve deeper into sophisticated programming concepts.
          </p>
        </section>
        <section>
          <h3 id="details">What you will learn in this program</h3>
          <p>
            This program covers the essential aspects of web development,
            encompassing both front-end and back-end technologies, as well as
            database management. We will begin with front-end development using
            HTML, CSS, and JavaScript, progressing into advanced JavaScript
            concepts to understand framework functionalities. With these skills,
            you will be equipped to work efficiently with any front-end
            framework. Following the front-end, we will explore database
            management, including SQL for data handling and manipulation. The
            final segment will focus on back-end development, where you will
            learn to construct robust APIs and integrate them with databases.
            Throughout this section, you will engage in real-world projects
            aimed at solving business challenges, collaborating both
            individually and in teams to foster autonomy and teamwork.
          </p>
        </section>
        <section>
          <h3 id="structure">Structure of program</h3>
          <ol>
            <li>
              <h4 id="front-end">Front-end startup</h4>
              <ol>
                <li>Introduction to web, browser and HTTP protocol.</li>
                <li>Introduction to HTML.</li>
                <li>Introduction to CSS.</li>
                <li>HTML semantics and accessibility.</li>
                <li>Building SEO friendly website.</li>
                <li>Introduction to JavaScript.</li>
                <li>JS DOM manipulations.</li>
                <li>Module Project.</li>
              </ol>
            </li>

            <li>
              <h4 id="database">Databases</h4>
              <ol>
                <li>Introduction to databases.</li>
                <li>Introduction to SQL.</li>
                <li>CRUD operations with SQL.</li>
                <li>Stocked Procedures and Views.</li>
                <li>Module Project.</li>
              </ol>
            </li>
            <li>
              <h4 id="back-end">Back-end startup</h4>
              <ol>
                <li>Introduction to server side world.</li>
                <li>Introduction to back-end development.</li>
                <li>Introduction to RESTful APIs.</li>
                <li>Building basic API with NodeJS.</li>
                <li>Standards and Best practices.</li>
                <li>Connecting Databases</li>
                <li>Modules Project</li>
              </ol>
            </li>
            <li>
              <h4 id="projects">Capstone Project</h4>
              <p>Details to be determined based on program progression.</p>
            </li>
          </ol>
        </section>
        <section>
          <h3 id="projects-details">About the projects</h3>
          <p>
            This program is fundamentally project-driven, meaning you will learn
            by doing. We will provide you with the essential knowledge, but it
            is your responsibility to tackle the challenges presented. Projects
            will range from building forms with appealing user interfaces to
            consuming public APIs—such as weather and financial APIs—and
            visualizing the data using JavaScript, HTML, and CSS. The goal is to
            refine your skills and prepare you for real-world environments.
          </p>
        </section>
      </BlogBody>
    </>
  );
}
