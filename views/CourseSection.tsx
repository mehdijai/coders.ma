import React, { useEffect, useMemo, useState } from "react";
import courseSectionStyle from "@/styles/modules/section.course.module.scss";
import CodeEditor from "@/components/base/CodeEditor";
import { courseModules } from "@/data/course-modules";
import { cn } from "@/lib/utils";

export default function CourseSection() {
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
        </div>
      </div>
    </section>
  );
}
