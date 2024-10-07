import React, { useState } from "react";
import heroSectionStyle from "@/styles/modules/section.hero.module.scss";
import CodeEditor from "@/components/base/CodeEditor";
import Button from "@/components/base/Button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [cssCode, setCssCode] = useState(`/* style the header. */

.headline { 
  color: rgba(134, 204, 252, 1);
  background: rgba(31, 38, 43, 1);
  font-weight: 700;
}

.subheader { 
  color: rgba(134, 204, 252, 1);
  background: rgba(31, 38, 43, 1);
  font-weight: 700;
}`);
  return (
    <section className={heroSectionStyle["hero-section"]}>
      <section className={heroSectionStyle["description-side"]}>
        <h1 className={heroSectionStyle["headline"]}>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;h1 class=&rdquo;headline&rdquo;&gt;
          </span>
          <span>La formation pratique pour les développeurs de demain.</span>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;/h1&gt;
          </span>
        </h1>
        <h2 className={heroSectionStyle["subheader"]}>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;h2 class=&rdquo;subheader&rdquo;&gt;
          </span>
          <span>
            Se développer pour bien{" "}
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
      </section>
      <aside className={heroSectionStyle["editor-side"]}>
        <CodeEditor lang="css">{cssCode}</CodeEditor>
      </aside>
    </section>
  );
}
