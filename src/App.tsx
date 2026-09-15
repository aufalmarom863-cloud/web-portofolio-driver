import { useState } from "react";

const NAV_LINKS = [
  { label: "Profil", href: "#profil" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Kontak", href: "#kontak" },
];

const SKILLS = [
  {
    group: "Kendaraan Penumpang",
    items: ["Sedan", "SUV", "MPV"],
    icon: "🚗",
  },
  {
    group: "Kendaraan Niaga & Logistik",
    items: ["Pick-up", "Grand Max", "Blind Van"],
    icon: "🚚",
  },
  {
    group: "Transmisi",
    items: ["Matik (Automatic)", "Manual"],
    icon: "⚙️",
  },
  {
    group: "Navigasi & Rute",
    items: ["Google Maps", "Waze", "Rute Alternatif"],
    icon: "🗺️",
  },
  {
    group: "Operasional",
    items: ["Perawatan Rutin Kendaraan", "Bongkar Muat Aman", "Dokumen Surat Jalan"],
    icon: "📋",
  },
  {
    group: "SIM & Lisensi",
    items: ["SIM A Aktif", "6 Tahun Pengalaman", "Zero Accident"],
    icon: "🪪",
  },
];

const STATS = [
  { value: "6", unit: "Tahun", label: "Pengalaman Kerja" },
  { value: "0", unit: "Kecelakaan", label: "Rekam Jejak Bersih" },
  { value: "20%", unit: "Lebih Cepat", label: "Efisiensi Rute" },
  { value: "100%", unit: "On-Time", label: "Ketepatan Jadwal" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<"pribadi" | "logistik">("pribadi");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0c", fontFamily: "'Work Sans', sans-serif" }}>
      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(10,10,12,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1c1c24",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 700,
              fontSize: 18,
              color: "#e8e8ec",
              letterSpacing: "0.02em",
            }}
          >
            M. Aufal<span style={{ color: "#e8a020" }}>.</span>
          </span>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 32 }} className="hidden-mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "#8a8fa0",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#e8a020")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8a8fa0")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#kontak"
            style={{
              background: "#e8a020",
              color: "#0a0a0c",
              padding: "8px 20px",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#f0b030")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#e8a020")}
          >
            Hubungi Saya
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="profil"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 64,
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581010105267-67447703cfe9?w=1600&h=900&fit=crop&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.22)",
          }}
          aria-hidden
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, #0a0a0c 45%, rgba(10,10,12,0.6) 70%, transparent 100%)",
          }}
          aria-hidden
        />
        {/* Amber vertical line accent */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 4,
            background: "linear-gradient(to bottom, transparent, #e8a020 30%, #e8a020 70%, transparent)",
          }}
          aria-hidden
        />

        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 48,
          }}
        >
          <div style={{ maxWidth: 720 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(232,160,32,0.12)",
                border: "1px solid rgba(232,160,32,0.3)",
                borderRadius: 2,
                padding: "6px 14px",
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#e8a020",
                  boxShadow: "0 0 8px #e8a020",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#e8a020",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                SIM A · Zero Accident · 6 Tahun Pengalaman
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 800,
                fontSize: "clamp(42px, 7vw, 84px)",
                lineHeight: 1.05,
                color: "#e8e8ec",
                margin: "0 0 8px",
                letterSpacing: "-0.01em",
              }}
            >
              Muhammad
              <br />
              <span style={{ color: "#e8a020" }}>Aufal</span>
              <br />
              Maromi
            </h1>

            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: "#8a8fa0",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "16px 0 32px",
              }}
            >
              Driver Profesional — Supir Pribadi & Logistik
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "#b0b4c0",
                maxWidth: 580,
                margin: "0 0 40px",
              }}
            >
              Driver Profesional dengan 6 tahun pengalaman kerja beralih peran antara supir pribadi
              eksekutif dan pengemudi logistik menggunakan SIM A. Memiliki rekam jejak{" "}
              <strong style={{ color: "#e8a020" }}>Zero Accident</strong>, mahir mengendarai berbagai
              tipe mobil matik maupun manual, serta memiliki pemahaman rute jalan yang sangat efisien
              untuk memastikan kenyamanan penumpang dan ketepatan waktu pengiriman barang.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="#pengalaman"
                style={{
                  background: "#e8a020",
                  color: "#0a0a0c",
                  padding: "14px 32px",
                  borderRadius: 4,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#f0b030")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#e8a020")}
              >
                Lihat Pengalaman
              </a>
              <a
                href="#kontak"
                style={{
                  background: "transparent",
                  color: "#e8e8ec",
                  padding: "14px 32px",
                  borderRadius: 4,
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  border: "1px solid #242430",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#e8a020";
                  (e.target as HTMLElement).style.color = "#e8a020";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#242430";
                  (e.target as HTMLElement).style.color = "#e8e8ec";
                }}
              >
                Kontak Saya
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 1,
              background: "#242430",
              border: "1px solid #242430",
              borderRadius: 6,
              overflow: "hidden",
              maxWidth: 720,
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#111114",
                  padding: "24px 20px",
                  textAlign: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#16161a")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#111114")
                }
              >
                <div
                  style={{
                    fontFamily: "'Roboto Slab', serif",
                    fontWeight: 800,
                    fontSize: 32,
                    color: "#e8a020",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#e8a020",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    margin: "4px 0 6px",
                  }}
                >
                  {s.unit}
                </div>
                <div style={{ fontSize: 12, color: "#8a8fa0" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="pengalaman"
        style={{
          padding: "100px 24px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: 56 }}>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: "#e8a020",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            — Pengalaman Kerja
          </p>
          <h2
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#e8e8ec",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Dua Peran,
            <br />
            <span style={{ color: "#8a8fa0" }}>Satu Komitmen</span>
          </h2>
        </div>

        {/* Tab switcher */}
        <div
          style={{
            display: "inline-flex",
            background: "#111114",
            border: "1px solid #242430",
            borderRadius: 6,
            padding: 4,
            marginBottom: 40,
            gap: 4,
          }}
        >
          {(["pribadi", "logistik"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "10px 24px",
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                fontFamily: "'Work Sans', sans-serif",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "all 0.2s",
                background: activeTab === tab ? "#e8a020" : "transparent",
                color: activeTab === tab ? "#0a0a0c" : "#8a8fa0",
              }}
            >
              {tab === "pribadi" ? "Supir Pribadi" : "Supir Logistik"}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
          className="exp-grid"
        >
          {activeTab === "pribadi" ? (
            <>
              <ExperienceCard
                number="01"
                title="Smooth Driving"
                desc="Mengemudikan berbagai jenis mobil penumpang (MPV, SUV, Sedan) baik transmisi manual maupun otomatis secara halus demi kenyamanan maksimal pengguna."
              />
              <ExperienceCard
                number="02"
                title="Perawatan Kendaraan"
                desc="Bertanggung jawab penuh atas kebersihan eksterior-interior serta melakukan pengecekan rutin mesin kendaraan (oli, aki, tekanan ban) untuk mencegah risiko mogok."
              />
              <ExperienceCard
                number="03"
                title="Profesionalisme & Etika"
                desc="Menerapkan etika berkomunikasi yang sopan, menjaga kerahasiaan penumpang, dan selalu hadir 100% tepat waktu sesuai jadwal harian pengguna."
              />
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(232,160,32,0.08) 0%, rgba(232,160,32,0.02) 100%)",
                  border: "1px dashed rgba(232,160,32,0.25)",
                  borderRadius: 6,
                  padding: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 12,
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: 32 }}>🚘</span>
                <p style={{ color: "#8a8fa0", fontSize: 14, margin: 0 }}>
                  Sedan · SUV · MPV
                  <br />
                  Manual & Matik
                </p>
              </div>
            </>
          ) : (
            <>
              <ExperienceCard
                number="01"
                title="Distribusi Logistik"
                desc="Mengoperasikan armada angkutan barang berbasis SIM A (Pick-up, Grand Max, Blind Van) untuk mendistribusikan muatan logistik ke puluhan titik tujuan setiap harinya."
              />
              <ExperienceCard
                number="02"
                title="Optimasi Rute"
                desc="Mengoptimalkan rute perjalanan harian menggunakan aplikasi navigasi digital guna memangkas waktu tempuh pengiriman hingga 20% sekaligus menghemat konsumsi bahan bakar."
              />
              <ExperienceCard
                number="03"
                title="Bongkar Muat & Dokumen"
                desc="Memastikan proses bongkar muat (loading/unloading) barang dilakukan secara aman, serta bertanggung jawab atas ketepatan dokumen surat jalan."
              />
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(232,160,32,0.08) 0%, rgba(232,160,32,0.02) 100%)",
                  border: "1px dashed rgba(232,160,32,0.25)",
                  borderRadius: 6,
                  padding: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 12,
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: 32 }}>🚚</span>
                <p style={{ color: "#8a8fa0", fontSize: 14, margin: 0 }}>
                  Pick-up · Grand Max · Blind Van
                  <br />
                  Logistik Ringan
                </p>
              </div>
            </>
          )}
        </div>

        {/* Road image strip */}
        <div
          style={{
            marginTop: 64,
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
            height: 280,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1610809589386-9ea41901eb54?w=1200&h=400&fit=crop&auto=format"
            alt="Pengemudi profesional di jalan"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.5) saturate(0.7)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, #0a0a0c 0%, transparent 40%, #0a0a0c 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <p
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 700,
                fontSize: "clamp(20px, 3vw, 36px)",
                color: "#e8e8ec",
                margin: 0,
                textAlign: "center",
              }}
            >
              Setiap Perjalanan, Setiap Pengiriman —
            </p>
            <p
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 300,
                fontSize: "clamp(18px, 2.5vw, 30px)",
                color: "#e8a020",
                margin: 0,
                textAlign: "center",
              }}
            >
              Selalu Aman, Selalu Tepat Waktu.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="keahlian"
        style={{
          background: "#0d0d10",
          padding: "100px 24px",
          borderTop: "1px solid #1c1c24",
          borderBottom: "1px solid #1c1c24",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#e8a020",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              — Keahlian
            </p>
            <h2
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#e8e8ec",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Keahlian &<br />
              <span style={{ color: "#8a8fa0" }}>Kompetensi</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {SKILLS.map((skill) => (
              <div
                key={skill.group}
                style={{
                  background: "#111114",
                  border: "1px solid #1c1c24",
                  borderRadius: 6,
                  padding: 28,
                  transition: "border-color 0.2s, transform 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,32,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1c1c24";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 12 }}>{skill.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Roboto Slab', serif",
                    fontWeight: 600,
                    fontSize: 15,
                    color: "#e8e8ec",
                    margin: "0 0 14px",
                  }}
                >
                  {skill.group}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: "#e8a020",
                        background: "rgba(232,160,32,0.1)",
                        border: "1px solid rgba(232,160,32,0.2)",
                        borderRadius: 2,
                        padding: "4px 10px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="kontak"
        style={{
          padding: "100px 24px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="contact-grid"
        >
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#e8a020",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              — Kontak
            </p>
            <h2
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#e8e8ec",
                margin: "0 0 20px",
                lineHeight: 1.1,
              }}
            >
              Siap Melayani
              <br />
              <span style={{ color: "#e8a020" }}>Perjalanan Anda</span>
            </h2>
            <p style={{ color: "#8a8fa0", fontSize: 15, lineHeight: 1.75, margin: "0 0 36px" }}>
              Tersedia untuk posisi driver pribadi eksekutif maupun pengemudi logistik. Hubungi saya
              untuk diskusi lebih lanjut mengenai ketersediaan dan detail pekerjaan.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <ContactRow icon="📱" label="WhatsApp / Telepon" value="0821-1330-1282" />
              <ContactRow icon="✉️" label="Email" value="aufalmarom863@gmail.com" />
              <ContactRow icon="📍" label="Lokasi" value="Yogyakarta, Indonesia" />
            </div>
          </div>

          {/* CTA card */}
          <div
            style={{
              background: "#111114",
              border: "1px solid #242430",
              borderRadius: 8,
              padding: 40,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(to right, #e8a020, #a0700f)",
              }}
            />
            <h3
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 700,
                fontSize: 22,
                color: "#e8e8ec",
                margin: "0 0 8px",
              }}
            >
              Muhammad Aufal Maromi
            </h3>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#e8a020",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "0 0 28px",
              }}
            >
              Driver Profesional · SIM A
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 32,
              }}
            >
              {[
                "6 Tahun Pengalaman",
                "Zero Accident Record",
                "Supir Pribadi & Logistik",
                "Matik & Manual",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#e8a020",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 14, color: "#b0b4c0" }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/6282113301282"
              style={{
                display: "block",
                textAlign: "center",
                background: "#e8a020",
                color: "#0a0a0c",
                padding: "14px 24px",
                borderRadius: 4,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#f0b030")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#e8a020")}
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #1c1c24",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#4a4a5a",
            margin: 0,
          }}
        >
          © 2026 Muhammad Aufal Maromi — Driver Profesional
        </p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function ExperienceCard({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        background: "#111114",
        border: "1px solid #1c1c24",
        borderRadius: 6,
        padding: 32,
        position: "relative",
        transition: "border-color 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,32,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1c1c24";
      }}
    >
      <div
        style={{
          fontFamily: "'Roboto Slab', serif",
          fontWeight: 800,
          fontSize: 48,
          color: "rgba(232,160,32,0.12)",
          lineHeight: 1,
          position: "absolute",
          top: 20,
          right: 24,
          userSelect: "none",
        }}
      >
        {number}
      </div>
      <div
        style={{
          width: 32,
          height: 2,
          background: "#e8a020",
          marginBottom: 16,
        }}
      />
      <h3
        style={{
          fontFamily: "'Roboto Slab', serif",
          fontWeight: 700,
          fontSize: 18,
          color: "#e8e8ec",
          margin: "0 0 12px",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: "#8a8fa0", lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "16px 20px",
        background: "#111114",
        border: "1px solid #1c1c24",
        borderRadius: 6,
      }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            color: "#8a8fa0",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 14, color: "#e8e8ec", fontWeight: 500 }}>{value}</div>
      </div>
    </div>
  );
}
