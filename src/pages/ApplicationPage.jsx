import { useState } from 'react'
import { CheckCircle, Send, User, Phone, BookOpen, FileText, MapPin, Briefcase, Loader2 } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

const REGIONS = ["Toshkent shahri", "Toshkent viloyati", "Samarqand", "Buxoro", "Farg'ona", "Andijon", "Namangan", "Qashqadaryo", "Surxondaryo", "Jizzax", "Sirdaryo", "Xorazm", "Navoiy", "Qoraqalpog'iston"]
const REGIONS_RU = ["г. Ташкент", "Ташкентская обл.", "Самарканд", "Бухара", "Фергана", "Андижан", "Наманган", "Кашкадарья", "Сурхандарья", "Джиззак", "Сырдарья", "Хорезм", "Навои", "Каракалпакстан"]

export default function ApplicationPage() {
  const { lang } = useLang()
  const tr = t[lang].form
  const [form, setForm] = useState({ firstName: '', lastName: '', subject: '', examType: '', region: '', workplace: '', phone1: '', phone2: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = lang === 'uz' ? 'Ismingizni kiriting' : 'Введите имя'
    if (!form.lastName.trim()) e.lastName = lang === 'uz' ? 'Familiyangizni kiriting' : 'Введите фамилию'
    if (!form.subject) e.subject = lang === 'uz' ? 'Fanni tanlang' : 'Выберите предмет'
    if (!form.examType) e.examType = lang === 'uz' ? 'Imtihon turini tanlang' : 'Выберите тип экзамена'
    if (!form.region.trim()) e.region = lang === 'uz' ? 'Viloyatni tanlang' : 'Выберите регион'
    if (!form.phone1.trim()) e.phone1 = lang === 'uz' ? 'Telefon raqamingizni kiriting' : 'Введите номер'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)

    try {
      const TELEGRAM_TOKEN = '8335951068:AAGOe5QSnA8ZeTGzWcqEeqnlTXekRcTendg';
      const TELEGRAM_CHAT_ID = '5990577564';

      const message = `🎓 <b>Yangi ariza!</b>\n\n👤 <b>Ism:</b> ${form.firstName} ${form.lastName}\n📚 <b>Fan:</b> ${form.subject}\n📝 <b>Imtihon:</b> ${form.examType}\n📍 <b>Viloyat:</b> ${form.region}\n🏢 <b>Ish joyi:</b> ${form.workplace || '—'}\n📞 <b>Telefon 1:</b> ${form.phone1}\n📞 <b>Telefon 2:</b> ${form.phone2 || '—'}`;

      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        })
      });
      const data = await res.json();
      if (!data.ok) console.error('Telegram xato:', data.description);
    } catch (error) {
      console.error('Error:', error)
    }

    setLoading(false)
    setSubmitted(true)
  }

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))
  const regions = lang === 'uz' ? REGIONS : REGIONS_RU

  if (submitted) return (
    <main style={{ paddingTop: 80 }}>
      <div className="success-page">
        <div className="success-card">
          <CheckCircle size={64} color="#10B981" style={{ margin: '0 auto 20px' }} />
          <h2 className="success-title">{tr.success}</h2>
          <p className="success-desc">{lang === 'uz' ? "24 soat ichida Telegram orqali siz bilan bog'lanamiz." : 'Мы свяжемся с вами через Telegram в течение 24 часов.'}</p>
          <div className="success-details">
            {[
              { Icon: User, val: form.firstName + ' ' + form.lastName },
              { Icon: BookOpen, val: form.subject },
              { Icon: FileText, val: form.examType },
              { Icon: Phone, val: form.phone1 },
            ].map(({ Icon, val }, i) => val && (
              <div key={i} className="success-detail"><Icon size={16} color="var(--primary)" /> <span>{val}</span></div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="https://t.me/parvozacademy" className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer" style={{ justifyContent: 'center' }}>
              <Send size={18} /> Telegram
            </a>
            <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', subject: '', examType: '', region: '', workplace: '', phone1: '', phone2: '' }) }}>
              {lang === 'uz' ? 'Yana ariza berish' : 'Отправить ещё одну заявку'}
            </button>
          </div>
        </div>
      </div>
      <style>{`
        .success-page { min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 40px 24px; background: var(--bg-soft); }
        .success-card { background: white; border-radius: var(--radius-xl); padding: 48px 40px; max-width: 480px; width: 100%; text-align: center; box-shadow: var(--shadow-xl); border: 2px solid rgba(16,185,129,0.15); }
        .success-title { font-size: 20px; color: var(--text); margin-bottom: 12px; }
        .success-desc { font-size: 15px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
        .success-details { background: var(--bg-soft); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 10px; text-align: left; }
        .success-detail { display: flex; gap: 10px; font-size: 15px; align-items: center; color: var(--text); }
      `}</style>
    </main>
  )

  return (
    <main style={{ paddingTop: 80 }}>
      <div className="page-header">
        <div className="container">
          <div className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>{tr.badge}</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px,5vw,52px)', marginBottom: 12 }}>{tr.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>{tr.subtitle}</p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="apply-layout">
            <div className="apply-form-wrap">
              <form onSubmit={handleSubmit} className="apply-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label"><User size={14} /> {tr.firstName} *</label>
                    <input className={`form-input ${errors.firstName ? 'input--error' : ''}`} placeholder={tr.firstName} value={form.firstName} onChange={update('firstName')} />
                    {errors.firstName && <span className="form-error">{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label"><User size={14} /> {tr.lastName} *</label>
                    <input className={`form-input ${errors.lastName ? 'input--error' : ''}`} placeholder={tr.lastName} value={form.lastName} onChange={update('lastName')} />
                    {errors.lastName && <span className="form-error">{errors.lastName}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label"><BookOpen size={14} /> {tr.subject} *</label>
                    <select className={`form-select ${errors.subject ? 'input--error' : ''}`} value={form.subject} onChange={update('subject')}>
                      <option value="">{tr.selectSubject}</option>
                      {tr.subjectsList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.subject && <span className="form-error">{errors.subject}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label"><FileText size={14} /> {tr.examType} *</label>
                    <select className={`form-select ${errors.examType ? 'input--error' : ''}`} value={form.examType} onChange={update('examType')}>
                      <option value="">{tr.selectExam}</option>
                      {tr.examTypes.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                    {errors.examType && <span className="form-error">{errors.examType}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label"><MapPin size={14} /> {tr.region} *</label>
                  <select className={`form-select ${errors.region ? 'input--error' : ''}`} value={form.region} onChange={update('region')}>
                    <option value="">{lang === 'uz' ? 'Viloyatni tanlang' : 'Выберите регион'}</option>
                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {errors.region && <span className="form-error">{errors.region}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label"><Briefcase size={14} /> {tr.workplace}</label>
                  <input className="form-input" placeholder={lang === 'uz' ? "Masalan: 45-maktab" : "Например: Школа №45"} value={form.workplace} onChange={update('workplace')} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label"><Phone size={14} /> {tr.phone1} *</label>
                    <input className={`form-input ${errors.phone1 ? 'input--error' : ''}`} type="tel" placeholder="+998 50 500 76 13" value={form.phone1} onChange={update('phone1')} />
                    {errors.phone1 && <span className="form-error">{errors.phone1}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label"><Phone size={14} /> {tr.phone2}</label>
                    <input className="form-input" type="tel" placeholder="+998 91 234 56 78" value={form.phone2} onChange={update('phone2')} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                  {loading ? <><Loader2 size={18} className="spin" /> {tr.submitting}</> : <>{tr.submit} <Send size={16} /></>}
                </button>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', marginTop: 10 }}>
                  {lang === 'uz' ? "🔒 Ma'lumotlaringiz xavfsiz saqlangan" : '🔒 Ваши данные надёжно защищены'}
                </p>
              </form>
            </div>

            <div className="apply-info">
              <div className="apply-info-card">
                <h3 style={{ marginBottom: 18 }}>{lang === 'uz' ? "Ro'yxatdan so'ng nima bo'ladi?" : 'Что после регистрации?'}</h3>
                <div className="apply-steps">
                  {(lang === 'uz' ? [
                    { Icon: Send, text: "Telegram orqali 24 soat ichida bog'lanamiz" },
                    { Icon: User, text: "Shaxsiy repetitor tayinlanadi" },
                    { Icon: FileText, text: "Bepul diagnostik test o'tkaziladi" },
                    { Icon: BookOpen, text: "O'qish rejasi tuziladi" },
                    { Icon: CheckCircle, text: "O'qish boshlanadi!" },
                  ] : [
                    { Icon: Send, text: 'Свяжемся через Telegram за 24 часа' },
                    { Icon: User, text: 'Назначается личный репетитор' },
                    { Icon: FileText, text: 'Проводится бесплатный диагностический тест' },
                    { Icon: BookOpen, text: 'Составляется план обучения' },
                    { Icon: CheckCircle, text: 'Начинается обучение!' },
                  ]).map(({ Icon, text }, i) => (
                    <div key={i} className="apply-step">
                      <div className="apply-step-icon"><Icon size={16} color="var(--primary)" /></div>
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="apply-info-card" style={{ background: 'linear-gradient(135deg,var(--primary),var(--primary-dark))', border: 'none' }}>
                <h4 style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 10, fontSize: 14 }}>
                  {lang === 'uz' ? '⚙️ Texnik tizim' : '⚙️ Техническая система'}
                </h4>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                  {lang === 'uz' ? "Ariza Google Sheets'ga saqlanadi va Telegram Bot orqali menejerlarga yuboriladi." : 'Заявка сохраняется в Google Sheets и отправляется менеджерам через Telegram Bot.'}
                </p>
                <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
                  {['Google Sheets', 'Telegram Bot', 'Excel'].map(tag => (
                    <span key={tag} style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.1)', borderRadius: 20, fontSize: 11, color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.15)' }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="apply-info-card" style={{ background: '#F0FFF4', border: '1px solid #D1FAE5' }}>
                <CheckCircle size={28} color="#10B981" style={{ marginBottom: 10 }} />
                <h4 style={{ color: '#065F46', marginBottom: 8 }}>{lang === 'uz' ? '100% Kafolat' : '100% Гарантия'}</h4>
                <p style={{ fontSize: 13, color: '#047857', lineHeight: 1.7 }}>
                  {lang === 'uz' ? "Natija bo'lmasa — to'liq pul qaytariladi!" : 'Нет результата — полный возврат денег!'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header { background: linear-gradient(135deg, var(--primary), var(--primary-dark)); padding: 64px 0 48px; text-align: center; color: white; }
        .apply-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: flex-start; }
        .apply-form-wrap { background: white; border-radius: var(--radius-xl); padding: 36px; box-shadow: var(--shadow-lg); border: 1px solid var(--border); }
        .apply-form { display: flex; flex-direction: column; gap: 18px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-label { display: flex; align-items: center; gap: 5px; }
        .input--error { border-color: #EF4444 !important; }
        .input--error:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.1) !important; }
        .form-error { font-size: 12px; color: #EF4444; margin-top: 2px; }
        .spin { animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .apply-info { display: flex; flex-direction: column; gap: 16px; }
        .apply-info-card { background: white; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 22px; }
        .apply-steps { display: flex; flex-direction: column; gap: 12px; }
        .apply-step { display: flex; gap: 10px; align-items: flex-start; }
        .apply-step-icon { width: 32px; height: 32px; border-radius: 50%; background: rgba(108,60,225,0.08); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        @media (max-width: 900px) { .apply-layout { grid-template-columns: 1fr; } .apply-form-wrap { padding: 24px; } }
        @media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  )
}
