import { useState } from 'react'

export default function Apply(){
  const initial = { name:'', email:'', phone:'', type:'hire-team', game:'', message:'', budget:'', role:'' }
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try{
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/apply`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      if(!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus('success')
      setForm(initial)
    }catch(err){
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="apply" className="py-16 bg-slate-900">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Hire or Apply</h2>
        <p className="text-slate-300 mb-6">Tell us what you need — hire a roster, commission content, or apply to join.
        </p>
        <form onSubmit={submit} className="bg-slate-800/60 border border-white/10 rounded-xl p-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            <input type="email" className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
            <select className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-white" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
              <option value="hire-team">Hire Team</option>
              <option value="content">Content Creation</option>
              <option value="join-team">Join Team</option>
            </select>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="Game (BGMI, Valorant...)" value={form.game} onChange={e=>setForm({...form,game:e.target.value})} />
            <input className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="Budget (optional)" value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="Preferred role (if joining)" value={form.role} onChange={e=>setForm({...form,role:e.target.value})} />
          </div>
          <textarea rows={4} className="bg-slate-900/60 border border-white/10 rounded-md px-3 py-2 text-white placeholder-slate-400" placeholder="Tell us more..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}></textarea>
          <button disabled={status==='sending'} className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold">
            {status==='sending'? 'Sending...':'Submit'}
          </button>
          {status==='success' && <p className="text-green-400">Thanks! Well get back to you shortly.</p>}
          {status==='error' && <p className="text-red-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  )
}
