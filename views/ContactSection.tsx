import React from "react";
import contactSectionStyle from "@/styles/modules/section.contact.module.scss";
import { cn } from "@/lib/utils";
import linkedIn from "@/assets/icons/linkedin.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import whatsapp from "@/assets/icons/whatsapp.svg";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className={contactSectionStyle["contact-section"]}>
      <h3>
        Inscrivez-vous dès maintenant et lancez votre carrière en tant que
        développeur web !
      </h3>

      <div className={contactSectionStyle["contact-form"]}>
        <ContactForm />
      </div>

      <span
        className={cn(
          "code language-html",
          contactSectionStyle["contact_or-tag"]
        )}
      >
        &lt;OU/&gt;
      </span>

      <h3>Contactez-nous</h3>

      <div className={contactSectionStyle["contacts_info"]}>
        <span>
          <a href="mailto:inscription@coders.ma">inscription@coders.ma</a>
        </span>
        <span>
          <a href="tel:+212 6 66 55 88 44">+212 6 66 55 88 44</a>
        </span>
        <span>Sidi Maafa, Oujda</span>
      </div>

      <div className={contactSectionStyle["contacts_social-media"]}>
        <div>
          <Image alt="" src={linkedIn} />
        </div>
        <div>
          <Image alt="" src={instagram} />
        </div>
        <div>
          <Image alt="" src={facebook} />
        </div>
        <div>
          <Image alt="" src={whatsapp} />
        </div>
      </div>
    </section>
  );
}
