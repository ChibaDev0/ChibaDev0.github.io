"use client";

import { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "@/constants/nav";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isOpen]);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#main" className="wordmark" onClick={() => setIsOpen(false)}>
          <span className="monogram" aria-hidden="true">
            tk<span>.</span>
          </span>
          <span>
            traiwit<span className="wordmark-slash"> / developer</span>
          </span>
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="main-links"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close −" : "Menu +"}
        </button>
        <div id="main-links" className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setIsOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
