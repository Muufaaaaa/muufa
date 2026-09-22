export const PLAYER_DATA = {
  name: "Muhammad Wildan Faiz Althafah",
  handle: "Muufa",
  title: "Software Engineering & Game Development",
  status: "ONLINE // READY",

  classType: "SOFTWARE ENGINEERING & GAME DEV",

  level: 20,
  exp: "2,000 / 12,000 XP",

  location: "Bogor, Indonesia",
  institution: "Universitas Muhammadiyah Prof. DR. HAMKA (UHAMKA)",
  major: "Teknik Informatika",

  bio: "Mahasiswa Teknik Informatika semester 5 di UHAMKA yang memiliki minat pada software engineering dan game development. Suka membangun project, mengeksplorasi teknologi, dan mengembangkan kemampuan melalui pengalaman langsung.",

  // Game Style Stats
  attributes: [
    {
      label: "LOGIC // PROBLEM SOLVING",
      val: 82,
      max: 100,
      color: "#00d2ff",
    },
    {
      label: "SOFTWARE // DEVELOPMENT",
      val: 80,
      max: 100,
      color: "#10df9e",
    },
    {
      label: "DATABASE // BACKEND",
      val: 78,
      max: 100,
      color: "#f59e0b",
    },
    {
      label: "GAME DEV // EXPLORATION",
      val: 76,
      max: 100,
      color: "#ff5533",
    },
  ],

  // Primary Tech Stacks
  skills: [
    {
      name: "C++",
      level: "Intermediate",
      rating: 78,
      tag: "PROGRAMMING / GRAPHICS",
      desc: "C++ programming with experience in computer graphics using OpenGL/GLUT.",
    },
    {
      name: "PHP",
      level: "Intermediate",
      rating: 80,
      tag: "WEB / BACKEND",
      desc: "Used in Laravel-based web development and backend application logic.",
    },
    {
      name: "SQL",
      level: "Intermediate",
      rating: 78,
      tag: "DATABASE / MYSQL",
      desc: "Relational database usage with MySQL for web application development.",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      rating: 80,
      tag: "WEB / BOT DEVELOPMENT",
      desc: "Used for web development and Discord bot development with Node.js and Discord.js.",
    },
  ],

  // Game Development & Community
  gameDevSpecialties: [
    {
      name: "Roblox Game Development",
      desc: "Experience building educational game systems, NPC dialogue, quest concepts, and HUD interfaces using Roblox Studio.",
    },
    {
      name: "Game UI Design",
      desc: "Designing HUD and player interfaces for game projects with a focus on usability and visual consistency.",
    },
    {
      name: "Community Management",
      desc: "Created and managed the INFORMATICX Discord community for Informatics students and technology enthusiasts.",
    },
  ],
};

export const SYSTEM_LOGS = [
  "SYSTEM INITIALIZATION COMPLETE",
  "CORE MODULES: C++, PHP, SQL, JAVASCRIPT LOADED",
  "GAME SYSTEMS: ROBLOX EXPERIENCE READY",
  "COMMUNITY NODE: INFORMATICX ONLINE",
  "TARGET OBJECTIVE: GAME DEVELOPMENT // SOFTWARE ENGINEERING",
  "ALL SYSTEMS NOMINAL // 60 FPS INTERFACE ONLINE",
];

export const QUESTS = [
  {
    id: "quest-01",
    code: "QST-01 // RECYCLICK",
    title: "Recyclick",
    category: "Web Development",
    difficulty: "CRITICAL",
    status: "COMPLETED",

    description:
      "Aplikasi e-commerce produk ramah lingkungan berbasis Laravel dengan katalog produk, cart, checkout, wishlist, eco points, eco badge, invoice, serta dashboard user dan admin.",

    lore:
      "Project e-commerce bertema lingkungan yang menggabungkan proses belanja dengan fitur eco points dan eco badge.",

    techStack: [
      "Laravel",
      "PHP",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "Bootstrap",
      "GitHub",
    ],

    stats: {
      focus: "EcoCommerce",
      systems: "Catalog / Cart / Checkout",
      role: "Backend Developer",
    },

    highlights: [
      "Product catalog",
      "Cart and checkout system",
      "Wishlist feature",
      "Eco points and eco badge",
      "Admin dashboard",
      "Invoice page",
      "Responsive interface",
    ],

    githubUrl: "",
  },

  {
    id: "quest-02",
    code: "QST-02 // CAMPUS-PASS",
    title: "CampusPass",
    category: "Web3",
    difficulty: "MEDIUM",
    status: "COMPLETED",

    description:
      "Platform sertifikat digital mahasiswa berbasis blockchain yang memungkinkan sertifikat diterbitkan, disimpan sebagai metadata, dan diverifikasi melalui wallet serta smart contract.",

    lore:
      "Project yang mengeksplorasi penggunaan blockchain untuk penerbitan dan verifikasi sertifikat digital mahasiswa.",

    techStack: [
      "React",
      "Tailwind CSS",
      "Solidity",
      "MetaMask",
      "IPFS",
      "Smart Contract",
      "Vite",
    ],

    stats: {
      focus: "Digital Certificate",
      systems: "Wallet / Smart Contract",
      role: "Web3 Developer",
    },

    highlights: [
      "MetaMask wallet integration",
      "Smart contract interaction",
      "IPFS metadata storage",
      "Certificate verification",
      "Digital certificate concept",
      "Protected route handling",
    ],

    githubUrl: "",
  },

  {
    id: "quest-03",
    code: "QST-03 // SAWIT-THE-LAST-CHANCE",
    title: "Sawit: The Last Chance",
    category: "Game Development",
    difficulty: "CRITICAL",
    status: "IN DEVELOPMENT",

    description:
      "Game edukasi Roblox bertema lingkungan yang membahas dampak deforestasi, banjir, longsor, dan tata kelola lahan sawit melalui eksplorasi, NPC, quest, dan dialog interaktif.",

    lore:
      "Pemain mengikuti perjalanan seorang pekerja baru yang menemukan berbagai permasalahan lingkungan di sebuah desa perkebunan melalui eksplorasi dan interaksi dengan NPC.",

    techStack: [
      "Roblox Studio",
      "Luau",
      "Game UI Design",
      "Figma",
      "Software Development Life Cycle",
      "Agile",
    ],

    stats: {
      focus: "Educational Game",
      systems: "NPC / Quest / HUD",
      role: "Game UI Developer",
    },

    highlights: [
      "NPC dialogue system",
      "Quest tracker",
      "Story-based gameplay",
      "Environmental education theme",
      "HUD system",
      "Interactive Roblox environment",
    ],

    githubUrl: "",
  },

  {
    id: "quest-04",
    code: "QST-04 // SMART-STUDY-GROUP",
    title: "Smart Study Group Manager",
    category: "Automation",
    difficulty: "MEDIUM",
    status: "COMPLETED",

    description:
      "Sistem otomasi akademik berbasis n8n dan Discord bot untuk membantu mengelola jadwal, reminder, progress mingguan, serta status penyelesaian tugas.",

    lore:
      "Workflow automation yang menghubungkan Google Calendar, Google Sheets, n8n, dan Discord untuk membantu pengelolaan aktivitas akademik.",

    techStack: [
      "n8n",
      "Discord.js",
      "Google Sheets",
      "Google Calendar",
      "Webhook",
      "JSON",
    ],

    stats: {
      focus: "Workflow Automation",
      systems: "Calendar / Sheets / Discord",
      role: "Automation Developer",
    },

    highlights: [
      "Google Calendar synchronization",
      "Automatic task reminder",
      "Weekly progress report",
      "Task completion command",
      "Discord slash commands",
      "Google Sheets task database",
    ],

    githubUrl: "",
  },

  {
    id: "quest-05",
    code: "QST-05 // INFIX",
    title: "Infix",
    category: "Bot Development",
    difficulty: "HARD",
    status: "IN DEVELOPMENT",

    description:
      "Bot Discord untuk server komunitas Informatics dengan fitur moderation, warning system, temporary voice channel, server statistics, utility command, dan pengelolaan server.",

    lore:
      "Bot Discord modular yang dikembangkan untuk mendukung kebutuhan moderation, utility, dan pengelolaan server komunitas.",

    techStack: [
      "Discord.js",
      "Node.js",
      "JavaScript",
      "MongoDB",
      "Slash Command",
      "Role Permission",
    ],

    stats: {
      focus: "Discord Bot Development",
      systems: "Moderation / Utility / Database",
      role: "Bot Developer",
    },

    highlights: [
      "Modular slash command system",
      "Warning and moderation features",
      "Temporary voice channel",
      "Server statistics",
      "Role and channel permission handling",
      "Database integration",
    ],

    githubUrl: "",
  },
];