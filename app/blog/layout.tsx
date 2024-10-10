import React from "react";
import "@/styles/blog-layout.scss";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="blog-page">{children}</main>;
}
