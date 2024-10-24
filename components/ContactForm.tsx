"use client";

import React, { useState } from "react";
import "@/styles/form.scss";
import Button from "./base/Button";
import { Validator } from "@/lib/validator";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/i18n-context";

export default function ContactForm() {
  const { t } = useI18n();

  const [response, setResponse] = useState<{
    status: "error" | "success";
    message: string;
  } | null>(null);

  const [submitting, setSubmitted] = useState(false);
  const [formBody, setFormBody] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
  });

  const [error, setError] = useState<{
    name: string | null;
    email: string | null;
    phone: string | null;
    level: string | null;
  }>({
    name: null,
    email: null,
    phone: null,
    level: null,
  });

  function validateForm(): boolean {
    if (formBody.email === "" || !Validator.validateEmail(formBody.email)) {
      setError((prev) => ({
        ...prev,
        email: t("contact.form.messages.email.invalid"),
      }));
      return false;
    }

    if (
      formBody.phone === "" ||
      !Validator.validatePhoneNumber(formBody.phone)
    ) {
      setError((prev) => ({
        ...prev,
        phone: t("contact.form.messages.phone.invalid"),
      }));
      return false;
    }

    if (
      formBody.name === "" ||
      !Validator.validateMinLength(formBody.name, 3)
    ) {
      setError((prev) => ({
        ...prev,
        name: t("contact.form.messages.name.invalid", { min: "3" }),
      }));
      return false;
    }

    if (
      formBody.level === "" ||
      !Validator.validateMinLength(formBody.level, 3)
    ) {
      setError((prev) => ({
        ...prev,
        level: t("contact.form.messages.level.invalid", { min: "3" }),
      }));
      return false;
    }

    return true;
  }

  const controller = new AbortController();
  const signal = controller.signal;

  function handleSubmit(e: React.FormEvent) {
    setSubmitted(true);
    setResponse(null);
    setError({
      name: null,
      email: null,
      phone: null,
      level: null,
    });
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setSubmitted(false);
      return;
    }

    fetch(process.env.NEXT_PUBLIC_API_URL!, {
      signal,
      method: "POST",
      body: JSON.stringify(formBody),
    })
      .then((response) => {
        if (response.status === 409) {
          setResponse({
            status: "error",
            message: t("contact.form.messages.email.existing"),
          });
        } else if (response.status === 200) {
          setFormBody({
            name: "",
            email: "",
            phone: "",
            level: "",
          });
          setResponse({
            status: "success",
            message: t("contact.form.messages.success"),
          });
        } else {
          setResponse({
            status: "error",
            message: t("contact.form.messages.error"),
          });
        }
      })
      .catch((error) => {
        if (error.status === 409) {
          setResponse({
            status: "error",
            message: t("contact.form.messages.email.existing"),
          });
        }
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setResponse({
            status: "error",
            message: t("contact.form.messages.error"),
          });
        }
      })
      .finally(() => setSubmitted(false));
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      {response && (
        <div className={cn("alert span-full", response.status)}>
          <p>{response.message}</p>
        </div>
      )}
      <fieldset>
        <label htmlFor="name">{t("contact.form.name.label")}</label>
        <input
          value={formBody.name}
          onChange={(e) => setFormBody({ ...formBody, name: e.target.value })}
          readOnly={submitting}
          type="text"
          name="name"
          id="name"
          required
          placeholder={t("contact.form.name.placeholder")}
        />
        {error.name && <span className="error">{error.name}</span>}
      </fieldset>
      <fieldset>
        <label htmlFor="email">{t("contact.form.email.label")}</label>
        <input
          value={formBody.email}
          onChange={(e) => setFormBody({ ...formBody, email: e.target.value })}
          readOnly={submitting}
          type="email"
          name="email"
          id="email"
          required
          placeholder={t("contact.form.email.placeholder")}
        />
        {error.email && <span className="error">{error.email}</span>}
      </fieldset>
      <fieldset>
        <label htmlFor="phone">{t("contact.form.phone.label")}</label>
        <input
          value={formBody.phone}
          onChange={(e) => setFormBody({ ...formBody, phone: e.target.value })}
          readOnly={submitting}
          type="tel"
          name="phone"
          id="phone"
          required
          placeholder={t("contact.form.phone.placeholder")}
        />
        {error.phone && <span className="error">{error.phone}</span>}
      </fieldset>
      <fieldset>
        <label htmlFor="level">{t("contact.form.level.label")}</label>
        <input
          value={formBody.level}
          onChange={(e) => setFormBody({ ...formBody, level: e.target.value })}
          readOnly={submitting}
          type="text"
          name="level"
          id="level"
          required
          placeholder={t("contact.form.level.placeholder")}
        />
        {error.level && <span className="error">{error.level}</span>}
      </fieldset>
      <div className="span-full">
        <Button loading={submitting} variant="alt">
          {t("contact.form.submitButtonLabel")}
        </Button>
      </div>
    </form>
  );
}
