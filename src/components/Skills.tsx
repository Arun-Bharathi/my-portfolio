import { SKILLS } from "@/data/portfolio";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" icon="layers" title="Technical Skills">
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {SKILLS.map((s) => (
          <li
            key={s.name}
            className="flex flex-col items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-2 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/70"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- remote SVG logos, no optimisation needed */}
            <img
              src={s.icon}
              alt=""
              width={36}
              height={36}
              loading="lazy"
              className={`h-9 w-9 ${"invertInDark" in s && s.invertInDark ? "dark:invert" : ""}`}
            />
            <span className="text-center text-sm font-medium text-slate-800 dark:text-slate-200">
              {s.name}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
