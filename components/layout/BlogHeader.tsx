"use client";

import { useHighlight } from "@/hooks/useHighlight";
import { useI18n } from "@/lib/i18n/i18n-context";
import React from "react";

export function BlogHeader({
  title,
  subtitle,
  author,
  date,
}: {
  title: string;
  subtitle: string;
  author: string;
  date: string;
}) {
  const { t } = useI18n();
  useHighlight();

  return (
    <header className="blog-page__header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <div className="blog-metadata__list">
        <span className="blog-metadata__item">
          {t("blog.createdBy")}:{" "}
          <span className="code-block language-javascript">"{author}"</span>
        </span>
        <div className="v-divider" />
        <span className="blog-metadata__item">
          {t("blog.updatedAt")}:{" "}
          <span className="code-block language-javascript">"{date}"</span>
        </span>
      </div>
    </header>
  );
}
