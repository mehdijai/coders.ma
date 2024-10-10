"use client";

import { useBlogContentScrapper } from "@/hooks/useBlogContentScrapper";
import React, { useEffect, useState } from "react";

export default function TOC({ title }: { title: string }) {
  const [content, setContent] = useState<TOCObject[]>([]);
  useBlogContentScrapper((sections) => {
    setContent(sections);
  });
  useEffect(() => {
    window.addEventListener("beforeprint", () => {
      document
        .querySelectorAll("details")
        .forEach((details) => (details.open = true));
    });
  }, []);
  return (
    <details className="toc-details-toggler">
      <summary>
        <h2>
          <span>{title}</span>
        </h2>
      </summary>
      <section className="tcp-toc">
        <ol className="toc-list" role="list">
          {content.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <span className="title">
                  {item.title}
                  <span className="leaders" aria-hidden="true"></span>
                </span>{" "}
              </a>
              <ol role="list">
                {item.subItems.map((subitem) => (
                  <li key={subitem.href}>
                    <a href={subitem.href}>
                      <span className="title">
                        {subitem.title}
                        <span className="leaders" aria-hidden="true"></span>
                      </span>{" "}
                    </a>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </section>
    </details>
  );
}
