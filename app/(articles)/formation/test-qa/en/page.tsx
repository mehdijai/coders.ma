import TOC from "@/components/base/TOC";
import { BlogBody } from "@/components/layout/BlogBody";
import { BlogHeader } from "@/components/layout/BlogHeader";
import { Metadata } from "next";
import React from "react";

const blogHead = {
  title: "Testing and QA Program",
  subtitle: `This program focuses on the testing side of a software solution. Where we tackle the qualification and testing a software solution using a tool called "Postman". The program will take 2 hours with real world examples. and real-time discussions.`,
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
    url: "https://coders-ma.pages.dev/formation/test-qa/en",
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
      <TOC title="Summary" />
      <BlogBody>
        <section>
          <h3 id="introduction">Introduction</h3>
          <p>
            This program is dedicated to the critical testing phase of software
            solutions. We will explore the qualification and testing of software
            utilizing the industry-standard tool, **Postman**. The session will
            span two hours and will incorporate real-world examples along with
            interactive discussions to enhance learning.
          </p>
        </section>

        <section>
          <h3 id="details">Program Overview</h3>
          <p>
            Led by our expert tutor, <strong>Mehdi Jai</strong>, participants will delve into
            the fundamentals of software testing theory. We will engage with
            actual projects to illustrate both challenges and solutions,
            emphasizing automation and the QA mindset. The program is structured
            as follows:
          </p>
          <ol>
            <li>Introduction to Software Testing</li>
            <li>API Fundamentals for Non-Technical Users</li>
            <li>Comprehensive Overview of Postman</li>
            <li>Setting Up a Testing Environment</li>
            <li>Utilizing Postman Collections and Variables</li>
            <li>Understanding Postman Environments</li>
            <li>Exploring OpenAPI and Swagger</li>
            <li>Implementing Automated Testing</li>
          </ol>
        </section>

        {/* <section>
          <h3 id="price">Price</h3>
          <p>
            This program supports between 6-10 candidates per group. The price is 200Dhs.
          </p>
        </section> */}
      </BlogBody>
    </>
  );
}
