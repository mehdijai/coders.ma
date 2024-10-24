import React from "react";
import contactSectionStyle from "@/styles/modules/section.contact.module.scss";
import { cn } from "@/lib/utils";
import linkedIn from "@/assets/icons/linkedin.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import whatsapp from "@/assets/icons/whatsapp.svg";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { contacts } from "@/data/contacts";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/i18n-context";

export default function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className={contactSectionStyle["contact-section"]}>
      <main>
        <h3>{t("contact.description")}</h3>

        <ContactForm />
      </main>
      <aside>
        <h3>{t("contact.title")}</h3>

        <div className={contactSectionStyle["contacts_info"]}>
          <span>
            <a href={`mailto:${contacts.email}`} aria-label="Our Email">
              {contacts.email}
            </a>
          </span>
          <span>
            <a href={`tel:${contacts.phone}`} aria-label="Our Phone">
              {contacts.phone}
            </a>
          </span>
          <span>
            <address aria-label="Our address">{contacts.address}</address>
          </span>
        </div>

        <div className={contactSectionStyle["contacts_social-media"]}>
          <div>
            <Link
              href={contacts.linkedin}
              aria-label="Lien profile linkedin"
              target="_blank"
            >
              <Image aria-hidden alt="Logo LinkedIn" src={linkedIn} />
            </Link>
          </div>
          <div>
            <Link
              href={contacts.instagram}
              aria-label="Lien profile Instagram"
              target="_blank"
            >
              <Image aria-hidden alt="Logo Instagram" src={instagram} />
            </Link>
          </div>
          <div>
            <Link
              href={contacts.facebook}
              aria-label="Lien profile Facebook"
              target="_blank"
            >
              <Image aria-hidden alt="logo Facebook" src={facebook} />
            </Link>
          </div>
          <div>
            <Link
              href={`https://wa.me/${contacts.phone}`}
              aria-label="Lien contact WhatsApp"
              target="_blank"
            >
              <Image aria-hidden alt="Logo WhatsApp" src={whatsapp} />
            </Link>
          </div>
        </div>
      </aside>
    </section>
  );
}
