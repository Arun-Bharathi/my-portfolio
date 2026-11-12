import Image from "next/image";
import profilePhoto from "@/assets/profile.png";
import { PROFILE } from "@/data/portfolio";
import Icon from "./Icon";
import Section, { SectionHeading } from "./Section";

const CONTACTS = [
  { icon: "pin", value: PROFILE.location },
  { icon: "mail", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: "phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
  { icon: "language", value: PROFILE.languages },
] as const;

export default function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <SectionHeading icon="user" title="About Me" />
          <p className="mt-4 max-w-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {PROFILE.about}
          </p>
        </div>

        <ul className="space-y-4 md:border-l md:border-slate-200 md:pl-8 dark:md:border-slate-700">
          {CONTACTS.map((c) => (
            <li key={c.icon} className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
              <Icon name={c.icon} className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
              {"href" in c ? (
                <a href={c.href} className="break-all hover:text-blue-600 dark:hover:text-blue-400">
                  {c.value}
                </a>
              ) : (
                <span>{c.value}</span>
              )}
            </li>
          ))}
        </ul>

        <Image
          src={profilePhoto}
          alt={`Portrait of ${PROFILE.fullName}`}
          placeholder="blur"
          sizes="(min-width: 768px) 224px, 100vw"
          className="h-56 w-full rounded-xl object-cover object-[50%_20%] shadow-lg ring-4 ring-white sm:h-64 md:h-48 md:w-56 dark:ring-slate-800"
        />
      </div>
    </Section>
  );
}
