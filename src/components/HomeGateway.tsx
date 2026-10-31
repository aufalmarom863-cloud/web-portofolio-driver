import aufalProfileImg from "../assets/aufal-profile.jpg"

interface HomeGatewayProps {
  onSelectDeveloper: () => void
  onSelectDriver: () => void
}

export default function HomeGateway({
  onSelectDeveloper,
  onSelectDriver,
}: HomeGatewayProps) {
  return (
    <div className="min-h-screen text-slate-100 bg-[#050510] flex flex-col justify-between relative overflow-hidden font-['Inter',sans-serif]">
      {/* Ambient Lighting Background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true"
      />

      {/* Main Centered Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-28 text-center max-w-5xl mx-auto w-full">
        {/* Photo Container */}
        <div className="relative mb-8 group">
          {/* Animated Glow Halo */}
          <div
            className="absolute -inset-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(56, 189, 248, 0.6), rgba(99, 102, 241, 0.5), rgba(245, 158, 11, 0.5))",
            }}
          />

          {/* Portrait Photo */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-blue-500 to-amber-400 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
              <img
                src={aufalProfileImg}
                alt="Muhammad Aufal Maromi"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Verified / Status Badge */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/90 border border-white/15 backdrop-blur-md text-[10px] sm:text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active & Ready</span>
          </div>
        </div>

        {/* Primary Headline as Requested */}
        <div className="mb-10 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] leading-tight mb-4">
            Selamat Datang di Portofolio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-amber-400">
              Muhammad Aufal Maromi
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-mono max-w-xl mx-auto">
            Silakan pilih portofolio yang ingin Anda lihat di bawah ini:
          </p>
        </div>

        {/* Dual Navigation Choice Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          {/* Card 1: Portofolio Developer */}
          <button
            onClick={onSelectDeveloper}
            className="group relative p-7 rounded-3xl bg-slate-900/70 hover:bg-slate-900/95 border border-sky-400/20 hover:border-sky-400/60 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 text-left flex flex-col justify-between overflow-hidden"
          >
            {/* Corner Glow Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(56,189,248,0.2)] group-hover:scale-110 transition-transform">
                  💻
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 font-bold">
                  Tech & Web
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-sky-300 transition-colors">
                Portofolio Developer
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                Mahasiswa Informatika UNU Yogyakarta. Eksplorasi kemampuan
                teknis (Full-Stack, Backend REST API, Database) & Proyek
                Pilihan.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono font-semibold text-sky-400 group-hover:text-sky-300">
              <span>Buka Portofolio Developer</span>
              <span className="text-base transition-transform group-hover:translate-x-1">
                ➔
              </span>
            </div>
          </button>

          {/* Card 2: Portofolio Driver */}
          <button
            onClick={onSelectDriver}
            className="group relative p-7 rounded-3xl bg-slate-900/70 hover:bg-slate-900/95 border border-amber-400/20 hover:border-amber-400/60 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-1.5 text-left flex flex-col justify-between overflow-hidden"
          >
            {/* Corner Glow Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform">
                  🚗
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 font-bold">
                  Executive Driver
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-2 group-hover:text-amber-300 transition-colors">
                Portofolio Driver
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                Pengalaman 6 Tahun & Zero Accident. Layanan supir pribadi, City
                Tour Jogja (All Include), armada mobil, & travel antar kota.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono font-semibold text-amber-400 group-hover:text-amber-300">
              <span>Buka Portofolio Driver</span>
              <span className="text-base transition-transform group-hover:translate-x-1">
                ➔
              </span>
            </div>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 border-t border-white/[0.06] text-center text-xs font-mono text-slate-500">
        © 2026 Muhammad Aufal Maromi · Portofolio Developer & Driver Profesional
      </footer>
    </div>
  )
}
