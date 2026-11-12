"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "@/data/portfolio";
import Icon from "./Icon";

function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-amber-500 transition dark:bg-transparent dark:text-slate-400">
        <Icon name="sun" className="h-4 w-4" />
      </span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition dark:bg-slate-950 dark:text-white">
        <Icon name="moon" className="h-4 w-4" />
      </span>
    </button>
  );
}

export default function Header() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            {PROFILE.initials}
          </span>
          <span className="text-lg font-bold text-slate-900 dark:text-white">{PROFILE.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`rounded-full px-3.5 py-1.5 text-[15px] font-medium transition-colors xl:px-4 ${
                  active === link.href
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-800 hover:text-blue-600 dark:hover:text-blue-400 dark:text-slate-200"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md lg:hidden"
          >
            <span className={`h-0.5 w-5 bg-slate-900 transition dark:bg-white ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-slate-900 transition dark:bg-white ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-slate-900 transition dark:bg-white ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 px-4 py-3 lg:hidden dark:border-slate-800">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={`block rounded-md px-3 py-2 font-medium ${
                  active === link.href
                    ? "bg-blue-50 text-blue-600 dark:text-blue-400 dark:bg-blue-950"
                    : "text-slate-800 dark:text-slate-200"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
