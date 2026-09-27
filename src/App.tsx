import { useState } from "react";
import hiacePremioImg from "./assets/cars/hiace-premio.jpg";
import hiaceCommuterImg from "./assets/cars/hiace-commuter.jpg";
import elfLongImg from "./assets/cars/elf-long.jpg";
import innovaImg from "./assets/cars/innova.jpg";
import allNewAvanzaImg from "./assets/cars/all-new-avanza.jpg";
import xpanderImg from "./assets/cars/xpander.jpg";
import velozImg from "./assets/cars/veloz.jpg";
import avanzaXeniaImg from "./assets/cars/avanza-xenia.jpg";
import ertigaImg from "./assets/cars/ertiga.jpg";
import travelJogjaImg from "./assets/travel/travel-jogja.jpg";

const NAV_LINKS = [
  { label: "Profil", href: "#profil" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "City Tour", href: "#city-tour" },
  { label: "Travel", href: "#travel" },
  { label: "Kontak", href: "#kontak" },
];

const STATS = [
  { value: "6", unit: "Tahun", label: "Pengalaman Kerja" },
  { value: "0", unit: "Kecelakaan", label: "Rekam Jejak Bersih" },
  { value: "20%", unit: "Lebih Cepat", label: "Efisiensi Rute" },
  { value: "100%", unit: "On-Time", label: "Ketepatan Jadwal" },
];

// LIST KENDARAAN CITY TOUR JOGJA
export interface CityTourCar {
  id: string;
  name: string;
  price: string;
  capacity: string;
  category: "minibus" | "mpv";
  badge: string;
  image: string;
  features: string[];
}

const CITY_TOUR_CARS: CityTourCar[] = [
  {
    id: "hiace-premio",
    name: "Hiace Premio",
    price: "Rp 1.400.000",
    capacity: "11 - 14 Kursi",
    category: "minibus",
    badge: "VIP Executive",
    image: hiacePremioImg,
    features: ["Kabin Super Mewah & Luas", "AC Ducting Tiap Baris", "Reclining Comfort Seats", "Suspensi Paling Lembut"],
  },
  {
    id: "hiace-commuter",
    name: "Hiace Commuter",
    price: "Rp 1.200.000",
    capacity: "15 Kursi",
    category: "minibus",
    badge: "Paling Populer",
    image: hiaceCommuterImg,
    features: ["Kapasitas 15 Penumpang", "AC Dingin Merata", "Bagasi Luas", "Favorit Wisata Rombongan"],
  },
  {
    id: "elf-long",
    name: "Elf Long",
    price: "Rp 1.550.000",
    capacity: "17 - 19 Kursi",
    category: "minibus",
    badge: "Kapasitas Ekstra",
    image: elfLongImg,
    features: ["Muat hingga 19 Penumpang", "Tangguh Rute Pantai & Gunung", "Audio & Karaoke Ready", "Hemat Biaya Rombongan"],
  },
  {
    id: "innova",
    name: "Innova",
    price: "Rp 850.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Kenyamanan Terbaik",
    image: innovaImg,
    features: ["Kenyamanan Kelas Premium", "Kabin Kedap & Senyap", "Kursi Empuk Ergonomis", "Pilihan Eksekutif & Keluarga"],
  },
  {
    id: "all-new-avanza",
    name: "All New Avanza/Xenia",
    price: "Rp 700.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Generasi Baru",
    image: allNewAvanzaImg,
    features: ["Desain Modern & Luas", "AC Double Blower Digital", "Platform FWD Halus", "Sangat Nyaman untuk Kota"],
  },
  {
    id: "xpander",
    name: "Xpander",
    price: "Rp 700.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Suspensi Lembut",
    image: xpanderImg,
    features: ["Bantingan Suspensi Terlembut", "Ground Clearance Tinggi", "Desain Gagah & Stylish", "Kabin Fleksibel"],
  },
  {
    id: "veloz",
    name: "Veloz",
    price: "Rp 750.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Sporty Luxury",
    image: velozImg,
    features: ["Tampilan Mewah & Modern", "Fitur Premium & Ambient Light", "Sofa Mode Fleksibel", "Perjalanan Nyaman"],
  },
  {
    id: "avanza-xenia",
    name: "Avanza/Xenia",
    price: "Rp 650.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Paling Hemat",
    image: avanzaXeniaImg,
    features: ["Harga Paling Terjangkau", "Tangguh Segala Medan Jogja", "AC Dingin Terawat", "Efisien & Andal"],
  },
  {
    id: "ertiga",
    name: "Ertiga",
    price: "Rp 650.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Kabin Lega",
    image: ertigaImg,
    features: ["Interior Wood Panel Elegan", "Bantingan Nyaman & Halus", "Kursi Lapang", "Hemat & Nyaman"],
  },
];

const CITY_TOUR_NOTES = [
  { icon: "⏱️", title: "Sistem Sewa 12 Jam", desc: "Harga sewa tertera berlaku dengan sistem per 12 jam pemakaian." },
  { icon: "📍", title: "Area D.I. Yogyakarta", desc: "Melayani rute destinasi wisata seluruh Daerah Istimewa Yogyakarta." },
  { icon: "⛽", title: "All Include Lengkap", desc: "Paket sudah include Unit Mobil, Bahan Bakar (BBM), dan Driver Profesional." },
  { icon: "💳", title: "DP Minimal 50%", desc: "Uang muka (DP) minimal 50% untuk mengamankan dan mengunci jadwal sewa unit." },
  { icon: "ℹ️", title: "Ketentuan Tambahan", desc: "Biaya belum termasuk tarif parkir wisata/tempat singgah dan uang makan driver." },
];

// RUTE TRAVEL & PENGIRIMAN PAKET
const TRAVEL_ROUTES = [
  {
    id: "jogja-pati",
    name: "Jogja — Pati (PP)",
    via: "Klaten, Purwodadi",
    schedules: ["Pagi 07.00 WIB", "Sore 15.00 WIB"],
    departure: "Setiap Hari (Ready Tiap Hari)",
    badge: "Rute Favorit",
    description: "Layanan travel cepat dan pengiriman paket kilat rute Jogja menuju Klaten, Purwodadi, Grobogan, hingga Pati dengan antar jemput langsung di tempat.",
  },
  {
    id: "jogja-jepara",
    name: "Jogja — Jepara (PP)",
    via: "Semarang",
    schedules: ["Pagi 07.00 WIB", "Sore 15.00 WIB"],
    departure: "Setiap Hari (Ready Tiap Hari)",
    badge: "Jalur Utama",
    description: "Perjalanan aman dan nyaman via jalur tol/arteri Semarang menuju Demak, Kudus, hingga kota ukir Jepara. Siap melayani penumpang dan titipan paket kilat.",
  },
];

const TRAVEL_STANDARDS = [
  {
    icon: "📅",
    title: "Keberangkatan Ready Setiap Hari",
    desc: "Jadwal reguler setiap hari berangkat 2 kali (Pagi 07.00 WIB & Sore 15.00 WIB), pasti jalan tanpa khawatir tertunda.",
  },
  {
    icon: "🚪",
    title: "Door to Door Antar Jemput",
    desc: "Layanan antar jemput langsung dari depan pintu rumah / hotel Anda sampai ke alamat tujuan dengan aman dan nyaman.",
  },
  {
    icon: "⚡",
    title: "Paket Kilat Satu Hari Sampai",
    desc: "Menerima jasa pengiriman segala jenis paket (dokumen rahasia, barang dagangan, makanan/oleh-oleh) dengan jaminan 1 hari tiba.",
  },
];

const SKILLS = [
  {
    group: "Kendaraan Penumpang",
    items: ["Sedan", "SUV", "MPV", "Hiace Premio", "Elf Long"],
    icon: "🚗",
  },
  {
    group: "Kendaraan Niaga & Logistik",
    items: ["Pick-up", "Grand Max", "Blind Van", "Box"],
    icon: "🚚",
  },
  {
    group: "Transmisi",
    items: ["Matik (Automatic)", "Manual"],
    icon: "⚙️",
  },
  {
    group: "Navigasi & Rute",
    items: ["Google Maps", "Waze", "Rute Alternatif Jogja-Jateng"],
    icon: "🗺️",
  },
  {
    group: "Operasional & Wisata",
    items: ["Guide Rute Wisata", "Perawatan Mobil Rutin", "Bongkar Muat Aman", "Surat Jalan"],
    icon: "📋",
  },
  {
    group: "SIM & Lisensi",
    items: ["SIM A Aktif", "6 Tahun Pengalaman", "Zero Accident"],
    icon: "🪪",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<"pribadi" | "logistik">("pribadi");
  const [menuOpen, setMenuOpen] = useState(false);
  const [carFilter, setCarFilter] = useState<"all" | "minibus" | "mpv">("all");

  // State untuk form interaktif Travel
  const [travelType, setTravelType] = useState<"penumpang" | "paket">("penumpang");
  const [travelRoute, setTravelRoute] = useState("Jogja - Pati via Klaten, Purwodadi");
  const [travelTime, setTravelTime] = useState("Pagi (07.00 WIB)");
  const [travelName, setTravelName] = useState("");
  const [travelAddress, setTravelAddress] = useState("");

  const filteredCars = CITY_TOUR_CARS.filter((c) => {
    if (carFilter === "all") return true;
    return c.category === carFilter;
  });

  const generateTravelWALink = () => {
    const text = `Halo Mas Aufal, saya ingin memesan layanan Travel/Paket:
- Jenis: ${travelType === "penumpang" ? "Tiket Penumpang Travel" : "Jasa Pengiriman Paket Kilat"}
- Rute: ${travelRoute}
- Jam Keberangkatan: ${travelTime}
- Nama: ${travelName || "(Belum diisi)"}
- Alamat Jemput / Tujuan: ${travelAddress || "(Belum diisi)"}

Mohon konfirmasi ketersediaan dan total biayanya. Terima kasih!`;
    return `https://wa.me/6282113301282?text=${encodeURIComponent(text)}`;
  };

  const getCarWALink = (car: CityTourCar) => {
    const text = `Halo Mas Aufal, saya ingin reservasi City Tour Jogja:
- Unit: ${car.name} (${car.capacity})
- Harga: ${car.price} / 12 Jam (All Include: Mobil + BBM + Driver)
- Area: Daerah Istimewa Yogyakarta

Mohon info ketersediaan jadwal pada tanggal yang saya rencanakan. Terima kasih!`;
    return `https://wa.me/6282113301282?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen text-slate-100" style={{ background: "#0a0a0c", fontFamily: "'Work Sans', sans-serif" }}>
      {/* NAVBAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          background: "rgba(10,10,12,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid #1c1c24",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "0 24px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a
            href="#profil"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 800,
                fontSize: 20,
                color: "#e8e8ec",
                letterSpacing: "0.02em",
              }}
            >
              M. Aufal<span style={{ color: "#e8a020" }}>.</span>
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: "#e8a020",
                background: "rgba(232,160,32,0.12)",
                border: "1px solid rgba(232,160,32,0.3)",
                borderRadius: 3,
                padding: "2px 6px",
                textTransform: "uppercase",
              }}
            >
              Driver & Travel
            </span>
          </a>

          {/* Desktop links - Sesuai Urutan Baru */}
          <div style={{ display: "flex", gap: 26 }} className="hidden-mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "#9aa0b0",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#e8a020")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#9aa0b0")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="https://wa.me/6282113301282?text=Halo%20Mas%20Aufal,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20driver%20/%20city%20tour%20/%20travel."
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#e8a020",
                color: "#0a0a0c",
                padding: "9px 18px",
                borderRadius: 4,
                fontSize: 12,
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#f0b030")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#e8a020")}
            >
              <span>💬</span> WhatsApp
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile-btn"
              style={{
                background: "#16161a",
                border: "1px solid #242430",
                color: "#e8e8ec",
                width: 40,
                height: 40,
                borderRadius: 4,
                cursor: "pointer",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div
            style={{
              background: "#0d0d10",
              borderTop: "1px solid #1c1c24",
              borderBottom: "1px solid #1c1c24",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#d0d4e0",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "8px 0",
                  borderBottom: "1px solid #16161c",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ========================================================================= */}
      {/* 1. HERO / PROFIL */}
      {/* ========================================================================= */}
      <section
        id="profil"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 80,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581010105267-67447703cfe9?w=1600&h=900&fit=crop&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.2)",
          }}
          aria-hidden
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, #0a0a0c 45%, rgba(10,10,12,0.65) 75%, transparent 100%)",
          }}
          aria-hidden
        />
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
            maxWidth: 1240,
            margin: "0 auto",
            padding: "70px 24px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 48,
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(232,160,32,0.12)",
                border: "1px solid rgba(232,160,32,0.3)",
                borderRadius: 3,
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
                fontSize: "clamp(40px, 6.5vw, 80px)",
                lineHeight: 1.05,
                color: "#e8e8ec",
                margin: "0 0 12px",
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
                color: "#9aa0b0",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                margin: "12px 0 28px",
              }}
            >
              Driver Profesional — Supir Pribadi · City Tour Jogja · Travel Antar Kota & Logistik
            </p>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "#b4b8c8",
                maxWidth: 620,
                margin: "0 0 36px",
              }}
            >
              Pengemudi profesional berpengalaman 6 tahun dengan rekam jejak{" "}
              <strong style={{ color: "#e8a020" }}>Zero Accident</strong>. Menguasai mobil matik & manual, siap melayani posisi supir pribadi, paket wisata{" "}
              <strong>City Tour Yogyakarta (All Include)</strong>, serta rute reguler{" "}
              <strong>Travel Jogja - Pati & Jogja - Jepara (Door to Door)</strong> dengan pengiriman paket kilat 1 hari sampai.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#pengalaman"
                style={{
                  background: "#e8a020",
                  color: "#0a0a0c",
                  padding: "14px 28px",
                  borderRadius: 4,
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#f0b030")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#e8a020")}
              >
                Lihat Pengalaman & Keahlian
              </a>
              <a
                href="#city-tour"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "#e8e8ec",
                  padding: "14px 28px",
                  borderRadius: 4,
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  border: "1px solid #282834",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#e8a020";
                  (e.target as HTMLElement).style.color = "#e8a020";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = "#282834";
                  (e.target as HTMLElement).style.color = "#e8e8ec";
                }}
              >
                Layanan City Tour & Travel
              </a>
            </div>
          </div>

          {/* Stats Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 1,
              background: "#242430",
              border: "1px solid #242430",
              borderRadius: 6,
              overflow: "hidden",
              maxWidth: 760,
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "#111114",
                  padding: "22px 18px",
                  textAlign: "center",
                  transition: "background 0.2s",
                }}
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

      {/* ========================================================================= */}
      {/* 2. PENGALAMAN KERJA */}
      {/* ========================================================================= */}
      <section
        id="pengalaman"
        style={{
          padding: "100px 24px",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: 48 }}>
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
            — Pengalaman & Rekam Jejak
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
            Dua Peran Utama,
            <br />
            <span style={{ color: "#8a8fa0" }}>Satu Dedikasi Keselamatan</span>
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
              {tab === "pribadi" ? "Supir Pribadi & Pariwisata" : "Supir Logistik & Antar Kota"}
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
                title="Smooth Driving & City Tour"
                desc="Mengemudikan berbagai tipe armada penumpang (Hiace, Elf, MPV, SUV, Sedan) manual maupun matik secara halus demi kenyamanan maksimal wisatawan & eksekutif."
              />
              <ExperienceCard
                number="02"
                title="Perawatan & Kebersihan Unit"
                desc="Bertanggung jawab penuh atas kebersihan armada dan inspeksi kelayakan harian (rem, oli, radiator, tekanan ban) agar perjalanan selalu aman tanpa kendala."
              />
              <ExperienceCard
                number="03"
                title="Etika & Profesionalisme"
                desc="Mengutamakan hospitality ramah, menjaga privasi penumpang, dan disiplin hadir 100% tepat waktu sesuai jadwal yang direncanakan."
              />
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(232,160,32,0.08) 0%, rgba(232,160,32,0.02) 100%)",
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
                <span style={{ fontSize: 36 }}>🚘</span>
                <p style={{ color: "#8a8fa0", fontSize: 14, margin: 0 }}>
                  Hiace · Elf · Innova · Avanza · Xpander
                  <br />
                  <strong style={{ color: "#e8a020" }}>Manual & Matik</strong>
                </p>
              </div>
            </>
          ) : (
            <>
              <ExperienceCard
                number="01"
                title="Distribusi Logistik Cepat"
                desc="Mengoperasikan armada angkutan barang (Pick-up, Grand Max, Blind Van) untuk mengantarkan puluhan pengiriman paket harian tepat waktu sampai tujuan."
              />
              <ExperienceCard
                number="02"
                title="Optimasi Rute Cepat"
                desc="Menganalisis kondisi lalu lintas secara real-time via aplikasi navigasi digital untuk memangkas waktu tempuh rute antar kota hingga 20% lebih efisien."
              />
              <ExperienceCard
                number="03"
                title="Bongkar Muat & Dokumen Aman"
                desc="Melakukan penataan barang secara teliti agar paket tidak rusak di jalan serta memastikan validitas surat jalan dan bukti tanda terima pengiriman."
              />
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(232,160,32,0.08) 0%, rgba(232,160,32,0.02) 100%)",
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
                <span style={{ fontSize: 36 }}>🚚</span>
                <p style={{ color: "#8a8fa0", fontSize: 14, margin: 0 }}>
                  Jogja ⇄ Pati · Jogja ⇄ Jepara
                  <br />
                  <strong style={{ color: "#e8a020" }}>Door to Door & Paket Kilat</strong>
                </p>
              </div>
            </>
          )}
        </div>

        {/* Road strip banner */}
        <div
          style={{
            marginTop: 64,
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
            height: 260,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1610809589386-9ea41901eb54?w=1200&h=400&fit=crop&auto=format"
            alt="Pengemudi profesional di jalan raya"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.45) saturate(0.8)",
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
              padding: "0 20px",
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
              Setiap Perjalanan Wisata & Setiap Pengiriman —
            </p>
            <p
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 300,
                fontSize: "clamp(18px, 2.5vw, 28px)",
                color: "#e8a020",
                margin: 0,
                textAlign: "center",
              }}
            >
              Selalu Nyaman, Selalu Aman, Selalu Tepat Waktu.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. KEAHLIAN & KOMPETENSI */}
      {/* ========================================================================= */}
      <section
        id="keahlian"
        style={{
          background: "#0d0d10",
          padding: "100px 24px",
          borderTop: "1px solid #1c1c24",
          borderBottom: "1px solid #1c1c24",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
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
              — Kompetensi
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
              Keahlian & Penguasaan Armada
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
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
                <div style={{ fontSize: 26, marginBottom: 14 }}>{skill.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Roboto Slab', serif",
                    fontWeight: 600,
                    fontSize: 16,
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
                        background: "rgba(232,160,32,0.08)",
                        border: "1px solid rgba(232,160,32,0.2)",
                        borderRadius: 3,
                        padding: "4px 10px",
                        letterSpacing: "0.03em",
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

      {/* ========================================================================= */}
      {/* 4. FITUR CITY TOUR YOGYAKARTA */}
      {/* ========================================================================= */}
      <section
        id="city-tour"
        style={{
          padding: "100px 24px",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: 44 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 18 }}>🚗</span>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "#e8a020",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              — Layanan Wisata & Sewa Kendaraan
            </p>
          </div>
          <h2
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 800,
              fontSize: "clamp(30px, 4.5vw, 50px)",
              color: "#e8e8ec",
              margin: "0 0 14px",
              lineHeight: 1.15,
            }}
          >
            City Tour Daerah Istimewa Yogyakarta
          </h2>
          <p style={{ color: "#9aa0b0", fontSize: 16, maxWidth: 740, lineHeight: 1.7, margin: 0 }}>
            Eksplor keindahan budaya, candi, pantai, kuliner, dan pesona alam Jogja dengan armada prima dan driver profesional. Paket berlaku sistem sewa <strong>per 12 jam</strong> dan sudah <strong>All Include (Mobil, BBM, Driver)</strong>.
          </p>
        </div>

        {/* Highlight All Include & Ketentuan Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(232,160,32,0.1) 0%, rgba(17,17,20,0.95) 100%)",
            border: "1px solid rgba(232,160,32,0.35)",
            borderRadius: 8,
            padding: "24px 28px",
            marginBottom: 44,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {CITY_TOUR_NOTES.map((note) => (
            <div key={note.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 24, lineHeight: 1 }}>{note.icon}</span>
              <div>
                <h3
                  style={{
                    fontFamily: "'Roboto Slab', serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#e8e8ec",
                    margin: "0 0 4px",
                  }}
                >
                  {note.title}
                </h3>
                <p style={{ fontSize: 12, color: "#8a8fa0", lineHeight: 1.5, margin: 0 }}>
                  {note.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tab & Info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              background: "#111114",
              border: "1px solid #242430",
              borderRadius: 6,
              padding: 4,
              gap: 4,
            }}
          >
            {[
              { id: "all", label: "Semua Unit (9)" },
              { id: "minibus", label: "Minibus / Hiace & Elf (3)" },
              { id: "mpv", label: "MPV Keluarga (6)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCarFilter(tab.id as "all" | "minibus" | "mpv")}
                style={{
                  padding: "8px 18px",
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Work Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                  background: carFilter === tab.id ? "#e8a020" : "transparent",
                  color: carFilter === tab.id ? "#0a0a0c" : "#8a8fa0",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#e8a020",
              background: "rgba(232,160,32,0.08)",
              border: "1px solid rgba(232,160,32,0.2)",
              padding: "6px 14px",
              borderRadius: 4,
            }}
          >
            ✨ All Include: Unit Mobil + BBM + Driver
          </div>
        </div>

        {/* Grid 9 Kendaraan */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 26,
          }}
        >
          {filteredCars.map((car, idx) => (
            <div
              key={car.id}
              style={{
                background: "#111114",
                border: "1px solid #1c1c24",
                borderRadius: 8,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,160,32,0.45)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "#1c1c24";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Image Container with Badges */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 220,
                  background: "#16161a",
                  overflow: "hidden",
                }}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(17,17,20,0.9) 0%, transparent 60%)",
                  }}
                />

                {/* Number Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#0a0a0c",
                    background: "#e8a020",
                    padding: "3px 8px",
                    borderRadius: 3,
                  }}
                >
                  #{idx + 1}
                </div>

                {/* Category Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#e8e8ec",
                    background: "rgba(10,10,12,0.85)",
                    border: "1px solid #2e2e3a",
                    padding: "4px 10px",
                    borderRadius: 4,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {car.badge}
                </div>

                {/* Capacity */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: "#d0d4e4",
                    background: "rgba(10,10,12,0.75)",
                    padding: "3px 10px",
                    borderRadius: 3,
                  }}
                >
                  <span>👥</span> {car.capacity}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "22px 20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <h3
                    style={{
                      fontFamily: "'Roboto Slab', serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#e8e8ec",
                      margin: 0,
                    }}
                  >
                    {car.name}
                  </h3>
                </div>

                {/* Price Display */}
                <div
                  style={{
                    background: "rgba(232,160,32,0.06)",
                    border: "1px solid rgba(232,160,32,0.2)",
                    borderRadius: 6,
                    padding: "10px 14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Roboto Slab', serif",
                        fontWeight: 800,
                        fontSize: 22,
                        color: "#e8a020",
                        lineHeight: 1,
                      }}
                    >
                      {car.price}
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#8a8fa0", marginTop: 4 }}>
                      Sistem Sewa Per 12 Jam
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9,
                      color: "#0a0a0c",
                      background: "#e8a020",
                      padding: "3px 8px",
                      borderRadius: 3,
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    All Include
                  </span>
                </div>

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 22, flexGrow: 1 }}>
                  {car.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#9aa0b0" }}>
                      <span style={{ color: "#e8a020", fontSize: 12 }}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Booking Button */}
                <a
                  href={getCarWALink(car)}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "#16161c",
                    color: "#e8a020",
                    border: "1px solid rgba(232,160,32,0.35)",
                    padding: "12px 18px",
                    borderRadius: 4,
                    fontWeight: 700,
                    fontSize: 13,
                    textAlign: "center",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#e8a020";
                    (e.currentTarget as HTMLElement).style.color = "#0a0a0c";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#16161c";
                    (e.currentTarget as HTMLElement).style.color = "#e8a020";
                  }}
                >
                  <span>📲</span> Pesan Unit Ini
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Catatan Ketentuan Footer */}
        <div
          style={{
            marginTop: 48,
            background: "#111114",
            border: "1px solid #1c1c24",
            borderRadius: 8,
            padding: "26px 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#e8e8ec",
                margin: "0 0 6px",
              }}
            >
              Butuh Rencana Rute Wisata Kustom di Jogja?
            </h4>
            <p style={{ color: "#8a8fa0", fontSize: 13, margin: 0 }}>
              Konsultasikan jadwal wisata Anda (Candi, Pantai Gunungkidul, Merapi Lava Tour, Kuliner Malioboro) tanpa biaya tambahan.
            </p>
          </div>
          <a
            href="https://wa.me/6282113301282?text=Halo%20Mas%20Aufal,%20saya%20ingin%20konsultasi%20rute%20wisata%20City%20Tour%20Jogja."
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#e8a020",
              color: "#0a0a0c",
              padding: "12px 24px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Konsultasi Rute Gratis
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FITUR TRAVEL & PENGIRIMAN PAKET */}
      {/* ========================================================================= */}
      <section
        id="travel"
        style={{
          background: "#0d0d10",
          borderTop: "1px solid #1c1c24",
          borderBottom: "1px solid #1c1c24",
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          {/* Section Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 18 }}>🚐</span>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#e8a020",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                — Layanan Travel Antar Kota & Logistik
              </p>
            </div>
            <h2
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 800,
                fontSize: "clamp(30px, 4.5vw, 50px)",
                color: "#e8e8ec",
                margin: "0 0 14px",
                lineHeight: 1.15,
              }}
            >
              Travel Antar Kota & Pengiriman Paket Kilat
            </h2>
            <p style={{ color: "#9aa0b0", fontSize: 16, maxWidth: 740, lineHeight: 1.7, margin: 0 }}>
              Layanan transportasi antar kota Jogja - Jawa Tengah dengan komitmen <strong>Door to Door</strong> (jemput dan antar sampai alamat). Siap berangkat <strong>setiap hari</strong> serta melayani <strong>pengiriman segala jenis paket kilat 1 hari sampai</strong>.
            </p>
          </div>

          {/* Banner Visual Travel */}
          <div
            style={{
              position: "relative",
              borderRadius: 8,
              overflow: "hidden",
              marginBottom: 48,
              border: "1px solid #242430",
              height: 280,
            }}
          >
            <img
              src={travelJogjaImg}
              alt="Armada Travel Eksekutif Jogja Antar Kota"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.55)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, #0d0d10 0%, transparent 60%, #0d0d10 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: 620,
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "#e8a020",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 8,
                }}
              >
                Executive Shuttle & Express Cargo
              </span>
              <h3
                style={{
                  fontFamily: "'Roboto Slab', serif",
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.25,
                  margin: "0 0 12px",
                }}
              >
                Pagi 07.00 WIB & Sore 15.00 WIB
              </h3>
              <p style={{ color: "#c8ccd8", fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                Armada selalu prima, pendingin udara dingin maksimal, reclining seats, dan sopir berpengalaman menguasai jalur Pantura dan jalur selatan Jawa.
              </p>
            </div>
          </div>

          {/* 3 Standar Pelayanan Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
              marginBottom: 52,
            }}
          >
            {TRAVEL_STANDARDS.map((std) => (
              <div
                key={std.title}
                style={{
                  background: "#111114",
                  border: "1px solid #1c1c24",
                  borderRadius: 6,
                  padding: "28px 24px",
                  transition: "border-color 0.2s, transform 0.2s",
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
                <div style={{ fontSize: 32, marginBottom: 14 }}>{std.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Roboto Slab', serif",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#e8e8ec",
                    margin: "0 0 10px",
                  }}
                >
                  {std.title}
                </h3>
                <p style={{ fontSize: 14, color: "#8a8fa0", lineHeight: 1.65, margin: 0 }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Pelayanan Rute & Interactive Booking Card */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 32,
              alignItems: "stretch",
            }}
            className="travel-grid"
          >
            {/* Left: 2 Rute Card */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ marginBottom: 4 }}>
                <h3
                  style={{
                    fontFamily: "'Roboto Slab', serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#e8e8ec",
                    margin: "0 0 6px",
                  }}
                >
                  Daftar Rute Pelayanan Travel
                </h3>
                <p style={{ color: "#8a8fa0", fontSize: 14, margin: 0 }}>
                  Jadwal rutin pulang-pergi (PP) setiap hari dengan armada bersih & ber-AC.
                </p>
              </div>

              {TRAVEL_ROUTES.map((route, i) => (
                <div
                  key={route.id}
                  style={{
                    background: "#111114",
                    border: "1px solid #1c1c24",
                    borderRadius: 8,
                    padding: 28,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 16,
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 4,
                          background: "#e8a020",
                          color: "#0a0a0c",
                          fontWeight: 800,
                          fontSize: 13,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "'Roboto Slab', serif",
                        }}
                      >
                        0{i + 1}
                      </span>
                      <h4
                        style={{
                          fontFamily: "'Roboto Slab', serif",
                          fontWeight: 700,
                          fontSize: 20,
                          color: "#e8e8ec",
                          margin: 0,
                        }}
                      >
                        {route.name}
                      </h4>
                    </div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "#e8a020",
                        background: "rgba(232,160,32,0.12)",
                        border: "1px solid rgba(232,160,32,0.25)",
                        padding: "3px 10px",
                        borderRadius: 3,
                        textTransform: "uppercase",
                      }}
                    >
                      {route.badge}
                    </span>
                  </div>

                  {/* Jalur Lintasan */}
                  <div
                    style={{
                      background: "#0e0e12",
                      border: "1px solid #1c1c22",
                      borderRadius: 6,
                      padding: "12px 16px",
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "#8a8fa0",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: 4,
                      }}
                    >
                      Jalur Lintasan Rute:
                    </div>
                    <div style={{ fontSize: 14, color: "#e8a020", fontWeight: 600 }}>
                      📍 Via {route.via}
                    </div>
                  </div>

                  <p style={{ fontSize: 13, color: "#9aa0b0", lineHeight: 1.6, margin: "0 0 16px" }}>
                    {route.description}
                  </p>

                  {/* Jam Keberangkatan */}
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#8a8fa0" }}>Jam Berangkat:</span>
                    {route.schedules.map((sched) => (
                      <span
                        key={sched}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          color: "#e8e8ec",
                          background: "#191920",
                          border: "1px solid #242430",
                          padding: "4px 10px",
                          borderRadius: 3,
                        }}
                      >
                        ⏱️ {sched}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Quick Booking Generator */}
            <div
              style={{
                background: "#111114",
                border: "1px solid #242430",
                borderRadius: 8,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                position: "relative",
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
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 20 }}>📲</span>
                <h3
                  style={{
                    fontFamily: "'Roboto Slab', serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#e8e8ec",
                    margin: 0,
                  }}
                >
                  Pesan Tiket / Kirim Paket
                </h3>
              </div>
              <p style={{ color: "#8a8fa0", fontSize: 13, margin: "0 0 24px" }}>
                Pilih rute & jadwal keberangkatan, kami akan langsung memproses via WhatsApp.
              </p>

              {/* Service Type Switcher */}
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, color: "#8a8fa0", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Layanan yang Dibutuhkan:
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <button
                    onClick={() => setTravelType("penumpang")}
                    style={{
                      padding: "10px",
                      borderRadius: 4,
                      border: "none",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: 12,
                      background: travelType === "penumpang" ? "#e8a020" : "#191920",
                      color: travelType === "penumpang" ? "#0a0a0c" : "#8a8fa0",
                    }}
                  >
                    👤 Penumpang Travel
                  </button>
                  <button
                    onClick={() => setTravelType("paket")}
                    style={{
                      padding: "10px",
                      borderRadius: 4,
                      border: "none",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: 12,
                      background: travelType === "paket" ? "#e8a020" : "#191920",
                      color: travelType === "paket" ? "#0a0a0c" : "#8a8fa0",
                    }}
                  >
                    📦 Kirim Paket Kilat
                  </button>
                </div>
              </div>

              {/* Route Selector */}
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, color: "#8a8fa0", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Pilihan Rute:
                </label>
                <select
                  value={travelRoute}
                  onChange={(e) => setTravelRoute(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0a0a0c",
                    border: "1px solid #282834",
                    color: "#e8e8ec",
                    padding: "11px 14px",
                    borderRadius: 4,
                    fontSize: 13,
                    fontFamily: "'Work Sans', sans-serif",
                    outline: "none",
                  }}
                >
                  <option value="Jogja - Pati via Klaten, Purwodadi">Jogja — Pati (via Klaten, Purwodadi)</option>
                  <option value="Pati - Jogja via Purwodadi, Klaten">Pati — Jogja (via Purwodadi, Klaten)</option>
                  <option value="Jogja - Jepara via Semarang">Jogja — Jepara (via Semarang)</option>
                  <option value="Jepara - Jogja via Semarang">Jepara — Jogja (via Semarang)</option>
                </select>
              </div>

              {/* Time Selector */}
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, color: "#8a8fa0", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Jam Keberangkatan:
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {["Pagi (07.00 WIB)", "Sore (15.00 WIB)"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTravelTime(t)}
                      style={{
                        padding: "10px",
                        borderRadius: 4,
                        border: "none",
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: 12,
                        background: travelTime === t ? "#e8a020" : "#191920",
                        color: travelTime === t ? "#0a0a0c" : "#8a8fa0",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Nama */}
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: 12, color: "#8a8fa0", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Nama Pemesan / Pengirim:
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={travelName}
                  onChange={(e) => setTravelName(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0a0a0c",
                    border: "1px solid #282834",
                    color: "#e8e8ec",
                    padding: "11px 14px",
                    borderRadius: 4,
                    fontSize: 13,
                    fontFamily: "'Work Sans', sans-serif",
                    outline: "none",
                  }}
                />
              </div>

              {/* Input Lokasi */}
              <div style={{ marginBottom: 26 }}>
                <label style={{ display: "block", fontSize: 12, color: "#8a8fa0", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Alamat Penjemputan / Antar:
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Jalan Malioboro No. 12, Yogyakarta"
                  value={travelAddress}
                  onChange={(e) => setTravelAddress(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0a0a0c",
                    border: "1px solid #282834",
                    color: "#e8e8ec",
                    padding: "11px 14px",
                    borderRadius: 4,
                    fontSize: 13,
                    fontFamily: "'Work Sans', sans-serif",
                    outline: "none",
                  }}
                />
              </div>

              {/* Submit to WhatsApp */}
              <a
                href={generateTravelWALink()}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#e8a020",
                  color: "#0a0a0c",
                  padding: "14px 20px",
                  borderRadius: 4,
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#f0b030")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#e8a020")}
              >
                <span>💬</span> Hubungi via WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. KONTAK */}
      {/* ========================================================================= */}
      <section
        id="kontak"
        style={{
          padding: "100px 24px",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
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
              — Hubungi Saya
            </p>
            <h2
              style={{
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#e8e8ec",
                margin: "0 0 18px",
                lineHeight: 1.1,
              }}
            >
              Siap Melayani
              <br />
              <span style={{ color: "#e8a020" }}>Kebutuhan Transportasi Anda</span>
            </h2>
            <p style={{ color: "#8a8fa0", fontSize: 15, lineHeight: 1.75, margin: "0 0 32px" }}>
              Tersedia untuk reservasi <strong>City Tour Jogja</strong>, pemesanan tiket <strong>Travel Jogja-Pati / Jogja-Jepara</strong>, pengiriman paket kilat, maupun posisi supir pribadi eksekutif.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <ContactRow icon="📱" label="WhatsApp & Telepon Langsung" value="0821-1330-1282" />
              <ContactRow icon="✉️" label="Alamat Email" value="aufalmarom863@gmail.com" />
              <ContactRow icon="📍" label="Domisili & Basecamp" value="Daerah Istimewa Yogyakarta, Indonesia" />
            </div>
          </div>

          {/* CTA card */}
          <div
            style={{
              background: "#111114",
              border: "1px solid #242430",
              borderRadius: 8,
              padding: "36px 32px",
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
                margin: "0 0 6px",
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
                margin: "0 0 24px",
              }}
            >
              Driver Profesional · City Tour · Travel Jateng-DIY
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginBottom: 28,
              }}
            >
              {[
                "6 Tahun Pengalaman & SIM A Aktif",
                "Rekam Jejak Bersih (Zero Accident)",
                "City Tour Jogja All Include (Mobil, BBM, Driver)",
                "Travel Jogja - Pati & Jogja - Jepara (Door to Door)",
                "Jasa Pengiriman Segala Jenis Paket Kilat 1 Hari",
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
                  <span style={{ fontSize: 13, color: "#b0b4c0" }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/6282113301282?text=Halo%20Mas%20Aufal,%20saya%20tertarik%20dengan%20layanan%20Anda."
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                background: "#e8a020",
                color: "#0a0a0c",
                padding: "14px 24px",
                borderRadius: 4,
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#f0b030")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#e8a020")}
            >
              Hubungi via WhatsApp (Fast Response)
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #1c1c24",
          padding: "36px 24px",
          textAlign: "center",
          background: "#08080a",
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#5c5c70",
            margin: 0,
          }}
        >
          © 2026 Muhammad Aufal Maromi — Driver Profesional, City Tour Jogja & Travel Antar Kota
        </p>
      </footer>

      {/* Responsive Inline CSS */}
      <style>{`
        @media (max-width: 900px) {
          .travel-grid {
            grid-template-columns: 1fr !important;
          }
        }
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
          .show-mobile-btn {
            display: flex !important;
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
