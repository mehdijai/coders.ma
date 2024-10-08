import React, { useEffect, useMemo, useState } from "react";
import courseSectionStyle from "@/styles/modules/section.course.module.scss";
import CodeEditor from "@/components/base/CodeEditor";
import { courseModules } from "@/data/course-modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function CourseSection() {
  const [intersectedSection, setIntersectedSection] = useState<string>();
  const modulesCode = `// Nos formations

const formationModules = [
  "Introduction au Web et outils essentiels",
  "HTML et CSS pour la création de sites web",
  "JavaScript et interactivité",
  "Bases du backend et bases de données",
  "Projets pratiques et certification",
];`;

  const getModulesCode = useMemo(
    () =>
      modulesCode.replace(`"${intersectedSection}`, `>>"${intersectedSection}`),
    [intersectedSection]
  );

  useEffect(() => {
    const lectures = document.querySelectorAll(".lecture-details");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIntersectedSection(
              (entry.target as Element).getAttribute("data-title") ?? undefined
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    lectures.forEach((lecture) => {
      observer.observe(lecture);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section
      id="formation"
      className={cn(courseSectionStyle["courses-section"])}
    >
      <h3>Notre formation</h3>
      <div
        className={cn(
          "lectures-list",
          courseSectionStyle["course-modules__list"]
        )}
      >
        <div
          className={cn(
            "lecture-wrapper",
            courseSectionStyle["course-module__item"]
          )}
        >
          <div
            className={cn(
              "lecture-modules",
              courseSectionStyle["course-module__item-details"]
            )}
          >
            {courseModules.map((courseModule) => (
              <div key={courseModule.moduleTitle}>
                <div
                  className={cn(
                    "lecture-details",
                    courseSectionStyle["cours-module__details"]
                  )}
                  data-title={courseModule.moduleTitle}
                >
                  {courseModule.lectures.map((lecture) => (
                    <div key={lecture.lectureTitle}>
                      <h4>{lecture.lectureTitle}</h4>
                      <p>{lecture.description}</p>
                    </div>
                  ))}
                </div>
                <div className="divider" />
              </div>
            ))}
          </div>
          <div
            className={cn(
              "lecture-code",
              courseSectionStyle["cours-module__code"]
            )}
          >
            <CodeEditor fit lang="javascript" content={getModulesCode} />
          </div>
        </div>
      </div>
    </section>
  );
}
