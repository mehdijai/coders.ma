import { useEffect } from "react";

export function useBlogContentScrapper(
  callback: (content: TOCObject[]) => void
) {
  useEffect(() => {
    const tocObjects: TOCObject[] = [];

    const section = document.querySelectorAll(".blog-page__body > section");

    section.forEach((sec) => {
      const h3 = sec.querySelector("h3");
      if (h3) {
        const sectionToc: TOCObject = {
          title: h3.textContent ?? "",
          href: "#" + (h3.id ?? ""),
          subItems: [],
        };
        const h4s = sec.querySelectorAll("h4");
        h4s.forEach((h4) => {
          sectionToc.subItems.push({
            title: h4.textContent ?? "",
            href: "#" + (h4.id ?? ""),
          });
        });
        tocObjects.push(sectionToc);
      }
    });

    callback(tocObjects);
  }, []);
}
