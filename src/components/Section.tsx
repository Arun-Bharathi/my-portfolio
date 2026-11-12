import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

export function SectionHeading({ icon, title }: { icon: IconName; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:text-blue-400 ring-1 ring-blue-100 dark:bg-blue-950/60 dark:ring-blue-900">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
    </div>
  );
}

type Props = {
  id: string;
  icon?: IconName;
  title?: string;
  action?: ReactNode;
  children: ReactNode;
};

export default function Section({ id, icon, title, action, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="rounded-2xl border border-slate-200/70 bg-white/75 p-6 shadow-[0_10px_30px_-12px_rgba(37,99,235,0.18)] backdrop-blur sm:p-8 dark:border-slate-800 dark:bg-slate-900/60">
        {icon && title && (
          <div className="mb-6 flex items-center justify-between gap-4">
            <SectionHeading icon={icon} title={title} />
            {action}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
