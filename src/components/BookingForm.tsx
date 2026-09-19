"use client";

import { FormEvent, useState } from "react";

const services = ["Herreklip", "Skin fade", "Klip & skæg", "Skægtrim"];

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("phone");

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/bookings", {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      setStatus(response.ok ? "success" : "error");
      if (response.ok) event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="booking-form" onSubmit={submitBooking}>
      <div className="field">
        <label htmlFor="name">Navn</label>
        <input id="name" name="name" placeholder="Dit fulde navn" required />
      </div>
      <div className="field full">
        <label>Hvordan må vi kontakte dig?</label>
        <div className="contact-choice" role="group" aria-label="Kontaktvalg">
          <button className={contactMethod === "phone" ? "contact-option active" : "contact-option"} onClick={() => setContactMethod("phone")} type="button">Telefon</button>
          <button className={contactMethod === "email" ? "contact-option active" : "contact-option"} onClick={() => setContactMethod("email")} type="button">Email</button>
        </div>
        <input name="contactMethod" type="hidden" value={contactMethod} />
      </div>
      <div className="field full">
        <label htmlFor={contactMethod}>{contactMethod === "phone" ? "Telefonnummer" : "Emailadresse"}</label>
        {contactMethod === "phone" ? (
          <input id="phone" name="phone" placeholder="+45 00 00 00 00" required />
        ) : (
          <input id="email" name="email" placeholder="dig@email.dk" required type="email" />
        )}
      </div>
      <div className="field">
        <label htmlFor="service">Behandling</label>
        <select defaultValue="" id="service" name="service" required>
          <option disabled value="">Vælg behandling</option>
          {services.map((service) => <option key={service}>{service}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="date">Ønsket dato</label>
        <input id="date" name="date" required type="date" />
      </div>
      <div className="field">
        <label htmlFor="time">Ønsket tid</label>
        <select defaultValue="" id="time" name="time" required>
          <option disabled value="">Vælg tidspunkt</option>
          {["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"].map((time) => <option key={time}>{time}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="note">Note (valgfrit)</label>
        <input id="note" name="note" placeholder="Noget vi skal vide?" />
      </div>
      {status === "success" && <p className="form-message">Tak. Din forespørgsel er modtaget. Vi kontakter dig via {contactMethod === "phone" ? "telefon" : "email"} med en endelig bekræftelse.</p>}
      {status === "error" && <p className="form-message form-error">Der mangler noget i formularen. Tjek felterne og prøv igen.</p>}
      <button className="primary-btn" disabled={status === "sending"} type="submit">
        {status === "sending" ? "Sender ..." : "Send forespørgsel"} <span className="arrow">↗</span>
      </button>
    </form>
  );
}
