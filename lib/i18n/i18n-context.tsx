"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { Language } from "./types";
import eventBus from "../eventBus";

const translations = { en, fr } as Record<string, Object | string>;

const _supportedLanguages = ["fr", "en"];

export const SupportedLanguages = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
];

type I18nContextType = {
  t: (key: string, params?: Record<string, string>) => string;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    (localStorage.getItem("language") as Language) ?? "en"
  );

  useEffect(() => {
    // Try to get language from localStorage or browser preferences
    const savedLanguage = localStorage.getItem("language") as Language;
    const browserLanguage = navigator.language.split("-")[0] as Language;

    if (savedLanguage && _supportedLanguages.includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else if (_supportedLanguages.includes(browserLanguage)) {
      setCurrentLanguage(browserLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    eventBus.emit("language-updated", lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split(".");
    let value: Object | string = translations[currentLanguage];

    for (const k of keys) {
      if (typeof value === "object" && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return key;
      }
    }

    if (params) {
      let translatedText: string = value.toString();
      Object.entries(params).forEach(([key, val]) => {
        translatedText = translatedText.replace(`{{${key}}}`, val);
      });
      return translatedText;
    }

    if (!value) return key;
    return value.toString();
  };

  return (
    <I18nContext.Provider value={{ t, currentLanguage, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
