import React from "react";
import "@/styles/form.scss";
import Button from "./base/Button";

export default function ContactForm() {
  return (
    <form className="form">
      <fieldset>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Votre nom"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Votre address email"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Votre N° de téléphone"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="level">Niveau</label>
        <input
          type="text"
          name="level"
          id="level"
          required
          placeholder="Votre niveau d’étude"
        />
      </fieldset>
      <div className="span-full">
        <Button>S’inscrire maintenant</Button>
      </div>
    </form>
  );
}
