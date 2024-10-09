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

export default function InstructorsSection() {
  return (
    <section
      id="instructors"
      className={instructorsSectionsStyle["instructors-section"]}
    >
      <h3>Nos formateurs</h3>
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
                  height={40}
                  width={40}
                  alt={`${instructor.image} instructor's profile picture`}
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
      <div className={instructorsSectionsStyle["instructors-stack"]}>
        <div>
          <Image alt="" src={htmlLogo} />
        </div>
        <div>
          <Image alt="" src={cssLogo} />
        </div>
        <div>
          <Image alt="" src={jsLogo} />
        </div>
        <div>
          <Image alt="" src={sassLogo} />
        </div>
        <div>
          <Image alt="" src={tsLogo} />
        </div>
        <div>
          <Image alt="" src={vueLogo} />
        </div>
        <div>
          <Image alt="" src={reactLogo} />
        </div>
        <div>
          <Image alt="" src={nodeLogo} />
        </div>
        <div>
          <Image alt="" src={expLogo} />
        </div>
        <div>
          <Image alt="" src={nextLogo} />
        </div>
        <div>
          <Image alt="" src={csLogo} />
        </div>
        <div>
          <Image alt="" src={dotNetLogo} />
        </div>
      </div>
    </section>
  );
}
