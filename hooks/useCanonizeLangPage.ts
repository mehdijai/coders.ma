import { useI18n } from "@/lib/i18n/i18n-context";
import { Language } from "highlight.js";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function useCanonizeLangPage() {
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentLanguage =
      (localStorage?.getItem("language") as Language | null) ?? "en";
    const newPath = `${pathName}/${currentLanguage}`;
    router.push(newPath);
  }, []);
}
