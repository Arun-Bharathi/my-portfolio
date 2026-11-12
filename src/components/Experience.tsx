import { EXPERIENCE } from "@/data/portfolio";
import Icon from "./Icon";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" icon="briefcase" title="Work Experience">
      <ol className="relative ml-4 border-l-2 border-blue-600/80 sm:ml-14">
        {EXPERIENCE.map((job, i) => (
          <li
            key={job.company}
            className={`relative grid gap-4 pl-8 md:grid-cols-[16rem_1fr] md:gap-8 ${
              i > 0 ? "mt-5 border-t border-slate-200 pt-5 dark:border-slate-700" : ""
            }`}
          >
            <span
              className={`absolute -left-2.25 h-4 w-4 rounded-full border-[3px] border-blue-600 bg-white dark:bg-slate-900 ${
                i > 0 ? "top-6" : "top-1"
              }`}
            />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.role}</h3>
              <p className="font-semibold text-blue-600 dark:text-blue-400">{job.company}</p>
              <span className="mt-2 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium whitespace-nowrap text-slate-800 dark:bg-blue-950/60 dark:text-slate-200">
                {job.period}
              </span>
            </div>

            <div className="space-y-3">
              {job.projects.map((project, j) => (
                <details
                  key={project.name}
                  open={i === 0 && j === 0}
                  className="group rounded-xl border border-slate-200/80 bg-white/70 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden">
                    <span>Project: {project.name}</span>
                    <Icon
                      name="chevronDown"
                      className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400 transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 marker:text-blue-600 dark:marker:text-blue-400 dark:text-slate-300">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
