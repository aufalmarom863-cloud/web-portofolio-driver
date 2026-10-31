import { useState } from "react"
import aufalProfileImg from "../assets/aufal-profile.jpg"

interface DeveloperPortfolioProps {
  onSwitchToDriver: () => void
  onSwitchToHome: () => void
}

export default function DeveloperPortfolio({
  onSwitchToDriver,
  onSwitchToHome,
}: DeveloperPortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aufalmarom863@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const SKILL_CATEGORIES = [
    {
      title: "Programming Languages",
      icon: "⚡",
      badge: "Core Logic",
      skills: [
        {
          name: "JavaScript",
          level: "Advanced",
          color: "from-amber-400 to-yellow-500",
        },
        {
          name: "TypeScript",
          level: "Intermediate",
          color: "from-blue-400 to-sky-500",
        },
        {
          name: "PHP",
          level: "Advanced",
          color: "from-indigo-400 to-purple-500",
        },
        {
          name: "Python",
          level: "Intermediate",
          color: "from-emerald-400 to-teal-500",
        },
        {
          name: "Java",
          level: "Intermediate",
          color: "from-orange-400 to-red-500",
        },
        { name: "SQL", level: "Advanced", color: "from-cyan-400 to-blue-500" },
      ],
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      badge: "UI / UX",
      skills: [
        {
          name: "HTML5",
          level: "Advanced",
          color: "from-orange-500 to-amber-500",
        },
        {
          name: "CSS3",
          level: "Advanced",
          color: "from-blue-500 to-indigo-500",
        },
        {
          name: "Tailwind CSS",
          level: "Expert",
          color: "from-sky-400 to-cyan-500",
        },
        {
          name: "React.js",
          level: "Advanced",
          color: "from-cyan-400 to-blue-600",
        },
        {
          name: "Next.js",
          level: "Intermediate",
          color: "from-slate-200 to-slate-400",
        },
        {
          name: "Vue.js",
          level: "Familiar",
          color: "from-emerald-400 to-green-600",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: "🛠️",
      badge: "Server & API",
      skills: [
        {
          name: "Node.js",
          level: "Advanced",
          color: "from-emerald-500 to-green-600",
        },
        {
          name: "Express.js",
          level: "Advanced",
          color: "from-slate-300 to-slate-500",
        },
        {
          name: "Laravel (PHP)",
          level: "Advanced",
          color: "from-red-500 to-rose-600",
        },
        {
          name: "RESTful API Development",
          level: "Expert",
          color: "from-blue-500 to-teal-500",
        },
      ],
    },
    {
      title: "Database & Cloud",
      icon: "🗄️",
      badge: "Storage & Infra",
      skills: [
        { name: "MySQL", level: "Advanced", color: "from-blue-400 to-sky-600" },
        {
          name: "PostgreSQL",
          level: "Intermediate",
          color: "from-indigo-400 to-blue-600",
        },
        {
          name: "MongoDB",
          level: "Intermediate",
          color: "from-emerald-500 to-teal-600",
        },
        {
          name: "Firebase",
          level: "Familiar",
          color: "from-amber-400 to-orange-500",
        },
      ],
    },
    {
      title: "Tools & Methodologies",
      icon: "🚀",
      badge: "DevOps & Workflow",
      skills: [
        {
          name: "Git & GitHub",
          level: "Advanced",
          color: "from-orange-400 to-amber-600",
        },
        {
          name: "Postman",
          level: "Expert",
          color: "from-orange-500 to-red-500",
        },
        { name: "VS Code", level: "Expert", color: "from-sky-400 to-blue-600" },
        {
          name: "Agile / Scrum Basics",
          level: "Practicing",
          color: "from-purple-400 to-indigo-500",
        },
        {
          name: "Linux CLI",
          level: "Comfortable",
          color: "from-yellow-400 to-amber-500",
        },
      ],
    },
  ]

  const PROJECTS = [
    {
      id: "proyek-1",
      title: "Sistem Manajemen Inventaris Berbasis Web",
      category: "fullstack",
      type: "Web Application / Full-Stack",
      stack: ["Laravel", "MySQL", "Tailwind CSS", "Bootstrap", "Blade"],
      description:
        "Membangun aplikasi web untuk mempermudah pencatatan stok barang secara real-time, transaksi masuk-keluar, serta pelaporan otomatis periodik.",
      points: [
        "Membangun aplikasi web untuk mempermudah pencatatan stok barang, transaksi masuk-keluar, serta pelaporan otomatis.",
        "Mengimplementasikan sistem autentikasi bertingkat (Role-Based Access Control) untuk admin dan staf gudang.",
        "Merancang skema relasi basis data menggunakan MySQL untuk efisiensi kueri dan integritas data transaksi.",
      ],
      github: "https://github.com/aufalmarom863-cloud",
      featured: true,
      tag: "Full-Stack",
    },
    {
      id: "proyek-2",
      title: "RESTful API Layanan E-Commerce / Reservasi",
      category: "backend",
      type: "Backend Development & API Architecture",
      stack: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Postman",
        "JWT",
        "Swagger",
      ],
      description:
        "Mengembangkan arsitektur backend REST API dengan endpoint modular, validasi data ketat, dan keamanan berbasis token JWT.",
      points: [
        "Mengembangkan arsitektur backend REST API dengan endpoint modular untuk manajemen produk, pesanan, dan verifikasi pengguna (JWT).",
        "Melakukan integrasi unit testing dan dokumentasi API interaktif menggunakan Postman / Swagger untuk kemudahan integrasi tim frontend.",
        "Optimalisasi indexing basis data PostgreSQL untuk kueri pencarian dan transaksi cepat.",
      ],
      github: "https://github.com/aufalmarom863-cloud",
      featured: true,
      tag: "Backend",
    },
    {
      id: "proyek-3",
      title: "Landing Page & Dashboard Interaktif Komunitas",
      category: "frontend",
      type: "Frontend Development & UI/UX",
      stack: ["React.js", "Tailwind CSS", "REST API", "Lucide Icons", "Vite"],
      description:
        "Merancang antarmuka pengguna yang responsif, ramah mobile (mobile-first), dan mudah dinavigasi dengan state management halus.",
      points: [
        "Merancang antarmuka pengguna yang responsif, ramah mobile (mobile-first), dan mudah dinavigasi dengan tema gelap elegan.",
        "Mengintegrasikan pengambilan data asinkron dari API publik dengan penanganan status loading dan error yang mulus.",
        "Komponen modular reusable dengan Tailwind CSS untuk kecepatan render maksimal.",
      ],
      github: "https://github.com/aufalmarom863-cloud",
      featured: true,
      tag: "Frontend",
    },
  ]

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen text-slate-100 bg-[#050510] font-['Inter',sans-serif]">
      {/* ========================================================================= */}
      {/* DEVELOPER HERO / HEADER SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/[0.08]">
        {/* Ambient Gradient Glows */}
        <div
          className="absolute top-10 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-40 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Breadcrumb / Mode Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <button
                onClick={onSwitchToHome}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-slate-400 hover:text-white transition-colors border border-white/[0.06]"
              >
                <span>🏠</span>
                <span>Beranda</span>
              </button>
              <span className="text-slate-600">/</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-400/20 text-xs font-mono font-semibold text-sky-300">
                <span>💻</span>
                <span>Portofolio Developer</span>
              </span>
            </div>

            {/* Quick Switch to Driver Mode Button */}
            <button
              onClick={onSwitchToDriver}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-xs font-mono font-semibold text-amber-300 transition-all hover:scale-105 shadow-sm"
              title="Beralih ke Portofolio Driver"
            >
              <span>🚗</span>
              <span>Buka Portofolio Driver ➔</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Developer Identity & Bio Header */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              {/* Badge Status */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 backdrop-blur-md w-fit mb-6 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
                <span className="font-mono text-xs uppercase tracking-wider text-sky-300 font-medium">
                  Informatika UNU Yogyakarta · Software Developer
                </span>
              </div>

              {/* Title & Name */}
              <div className="mb-4">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-white font-['Space_Grotesk'] mb-3">
                  PORTOFOLIO DEVELOPER
                </h1>
                <h2 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 font-['Space_Grotesk']">
                  Muhammad Aufal Maromi
                </h2>
              </div>

              {/* Location Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6 text-sm font-mono text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                  <span>📍</span>
                  <span>Pati, Jawa Tengah</span>
                </span>
                <span className="text-slate-600">|</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                  <span>🏛️</span>
                  <span>Yogyakarta, Indonesia</span>
                </span>
              </div>

              {/* Quick Summary Pitch */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Mahasiswa Semester 5 Informatika di{" "}
                <strong className="text-white font-semibold">
                  Universitas Nahdlatul Ulama Yogyakarta
                </strong>
                . Berfokus pada pengembangan perangkat lunak modern (Full-Stack,
                Backend REST API, & Database), memecahkan tantangan dunia nyata
                melalui kode yang bersih, efisien, dan terstruktur.
              </p>

              {/* Links & CTA Bar */}
              <div className="flex flex-wrap items-center gap-3.5">
                {/* GitHub Profile */}
                <a
                  href="https://github.com/aufalmarom863-cloud"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-sky-400 hover:bg-slate-800 text-white font-['Space_Grotesk'] font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 no-underline"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub Profile</span>
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                {/* Email Direct */}
                <a
                  href="mailto:aufalmarom863@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-['Space_Grotesk'] font-bold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:-translate-y-0.5 no-underline"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Kirim Email</span>
                </a>

                {/* Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-mono text-slate-300 hover:text-white transition-all duration-150"
                  title="Salin alamat email"
                >
                  <span>{copiedEmail ? "✓ Disalin!" : "📋 Salin Email"}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Profile Avatar Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-xs">
                {/* Glow ring */}
                <div
                  className="absolute -inset-2 rounded-3xl opacity-50 blur-xl pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.2) 70%)",
                  }}
                />

                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl p-4">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                    <img
                      src={aufalProfileImg}
                      alt="Muhammad Aufal Maromi - Developer"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10">
                      <div className="text-xs font-bold text-white font-['Space_Grotesk']">
                        Muhammad Aufal Maromi
                      </div>
                      <div className="text-[10px] text-sky-400 font-mono">
                        Semester 5 · Informatika UNU
                      </div>
                    </div>
                  </div>

                  {/* Quick Meta */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-slate-400">Status</span>
                      <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Open to Work / Intern
                      </span>
                    </div>
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-slate-400">Fokus</span>
                      <span className="text-sky-300">Software & Web</span>
                    </div>
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-slate-400">Kampus</span>
                      <span className="text-amber-300">UNU Yogyakarta</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. TENTANG SAYA (ABOUT ME) */}
      {/* ========================================================================= */}
      <section
        id="tentang-saya"
        className="py-20 relative border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400 font-semibold">
              01 // Profile Overview
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-8">
            1. Tentang Saya (About Me)
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Narrative Card */}
            <div className="lg:col-span-8 glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/10">
              <div className="prose prose-invert max-w-none">
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
                  Saya adalah mahasiswa Semester 5 Program Studi Informatika,
                  Fakultas Teknologi Informasi di{" "}
                  <strong className="text-sky-300 font-semibold">
                    Universitas Nahdlatul Ulama Yogyakarta (UNU Yogyakarta)
                  </strong>
                  . Berasal dari{" "}
                  <strong className="text-amber-300 font-semibold">
                    Pati, Jawa Tengah
                  </strong>
                  , saya memiliki minat mendalam dan fokus aktif pada
                  pengembangan perangkat lunak (<em>software development</em>).
                </p>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
                  Terbiasa memecahkan masalah melalui kode yang efisien,
                  berorientasi pada detail, serta memiliki kemauan kuat untuk
                  terus mengadopsi teknologi modern. Saat ini sedang aktif
                  memperdalam ekosistem pengembangan web/aplikasi dan siap
                  berkontribusi dalam proyek kolaboratif, magang, maupun proyek
                  profesional.
                </p>
              </div>

              {/* Three Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-bold text-white font-['Space_Grotesk']">
                    Kode Efisien
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Fokus pada performa, struktur modular, dan clean code.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-2xl mb-2">🔍</div>
                  <div className="text-sm font-bold text-white font-['Space_Grotesk']">
                    Detail-Oriented
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Ketelitian dalam logika bisnis, validasi API, dan penanganan
                    edge case.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-sm font-bold text-white font-['Space_Grotesk']">
                    Continuous Learner
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Cepat beradaptasi dengan stack baru & teknologi modern.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts Sidebar Card */}
            <div className="lg:col-span-4 space-y-4">
              <div className="glass-card rounded-2xl p-6 border border-white/10">
                <h3 className="text-base font-bold text-white font-['Space_Grotesk'] mb-4 flex items-center gap-2">
                  <span>📌</span>
                  <span>Informasi Singkat</span>
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm font-mono text-slate-300">
                  <li className="flex items-start justify-between border-b border-white/[0.06] pb-2">
                    <span className="text-slate-400">Nama Lengkap</span>
                    <span className="text-white font-semibold text-right">
                      Muhammad Aufal Maromi
                    </span>
                  </li>
                  <li className="flex items-start justify-between border-b border-white/[0.06] pb-2">
                    <span className="text-slate-400">Asal Daerah</span>
                    <span className="text-white font-semibold text-right">
                      Pati, Jawa Tengah
                    </span>
                  </li>
                  <li className="flex items-start justify-between border-b border-white/[0.06] pb-2">
                    <span className="text-slate-400">Domisili Studi</span>
                    <span className="text-white font-semibold text-right">
                      Yogyakarta, DIY
                    </span>
                  </li>
                  <li className="flex items-start justify-between border-b border-white/[0.06] pb-2">
                    <span className="text-slate-400">Program Studi</span>
                    <span className="text-sky-300 font-semibold text-right">
                      S1 Informatika
                    </span>
                  </li>
                  <li className="flex items-start justify-between pb-1">
                    <span className="text-slate-400">Minat Karir</span>
                    <span className="text-emerald-400 font-semibold text-right">
                      Software Engineer / Web Dev
                    </span>
                  </li>
                </ul>
              </div>

              {/* GitHub Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700/80 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center text-xl">
                    🐙
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">
                      GitHub Activity
                    </div>
                    <div className="text-sm font-bold text-white font-['Space_Grotesk']">
                      @aufalmarom863-cloud
                    </div>
                  </div>
                </div>
                <a
                  href="https://github.com/aufalmarom863-cloud"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center py-2 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-mono font-semibold transition-colors no-underline"
                >
                  Kunjungi Profil GitHub ➔
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. KEMAMPUAN TEKNIS (TECHNICAL SKILLS) */}
      {/* ========================================================================= */}
      <section
        id="kemampuan-teknis"
        className="py-20 relative border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400 font-semibold">
              02 // Tech Stack & Proficiency
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-2">
                2. Kemampuan Teknis (Technical Skills)
              </h2>
              <p className="text-slate-400 text-sm font-mono">
                Bahasa pemrograman, kerangka kerja (framework), basis data, dan
                tools pengembangan perangkat lunak.
              </p>
            </div>
          </div>

          {/* Grid of Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="glass-card rounded-3xl p-6 border border-white/10 hover:border-sky-400/30 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-base font-bold text-white font-['Space_Grotesk'] leading-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-300">
                    {cat.badge}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/pill inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 transition-all duration-150"
                    >
                      <span
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                      <span className="text-xs font-mono font-medium text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[9px] font-mono text-slate-500 group-hover/pill:text-sky-300 transition-colors">
                        ({skill.level})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PENDIDIKAN (EDUCATION) */}
      {/* ========================================================================= */}
      <section
        id="pendidikan"
        className="py-20 relative border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400 font-semibold">
              03 // Academic Background
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-8">
            3. Pendidikan (Education)
          </h2>

          <div className="max-w-4xl glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            {/* Accent Border Top */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-500" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
                    Universitas Nahdlatul Ulama Yogyakarta (UNU Yogyakarta)
                  </h3>
                  <p className="text-sm sm:text-base text-sky-300 font-mono mt-0.5">
                    Sarjana Komputer (S.Kom) — Informatika, Fakultas Teknologi
                    Informasi
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-semibold self-start sm:self-auto whitespace-nowrap">
                <span>📅 2022 – Sekarang (Semester 5)</span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                  <span>📚</span>
                  <span>Fokus Studi Inti</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-sky-400">▹</span> Algoritma & Struktur
                    Data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sky-400">▹</span> Rekayasa Perangkat
                    Lunak (Software Engineering)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sky-400">▹</span> Sistem Basis Data
                    (Relational & NoSQL)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sky-400">▹</span> Pemrograman
                    Berorientasi Objek (OOP)
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                  <span>💡</span>
                  <span>Aktivitas & Keterlibatan</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Aktif dalam
                    eksplorasi proyek praktikum perkuliahan
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Pengembangan
                    solusi digital dan aplikasi berbasis web kampus
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> Kolaborasi tim
                    pemecahan masalah logika pemrograman
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PROYEK PILIHAN (FEATURED PROJECTS) */}
      {/* ========================================================================= */}
      <section
        id="proyek-pilihan"
        className="py-20 relative border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400 font-semibold">
              04 // Portfolio Work
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-sky-500/30 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] mb-2">
                4. Proyek Pilihan (Featured Projects)
              </h2>
              <p className="text-slate-400 text-sm font-mono">
                Portofolio implementasi perangkat lunak, web application, dan
                arsitektur backend.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/[0.08] self-start md:self-auto overflow-x-auto">
              {[
                { id: "all", label: "Semua Proyek" },
                { id: "fullstack", label: "Full-Stack" },
                { id: "backend", label: "Backend API" },
                { id: "frontend", label: "Frontend" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveCategory(btn.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                    activeCategory === btn.id
                      ? "bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <div
                key={proj.id}
                className="glass-card rounded-3xl border border-white/10 hover:border-sky-400/40 transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1 shadow-lg"
              >
                {/* Visual Card Header */}
                <div className="p-6 pb-4 bg-gradient-to-b from-white/[0.04] to-transparent border-b border-white/[0.06] relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 font-bold">
                      {proj.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      Proyek 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] leading-snug group-hover:text-sky-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-300/90 mt-1">
                    {proj.type}
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  {/* Bullet points description */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-sky-400 text-xs mt-1 flex-shrink-0">
                          ▹
                        </span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                      Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.stack.map((st) => (
                        <span
                          key={st}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-200"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links / Action Button */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold no-underline group/link"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      <span>Lihat Source di GitHub</span>
                      <span className="transition-transform group-hover/link:translate-x-1">
                        ➔
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DEVELOPER FOOTER & CONTACT CALLOUT */}
      {/* ========================================================================= */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Space_Grotesk'] mb-3">
              Tertarik Berkolaborasi atau Merekrut?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
              Saya selalu terbuka untuk mendiskusikan peluang proyek perangkat
              lunak, posisi magang (*internship*), maupun kontribusi dalam tim
              teknologi Anda.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:aufalmarom863@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-['Space_Grotesk'] font-bold text-sm shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all no-underline"
              >
                <span>✉️</span>
                <span>aufalmarom863@gmail.com</span>
              </a>

              <a
                href="https://github.com/aufalmarom863-cloud"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-['Space_Grotesk'] font-bold text-sm border border-slate-600 transition-all no-underline"
              >
                <span>🐙</span>
                <span>GitHub @aufalmarom863-cloud</span>
              </a>

              <button
                onClick={onSwitchToDriver}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-['Space_Grotesk'] font-bold text-sm border border-amber-400/30 transition-all"
              >
                <span>🚗</span>
                <span>Lihat Portofolio Driver ➔</span>
              </button>
            </div>
          </div>

          <div className="mt-12 text-center text-xs font-mono text-slate-500">
            © 2026 Muhammad Aufal Maromi · Mahasiswa Informatika UNU Yogyakarta
            · Software Developer
          </div>
        </div>
      </section>
    </div>
  )
}
