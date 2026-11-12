import { ACHIEVEMENTS } from "@/data/portfolio";
import Icon from "./Icon";
import Section from "./Section";

export default function Achievements() {
  return (
    <Section id="achievements">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:text-blue-400 ring-1 ring-blue-100 dark:bg-blue-950/60 dark:ring-blue-900">
              <Icon name="trophy" className="h-6 w-6" />
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Achievements</h2>
          </div>
          <ul className="mt-4 space-y-2.5 sm:pl-14">
            {ACHIEVEMENTS.map((a) => (
              <li key={a} className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative trophy on a podium */}
        <div aria-hidden="true" className="relative mx-auto flex h-36 w-60 items-end justify-center sm:mx-0 sm:mr-12">
          <div className="absolute bottom-0 h-6 w-56 rounded-md bg-linear-to-t from-blue-200 to-blue-100 dark:from-blue-900 dark:to-blue-800" />
          <div className="absolute bottom-6 h-8 w-24 rounded-t-md bg-linear-to-t from-blue-200 to-blue-50 dark:from-blue-900 dark:to-blue-800" />
          <Icon
            name="trophy"
            className="relative bottom-14 h-20 w-20 text-blue-400 drop-shadow-[0_8px_16px_rgba(37,99,235,0.35)] dark:text-blue-500"
          />
        </div>
      </div>
    </Section>
  );
}
