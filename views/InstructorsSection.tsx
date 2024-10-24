"use client";

import React from "react";
import instructorsSectionsStyle from "@/styles/modules/section.instructors.module.scss";
import htmlLogo from "@/assets/icons/html.svg";
import cssLogo from "@/assets/icons/css.svg";
import jsLogo from "@/assets/icons/javascript.svg";
import sassLogo from "@/assets/icons/sass.svg";
import tsLogo from "@/assets/icons/typescript.svg";
import vueLogo from "@/assets/icons/vuejs.svg";
import reactLogo from "@/assets/icons/react.svg";
import nodeLogo from "@/assets/icons/nodejs.svg";
import expLogo from "@/assets/icons/expressjs.svg";
import nextLogo from "@/assets/icons/nextjs.svg";
import csLogo from "@/assets/icons/csharp.svg";
import dotNetLogo from "@/assets/icons/dotnet.svg";
import curlyBracket from "@/assets/icons/curly-bracket.svg";
import Image from "next/image";
import { instructors } from "@/data/instructors";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/i18n-context";

export default function InstructorsSection() {
  const { t } = useI18n();
  return (
    <section
      id="instructors"
      className={instructorsSectionsStyle["instructors-section"]}
    >
      <h3 className={instructorsSectionsStyle["title"]}>{t("home.our-tutors")}</h3>
      <div className={instructorsSectionsStyle["instructors-list"]}>
        {instructors.map((instructor) => (
          <div
            className={instructorsSectionsStyle["instructors-card"]}
            key={instructor.name}
          >
            <header>
              <div
                className={instructorsSectionsStyle["instructors-card__image"]}
              >
                <Image height={32} width={14} alt="" src={curlyBracket} />
                <Image
                  aria-label="Picture of Mehdi Jai"
                  height={40}
                  width={40}
                  alt={`${instructor.name} instructor's profile picture`}
                  src={instructor.image}
                />
                <Image height={32} width={14} alt="" src={curlyBracket} />
              </div>
              <h5>{instructor.name}</h5>
            </header>
            <div
              className={
                instructorsSectionsStyle["instructors-card__description"]
              }
            >
              <p>{instructor.description}</p>
              <div
                className={instructorsSectionsStyle["instructors-card__urls"]}
              >
                {instructor.urls?.map((url) => (
                  <Link
                    className="ext-link"
                    target="_blank"
                    href={url.url}
                    key={url.label}
                  >
                    {url.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className={instructorsSectionsStyle["instructors-stack"]}
      >
        <div>
          <Image alt="html logo" src={htmlLogo} />
        </div>
        <div>
          <Image alt="css logo" src={cssLogo} />
        </div>
        <div>
          <Image alt="javascript logo" src={jsLogo} />
        </div>
        <div>
          <Image alt="sass logo" src={sassLogo} />
        </div>
        <div>
          <Image alt="typescript logo" src={tsLogo} />
        </div>
        <div>
          <Image alt="vue.js logo" src={vueLogo} />
        </div>
        <div>
          <Image alt="react.js logo" src={reactLogo} />
        </div>
        <div>
          <Image alt="nodejs logo" src={nodeLogo} />
        </div>
        <div>
          <Image alt="express.js logo" src={expLogo} />
        </div>
        <div>
          <Image alt="next.js 14 logo" src={nextLogo} />
        </div>
        <div>
          <Image alt="c# logo" src={csLogo} />
        </div>
        <div>
          <Image alt=".net logo" src={dotNetLogo} />
        </div>
      </div>
    </section>
  );
}
