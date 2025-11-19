const ACCENT = 'text-[#c8a24d]'

export default function Services(){
  const features = [
    {title:'Content Creation', desc:'High-production gameplay highlights, brand films, social edits, and streamer support.'},
    {title:'Pro Team Hire', desc:'Contract experienced rosters for BGMI, Valorant, CODM, Free Fire and scrims/tournaments.'},
    {title:'Talent Management', desc:'Creators, editors, casters and analysts under one roof.'},
  ]
  return (
    <section id="services" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-white">What We Do</h2>
          <p className={`text-sm ${ACCENT}`}>Built for competitive excellence</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f)=> (
            <div key={f.title} className="bg-black border border-white/10 rounded-xl p-6 hover:border-white/20 transition group">
              <h3 className="text-white font-semibold text-lg group-hover:opacity-90">{f.title}</h3>
              <p className="text-slate-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
