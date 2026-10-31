import { useState, useEffect } from "react"
import Lanyard3D from "../Lanyard3D.jsx"
import cardFrontImg from "../assets/card-front-aufal.png"
import cardBackImg from "../assets/backCard.png"
import cardStrapImg from "../assets/card-strap-aufal.png"

export default function InteractiveLanyard() {
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches,
  )

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div
      className="lanyard-card-container relative w-full h-[660px] sm:h-[750px] lg:h-[820px] xl:h-[880px] flex items-center justify-center select-none"
      aria-label="Interactive 3D Lanyard"
    >
      <div className="lanyard-viewport w-full h-full relative">
        {/* Real 3D WebGL Lanyard Component matching alfari.my.id reference */}
        <Lanyard3D
          frontImage={cardFrontImg}
          backImage={cardBackImg}
          strapImage={cardStrapImg}
          cardColor="#04010e"
          imageFit="cover"
          imagePadding={0.035}
          strapColor="#111827"
          finish="glossy"
          anchor="center"
          orientation="portrait"
          size={isMobile ? 0.85 : 1.05}
          cornerRadius={0.25}
          strapLength={isMobile ? 0.38 : 0.42}
          strapWidth={0.58}
          gravity={1.15}
          damping={0.35}
          elasticity={0.7}
          breeze={0.12}
          interactive={true}
          autoFlip={true}
          metal="silver"
          intro={true}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Floating Badge 1: Top Right */}
      <div
        className="absolute top-16 -right-2 sm:-right-4 z-20 glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg border border-emerald-400/30 backdrop-blur-md pointer-events-none"
        style={{ animation: "floatBadge 5s ease-in-out infinite" }}
      >
        <span className="text-base">🛡️</span>
        <div>
          <div className="text-[11px] font-bold text-white font-['Space_Grotesk'] leading-tight">
            Zero Accident
          </div>
          <div className="text-[9px] text-emerald-400 font-mono">
            100% Rekam Bersih
          </div>
        </div>
      </div>

      {/* Floating Badge 2: Bottom Left */}
      <div
        className="absolute bottom-16 -left-2 sm:-left-4 z-20 glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg border border-amber-400/30 backdrop-blur-md pointer-events-none"
        style={{ animation: "floatBadge 5.5s ease-in-out infinite 1s" }}
      >
        <span className="text-base">⭐</span>
        <div>
          <div className="text-[11px] font-bold text-white font-['Space_Grotesk'] leading-tight">
            6+ Tahun Jam Terbang
          </div>
          <div className="text-[9px] text-amber-300 font-mono">
            Ratusan Trip Sukses
          </div>
        </div>
      </div>

      {/* Floating Drag Hint Pill */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md text-[10px] font-mono text-slate-300 flex items-center gap-1.5 pointer-events-none shadow-md whitespace-nowrap">
        <span className="text-sky-400">👆</span>
        <span>Tarik / Drag ID Card untuk melihat animasi 3D</span>
      </div>
    </div>
  )
}
