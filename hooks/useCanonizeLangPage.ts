import { useI18n } from "@/lib/i18n/i18n-context";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function useCanonizeLangPage() {
  const { currentLanguage } = useI18n();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const newPath = `${pathName}/${currentLanguage}`;
    router.push(newPath);
  }, []);
}
