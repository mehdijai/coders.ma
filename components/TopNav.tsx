import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo-icon-light.svg";
import topNavStyles from "@/styles/modules/top-nav.module.scss";

export default function TopNav() {
  return (
    <nav className={topNavStyles["top-nav"]}>
      <ul>
        <li>
          <Link href="/">
            <Image
              height={32}
              src={Logo}
              alt="Coders.ma, La formation pratique pour les développeurs de demain."
            />
          </Link>
        </li>
        <li>
          <Link href="/#features">
            <span>À propos</span>
          </Link>
        </li>
        <li>
          <Link href="/#partners">
            <span>Partenaires</span>
          </Link>
        </li>
        <li>
          <Link href="/blog/formation">
            <span>Formation</span>
          </Link>
        </li>
        <li>
          <Link href="/#instructors">
            <span>Formateurs</span>
          </Link>
        </li>
        <li className={topNavStyles["cta"]}>
          <Link href="/#contact">
            <span>S’inscrire</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
