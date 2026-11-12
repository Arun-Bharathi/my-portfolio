import { PROJECTS } from "@/data/portfolio";
import Icon from "./Icon";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      icon="code"
      title="Projects"
      action={
        // TODO: point this at your GitHub repositories page
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700"
        >
          View All Projects
          <Icon name="arrowRight" className="h-4 w-4" />
        </a>
      }
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <li
            key={p.title}
            className="flex flex-col rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:text-blue-400 dark:bg-blue-950/60">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{p.subtitle}</p>
              </div>
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="text-slate-600 hover:text-blue-600 dark:hover:text-blue-400 dark:text-slate-400"
                >
                  <Icon name="external" className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="mt-3 flex-1 text-sm text-slate-700 dark:text-slate-300">{p.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-slate-800 dark:bg-blue-950/60 dark:text-slate-200"
                >
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
