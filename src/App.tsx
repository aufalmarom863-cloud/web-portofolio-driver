import { useState, useEffect } from "react"
import aufalProfileImg from "./assets/aufal-profile.jpg"
import DeveloperPortfolio from "./components/DeveloperPortfolio"
import HomeGateway from "./components/HomeGateway"
import hiacePremioImg from "./assets/cars/hiace-premio.jpg"
import hiaceCommuterImg from "./assets/cars/hiace-commuter.jpg"
import elfLongImg from "./assets/cars/elf-long.jpg"
import innovaImg from "./assets/cars/innova.jpg"
import allNewAvanzaImg from "./assets/cars/all-new-avanza.jpg"
import xpanderImg from "./assets/cars/xpander.jpg"
import velozImg from "./assets/cars/veloz.jpg"
import avanzaXeniaImg from "./assets/cars/avanza-xenia.jpg"
import ertigaImg from "./assets/cars/ertiga.jpg"
import travelJogjaImg from "./assets/travel/travel-jogja.jpg"

const NAV_LINKS = [
  { label: "Profil", href: "#profil" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "City Tour", href: "#city-tour" },
  { label: "Travel", href: "#travel" },
  { label: "Kontak", href: "#kontak" },
]

const STATS = [
  { value: "6", unit: "Tahun", label: "Pengalaman Kerja" },
  { value: "0", unit: "Kecelakaan", label: "Rekam Jejak Bersih" },
  { value: "20%", unit: "Lebih Cepat", label: "Efisiensi Rute" },
  { value: "100%", unit: "On-Time", label: "Ketepatan Jadwal" },
]

const TYPEWRITER_PHRASES = [
  "Driver Pribadi & Executive Chauffeur",
  "Spesialis City Tour Jogja (All Include)",
  "Travel Antar Kota Jogja - Pati - Jepara",
  "Pengalaman 6 Tahun Jam Terbang Tinggi",
  "100% Rekam Jejak Zero Accident",
]

// LIST KENDARAAN CITY TOUR JOGJA
export interface CityTourCar {
  id: string
  name: string
  price: string
  capacity: string
  category: "minibus" | "mpv"
  badge: string
  image: string
  features: string[]
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
    features: [
      "Kabin Super Mewah & Luas",
      "AC Ducting Tiap Baris",
      "Reclining Comfort Seats",
      "Suspensi Paling Lembut",
    ],
  },
  {
    id: "hiace-commuter",
    name: "Hiace Commuter",
    price: "Rp 1.200.000",
    capacity: "15 Kursi",
    category: "minibus",
    badge: "Paling Populer",
    image: hiaceCommuterImg,
    features: [
      "Kapasitas 15 Penumpang",
      "AC Dingin Merata",
      "Bagasi Luas",
      "Favorit Wisata Rombongan",
    ],
  },
  {
    id: "elf-long",
    name: "Elf Long",
    price: "Rp 1.550.000",
    capacity: "17 - 19 Kursi",
    category: "minibus",
    badge: "Kapasitas Ekstra",
    image: elfLongImg,
    features: [
      "Muat hingga 19 Penumpang",
      "Tangguh Rute Pantai & Gunung",
      "Audio & Karaoke Ready",
      "Hemat Biaya Rombongan",
    ],
  },
  {
    id: "innova",
    name: "Innova",
    price: "Rp 850.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Kenyamanan Terbaik",
    image: innovaImg,
    features: [
      "Kenyamanan Kelas Premium",
      "Kabin Kedap & Senyap",
      "Kursi Empuk Ergonomis",
      "Pilihan Eksekutif & Keluarga",
    ],
  },
  {
    id: "all-new-avanza",
    name: "All New Avanza/Xenia",
    price: "Rp 700.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Generasi Baru",
    image: allNewAvanzaImg,
    features: [
      "Desain Modern & Luas",
      "AC Double Blower Digital",
      "Platform FWD Halus",
      "Sangat Nyaman untuk Kota",
    ],
  },
  {
    id: "xpander",
    name: "Xpander",
    price: "Rp 700.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Suspensi Lembut",
    image: xpanderImg,
    features: [
      "Bantingan Suspensi Terlembut",
      "Ground Clearance Tinggi",
      "Desain Gagah & Stylish",
      "Kabin Fleksibel",
    ],
  },
  {
    id: "veloz",
    name: "Veloz",
    price: "Rp 750.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Sporty Luxury",
    image: velozImg,
    features: [
      "Tampilan Mewah & Modern",
      "Fitur Premium & Ambient Light",
      "Sofa Mode Fleksibel",
      "Perjalanan Nyaman",
    ],
  },
  {
    id: "avanza-xenia",
    name: "Avanza/Xenia",
    price: "Rp 650.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Paling Hemat",
    image: avanzaXeniaImg,
    features: [
      "Harga Paling Terjangkau",
      "Tangguh Segala Medan Jogja",
      "AC Dingin Terawat",
      "Efisien & Andal",
    ],
  },
  {
    id: "ertiga",
    name: "Ertiga",
    price: "Rp 650.000",
    capacity: "7 Kursi",
    category: "mpv",
    badge: "Kabin Lega",
    image: ertigaImg,
    features: [
      "Interior Wood Panel Elegan",
      "Bantingan Nyaman & Halus",
      "Kursi Lapang",
      "Hemat & Nyaman",
    ],
  },
]

const CITY_TOUR_NOTES = [
  {
    icon: "⏱️",
    title: "Sistem Sewa 12 Jam",
    desc: "Harga sewa tertera berlaku dengan sistem per 12 jam pemakaian.",
  },
  {
    icon: "📍",
    title: "Area D.I. Yogyakarta",
    desc: "Melayani rute destinasi wisata seluruh Daerah Istimewa Yogyakarta.",
  },
  {
    icon: "⛽",
    title: "All Include Lengkap",
    desc: "Paket sudah include Unit Mobil, Bahan Bakar (BBM), dan Driver Profesional.",
  },
  {
    icon: "💳",
    title: "DP Minimal 50%",
    desc: "Uang muka (DP) minimal 50% untuk mengamankan dan mengunci jadwal sewa unit.",
  },
  {
    icon: "ℹ️",
    title: "Ketentuan Tambahan",
    desc: "Biaya belum termasuk tarif parkir wisata/tempat singgah dan uang makan driver.",
  },
]

// RUTE TRAVEL & PENGIRIMAN PAKET
const TRAVEL_ROUTES = [
  {
    id: "jogja-pati",
    name: "Jogja — Pati (PP)",
    via: "Klaten, Purwodadi",
    schedules: ["Pagi 07.00 WIB", "Sore 15.00 WIB"],
    departure: "Setiap Hari (Ready Tiap Hari)",
    badge: "Rute Favorit",
    description:
      "Layanan travel cepat dan pengiriman paket kilat rute Jogja menuju Klaten, Purwodadi, Grobogan, hingga Pati dengan antar jemput langsung di tempat.",
  },
  {
    id: "jogja-jepara",
    name: "Jogja — Jepara (PP)",
    via: "Semarang",
    schedules: ["Pagi 07.00 WIB", "Sore 15.00 WIB"],
    departure: "Setiap Hari (Ready Tiap Hari)",
    badge: "Jalur Utama",
    description:
      "Perjalanan aman dan nyaman via jalur tol/arteri Semarang menuju Demak, Kudus, hingga kota ukir Jepara. Siap melayani penumpang dan titipan paket kilat.",
  },
]

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
]

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
    items: [
      "Guide Rute Wisata",
      "Perawatan Mobil Rutin",
      "Bongkar Muat Aman",
      "Surat Jalan",
    ],
    icon: "📋",
  },
  {
    group: "SIM & Lisensi",
    items: ["SIM A Aktif", "6 Tahun Pengalaman", "Zero Accident"],
    icon: "🪪",
  },
]

export default function App() {
  const [view, setView] = useState<"home" | "developer" | "driver">("home")
  const [activeTab, setActiveTab] = useState<"pribadi" | "logistik">("pribadi")
  const [menuOpen, setMenuOpen] = useState(false)
  const [carFilter, setCarFilter] = useState<"all" | "minibus" | "mpv">("all")
  const [activeNav, setActiveNav] = useState("profil")

  // Hash change routing
  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash.toLowerCase()
      if (h === "#developer") {
        setView("developer")
      } else if (h === "#driver") {
        setView("driver")
      } else if (h === "#home") {
        setView("home")
      }
    }
    handleHash()
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [])

  const navigateTo = (newView: "home" | "developer" | "driver") => {
    setView(newView)
    window.location.hash = newView
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Typewriter animated headline (following alfari.my.id)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex]
    const typingSpeed = isDeleting ? 30 : 65

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, phraseIndex])

  // State untuk form interaktif Travel
  const [travelType, setTravelType] = useState<"penumpang" | "paket">(
    "penumpang",
  )
  const [travelRoute, setTravelRoute] = useState(
    "Jogja - Pati via Klaten, Purwodadi",
  )
  const [travelTime, setTravelTime] = useState("Pagi (07.00 WIB)")
  const [travelName, setTravelName] = useState("")
  const [travelAddress, setTravelAddress] = useState("")

  const filteredCars = CITY_TOUR_CARS.filter((c) => {
    if (carFilter === "all") return true
    return c.category === carFilter
  })

  const generateTravelWALink = () => {
    const text = `Halo Mas Aufal, saya ingin memesan layanan Travel/Paket:
- Jenis: ${
      travelType === "penumpang"
        ? "Tiket Penumpang Travel"
        : "Jasa Pengiriman Paket Kilat"
    }
- Rute: ${travelRoute}
- Jam Keberangkatan: ${travelTime}
- Nama: ${travelName || "(Belum diisi)"}
- Alamat Jemput / Tujuan: ${travelAddress || "(Belum diisi)"}

Mohon konfirmasi ketersediaan dan total biayanya. Terima kasih!`
    return `https://wa.me/6282113301282?text=${encodeURIComponent(text)}`
  }

  const getCarWALink = (car: CityTourCar) => {
    const text = `Halo Mas Aufal, saya ingin reservasi City Tour Jogja:
- Unit: ${car.name} (${car.capacity})
- Harga: ${car.price} / 12 Jam (All Include: Mobil + BBM + Driver)
- Area: Daerah Istimewa Yogyakarta

Mohon info ketersediaan jadwal pada tanggal yang saya rencanakan. Terima kasih!`
    return `https://wa.me/6282113301282?text=${encodeURIComponent(text)}`
  }

  return (
    <div
      className="min-h-screen text-slate-100"
      style={{ background: "#050510", fontFamily: "'Inter', sans-serif" }}
    >
      {/* ========================================================================= */}
      {/* FLOATING GLASS NAVBAR (DUAL-MODE: DEVELOPER & DRIVER) */}
      {/* ========================================================================= */}
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 py-3.5 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-white/10">
          {/* Brand Logo & Name (Click to Home) */}
          <button
            onClick={() => navigateTo("home")}
            className="flex items-center gap-2.5 sm:gap-3 no-underline group text-left cursor-pointer bg-transparent border-0 p-0"
            title="Kembali ke Beranda Utama"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-amber-400 p-[1.5px] shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              <div className="w-full h-full bg-[#050510] rounded-[10px] flex items-center justify-center font-bold text-sm sm:text-base font-['Space_Grotesk'] text-white">
                M<span className="text-amber-400">.</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] font-bold text-sm sm:text-base lg:text-lg text-white tracking-tight group-hover:text-sky-300 transition-colors leading-tight">
                M. Aufal Maromi
              </span>
              <span className="font-mono text-[9px] text-slate-400 group-hover:text-amber-300 transition-colors tracking-wider uppercase font-semibold">
                {view === "developer"
                  ? "Portofolio Developer"
                  : view === "driver"
                    ? "Portofolio Driver"
                    : "Developer & Driver"}
              </span>
            </div>
          </button>

          {/* DUAL NAVBAR PILLS: DEVELOPER & DRIVER (HALAMAN PERTAMA & MODE SWITCH) */}
          <div className="flex items-center gap-1 p-1 rounded-full bg-slate-900/90 border border-white/15 shadow-inner backdrop-blur-md">
            <button
              onClick={() => navigateTo("developer")}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                view === "developer"
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)] border border-sky-300/40"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              <span>💻</span>
              <span className="font-['Space_Grotesk']">Developer</span>
            </button>

            <button
              onClick={() => navigateTo("driver")}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                view === "driver"
                  ? "bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-[0_0_15px_rgba(245,158,11,0.4)] border border-amber-300/40"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              <span>🚗</span>
              <span className="font-['Space_Grotesk']">Driver</span>
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {view === "developer" ? (
              <a
                href="https://github.com/aufalmarom863-cloud"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-['Space_Grotesk'] font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-slate-600 no-underline"
              >
                <span>🐙</span>
                <span>GitHub</span>
              </a>
            ) : view === "driver" ? (
              <a
                href="https://wa.me/6282113301282?text=Halo%20Mas%20Aufal,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20driver%20/%20city%20tour%20/%20travel."
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-['Space_Grotesk'] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 no-underline"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>WhatsApp</span>
              </a>
            ) : (
              <button
                onClick={() => navigateTo("developer")}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-xs font-mono transition-all cursor-pointer"
              >
                <span>Eksplorasi Profil ➔</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-panel border border-white/10 p-4 shadow-2xl flex flex-col gap-2.5">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2">
              Pilih Portofolio:
            </div>
            <button
              onClick={() => {
                navigateTo("home")
                setMenuOpen(false)
              }}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.06] text-left cursor-pointer"
            >
              <span>🏠</span>
              <span>Beranda Utama</span>
            </button>
            <button
              onClick={() => {
                navigateTo("developer")
                setMenuOpen(false)
              }}
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono font-bold text-left cursor-pointer ${
                view === "developer"
                  ? "bg-sky-500/20 text-sky-300 border border-sky-400/30"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>💻</span>
                <span>Portofolio Developer</span>
              </span>
              <span>➔</span>
            </button>
            <button
              onClick={() => {
                navigateTo("driver")
                setMenuOpen(false)
              }}
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono font-bold text-left cursor-pointer ${
                view === "driver"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>🚗</span>
                <span>Portofolio Driver</span>
              </span>
              <span>➔</span>
            </button>

            {view === "driver" && (
              <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-1.5">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2">
                  Navigasi Driver:
                </div>
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setMenuOpen(false)
                      setActiveNav(l.href.replace("#", ""))
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-amber-300 hover:bg-white/[0.05] transition-colors uppercase tracking-wider no-underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 1. HOME GATEWAY (TAMPILAN AWAL SEPERTI DIMINTA) */}
      {/* ========================================================================= */}
      {view === "home" && (
        <HomeGateway
          onSelectDeveloper={() => navigateTo("developer")}
          onSelectDriver={() => navigateTo("driver")}
        />
      )}

      {/* ========================================================================= */}
      {/* 2. PORTOFOLIO DEVELOPER */}
      {/* ========================================================================= */}
      {view === "developer" && (
        <DeveloperPortfolio
          onSwitchToDriver={() => navigateTo("driver")}
          onSwitchToHome={() => navigateTo("home")}
        />
      )}

      {/* ========================================================================= */}
      {/* 3. PORTOFOLIO DRIVER (KONTEN LAMA LENGKAP) */}
      {/* ========================================================================= */}
      {view === "driver" && (
        <>
          <section
            id="profil"
            className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
            style={{
              background: "#050510",
            }}
          >
            {/* Ambient Cosmic Lights & Dot Grid Background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
                backgroundSize: "36px 36px",
                opacity: 0.6,
              }}
              aria-hidden="true"
            />
            <div
              className="absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(44, 103, 237, 0.22) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute top-1/3 -right-20 w-[420px] h-[420px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(245, 158, 11, 0.1) 50%, transparent 70%)",
                filter: "blur(70px)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
              {/* Main 2-Column Hero Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
                {/* Left Column: Typography, Typewriter & CTAs */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  {/* Status Pill Badge */}
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 backdrop-blur-md w-fit mb-6 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-sky-300 font-medium">
                      SIM A Aktif · Zero Accident · Siap Bertugas
                    </span>
                  </div>

                  {/* Header Title with Alfari Gradient */}
                  <div className="mb-3">
                    <h1 className="hero-h1-gradient text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-1">
                      Selamat Datang di
                    </h1>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight">
                      Portofolio Driver
                    </h2>
                  </div>

                  {/* Name Tagline */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                      Muhammad Aufal Maromi
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-amber-400/15 border border-amber-400/30 text-amber-300 font-semibold tracking-wider uppercase">
                      Executive Chauffeur
                    </span>
                  </div>

                  {/* Typewriter Row (from alfari.my.id) */}
                  <div className="flex items-center min-h-[38px] mb-6 bg-slate-900/60 border border-white/[0.08] rounded-xl px-4 py-2 w-fit backdrop-blur-md shadow-inner">
                    <span className="text-sky-400 mr-2.5 text-sm font-bold">
                      ▶
                    </span>
                    <span className="font-mono text-sm sm:text-base text-sky-300 font-semibold tracking-wide">
                      {currentText}
                    </span>
                    <span className="hero-typewriter-cursor" />
                  </div>

                  {/* Narrative Pitch */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8 font-normal">
                    Pengemudi profesional berpengalaman{" "}
                    <strong className="text-amber-400 font-semibold">
                      6 tahun
                    </strong>{" "}
                    dengan rekam jejak{" "}
                    <strong className="text-emerald-400 font-semibold">
                      Zero Accident
                    </strong>
                    . Menguasai mobil transmisi matik & manual dengan gaya
                    berkendara halus (*smooth driving*). Siap melayani kebutuhan
                    supir pribadi harian/eksekutif, pemandu wisata{" "}
                    <strong className="text-white">
                      City Tour Jogja (All Include)
                    </strong>
                    , serta perjalanan reguler{" "}
                    <strong className="text-white">
                      Travel Jogja - Pati & Jepara Door to Door
                    </strong>
                    .
                  </p>

                  {/* Action Buttons Row */}
                  <div className="flex flex-wrap items-center gap-4 mb-10">
                    <a
                      href="https://wa.me/6282113301282?text=Halo%20Mas%20Aufal,%20saya%20tertarik%20dengan%20layanan%20driver%20Anda.%20Bisa%20berkonsultasi%20jadwal?"
                      target="_blank"
                      rel="noreferrer"
                      className="hero-btn-primary"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Reservasi / WhatsApp</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>

                    <a href="#city-tour" className="hero-btn-secondary">
                      <svg
                        className="w-5 h-5 text-sky-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 19H5V8h14m-3-5H8L5 8v11a2 2 0 002 2h10a2 2 0 002-2V8l-3-5z"
                        />
                      </svg>
                      <span>Lihat Armada & Layanan</span>
                    </a>
                  </div>

                  {/* "Find me" Social / Quick Contact Bar (from alfari.my.id) */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-6 border-t border-white/[0.08]">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Find me & Kontak:
                    </span>
                    <div className="flex items-center gap-2.5">
                      <a
                        href="https://wa.me/6282113301282"
                        target="_blank"
                        rel="noreferrer"
                        className="hero-social-btn"
                        title="WhatsApp Langsung"
                        aria-label="WhatsApp"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.713.065-1.144-.073-.263-.084-.606-.195-1.037-.381-1.821-.787-3.003-2.63-3.094-2.752-.091-.122-.743-.988-.743-1.884 0-.897.47-1.339.637-1.52.167-.183.366-.228.488-.228.122 0 .244.001.35.006.111.006.26-.042.405.308.15.362.515 1.258.56 1.349.045.091.076.198.015.32-.061.122-.091.198-.182.305-.091.107-.193.239-.276.32-.091.091-.186.19-.08.372.106.182.472.78 1.013 1.261.697.62 1.285.812 1.468.903.183.091.29.076.396-.046.107-.122.457-.533.579-.716.122-.183.244-.152.41-.091.167.061 1.059.5 1.242.591.183.091.305.137.35.213.046.077.046.443-.098.848z" />
                        </svg>
                      </a>
                      <a
                        href="tel:+6282113301282"
                        className="hero-social-btn"
                        title="Telepon Langsung"
                        aria-label="Telepon"
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
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </a>
                      <a
                        href="mailto:aufalmaromi21@gmail.com"
                        className="hero-social-btn"
                        title="Kirim Email"
                        aria-label="Email"
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
                      </a>
                      <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-slate-300">
                        <span className="text-amber-400">📍</span>
                        <span>Yogyakarta & Jawa Tengah</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Executive Driver Portrait (Clean Photo Presentation) */}
                <div className="lg:col-span-5 flex justify-center items-center w-full">
                  <div className="relative w-full max-w-sm sm:max-w-md">
                    {/* Ambient Glow behind photo */}
                    <div
                      className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 70%)",
                      }}
                    />

                    {/* Portrait Card Container */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-sky-400/30 group">
                      {/* Photo with natural aspect ratio & smooth hover scale */}
                      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                        <img
                          src={aufalProfileImg}
                          alt="Muhammad Aufal Maromi - Professional Driver"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Elegant gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

                        {/* Bottom Card Identity Info */}
                        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-left">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 backdrop-blur-md text-[11px] font-mono font-semibold text-amber-300 uppercase tracking-wider mb-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            Executive Chauffeur
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
                            Muhammad Aufal Maromi
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 font-mono mt-1 flex items-center gap-2">
                            <span>🛡️ 6+ Tahun Jam Terbang</span>
                            <span>·</span>
                            <span className="text-emerald-400 font-semibold">
                              Zero Accident
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge 1: Top Right */}
                    <div
                      className="absolute -top-3 -right-2 sm:-right-4 z-20 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl border border-emerald-400/30 backdrop-blur-md pointer-events-none"
                      style={{
                        animation: "floatBadge 5s ease-in-out infinite",
                      }}
                    >
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-base">
                        🛡️
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-['Space_Grotesk'] leading-tight">
                          Zero Accident
                        </div>
                        <div className="text-[10px] text-emerald-400 font-mono">
                          100% Rekam Bersih
                        </div>
                      </div>
                    </div>

                    {/* Floating Badge 2: Bottom Left */}
                    <div
                      className="absolute -bottom-3 -left-2 sm:-left-4 z-20 glass-card px-3.5 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl border border-amber-400/30 backdrop-blur-md pointer-events-none"
                      style={{
                        animation: "floatBadge 5.5s ease-in-out infinite 1s",
                      }}
                    >
                      <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-base">
                        ⭐
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-['Space_Grotesk'] leading-tight">
                          6+ Tahun Jam Terbang
                        </div>
                        <div className="text-[10px] text-amber-300 font-mono">
                          Ratusan Trip Sukses
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Bar (Modern Glass Cards from alfari.my.id) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((s, idx) => (
                  <div
                    key={s.label}
                    className="glass-card rounded-2xl p-5 relative overflow-hidden group hover:border-sky-400/40"
                  >
                    {/* Glow accent bar at top */}
                    <div
                      className="absolute top-0 inset-x-0 h-1 transition-all duration-300"
                      style={{
                        background:
                          idx === 0
                            ? "linear-gradient(90deg, #38bdf8, #2c67ed)"
                            : idx === 1
                              ? "linear-gradient(90deg, #10b981, #059669)"
                              : idx === 2
                                ? "linear-gradient(90deg, #f59e0b, #d97706)"
                                : "linear-gradient(90deg, #818cf8, #6366f1)",
                      }}
                    />

                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-['Space_Grotesk'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-sky-300 transition-colors">
                        {s.value}
                      </span>
                      <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider ml-1">
                        {s.unit}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {s.label}
                    </div>
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
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 4vw, 48px)",
                  color: "#e8e8ec",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Dua Peran Utama,
                <br />
                <span style={{ color: "#8a8fa0" }}>
                  Satu Dedikasi Keselamatan
                </span>
              </h2>
            </div>

            {/* Tab switcher */}
            <div
              style={{
                display: "inline-flex",
                background: "#0f1224",
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
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                    background: activeTab === tab ? "#e8a020" : "transparent",
                    color: activeTab === tab ? "#050510" : "#8a8fa0",
                  }}
                >
                  {tab === "pribadi"
                    ? "Supir Pribadi & Pariwisata"
                    : "Supir Logistik & Antar Kota"}
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
                    <span style={{ fontSize: 36 }}>🚘</span>
                    <p style={{ color: "#8a8fa0", fontSize: 14, margin: 0 }}>
                      Hiace · Elf · Innova · Avanza · Xpander
                      <br />
                      <strong style={{ color: "#e8a020" }}>
                        Manual & Matik
                      </strong>
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
                    <span style={{ fontSize: 36 }}>🚚</span>
                    <p style={{ color: "#8a8fa0", fontSize: 14, margin: 0 }}>
                      Jogja ⇄ Pati · Jogja ⇄ Jepara
                      <br />
                      <strong style={{ color: "#e8a020" }}>
                        Door to Door & Paket Kilat
                      </strong>
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
                  background:
                    "linear-gradient(to right, #050510 0%, transparent 40%, #050510 100%)",
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
                    fontFamily: "'Space Grotesk', sans-serif",
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
                    fontFamily: "'Space Grotesk', sans-serif",
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
              background: "#07071a",
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
                    fontFamily: "'Space Grotesk', sans-serif",
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
                      background: "#0f1224",
                      border: "1px solid #1c1c24",
                      borderRadius: 6,
                      padding: 28,
                      transition: "border-color 0.2s, transform 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(232,160,32,0.4)"
                      ;(e.currentTarget as HTMLElement).style.transform =
                        "translateY(-2px)"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor =
                        "#1c1c24"
                      ;(e.currentTarget as HTMLElement).style.transform =
                        "translateY(0)"
                    }}
                  >
                    <div style={{ fontSize: 26, marginBottom: 14 }}>
                      {skill.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
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
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
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
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(30px, 4.5vw, 50px)",
                  color: "#e8e8ec",
                  margin: "0 0 14px",
                  lineHeight: 1.15,
                }}
              >
                City Tour Daerah Istimewa Yogyakarta
              </h2>
              <p
                style={{
                  color: "#9aa0b0",
                  fontSize: 16,
                  maxWidth: 740,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Eksplor keindahan budaya, candi, pantai, kuliner, dan pesona
                alam Jogja dengan armada prima dan driver profesional. Paket
                berlaku sistem sewa <strong>per 12 jam</strong> dan sudah{" "}
                <strong>All Include (Mobil, BBM, Driver)</strong>.
              </p>
            </div>

            {/* Highlight All Include & Ketentuan Banner */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(232,160,32,0.1) 0%, rgba(17,17,20,0.95) 100%)",
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
                <div
                  key={note.title}
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
                  <span style={{ fontSize: 24, lineHeight: 1 }}>
                    {note.icon}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: 14,
                        color: "#e8e8ec",
                        margin: "0 0 4px",
                      }}
                    >
                      {note.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#8a8fa0",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
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
                  background: "#0f1224",
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
                    onClick={() =>
                      setCarFilter(tab.id as "all" | "minibus" | "mpv")
                    }
                    style={{
                      padding: "8px 18px",
                      borderRadius: 4,
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: 12,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      transition: "all 0.2s",
                      background:
                        carFilter === tab.id ? "#e8a020" : "transparent",
                      color: carFilter === tab.id ? "#050510" : "#8a8fa0",
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
                    background: "#0f1224",
                    border: "1px solid #1c1c24",
                    borderRadius: 8,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    transition:
                      "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.transform =
                      "translateY(-4px)"
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(232,160,32,0.45)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow =
                      "0 12px 28px rgba(0,0,0,0.5)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)"
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      "#1c1c24"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
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
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.transform =
                          "scale(1.04)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.transform =
                          "scale(1)")
                      }
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(17,17,20,0.9) 0%, transparent 60%)",
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
                        color: "#050510",
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
                  <div
                    style={{
                      padding: "22px 20px",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        marginBottom: 12,
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
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
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 800,
                            fontSize: 22,
                            color: "#e8a020",
                            lineHeight: 1,
                          }}
                        >
                          {car.price}
                        </div>
                        <div
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 10,
                            color: "#8a8fa0",
                            marginTop: 4,
                          }}
                        >
                          Sistem Sewa Per 12 Jam
                        </div>
                      </div>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 9,
                          color: "#050510",
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
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 7,
                        marginBottom: 22,
                        flexGrow: 1,
                      }}
                    >
                      {car.features.map((feat) => (
                        <div
                          key={feat}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            fontSize: 13,
                            color: "#9aa0b0",
                          }}
                        >
                          <span style={{ color: "#e8a020", fontSize: 12 }}>
                            ✓
                          </span>
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
                        ;(e.currentTarget as HTMLElement).style.background =
                          "#e8a020"
                        ;(e.currentTarget as HTMLElement).style.color =
                          "#050510"
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background =
                          "#16161c"
                        ;(e.currentTarget as HTMLElement).style.color =
                          "#e8a020"
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
                background: "#0f1224",
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
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#e8e8ec",
                    margin: "0 0 6px",
                  }}
                >
                  Butuh Rencana Rute Wisata Kustom di Jogja?
                </h4>
                <p style={{ color: "#8a8fa0", fontSize: 13, margin: 0 }}>
                  Konsultasikan jadwal wisata Anda (Candi, Pantai Gunungkidul,
                  Merapi Lava Tour, Kuliner Malioboro) tanpa biaya tambahan.
                </p>
              </div>
              <a
                href="https://wa.me/6282113301282?text=Halo%20Mas%20Aufal,%20saya%20ingin%20konsultasi%20rute%20wisata%20City%20Tour%20Jogja."
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#e8a020",
                  color: "#050510",
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
              background: "#07071a",
              borderTop: "1px solid #1c1c24",
              borderBottom: "1px solid #1c1c24",
              padding: "100px 24px",
            }}
          >
            <div style={{ maxWidth: 1240, margin: "0 auto" }}>
              {/* Section Header */}
              <div style={{ marginBottom: 48 }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
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
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(30px, 4.5vw, 50px)",
                    color: "#e8e8ec",
                    margin: "0 0 14px",
                    lineHeight: 1.15,
                  }}
                >
                  Travel Antar Kota & Pengiriman Paket Kilat
                </h2>
                <p
                  style={{
                    color: "#9aa0b0",
                    fontSize: 16,
                    maxWidth: 740,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Layanan transportasi antar kota Jogja - Jawa Tengah dengan
                  komitmen <strong>Door to Door</strong> (jemput dan antar
                  sampai alamat). Siap berangkat <strong>setiap hari</strong>{" "}
                  serta melayani{" "}
                  <strong>
                    pengiriman segala jenis paket kilat 1 hari sampai
                  </strong>
                  .
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
                    background:
                      "linear-gradient(to right, #07071a 0%, transparent 60%, #07071a 100%)",
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
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(22px, 3.5vw, 32px)",
                      fontWeight: 700,
                      color: "#ffffff",
                      lineHeight: 1.25,
                      margin: "0 0 12px",
                    }}
                  >
                    Pagi 07.00 WIB & Sore 15.00 WIB
                  </h3>
                  <p
                    style={{
                      color: "#c8ccd8",
                      fontSize: 14,
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    Armada selalu prima, pendingin udara dingin maksimal,
                    reclining seats, dan sopir berpengalaman menguasai jalur
                    Pantura dan jalur selatan Jawa.
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
                      background: "#0f1224",
                      border: "1px solid #1c1c24",
                      borderRadius: 6,
                      padding: "28px 24px",
                      transition: "border-color 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(232,160,32,0.4)"
                      ;(e.currentTarget as HTMLElement).style.transform =
                        "translateY(-2px)"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor =
                        "#1c1c24"
                      ;(e.currentTarget as HTMLElement).style.transform =
                        "translateY(0)"
                    }}
                  >
                    <div style={{ fontSize: 32, marginBottom: 14 }}>
                      {std.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: 17,
                        color: "#e8e8ec",
                        margin: "0 0 10px",
                      }}
                    >
                      {std.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: "#8a8fa0",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
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
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 24 }}
                >
                  <div style={{ marginBottom: 4 }}>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: 22,
                        color: "#e8e8ec",
                        margin: "0 0 6px",
                      }}
                    >
                      Daftar Rute Pelayanan Travel
                    </h3>
                    <p style={{ color: "#8a8fa0", fontSize: 14, margin: 0 }}>
                      Jadwal rutin pulang-pergi (PP) setiap hari dengan armada
                      bersih & ber-AC.
                    </p>
                  </div>

                  {TRAVEL_ROUTES.map((route, i) => (
                    <div
                      key={route.id}
                      style={{
                        background: "#0f1224",
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
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <span
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: 4,
                              background: "#e8a020",
                              color: "#050510",
                              fontWeight: 800,
                              fontSize: 13,
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            0{i + 1}
                          </span>
                          <h4
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
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
                        <div
                          style={{
                            fontSize: 14,
                            color: "#e8a020",
                            fontWeight: 600,
                          }}
                        >
                          📍 Via {route.via}
                        </div>
                      </div>

                      <p
                        style={{
                          fontSize: 13,
                          color: "#9aa0b0",
                          lineHeight: 1.6,
                          margin: "0 0 16px",
                        }}
                      >
                        {route.description}
                      </p>

                      {/* Jam Keberangkatan */}
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                          flexWrap: "wrap",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ fontSize: 12, color: "#8a8fa0" }}>
                          Jam Berangkat:
                        </span>
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
                    background: "#0f1224",
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ fontSize: 20 }}>📲</span>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: 20,
                        color: "#e8e8ec",
                        margin: 0,
                      }}
                    >
                      Pesan Tiket / Kirim Paket
                    </h3>
                  </div>
                  <p
                    style={{
                      color: "#8a8fa0",
                      fontSize: 13,
                      margin: "0 0 24px",
                    }}
                  >
                    Pilih rute & jadwal keberangkatan, kami akan langsung
                    memproses via WhatsApp.
                  </p>

                  {/* Service Type Switcher */}
                  <div style={{ marginBottom: 18 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        color: "#8a8fa0",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Layanan yang Dibutuhkan:
                    </label>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 8,
                      }}
                    >
                      <button
                        onClick={() => setTravelType("penumpang")}
                        style={{
                          padding: "10px",
                          borderRadius: 4,
                          border: "none",
                          cursor: "pointer",
                          fontWeight: 600,
                          fontSize: 12,
                          background:
                            travelType === "penumpang" ? "#e8a020" : "#191920",
                          color:
                            travelType === "penumpang" ? "#050510" : "#8a8fa0",
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
                          background:
                            travelType === "paket" ? "#e8a020" : "#191920",
                          color: travelType === "paket" ? "#050510" : "#8a8fa0",
                        }}
                      >
                        📦 Kirim Paket Kilat
                      </button>
                    </div>
                  </div>

                  {/* Route Selector */}
                  <div style={{ marginBottom: 18 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        color: "#8a8fa0",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Pilihan Rute:
                    </label>
                    <select
                      value={travelRoute}
                      onChange={(e) => setTravelRoute(e.target.value)}
                      style={{
                        width: "100%",
                        background: "#050510",
                        border: "1px solid #282834",
                        color: "#e8e8ec",
                        padding: "11px 14px",
                        borderRadius: 4,
                        fontSize: 13,
                        fontFamily: "'Inter', sans-serif",
                        outline: "none",
                      }}
                    >
                      <option value="Jogja - Pati via Klaten, Purwodadi">
                        Jogja — Pati (via Klaten, Purwodadi)
                      </option>
                      <option value="Pati - Jogja via Purwodadi, Klaten">
                        Pati — Jogja (via Purwodadi, Klaten)
                      </option>
                      <option value="Jogja - Jepara via Semarang">
                        Jogja — Jepara (via Semarang)
                      </option>
                      <option value="Jepara - Jogja via Semarang">
                        Jepara — Jogja (via Semarang)
                      </option>
                    </select>
                  </div>

                  {/* Time Selector */}
                  <div style={{ marginBottom: 18 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        color: "#8a8fa0",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Jam Keberangkatan:
                    </label>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 8,
                      }}
                    >
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
                            background:
                              travelTime === t ? "#e8a020" : "#191920",
                            color: travelTime === t ? "#050510" : "#8a8fa0",
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Nama */}
                  <div style={{ marginBottom: 18 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        color: "#8a8fa0",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Nama Pemesan / Pengirim:
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Budi Santoso"
                      value={travelName}
                      onChange={(e) => setTravelName(e.target.value)}
                      style={{
                        width: "100%",
                        background: "#050510",
                        border: "1px solid #282834",
                        color: "#e8e8ec",
                        padding: "11px 14px",
                        borderRadius: 4,
                        fontSize: 13,
                        fontFamily: "'Inter', sans-serif",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Input Lokasi */}
                  <div style={{ marginBottom: 26 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        color: "#8a8fa0",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Alamat Penjemputan / Antar:
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Jalan Malioboro No. 12, Yogyakarta"
                      value={travelAddress}
                      onChange={(e) => setTravelAddress(e.target.value)}
                      style={{
                        width: "100%",
                        background: "#050510",
                        border: "1px solid #282834",
                        color: "#e8e8ec",
                        padding: "11px 14px",
                        borderRadius: 4,
                        fontSize: 13,
                        fontFamily: "'Inter', sans-serif",
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
                      color: "#050510",
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
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.background = "#f0b030")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.background = "#e8a020")
                    }
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
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(28px, 4vw, 48px)",
                    color: "#e8e8ec",
                    margin: "0 0 18px",
                    lineHeight: 1.1,
                  }}
                >
                  Siap Melayani
                  <br />
                  <span style={{ color: "#e8a020" }}>
                    Kebutuhan Transportasi Anda
                  </span>
                </h2>
                <p
                  style={{
                    color: "#8a8fa0",
                    fontSize: 15,
                    lineHeight: 1.75,
                    margin: "0 0 32px",
                  }}
                >
                  Tersedia untuk reservasi <strong>City Tour Jogja</strong>,
                  pemesanan tiket{" "}
                  <strong>Travel Jogja-Pati / Jogja-Jepara</strong>, pengiriman
                  paket kilat, maupun posisi supir pribadi eksekutif.
                </p>

                <div
                  style={{ display: "flex", flexDirection: "column", gap: 14 }}
                >
                  <ContactRow
                    icon="📱"
                    label="WhatsApp & Telepon Langsung"
                    value="0821-1330-1282"
                  />
                  <ContactRow
                    icon="✉️"
                    label="Alamat Email"
                    value="aufalmarom863@gmail.com"
                  />
                  <ContactRow
                    icon="📍"
                    label="Domisili & Basecamp"
                    value="Daerah Istimewa Yogyakarta, Indonesia"
                  />
                </div>
              </div>

              {/* CTA card */}
              <div
                style={{
                  background: "#0f1224",
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
                    fontFamily: "'Space Grotesk', sans-serif",
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
                    <div
                      key={item}
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#e8a020",
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: 13, color: "#b0b4c0" }}>
                        {item}
                      </span>
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
                    color: "#050510",
                    padding: "14px 24px",
                    borderRadius: 4,
                    fontWeight: 700,
                    fontSize: 13,
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.background = "#f0b030")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.background = "#e8a020")
                  }
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
              © 2026 Muhammad Aufal Maromi — Driver Profesional, City Tour Jogja
              & Travel Antar Kota
            </p>
          </footer>
        </>
      )}

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
  )
}

function ExperienceCard({
  number,
  title,
  desc,
}: {
  number: string
  title: string
  desc: string
}) {
  return (
    <div
      style={{
        background: "#0f1224",
        border: "1px solid #1c1c24",
        borderRadius: 6,
        padding: 32,
        position: "relative",
        transition: "border-color 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor =
          "rgba(232,160,32,0.3)"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor = "#1c1c24"
      }}
    >
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
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
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: 18,
          color: "#e8e8ec",
          margin: "0 0 12px",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: "#8a8fa0", lineHeight: 1.7, margin: 0 }}>
        {desc}
      </p>
    </div>
  )
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: string
  label: string
  value: string
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "16px 20px",
        background: "#0f1224",
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
        <div style={{ fontSize: 14, color: "#e8e8ec", fontWeight: 500 }}>
          {value}
        </div>
      </div>
    </div>
  )
}
