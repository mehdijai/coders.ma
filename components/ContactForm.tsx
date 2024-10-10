import React, { useState } from "react";
import "@/styles/form.scss";
import Button from "./base/Button";
import { Validator } from "@/lib/validator";
import { cn } from "@/lib/utils";

export default function ContactForm() {
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
      setError((prev) => ({ ...prev, email: "Email invalide" }));
      return false;
    }

    if (
      formBody.phone === "" ||
      !Validator.validatePhoneNumber(formBody.phone)
    ) {
      setError((prev) => ({
        ...prev,
        phone: "Téléphone invalide: +2126xxxxxxxx OU 06xxxxxxxx",
      }));
      return false;
    }

    if (
      formBody.name === "" ||
      !Validator.validateMinLength(formBody.name, 3)
    ) {
      setError((prev) => ({ ...prev, name: "Nom invalide" }));
      return false;
    }

    if (
      formBody.level === "" ||
      !Validator.validateMinLength(formBody.level, 3)
    ) {
      setError((prev) => ({ ...prev, level: "Niveau invalide" }));
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
            message: "Cet email existe déjà",
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
            message: "Merci pour votre inscription",
          });
        } else {
          setResponse({
            status: "error",
            message: "Une erreur est survenue",
          });
        }
      })
      .catch((error) => {
        if (error.status === 409) {
          setResponse({
            status: "error",
            message: "Cet email existe déjà",
          });
        }
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setResponse({
            status: "error",
            message: "Une erreur est survenue",
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
        <label htmlFor="name">Nom</label>
        <input
          value={formBody.name}
          onChange={(e) => setFormBody({ ...formBody, name: e.target.value })}
          readOnly={submitting}
          type="text"
          name="name"
          id="name"
          required
          placeholder="Votre nom"
        />
        {error.name && <span className="error">{error.name}</span>}
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          value={formBody.email}
          onChange={(e) => setFormBody({ ...formBody, email: e.target.value })}
          readOnly={submitting}
          type="email"
          name="email"
          id="email"
          required
          placeholder="Votre address email"
        />
        {error.email && <span className="error">{error.email}</span>}
      </fieldset>
      <fieldset>
        <label htmlFor="phone">Téléphone</label>
        <input
          value={formBody.phone}
          onChange={(e) => setFormBody({ ...formBody, phone: e.target.value })}
          readOnly={submitting}
          type="tel"
          name="phone"
          id="phone"
          required
          placeholder="Votre N° de téléphone"
        />
        {error.phone && <span className="error">{error.phone}</span>}
      </fieldset>
      <fieldset>
        <label htmlFor="level">Niveau</label>
        <input
          value={formBody.level}
          onChange={(e) => setFormBody({ ...formBody, level: e.target.value })}
          readOnly={submitting}
          type="text"
          name="level"
          id="level"
          required
          placeholder="Votre niveau d’étude"
        />
        {error.level && <span className="error">{error.level}</span>}
      </fieldset>
      <div className="span-full">
        <Button loading={submitting}>S’inscrire maintenant</Button>
      </div>
    </form>
  );
}
