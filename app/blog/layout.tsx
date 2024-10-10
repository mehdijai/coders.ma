"use client";

import React from "react";
import "@/styles/blog-layout.scss";
import { useHighlight } from "@/hooks/useHighlight";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="blog-page">{children}</main>;
}

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
  useHighlight();
  return (
    <header className="blog-page__header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>

      <div className="blog-metadata__list">
        <span className="blog-metadata__item">
          Créé par:{" "}
          <span className="code-block language-javascript">"{author}"</span>
        </span>
        <div className="v-divider" />
        <span className="blog-metadata__item">
          Mis à jour le:{" "}
          <span className="code-block language-javascript">"{date}"</span>
        </span>
      </div>
    </header>
  );
}

export function BlogBody({ children }: { children: React.ReactNode }) {
  return <main className="blog-page__body">{children}</main>;
}
