export const profile = {
  name: "Rafael Bento",
  title: "Full Stack Developer",
  summary:
    "Full Stack developer, with a strong interest on backend development and system integrations — building web platforms, REST APIs and business applications with Laravel, C# .NET and Android.",
  location: "Lisbon, Portugal",
  email: "rafaelcarreirabento7@gmail.com",
  resumeUrl: "/resume.pdf",
  photo: "photo.jpg",
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
  'My name is Rafael Bento, a <span class="text-light">full stack developer</span>, with a strong interest in backend development and system integrations. I work mostly with Laravel, C# .NET and Android, building web platforms, REST APIs and business applications.',
  'Outside of work, I enjoy developing personal projects such as <a class="font-medium text-light underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent" href="https://play.google.com/store/apps/details?id=com.classicgames.myapplication" target="_blank" rel="noreferrer">Classic Games</a>, an Android app that bundles a handful of timeless games (Snake, Wordle, Mastermind, Hangman, Tic-Tac-Toe and more) with high-score leaderboards and multilingual support.',
  "I am a fast learner who enjoys solving problems and continuously improving my technical skills. I value clear communication, adaptability and teamwork. I am a native Portuguese speaker, fluent in English (B2), and have a very basic knowledge of French and Spanish.",
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
    "Yii2 Framework",
    "Alpine.js",
    "Tailwind CSS",
    "Bootstrap",
    "jQuery",
    "Android Studio",
    "Git",
    "REST APIs",
    "Postman",
    "VS Code",
    "Visual Studio",
    "Kalipso Studio",
    "Composer"
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
    tech: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js", "REST APIs", "MySQL"],
  },
  {
    period: "2023 — 2025",
    role: "Junior Developer",
    company: "Pasta Digital Sistemas Tecnológicos",
    url: "",
    description:
      "C# .NET development integrating and extending SAGE software via its API; designed and built RESTful web services in C# and PHP for mobile and external integrations. Android development with Android Studio and Kalipso Studio (RAD), plus Laravel web applications built to custom client requirements.",
    tech: ["C#", ".NET", "PHP", "Laravel", "Android Studio", "MySQL", "SQL Server", "SQLite", "Kalipso Studio"],
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

// `url` = live demo/site, `repo` = source code. Leave either empty to hide its
// icon; if both are empty the card title is plain text (not a link).
export const projects = [
  {
    title: "Classic Games",
    description:
      "An Android app that bundles a collection of timeless games — Snake, Tic-Tac-Toe, Mastermind, Wordle, Hangman and True Colors — with high-score leaderboards, multiple languages and a clean MVVM architecture. All data stays on the device.",
    tech: ["Java", "Android", "MVVM"],
    url: "",
    repo: "https://play.google.com/store/apps/details?id=com.classicgames.myapplication",
  },
  {
    title: "AutoCRUD for Laravel",
    description:
      "A C# tool that auto-generates full CRUD scaffolding — models, views, controllers, documentation and more — for Laravel 11+ projects, taking the repetitive boilerplate out of creating new resources.",
    tech: ["Laravel", "PHP", "Composer"],
    url: "",
    repo: "https://github.com/RafaelBento7/AutoCRUDLaravel",
  },
  {
    title: "Aerocontrol",
    description:
      "Final academic project: a dual-platform system for managing airline operations — aircraft, users, flights, restaurants and more. Built as a Yii2 web application (separate frontend and backend) paired with an Android app that consumes the backend REST API.",
    tech: ["Yii2 Framework", "PHP", "REST API", "Android Studio", "Java", "MySQL"],
    url: "",
    repo: "https://github.com/RafaelBento7/FinalProjectTesp",
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
    role: "CEO",
    company: "PastaDigital — Soluções Tecnológicas, Lda",
    letterUrl: "/recommendation.pdf",
  },
];

export const contact = {
  body:
    "I'm currently open to hear new opportunities and interesting projects. Whether you'd like to talk about a role, a collaboration, or just say hello, my inbox is always open. I'll do my best to get back to you as soon as possible.",
};
