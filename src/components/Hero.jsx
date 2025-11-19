const ACCENT = 'text-[#c8a24d]'
const ACCENT_BG = 'bg-[#c8a24d]'

export default function Hero(){
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative pt-28 pb-24 bg-black overflow-hidden">
      {/* Gold edge glow */}
      <div className="absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-[#c8a24d] to-transparent opacity-60" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#c8a24d]/10 blur-3xl rounded-full"></div>
        <div className="absolute top-20 -right-40 w-[480px] h-[480px] bg-white/5 blur-3xl rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className={`uppercase tracking-[0.35em] text-xs ${ACCENT} mb-3`}>Esports • Content • Merch</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Nizard Gaming
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">
            India’s next-gen esports and creator collective. Building championship rosters, viral content, and premium lifestyle drops.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button onClick={()=>scrollTo('apply')} className={`px-5 py-3 rounded-md ${ACCENT_BG} hover:brightness-110 text-black font-semibold`}>Hire a Team</button>
            <button onClick={()=>scrollTo('merch')} className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold">Shop Merch</button>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-white/10 overflow-hidden shadow-2xl">
            <img src="/gaming-hero.png" alt="Nizard Gaming" className="w-full" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-black/70 backdrop-blur ${ACCENT_RING} border border-white/10 rounded-lg px-4 py-3 text-slate-200">
            Pro Rosters • Content Studio • Merch
          </div>
        </div>
      </div>
    </section>
  )
}
