import React from "react";
import "@/styles/blog-layout.scss";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="blog-page">{children}</main>;
}

export function BlogHeader({ children }: { children: React.ReactNode }) {
  return <header className="blog-page__header">{children}</header>;
}

export function BlogBody({ children }: { children: React.ReactNode }) {
  return <main className="blog-page__body">{children}</main>;
}
