import React, { useEffect, useRef, useState } from "react";
import heroSectionStyle from "@/styles/modules/section.hero.module.scss";
import CodeEditor from "@/components/base/CodeEditor";
import Button from "@/components/base/Button";
import { cn } from "@/lib/utils";
import { useHighlight } from "@/hooks/useHighlight";

export default function HeroSection() {
  const [cssCode, setCssCode] = useState(`/* style the header. */
/* Use the "!important flag" to override. */

.headline { 
  color: rgba(134, 204, 252, 1) !important;
  font-weight: 600 !important;
}

.subheader { 
  color: rgba(214, 214, 214, 1) !important;
  font-weight: 400 !important;
}`);

  const styleRef = useRef<any>(null);
  useHighlight();

  useEffect(() => {
    if (styleRef.current) {
      styleRef.current.textContent = cssCode;
    }
  }, [cssCode]);
  return (
    <section className={heroSectionStyle["hero-section"]}>
      <section className={heroSectionStyle["description-side"]}>
        <h1 className={heroSectionStyle["headline"]}>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;h1 class=&rdquo;headline&rdquo;&gt;
          </span>
          <span className="headline">
            La formation pratique pour les développeurs de demain.
          </span>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;/h1&gt;
          </span>
        </h1>
        <h2 className={heroSectionStyle["subheader"]}>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;h2 class=&rdquo;subheader&rdquo;&gt;
          </span>
          <span className="subheader">
            Se développer pour mieux{" "}
            <span className={cn("code language-html", heroSectionStyle["tag"])}>
              &lt;strong&gt;
            </span>
            <strong>développer</strong>
            <span className={cn("code language-html", heroSectionStyle["tag"])}>
              &lt;/strong&gt;
            </span>
          </span>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;/h2&gt;
          </span>
        </h2>
        <div className={heroSectionStyle["header-cta"]}>
          <Button>S’inscrire maintenant</Button>
          <Button variant="secondary">Consulter la formation</Button>
        </div>
        <style ref={styleRef}></style>
      </section>
      <aside className={heroSectionStyle["editor-side"]}>
        <CodeEditor onCodeChange={setCssCode} lang="css">
          {cssCode}
        </CodeEditor>
      </aside>
    </section>
  );
}
