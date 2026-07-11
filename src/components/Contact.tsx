"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CONTACT_CONTENT,
  WEB3FORMS_ACCESS_KEY,
  WEB3FORMS_ENDPOINT,
} from "@/constants/contact";
import { SocialLinks } from "@/components/SocialLinks";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-accent text-sm font-medium tracking-wide uppercase">
          {CONTACT_CONTENT.eyebrow}
        </span>
        <h2 className="text-foreground mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {CONTACT_CONTENT.heading}
        </h2>
        <p className="text-foreground/70 mt-4 text-base sm:text-lg">
          {CONTACT_CONTENT.description}
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-border bg-card rounded-card mx-auto mt-10 flex max-w-xl flex-col gap-4 border p-6 sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-foreground/70 text-sm">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="border-border bg-background/50 text-foreground focus:border-primary rounded-lg border px-3 py-2 text-sm outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-foreground/70 text-sm">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="border-border bg-background/50 text-foreground focus:border-primary rounded-lg border px-3 py-2 text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-foreground/70 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="border-border bg-background/50 text-foreground focus:border-primary rounded-lg border px-3 py-2 text-sm outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="from-primary to-secondary mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-accent text-sm">
            Thanks! Your message has been sent — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try again, or reach out directly below.
          </p>
        )}
      </motion.form>

      <div className="mt-10 flex justify-center">
        <SocialLinks />
      </div>
    </section>
  );
}
