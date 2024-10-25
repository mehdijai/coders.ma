"use client";

import "@/styles/blog-layout.scss";
import { useBlogLangSwitcher } from "@/hooks/useBlogLangSwitcher";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useBlogLangSwitcher();
  return <main className="blog-page">{children}</main>;
}
