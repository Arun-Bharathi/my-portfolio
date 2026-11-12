import { EDUCATION } from "@/data/portfolio";
import Icon from "./Icon";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" icon="cap" title="Education">
      <ul className="space-y-4 sm:pl-14">
        {EDUCATION.map((e) => (
          <li
            key={e.degree}
            className="flex flex-wrap items-center gap-4 border-t border-slate-200 pt-4 dark:border-slate-700"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:text-blue-400 dark:bg-blue-950/60">
              <Icon name="cap" className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{e.degree}</h3>
              <p className="text-slate-700 dark:text-slate-300">{e.school}</p>
            </div>
            <div className="flex gap-3">
              {[e.period, e.score].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-slate-800 dark:bg-blue-950/60 dark:text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
