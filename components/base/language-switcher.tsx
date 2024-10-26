"use client";

import { SupportedLanguages, useI18n } from "@/lib/i18n/i18n-context";
import { Language } from "@/lib/i18n/types";
import React from "react";

export default function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useI18n();

  return (
    <div className="language-switcher">
      <label htmlFor="switch-language" aria-hidden>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
      </label>
      <select
        id="switch-language"
        aria-label="switch language"
        value={currentLanguage}
        onChange={(e) => setLanguage(e.target.value as Language)}
      >
        {SupportedLanguages.map((lang) => (
          <option key={lang.code} value={lang.code} aria-label={lang.label}>
            {lang.code.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
