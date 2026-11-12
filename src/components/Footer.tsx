import { NAV_LINKS, PROFILE } from "@/data/portfolio";
import Icon from "./Icon";

async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            {PROFILE.initials}
          </span>
          <span className="font-bold text-slate-900 dark:text-white">{PROFILE.name}</span>
        </a>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          © <CurrentYear /> {PROFILE.name}. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-700 dark:text-slate-300">
            {NAV_LINKS.filter((l) => l.href !== "#achievements").map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 dark:text-blue-400 shadow-sm transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800"
          >
            <Icon name="arrowUp" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
