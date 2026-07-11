"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV_CTA, NAV_LINKS } from "@/constants/nav";
import { siteConfig } from "@/constants/site";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled();
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || isOpen
          ? "border-border bg-background/80 border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          onClick={closeMenu}
          className="text-foreground text-lg font-semibold tracking-tight"
        >
          {siteConfig.shortName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground/70 hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={NAV_CTA.href}
          className="from-primary to-secondary hidden rounded-full bg-gradient-to-r px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          {NAV_CTA.label}
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="border-border relative flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
        >
          <span
            className={cn(
              "bg-foreground absolute h-0.5 w-5 transition-transform duration-300",
              isOpen ? "rotate-45" : "-translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "bg-foreground absolute h-0.5 w-5 transition-opacity duration-300",
              isOpen ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "bg-foreground absolute h-0.5 w-5 transition-transform duration-300",
              isOpen ? "-rotate-45" : "translate-y-1.5",
            )}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden md:hidden"
          >
            <ul className="border-border flex flex-col gap-1 border-t px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="text-foreground/80 hover:text-foreground block py-2 text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={NAV_CTA.href}
                  onClick={closeMenu}
                  className="from-primary to-secondary mt-2 inline-flex rounded-full bg-gradient-to-r px-5 py-2 text-sm font-medium text-white"
                >
                  {NAV_CTA.label}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
