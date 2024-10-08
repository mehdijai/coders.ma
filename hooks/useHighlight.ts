import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import { useEffect } from "react";
import "@/styles/highlight.scss";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", xml);

export function useHighlight() {
  useEffect(() => {
    document
      .querySelectorAll("[data-highlighted]")
      .forEach((el) => el.removeAttribute("data-highlighted"));
    hljs.configure({
      cssSelector: ".code, .code-block",
      languages: ["css", "javascript", "html"],
    });
    hljs.addPlugin({
      "after:highlightElement": ({ el, result }) => {
        if (result.language === "javascript") {
          const domEl = document.createElement("div");
          domEl.innerHTML = result.value;
          const added: { index: number; el: Element }[] = [];
          domEl.childNodes.forEach((node, index) => {
            if (
              node.nodeType === Node.ELEMENT_NODE &&
              node instanceof Element &&
              node.classList.contains("hljs-keyword") &&
              node.textContent &&
              ["const", "let", "var"].includes(node.textContent)
            ) {
              const res = domEl.childNodes[index + 1].textContent
                ?.trim()
                .split(" ");

              if (res) {
                const varName = res[0];
                const spanEl = document.createElement("span");
                spanEl.classList.add("hljs-variable");
                spanEl.textContent = ` ${varName}`;
                added.push({ index: index + 1, el: spanEl });

                res.splice(0, 1);

                domEl.childNodes[index + 1].textContent = " " + res.join(" ") + "\n  ";
              }
            }

            if (node.textContent?.includes(">>")) {
              if (domEl.childNodes[index + 1].nodeType === Node.ELEMENT_NODE) {
                (domEl.childNodes[index + 1] as Element).classList.add(
                  "is-highlighted"
                );
              }
            }
          });
          added.forEach((item) => {
            domEl.insertBefore(item.el, domEl.childNodes[item.index]);
          });
          el.innerHTML = domEl.innerHTML;
        }
        if (result.language === "html") {
          const domEl = document.createElement("div");
          domEl.innerHTML = result.value;
          domEl.childNodes[0].childNodes.forEach((node) => {
            if (
              node.nodeType === Node.TEXT_NODE &&
              node.textContent &&
              node.textContent === "="
            ) {
              const spanEl = document.createElement("span");
              spanEl.classList.add("hljs-equals");
              spanEl.textContent = "=";
              domEl.childNodes[0].replaceChild(spanEl, node);
            }
          });
          el.innerHTML = domEl.innerHTML;
        }
      },
    });
    hljs.highlightAll();
  }, []);

  return hljs;
}
