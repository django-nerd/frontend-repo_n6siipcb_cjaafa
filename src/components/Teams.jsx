import { useEffect, useState } from 'react'

const ACCENT = 'text-[#c8a24d]'

export default function Teams(){
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchTeams = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/teams`)
        if (res.ok){
          const data = await res.json()
          setTeams(data)
        }
      } catch(err){
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchTeams()
  },[])

  return (
    <section id="teams" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-white">Our Pro Teams</h2>
          <p className={`text-sm ${ACCENT}`}>BGMI • Valorant • CODM • Free Fire</p>
        </div>
        {loading ? (
          <p className="text-slate-400">Loading teams...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.length === 0 && (
              <div className="col-span-full text-slate-400">No teams published yet.</div>
            )}
            {teams.map(team => (
              <div key={team._id} className="bg-black border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition">
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg group-hover:opacity-90">{team.name}</h3>
                    <span className="text-xs px-2 py-1 rounded bg-white/10 text-white uppercase tracking-wide">{team.game}</span>
                  </div>
                  {team.description && <p className="mt-3 text-slate-300 text-sm">{team.description}</p>}
                  <div className="mt-4 text-xs text-slate-400">Status: {team.availability || 'available'}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
