import TOC from "@/components/base/TOC";
import { BlogBody } from "@/components/layout/BlogBody";
import { BlogHeader } from "@/components/layout/BlogHeader";
import { Metadata } from "next";
import React from "react";

const blogHead = {
  title:
    "The Coders.ma Manifesto: Building the Next-Gen of Software Engineering",
  subtitle: `At Coders.ma, we are driven by a singular mission: to cultivate a new generation of software engineers who are not only technically proficient but also leaders, innovators, and creators in their own right.`,
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
    url: "https://coders-ma.pages.dev/manifesto/en",
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
          <h3 id="why-we-exist">Why We Exist</h3>
          <p>
            Coding isn’t just a skill; it’s a craft. Like any craft, it requires
            dedication, discipline, and above all, the pursuit of quality.
            Coders.ma was born out of a need to transform the way software
            development is taught—a personal journey of trial and refinement.
            After nearly a decade of self-teaching, it became clear that
            traditional education often falls short of preparing developers for
            the real world. It took years of experience and mentorship before I
            began to truly understand and deliver "quality code."
          </p>
          <p>
            <strong>
              Coders.ma is here to give aspiring developers what I didn’t have
            </strong>
            —a practical, immersive, project-driven experience that mirrors the
            professional world. We're not just teaching people how to code;
            we’re training them to think like engineers, to solve real-world
            problems, and to master the art of delivering quality solutions from
            day one.
          </p>
        </section>

        <section>
          <h3 id="mission">Our Mission</h3>
          <p>
            We are shaping the next generation of tech leaders—future CTOs,
            innovative developers, open-source contributors, authors, and public
            speakers. We don’t want our graduates to be content with just
            working in an office. We want them to influence the industry, to
            push boundaries, and to create meaningful, impactful work.
          </p>
          <p>
            Our goal is not just to teach code, but to instill the values of
            craftsmanship, leadership, and innovation in everything they do.
          </p>
        </section>
        <section>
          <h3 id="principles">What We Stand For</h3>
          <ul>
            <li>
              <h4 id="excellence">Excellence in Execution:</h4>
              <p>
                Every line of code matters. We teach the importance of quality
                in software, not just functionality.
              </p>
            </li>
            <li>
              <h4 id="real-world-experience">Real-World Experience: </h4>
              <p>
                Our courses simulate professional environments, giving
                candidates hands-on experience that’s directly applicable to the
                industry.
              </p>
            </li>
            <li>
              <h4 id="innovation">Innovation: </h4>
              <p>
                We empower our candidates to think creatively, to push beyond
                the status quo, and to challenge themselves with cutting-edge
                technologies.
              </p>
            </li>
            <li>
              <h4 id="leadership">Leadership: </h4>
              <p>
                Coders.ma is not just building developers; we are building tech
                leaders. We emphasize project management, problem-solving, and
                decision-making, ensuring our candidates are prepared for the
                leadership roles they’ll take on in the future.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h3 id="vision">Our Vision</h3>
          <p>
            We envision <strong>Coders.ma</strong> as the premier software
            engineering center in Morocco, a place where serious, disciplined
            candidates come to transform their technical skills into leadership
            capabilities. With a focus on quality and real-world education, we
            aim to set a new standard for tech education not just in Morocco,
            but globally.
          </p>
        </section>
        <section>
          <h3 id="quality">Our Commitment to Quality</h3>
          <p>
            Quality isn’t negotiable at Coders.ma. From the projects we build to
            the way we interact with our candidates, quality is at the core of
            everything we do. We foster a mindset of discipline, attention to
            detail, and innovation, ensuring that our graduates leave with more
            than just technical skills—they leave with the ability to deliver
            exceptional results, time and time again.
          </p>
        </section>
        <section>
          <h3 id="niche">Who We Are For</h3>
          <p>
            We don’t cater to everyone—and that’s intentional. Coders.ma is for
            <strong>serious, ambitious candidates</strong> who are willing to
            invest in their future and commit to a rigorous, real-world learning
            process. Our candidates come from high-middle to elite social
            classes, and they understand that quality education is worth the
            investment.
          </p>
          <p>We cater to individuals who are:</p>
          <ul>
            <li>
              <strong>Aspiring to be more than just developers</strong>—they
              want to be tech leaders.
            </li>
            <li>
              <strong>Committed to excellence</strong> and willing to go the
              extra mile.
            </li>
            <li>
              <strong>Eager to work in real-world scenarios</strong>, learn from
              industry experts, and collaborate in teams to solve complex
              problems.
            </li>
          </ul>
        </section>
        <section>
          <h3 id="promise">Our Promise</h3>
          <p>
            At Coders.ma, we promise an education that goes beyond the
            classroom. Our candidates work in an environment that mimics a
            software company, learning from seasoned developers and gaining
            experience on real projects. By the time they leave, they won’t just
            be ready to work—they’ll be ready to lead, innovate, and make a
            lasting impact in the tech industry.
          </p>
          <p>
            We are creating a new breed of developers who aren’t just skilled
            but influential. We will continue to push the boundaries of what it
            means to be a software engineer, equipping our graduates with the
            skills, mindset, and network to thrive in any environment they
            choose.
          </p>
          <blockquote>
            This is <strong>Coders.ma</strong>, where tomorrow’s tech leaders
            are made.
          </blockquote>
        </section>
      </BlogBody>
    </>
  );
}
