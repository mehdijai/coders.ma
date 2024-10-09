import React from "react";
import ArrowUp from "@/assets/icons/arrow-up.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ToTopButton() {
  const [showToTopBtn, setShowToTopBtn] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        setShowToTopBtn(true);
      } else {
        setShowToTopBtn(false);
      }
    };
  }, []);
  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div
      className={cn("to-top-fab", showToTopBtn && "show")}
      onClick={scrollUp}
    >
      <Image src={ArrowUp} alt="" height={20} width={20} />
    </div>
  );
}
