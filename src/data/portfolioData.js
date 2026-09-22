export const PLAYER_DATA = {
  name: "Muhammad Wildan Faiz Althafah",
  handle: "Muufaaaaa",
  title: "Software Engineer & Game Developer",
  status: "ONLINE // READY",
  classType: "SYSTEM ARCHITECT & GAMEPLAY SCRIPTER",
  level: 4, // Semester 4
  exp: "4,250 / 8,000 XP",
  location: "Bogor, Indonesia",
  institution: "Universitas Muhammadiyah Prof. DR. HAMKA (UHAMKA)",
  major: "Teknik Informatika",
  bio: "Mahasiswa Teknik Informatika semester 4 di UHAMKA, berdomisili di Bogor. Memiliki fokus kuat pada rekayasa perangkat lunak dan arsitektur sistem. Membangun fondasi game development melalui pengelolaan server, manajemen komunitas, serta scripting tingkat lanjut di Minecraft dan Roblox.",
  
  // Game Style Stats
  attributes: [
    { label: "LOGIC // SYSTEM ARCH", val: 88, max: 100, color: "#00d2ff" },
    { label: "GAMEPLAY // SCRIPTING", val: 85, max: 100, color: "#10df9e" },
    { label: "DATABASE // RELATIONS", val: 82, max: 100, color: "#f59e0b" },
    { label: "SECURITY // AUDITING", val: 80, max: 100, color: "#ff5533" },
  ],

  // Primary Tech Stacks
  skills: [
    { name: "C++", level: "Advanced Core", rating: 88, tag: "SYSTEMS / HIGH PERF", desc: "Memory management, data structures, low-level architecture." },
    { name: "SQL", level: "Proficient", rating: 84, tag: "RDBMS / OPTIMIZATION", desc: "Relational database design, query indexing, transactions." },
    { name: "PHP", level: "Backend Logic", rating: 82, tag: "SERVER / API", desc: "RESTful endpoints, secure session handling, MVC architecture." },
    { name: "Python", level: "Scripting & AI", rating: 86, tag: "DATA / AUTOMATION", desc: "Computer vision (CNNs), scripting, server automation." },
  ],

  // Extra Game Dev Specializations
  gameDevSpecialties: [
    { name: "Minecraft Server Infrastructure", desc: "High-concurrency Spigot/Paper server hosting, plugin config, economy tuning." },
    { name: "Roblox Lua Scripting", desc: "Client-server replication, custom character controllers, inventory & datastores." },
    { name: "Community Management", desc: "Player engagement protocols, community moderation, event orchestration." }
  ]
};

export const QUESTS = [
  {
    id: "quest-01",
    code: "QST-01 // E-COMMERCE-SYS",
    title: "E-commerce System",
    category: "Full-Stack & Systems Architecture",
    difficulty: "HARD",
    status: "COMPLETED",
    description: "Sistem manajemen transaksi yang dibangun dengan C++, SQL, dan PHP. Mengintegrasikan pemrosesan transaksi berkecepatan tinggi dengan integritas data relasional ACID.",
    lore: "Dibangun untuk menangani throughput tinggi dengan pemrosesan order teroptimasi di sisi backend dan manajemen inventaris real-time.",
    techStack: ["C++", "SQL", "PHP", "Relational DB", "ACID Transactions"],
    stats: {
      performance: "+35% Latency Reduction",
      integrity: "100% ACID Compliant",
      role: "Lead Systems Architect"
    },
    githubUrl: "https://github.com/Muufaaaaa"
  },
  {
    id: "quest-02",
    code: "QST-02 // IGRS-BREACH-AUDIT",
    title: "IGRS Data Breach Analysis",
    category: "Cybersecurity & Distributed Systems",
    difficulty: "CRITICAL",
    status: "INVESTIGATED",
    description: "Investigasi kerentanan API dan miskonfigurasi sistem terdistribusi pada insiden Indonesia Game Rating System (IGRS).",
    lore: "Analisis forensik digital yang membedah vektor serangan autentikasi, privilege escalation, dan strategi perbaikan arsitektur zero-trust.",
    techStack: ["API Auditing", "Distributed Systems", "Vulnerability Analysis", "Zero Trust"],
    stats: {
      scope: "Enterprise Gov Platform",
      vectors: "Broken Object Level Auth (BOLA)",
      role: "Security Researcher"
    },
    githubUrl: "https://github.com/Muufaaaaa"
  },
  {
    id: "quest-03",
    code: "QST-03 // SAFE-CAMPUS",
    title: "SAFE Campus Framework",
    category: "Civic Tech & Public Safety",
    difficulty: "MEDIUM",
    status: "PROTOTYPED",
    description: "Perancangan infrastruktur digital pelaporan darurat dan anti-pelecehan lingkungan kampus dengan enkripsi end-to-end.",
    lore: "Menghubungkan civitas akademika dengan sistem pelaporan anonim cepat tanggap yang aman dari kebocoran identitas dan tamper-proof.",
    techStack: ["PHP", "SQL", "Cryptographic Hashing", "Web Services", "UI/UX"],
    stats: {
      anonymity: "Zero-Knowledge Logging",
      responseTarget: "< 30s Dispatch",
      role: "Full-Stack Engineer"
    },
    githubUrl: "https://github.com/Muufaaaaa"
  },
  {
    id: "quest-04",
    code: "QST-04 // VISION-CNN-BENCH",
    title: "MobileNet vs ResNet CNN",
    category: "Machine Learning & Computer Vision",
    difficulty: "HARD",
    status: "RESEARCHED",
    description: "Riset perbandingan efisiensi dan akurasi model untuk klasifikasi aktivitas pembelajaran mahasiswa menggunakan CNN.",
    lore: "Benchmarking performa model berbobot ringan (MobileNet) versus arsitektur residual dalam (ResNet) untuk evaluasi real-time edge computing.",
    techStack: ["Python", "TensorFlow / Keras", "Computer Vision", "Model Benchmarking"],
    stats: {
      f1Score: "High Precision Balance",
      inferenceSpeed: "Real-time edge ready",
      role: "ML Researcher"
    },
    githubUrl: "https://github.com/Muufaaaaa"
  }
];

export const SYSTEM_LOGS = [
  "SYSTEM INITIALIZATION COMPLETE",
  "CORE MODULES: C++, SQL, PHP, PYTHON LOADED",
  "SERVER NODES: MINECRAFT & ROBLOX ECOSYSTEM READY",
  "TARGET_OBJECTIVE: GAME_DEVELOPMENT // SOFTWARE_ENGINEERING",
  "ALL VITAL SIGNS NOMINAL // 60 FPS ENGINE ONLINE"
];
