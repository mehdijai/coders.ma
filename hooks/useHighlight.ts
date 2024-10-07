import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import React, { useEffect } from "react";
import "@/styles/highlight.scss";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", xml);

export function useHighlight() {
  useEffect(() => {
    hljs.configure({
      cssSelector: ".code, .code-block",
      languages: ["css", "javascript", "html"],
    });
    hljs.addPlugin({
      "after:highlightElement": ({ el, result }) => {
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
          console.log(domEl);

          el.innerHTML = domEl.innerHTML;
        }
      },
    });
    hljs.highlightAll();
  }, []);
}
