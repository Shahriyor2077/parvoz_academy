import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GraduationCap, CheckCircle, Send, Phone,
  User, BookOpen, FileText, Briefcase, MessageCircle,
  Loader2, Lock, ArrowLeft,
} from 'lucide-react'

const MA_LUMOT_DARAJALARI = ["Bakalavr", "Magistr", "Oliy ma'lumot (tugallanmagan)", "O'rta maxsus"]
const SERTIFIKAT_DARAJALARI = ["1-toifa", "2-toifa", "Oliy toifa", "Toifasiz"]

export default function VacancyPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ fish: '', fan: '', malumot: '', sertifikat: '', telefon: '', telegram: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.fish.trim()) e.fish = "FISh ni kiriting"
    if (!form.fan.trim()) e.fan = "Fanini kiriting"
    if (!form.malumot) e.malumot = "Ma'lumot darajasini tanlang"
    if (!form.telefon.trim()) e.telefon = "Telefon raqamini kiriting"
    if (!form.telegram.trim()) e.telegram = "Telegram username kiriting"
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    console.log('Vakansiya:', form)
    setLoading(false)
    setSubmitted(true)
  }

  const upd = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }))

  return (
    <main className="vac-page">
      {/* Topbar */}
      <div className="vac-topbar">
        <div className="container vac-topbar__inner">
          <button className="vac-back" onClick={() => navigate('/')}>
            <ArrowLeft size={15} /> Qaytish
          </button>
          <div className="vac-topbar__logo">
            <div className="vac-logo-icon">
              <GraduationCap size={18} color="white" strokeWidth={2.5} />
            </div>
            <span>PARVOZ Online Academy</span>
          </div>
          <div style={{ width: 90 }} />
        </div>
      </div>

      {/* Header */}
      <div className="vac-header">
        <div className="container">
          <div className="vac-badge">Vakansiya</div>
          <h1 className="vac-title">O'qituvchi bo'lish uchun ariza</h1>
          <p className="vac-subtitle">
            Tajribali o'qituvchilarni qabul qilamiz — asosiy va yordamchi o'qituvchi sifatida
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="vac-body">
        <div className="container">
          {submitted ? (
            <div className="success-box">
              <CheckCircle size={56} color="#10B981" />
              <h2>Ariza qabul qilindi!</h2>
              <p>Tez orada Telegram orqali bog'lanamiz.</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ fish: '', fan: '', malumot: '', sertifikat: '', telefon: '', telegram: '' })
                  }}
                >
                  Yana ariza berish
                </button>
                <button className="btn btn-primary" onClick={() => navigate('/')}>
                  Asosiy sahifa
                </button>
              </div>
            </div>
          ) : (
            <form className="vac-form" onSubmit={handleSubmit} noValidate>

              <div className="form-group">
                <label className="form-label"><User size={14} /> FISh *</label>
                <input
                  className={`form-input${errors.fish ? ' err' : ''}`}
                  placeholder="Familiya Ism Sharif"
                  value={form.fish}
                  onChange={upd('fish')}
                />
                {errors.fish && <span className="form-error">{errors.fish}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label"><BookOpen size={14} /> Dars beradigan fani *</label>
                  <input
                    className={`form-input${errors.fan ? ' err' : ''}`}
                    placeholder="Masalan: Matematika"
                    value={form.fan}
                    onChange={upd('fan')}
                  />
                  {errors.fan && <span className="form-error">{errors.fan}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label"><FileText size={14} /> Ma'lumoti *</label>
                  <select
                    className={`form-select${errors.malumot ? ' err' : ''}`}
                    value={form.malumot}
                    onChange={upd('malumot')}
                  >
                    <option value="">Tanlang</option>
                    {MA_LUMOT_DARAJALARI.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  {errors.malumot && <span className="form-error">{errors.malumot}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label"><Briefcase size={14} /> Sertifikat darajasi</label>
                  <select className="form-select" value={form.sertifikat} onChange={upd('sertifikat')}>
                    <option value="">Tanlang (ixtiyoriy)</option>
                    {SERTIFIKAT_DARAJALARI.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label"><Phone size={14} /> Telefon raqam *</label>
                  <input
                    className={`form-input${errors.telefon ? ' err' : ''}`}
                    type="tel"
                    placeholder="+998 50 500 76 13"
                    value={form.telefon}
                    onChange={upd('telefon')}
                  />
                  {errors.telefon && <span className="form-error">{errors.telefon}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label"><MessageCircle size={14} /> Telegram *</label>
                <input
                  className={`form-input${errors.telegram ? ' err' : ''}`}
                  placeholder="@username"
                  value={form.telegram}
                  onChange={upd('telegram')}
                />
                {errors.telegram && <span className="form-error">{errors.telegram}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={loading}
              >
                {loading
                  ? <><Loader2 size={18} className="spin" /> Yuborilmoqda...</>
                  : <><Send size={16} /> Ariza yuborish</>
                }
              </button>
              <p className="form-note"><Lock size={12} /> Ma'lumotlaringiz xavfsiz saqlangan</p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .vac-page { min-height: 100vh; background: var(--bg-soft); }

        /* Topbar */
        .vac-topbar { background: rgba(255,255,255,0.08); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255,255,255,0.1); background: linear-gradient(135deg, var(--primary-dark), #2a0f7a); }
        .vac-topbar__inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
        .vac-topbar__logo { display: flex; align-items: center; gap: 9px; color: white; font-size: 14px; font-weight: 700; letter-spacing: -0.2px; }
        .vac-logo-icon { width: 32px; height: 32px; border-radius: 9px; background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1)); border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; }
        .vac-back { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.18); color: rgba(255,255,255,0.9); padding: 7px 14px; border-radius: var(--radius-full); font-size: 13px; font-weight: 500; cursor: pointer; transition: var(--transition); width: 90px; }
        .vac-back:hover { background: rgba(255,255,255,0.2); color: white; }

        /* Header hero */
        .vac-header { background: linear-gradient(160deg, var(--primary) 0%, #8b5cf6 100%); padding: 52px 0 56px; text-align: center; color: white; }
        .vac-badge { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; font-size: 12px; font-weight: 600; letter-spacing: 0.5px; padding: 5px 14px; border-radius: var(--radius-full); margin-bottom: 18px; text-transform: uppercase; }
        .vac-title { font-family: var(--font-heading); font-size: clamp(24px, 4vw, 40px); font-weight: 800; margin-bottom: 12px; line-height: 1.2; }
        .vac-subtitle { font-size: 16px; color: rgba(255,255,255,0.78); max-width: 460px; margin: 0 auto; line-height: 1.65; }
        .vac-body { padding: 48px 0 80px; }
        .vac-form { max-width: 600px; margin: 0 auto; background: white; border-radius: var(--radius-xl); padding: 40px; box-shadow: var(--shadow-lg); border: 1px solid var(--border); display: flex; flex-direction: column; gap: 18px; }
        @media (max-width: 560px) { .vac-form { padding: 24px; } .form-row { grid-template-columns: 1fr !important; } }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .err { border-color: #EF4444 !important; }
        .spin { animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .success-box { max-width: 480px; margin: 0 auto; background: white; border-radius: var(--radius-xl); padding: 52px 40px; text-align: center; box-shadow: var(--shadow-xl); display: flex; flex-direction: column; align-items: center; gap: 14px; }
        .success-box h2 { font-family: var(--font-heading); font-size: 24px; color: var(--text); }
        .success-box p { font-size: 15px; color: var(--text-secondary); }
      `}</style>
    </main>
  )
}
