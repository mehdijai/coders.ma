import React, { useEffect, useRef, useState } from "react";
import heroSectionStyle from "@/styles/modules/section.hero.module.scss";
import CodeEditor from "@/components/base/CodeEditor";
import Button from "@/components/base/Button";
import { cn } from "@/lib/utils";
import { useHighlight } from "@/hooks/useHighlight";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/i18n-context";

export default function HeroSection() {
  const { t } = useI18n();

  const [cssCode, setCssCode] = useState(`/* style the header. */
/* Use the "!important flag" to override. */

.headline {
  color: rgba(86, 3, 58, 1) !important;
  font-weight: 600 !important;
}

.subheader {
  color: rgba(102, 102, 102, 1) !important;
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
          <span className="headline">{t("home.headline")}</span>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;/h1&gt;
          </span>
        </h1>
        <h2 className={heroSectionStyle["subheader"]}>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;h2 class=&rdquo;subheader&rdquo;&gt;
          </span>
          <span className="subheader">
            Develop to better{" "}
            <span className={cn("code language-html", heroSectionStyle["tag"])}>
              &lt;strong&gt;
            </span>
            <strong>develop</strong>
            <span className={cn("code language-html", heroSectionStyle["tag"])}>
              &lt;/strong&gt;
            </span>
          </span>
          <span className={cn("code language-html", heroSectionStyle["tag"])}>
            &lt;/h2&gt;
          </span>
        </h2>
        <div className={heroSectionStyle["header-cta"]}>
          <Button>
            <Link href="/#contact">{t("home.cta.join")}</Link>
          </Button>
          <Button variant="secondary">
            <Link href="/blog/formation">{t("home.cta.consult-program")}</Link>
          </Button>
        </div>
        <style ref={styleRef}></style>
      </section>
      <aside className={heroSectionStyle["editor-side"]}>
        <CodeEditor
          editable
          onCodeChange={setCssCode}
          lang="css"
          content={cssCode}
        />
      </aside>
    </section>
  );
}
