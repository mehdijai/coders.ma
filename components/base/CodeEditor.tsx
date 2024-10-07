import React, { FormEvent, useState } from "react";
import codeEditorStyles from "@/styles/modules/code-editor.module.scss";
import { cn } from "@/lib/utils";

export default function CodeEditor({
  children,
  lang,
  onCodeChange,
}: {
  onCodeChange?: (content: string) => void;
  children: React.ReactNode;
  lang: "css" | "javascript" | "html";
}) {
  const handleInput = (e: FormEvent<HTMLPreElement>) => {
    const updatedCode = (e.target as HTMLPreElement).innerText;
    onCodeChange?.(updatedCode);
  };

  return (
    <div className={codeEditorStyles["code-editor__wrapper"]}>
      <pre
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
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
