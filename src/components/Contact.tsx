"use client";

import { useState, type FormEvent } from "react";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/constants/contact";
import { SOCIAL_LINKS } from "@/constants/social";
type Status = "idle" | "loading" | "success" | "error";
export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY || status === "loading") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    setStatus("loading");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  const instagram = SOCIAL_LINKS.find((link) => link.platform === "instagram")!;
  const facebook = SOCIAL_LINKS.find((link) => link.platform === "facebook")!;
  return (
    <section
      id="contact"
      className="section-shell contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="contact-panel">
        <div className="availability">
          <span /> OPEN TO NEW COLLABORATIONS
        </div>
        <h2 id="contact-heading">
          Good things start
          <br />
          with <span className="serif-word">a conversation.</span>
        </h2>
        <p className="contact-description">
          A project in mind? A problem worth solving? I’m open to freelance
          projects and junior developer opportunities.
        </p>
        <div className="contact-actions">
          <a
            className="button button-primary"
            href={instagram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message on Instagram <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href={facebook.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find me on Facebook <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="contact-caption">
          Let’s talk about what you’re building.
        </p>
        {WEB3FORMS_ACCESS_KEY && (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">
                Your name
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                />
              </label>
              <label htmlFor="email">
                Email address
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                />
              </label>
            </div>
            <label htmlFor="message">
              Tell me about your project
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                maxLength={5000}
              />
            </label>
            <button
              type="submit"
              className="button button-primary"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Send message ↗"}
            </button>
            <div className="form-status" role="status" aria-live="polite">
              {status === "success"
                ? "Thanks! Your message was sent."
                : status === "error"
                  ? "Your message could not be sent. Please try again or use the social links above."
                  : ""}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
