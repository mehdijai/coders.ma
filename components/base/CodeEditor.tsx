import React from "react";
import codeEditorStyles from "@/styles/modules/code-editor.module.scss";
import { cn } from "@/lib/utils";

export default function CodeEditor({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "css" | "javascript" | "html";
}) {
  return (
    <div className={codeEditorStyles["code-editor__wrapper"]}>
      <pre
        contentEditable
        className={cn(
          `code-block language-${lang}`,
          codeEditorStyles["code-editor"]
        )}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}
