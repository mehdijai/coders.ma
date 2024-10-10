import { useEffect } from "react";

export function useDynamicFavicon() {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      const faviconTag = document.querySelector(
        "link[rel='icon']"
      ) as HTMLLinkElement | null;
      if (faviconTag) {
        faviconTag.href = "/favicon-light.ico";
      }
    }
  }, []);
}
