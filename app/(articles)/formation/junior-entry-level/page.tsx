"use client";

import InlineLoader from "@/components/base/InlineLoader";
import { useCanonizeLangPage } from "@/hooks/useCanonizeLangPage";
import React from "react";

export default function page() {
  useCanonizeLangPage();
  return (
    <>
      <InlineLoader />
    </>
  );
}
