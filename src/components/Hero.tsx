import Image from "next/image";
import heroImage from "@/assets/hero-workspace.png";
import { PROFILE, SOCIALS } from "@/data/portfolio";
import Icon from "./Icon";
import RotatingTitle from "./RotatingTitle";

const TITLES = ["MERN Stack Developer", "React Developer", "Frontend Developer"];

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      {/* Soft blue blob behind the illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-120 w-160 rounded-full bg-blue-200/50 blur-3xl dark:bg-blue-900/30"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        {/* Left: text */}
        <div className="order-2 lg:order-1">
          <p className="text-2xl font-medium text-slate-800 sm:text-3xl dark:text-slate-200">
            Hello, I&apos;m
          </p>
          <h1 className="mt-1 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
            {PROFILE.fullName}
          </h1>
          <RotatingTitle
            titles={TITLES}
            className="mt-3 min-h-[1.25em] text-3xl font-bold text-blue-600 dark:text-blue-400 sm:text-4xl"
          />
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {PROFILE.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View Projects
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-white/60 px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-blue-50 dark:bg-transparent dark:text-white dark:hover:bg-slate-800"
            >
              Download Resume
              <Icon name="download" className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </a>
          </div>

          <ul className="mt-8 flex items-center gap-4">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:text-blue-600 dark:hover:text-blue-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <Image
            src={heroImage}
            alt="Laptop showing React code, with a plant and a coffee mug on a book"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full max-w-2xl drop-shadow-[0_30px_40px_rgba(30,64,175,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
