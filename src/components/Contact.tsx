"use client";

import type { FormEvent } from "react";
import { PROFILE } from "@/data/portfolio";
import Icon from "./Icon";
import Section, { SectionHeading } from "./Section";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400";

export default function Contact() {
  // No backend yet: open the visitor's mail app with the message pre-filled.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact">
      <div className="grid gap-8 md:grid-cols-[1fr_1.6fr]">
        <div className="md:border-r md:border-slate-200 md:pr-8 dark:md:border-slate-700">
          <SectionHeading icon="mail" title="Get In Touch" />
          <p className="mt-6 leading-relaxed text-slate-700 sm:pl-14 dark:text-slate-300">
            Have a project in mind or just want to say hi? Feel free to reach out. I&apos;ll get back
            to you soon.
          </p>
        </div>

        <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
          <label className="sr-only" htmlFor="name">Your Name</label>
          <input id="name" name="name" required placeholder="Your Name" className={inputClass} />
          <label className="sr-only" htmlFor="email">Your Email</label>
          <input id="email" name="email" type="email" required placeholder="Your Email" className={inputClass} />
          <label className="sr-only" htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Your Message..."
            className={`${inputClass} resize-none sm:col-span-2`}
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 justify-self-end rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:col-span-2"
          >
            <Icon name="send" className="h-4 w-4" />
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}
