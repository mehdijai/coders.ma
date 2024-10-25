import eventBus from "@/lib/eventBus";
import { Language } from "@/lib/i18n/types";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SupportedLanguages } from "@/lib/i18n/i18n-context";
import { useRouter } from "next/navigation";

export function useBlogLangSwitcher() {
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    eventBus.on("language-updated", (lang: Language) => {
      const codes = SupportedLanguages.map((l) => l.code).join("|");
      const regex = new RegExp(`(${codes})$`);
      if (regex.test(pathName)) {
        const match = pathName.match(regex);

        if (match?.[0] !== lang) {
          const newPath = pathName.replace(regex, lang);
          router.push(newPath);
          // window.location.replace(newPath);
        }
      }
    });
  }, []);
}
