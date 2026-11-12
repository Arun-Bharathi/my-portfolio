// All portfolio content lives here — edit this file to update the site.
// Content is taken from the resume (ArunKumar.S.pdf).

export const PROFILE = {
  name: "Arun Kumar",
  fullName: "Arun Kumar S",
  initials: "AK",
  location: "Chennai, Tamil Nadu, India",
  email: "arunselvaraj2298@gmail.com",
  phone: "+91 7200107338",
  languages: "English, Tamil",
  intro:
    "I build responsive, accessible and high-performance web applications with React.js, Next.js and TypeScript.",
  about:
    "Software Developer (Frontend) with 3+ years of experience building scalable web applications using React.js, Next.js, TypeScript, Redux and REST APIs. Skilled in API integration, state management, performance optimization, Agile development and modern frontend architecture.",
};

// TODO: replace "#" with your real profile links
export const SOCIALS = [
  { label: "GitHub", href: "#", icon: "github" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "X", href: "#", icon: "x" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

export const SKILLS = [
  { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "HTML5", icon: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS3", icon: `${DEVICON}/css3/css3-original.svg` },
  { name: "React.js", icon: `${DEVICON}/react/react-original.svg` },
  { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg`, invertInDark: true },
  { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: "Redux", icon: `${DEVICON}/redux/redux-original.svg` },
  { name: "Material UI", icon: `${DEVICON}/materialui/materialui-original.svg` },
  {
    name: "ShadCN UI",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@15.0.0/icons/shadcnui.svg",
    invertInDark: true,
  },
  // Untitled UI has no public CDN logo — simple local version, swap in the official SVG if you have it
  { name: "Untitled UI", icon: "/logos/untitledui.svg" },
  { name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { name: "Bootstrap", icon: `${DEVICON}/bootstrap/bootstrap-original.svg` },
  { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
  { name: "GitHub", icon: `${DEVICON}/github/github-original.svg`, invertInDark: true },
  { name: "Bitbucket", icon: `${DEVICON}/bitbucket/bitbucket-original.svg` },
];

export const EXPERIENCE = [
  {
    role: "Software Developer (Frontend)",
    company: "Genrichers Innovations Pvt. Ltd",
    period: "Jan 2024 – Present",
    projects: [
      {
        name: "Impacteers – AI Powered B2T Platform",
        points: [
          "Developed responsive and user-friendly interfaces for LMS, Skill Assessment, Resume Builder and Job Portal modules using Next.js, React.js, ShadCN UI and Material-UI.",
          "Built LMS features including course pages, admin dashboards and enrollment screens, integrating REST APIs for smooth data flow.",
          "Implemented skill assessment modules with interactive quizzes, progress tracking and result dashboards.",
          "Created a Resume Builder with multiple templates, live preview and PDF download, and Job Portal pages for searching, filtering and applying to jobs.",
          "Managed application state with Redux Toolkit and Context API, and built reusable components that improved performance and kept the UI consistent.",
        ],
      },
      {
        name: "Glueblu – HRMS Application",
        points: [
          "Contributed to frontend development and maintenance of Glueblu, a community-based React.js and MUI web application.",
          "Developed and deployed a Performance Management Goal Approval module with complete workflow automation, and a functional LMS user interface.",
          "Built a Jira-inspired Task Management System with task categorization, progress tracking and streamlined team workflows.",
          "Integrated RESTful APIs throughout the UI layer to improve functionality and end-user experience.",
        ],
      },
    ],
  },
  {
    role: "Software Developer (Frontend)",
    company: "Talexo Solutions Pvt. Ltd",
    period: "Jan 2023 – Dec 2023",
    projects: [
      {
        name: "Green Avatar – Community Web Application",
        points: [
          "Developed and maintained core frontend features for Green Avatar, a React.js and Material-UI community platform focused on social interaction and user engagement.",
          "Implemented post viewing, blog/article creation and reading, user group and profile management, and event creation and viewing.",
          "Diagnosed and resolved UI bugs and performance bottlenecks, improving page load times.",
          "Collaborated with backend teams to integrate APIs and ensure consistent data flow.",
        ],
      },
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Sri Muthukumaran Institute Of Technology, Chennai",
    period: "2018 – 2020",
    score: "CGPA: 7.4",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Sri Muthukumaran Arts & Science College, Chennai",
    period: "2015 – 2018",
    score: "CGPA: 7.2",
  },
];

// href is optional — add a live/demo link to show the open-link icon.
export const PROJECTS: {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: "cap" | "briefcase" | "users";
  href?: string;
}[] = [
  {
    title: "Impacteers",
    subtitle: "AI Powered B2T Platform",
    description:
      "LMS, skill assessments, resume builder with live preview & PDF export, and a job portal.",
    tags: ["Next.js", "ShadCN", "Redux Toolkit"],
    icon: "cap",
  },
  {
    title: "Glueblu",
    subtitle: "HRMS Application",
    description:
      "Goal approval workflows, an LMS interface and a Jira-inspired task management system.",
    tags: ["React.js", "MUI", "REST APIs"],
    icon: "briefcase",
  },
  {
    title: "Green Avatar",
    subtitle: "Community Web Application",
    description: "Posts, blogs, user groups, profiles and events for an engaged community.",
    tags: ["React.js", "MUI", "REST APIs"],
    icon: "users",
  },
];

export const ACHIEVEMENTS = [
  "Delivered 3 end-to-end product features (LMS, Skill Assessment, Job Portal) within a cross-functional team, shipped on schedule.",
  "Reduced component re-renders by adopting Redux Toolkit and memoized selectors, measurably improving app performance.",
  "Standardized a reusable UI component library with ShadCN and MUI, cutting new-feature development time by ~30%.",
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
