export default function Services(){
  const features = [
    {title:'Content Creation', desc:'High-production gameplay highlights, brand films, social edits, and streamer support.'},
    {title:'Pro Team Hire', desc:'Contract experienced rosters for BGMI, Valorant, CODM, Free Fire and scrims/tournaments.'},
    {title:'Talent Management', desc:'Creators, editors, casters and analysts under one roof.'},
  ]
  return (
    <section id="services" className="py-16 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f)=> (
            <div key={f.title} className="bg-slate-800/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="text-slate-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
