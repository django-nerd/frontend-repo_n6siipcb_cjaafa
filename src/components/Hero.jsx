export default function Hero(){
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative pt-28 pb-20 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/30 blur-3xl rounded-full"></div>
        <div className="absolute top-32 -right-32 w-96 h-96 bg-fuchsia-600/20 blur-3xl rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Nizard Gaming
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">
            We build winning rosters, craft standout content, and drop premium merch for BGMI, Valorant, CODM, Free Fire and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={()=>scrollTo('apply')} className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold">Hire a Team</button>
            <button onClick={()=>scrollTo('merch')} className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold">Shop Merch</button>
          </div>
        </div>
        <div className="relative">
          <img src="/gaming-hero.png" alt="Nizard Gaming" className="w-full rounded-xl border border-white/10 shadow-2xl" />
          <div className="absolute -bottom-4 -right-4 bg-slate-800/80 backdrop-blur border border-white/10 rounded-lg px-4 py-3 text-slate-200">
            Pro Rosters • Content Studio • Merch
          </div>
        </div>
      </div>
    </section>
  )
}
