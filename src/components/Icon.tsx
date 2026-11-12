import {
  IconArrowRight,
  IconArrowUp,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconBriefcase,
  IconCheck,
  IconChevronDown,
  IconCode,
  IconDownload,
  IconExternalLink,
  IconKarate,
  IconLanguage,
  IconMail,
  IconMapPin,
  IconMoon,
  IconPhone,
  IconSchool,
  IconSend,
  IconStack2,
  IconSun,
  IconTrophy,
  IconUser,
  IconUsers,
  type Icon as TablerIcon,
} from "@tabler/icons-react";

// Tabler Icons (https://tabler.io/icons) mapped to short names used across the site.
const ICONS = {
  user: IconUser,
  users: IconUsers,
  language: IconLanguage,
  chevronDown: IconChevronDown,
  layers: IconStack2,
  briefcase: IconBriefcase,
  cap: IconSchool,
  code: IconCode,
  trophy: IconTrophy,
  mail: IconMail,
  pin: IconMapPin,
  phone: IconPhone,
  figure: IconKarate,
  external: IconExternalLink,
  send: IconSend,
  arrowRight: IconArrowRight,
  arrowUp: IconArrowUp,
  check: IconCheck,
  sun: IconSun,
  moon: IconMoon,
  download: IconDownload,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  x: IconBrandX,
  youtube: IconBrandYoutube,
} satisfies Record<string, TablerIcon>;

export type IconName = keyof typeof ICONS;

export default function Icon({
  name,
  className = "h-5 w-5",
  stroke = 2,
}: {
  name: IconName;
  className?: string;
  stroke?: number;
}) {
  const Component = ICONS[name];
  return <Component aria-hidden="true" className={className} stroke={stroke} />;
}
