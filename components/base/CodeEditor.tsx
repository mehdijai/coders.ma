import React, { FormEvent, useEffect, useRef, useState } from "react";
import codeEditorStyles from "@/styles/modules/code-editor.module.scss";
import { cn } from "@/lib/utils";
import hljs from "highlight.js/lib/core";

export default function CodeEditor({
  content,
  lang,
  editable,
  fit,
  onCodeChange,
}: {
  onCodeChange?: (content: string) => void;
  content: string;
  lang: "css" | "javascript" | "html";
  fit?: boolean;
  editable?: boolean;
}) {
  const handleInput = (e: FormEvent<HTMLPreElement>) => {
    const updatedCode = (e.target as HTMLPreElement).innerText;
    onCodeChange?.(updatedCode);
  };

  return (
    <div
      className={cn(codeEditorStyles["code-editor__wrapper"], {
        [codeEditorStyles["fit"]]: fit,
      })}
    >
      <pre
        contentEditable={editable}
        suppressContentEditableWarning
        onInput={handleInput}
        className={cn(
          `code-block language-${lang}`,
          codeEditorStyles["code-editor"]
        )}
      >
        <code>{content}</code>
      </pre>
    </div>
  );
}
