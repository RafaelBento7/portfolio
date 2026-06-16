/**
 * Single source of truth for every bit of copy on the site.
 * Edit this file to update the portfolio — the layout and styling all read
 * from here, so you never have to touch the markup.
 *
 * Inline HTML (e.g. <span class="text-light">word</span>) is allowed in the
 * `about` paragraphs to emphasise words. Everything else is plain text.
 */

export const profile = {
  name: "Rafael Bento",
  title: "Full Stack Developer",
  summary:
    "Software developer based in Portugal, focused on backend development and system integrations — building web platforms, REST APIs and business applications with Laravel, C# .NET and Android.",
  location: "Lourinhã, Portugal",
  email: "rafaelcarreirabento7@gmail.com",
  // Your real CV lives here. Replace public/resume.pdf to update it.
  resumeUrl: "/resume.pdf",
  socials: [
    { name: "GitHub", url: "https://github.com/RafaelBento7", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rafael-carreira-bento/",
      icon: "linkedin",
    },
  ],
} as const;

export const nav = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "career", label: "Career" },
  { id: "projects", label: "Projects" },
  { id: "recommendations", label: "Recommendations" },
  { id: "contact", label: "Contact" },
] as const;

export const about = [
  'My name is Rafael Bento — a <span class="text-light">software developer</span> based in Lourinhã, Portugal, with a strong interest in backend development and system integrations. I work mostly with Laravel, C# .NET and Android, building web platforms, REST APIs and business applications.',
  'I also like building things of my own. One of those is <span class="text-light">Classic Games</span>, a personal project on GitHub that brings together a collection of timeless games — a fun way to keep experimenting and learning.',
  "Adaptable, proactive and committed to continuous growth, I'd describe myself as a fast learner who is communicative and enjoys solving problems. I speak Portuguese natively, English at a B2 level, and a little French/Spanish (learned by myself, nothing official).",
];

export const education = [
  {
    period: "2021 — 2023",
    degree: "CTeSP in Information Systems Programming",
    school: "Polytechnic Institute of Leiria — ESTG",
    detail:
      "Higher Professional Technical Course (CTeSP) spanning software development, databases and systems, with projects published on GitHub.",
  },
  {
    period: "2017 — 2021",
    degree: "Computer Systems Management & Programming Technician",
    school: "Escola Secundária Dr. João Manuel da Costa Delgado",
    detail:
      "Professional secondary course focused on programming, computer-systems management and IT support.",
  },
];

export const awards = [
  {
    period: "2020",
    title: "TECLA — Honorable Mention",
    org: "Escola Superior de Tecnologia e Gestão de Aveiro",
  },
  {
    period: "2019",
    title: "FCUL Rally Pro — 2nd Place",
    org: "Faculdade de Ciências, Universidade de Lisboa",
  },
];

export const skills = {
  languages: ["C#", "PHP", "Java", "JavaScript", "SQL", "HTML", "CSS"],
  databases: ["MySQL", "SQL Server", "SQLite"],
  tools: [
    ".NET Framework",
    "Laravel",
    "Yii Framework",
    "Alpine.js",
    "Tailwind CSS",
    "Bootstrap",
    "jQuery",
    "Android Studio",
    "Git",
    "REST APIs",
  ],
};

export const career = [
  {
    period: "2026 — Present",
    role: "Full Stack Developer",
    company: "Treviane",
    url: "",
    description:
      "Building the Treviane real-estate network platform with Laravel (PHP). Backend-focused development with frontend work in Tailwind CSS and Alpine.js, scheduled CRON jobs for automated tasks, and integrations with external REST APIs and third-party services (Moloni, Ifthenpay, EasyPay, and others).",
    tech: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js", "REST APIs"],
  },
  {
    period: "2023 — 2025",
    role: "Junior Developer",
    company: "Pasta Digital Sistemas Tecnológicos",
    url: "",
    description:
      "C# .NET development integrating and extending SAGE software via its API; designed and built RESTful web services in C# and PHP for mobile and external integrations. Android development with Android Studio and Kalipso Studio (RAD), plus Laravel web applications built to custom client requirements.",
    tech: ["C#", ".NET", "PHP", "Laravel", "Android Studio"],
  },
  {
    period: "2023 · 5 months",
    role: "Software Development Intern",
    company: "Pasta Digital Sistemas Tecnológicos",
    url: "",
    description:
      "Curricular internship: software development in C# .NET using the SAGE API, and back-end web development with the Laravel (PHP) framework.",
    tech: ["C#", ".NET", "PHP", "Laravel"],
  },
  {
    period: "2020 — 2021",
    role: "IT Support & Development Intern",
    company: "",
    url: "",
    description:
      "Curricular internship providing IT technical support to users and developing an internship-management application in Microsoft Access.",
    tech: ["Microsoft Access", "IT Support"],
  },
];

// The CV didn't include project details, so these are still placeholders.
// Replace them with your real work (links can point to live sites or repos).
export const projects = [
  {
    title: "Project One",
    description:
      "Short description of a project you're proud of — what it does, the problem it solves, and your role. Replace this placeholder.",
    tech: ["Laravel", "Tailwind CSS"],
    url: "",
    repo: "https://github.com/RafaelBento7",
  },
  {
    title: "Project Two",
    description:
      "Another project highlight. Add a sentence or two about the stack and what makes it interesting.",
    tech: ["C#", ".NET"],
    url: "",
    repo: "https://github.com/RafaelBento7",
  },
  {
    title: "Project Three",
    description:
      "A third project, side-project or open-source contribution. Link it to a live demo or its GitHub repository.",
    tech: ["JavaScript"],
    url: "",
    repo: "https://github.com/RafaelBento7",
  },
];

// One recommendation. The signed letter lives at public/recommendation.pdf and
// shows via the "View signed letter" link. `quote` below is a condensed English
// translation of the original Portuguese letter.
export const testimonials = [
  {
    quote:
      "Rafael collaborated with us as a developer and showed real adaptability and a strong sense of responsibility in developing and maintaining our solutions. He grasps requirements easily, solves problems, and stays on top of the needs of the projects he's involved in — always professional, collaborative and well-organised. He brings technical and personal strengths that will be an asset to any software development team.",
    name: "Ricardo Carvalho",
    role: "Manager",
    company: "PastaDigital — Soluções Tecnológicas",
    letterUrl: "/recommendation.pdf",
  },
];

export const contact = {
  body:
    "I'm currently open to new opportunities and interesting projects. Whether you'd like to talk about a role, a collaboration, or just say hello, my inbox is always open — I'll do my best to get back to you.",
};
