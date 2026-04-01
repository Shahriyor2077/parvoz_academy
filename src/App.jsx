import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import {
  GraduationCap, Menu, X, CheckCircle, Send,
  Phone, Clock, Users, Award, Gift, Loader2, Lock,
} from 'lucide-react'
import VacancyPage from './pages/VacancyPage.jsx'

// ── Data ─────────────────────────────────────────────────────────────────────

const SERTIFIKAT_FANLAR = [
  "Ona tili", "Matematika", "Kimyo", "Geografiya", "Rus tili",
  "Ingliz tili", "Turk tili", "Biologiya", "Fizika", "Tarix",
  "Menejerlik", "Boshqa fanlar",
]

const ATTESTATSIYA_FANLAR = [
  "Ona tili", "Matematika", "Informatika", "Kimyo", "Geografiya",
  "Rus tili", "Ingliz tili", "Biologiya", "Fizika", "Musiqa",
  "Jismoniy tarbiya", "Huquq", "Texnologiya", "Tarix",
  "Boshlang'ich ta'lim", "Psixologiya", "Boshqa fanlar",
]

const VILOYATLAR = [
  "Toshkent shahri", "Toshkent viloyati", "Samarqand", "Buxoro",
  "Farg'ona", "Andijon", "Namangan", "Qashqadaryo", "Surxondaryo",
  "Jizzax", "Sirdaryo", "Xorazm", "Navoiy", "Qoraqalpog'iston",
]

const FEATURES = [
  { Icon: Award, title: "100% Natija kafolati", desc: "Natija bo'lmasa — to'liq pul qaytariladi" },
  { Icon: Users, title: "Alohida yordamchi o'qituvchi", desc: "Har bir o'quvchi bilan shaxsiy yordamchi biriktiriladi" },
  { Icon: Clock, title: "24/7 Yordam", desc: "Istalgan vaqt savollaringizga javob beramiz" },
  { Icon: Gift, title: "Qimmatbaho sovg'alar", desc: "Yuqori ball to'plaganlarga esdalik sovg'alar taqdim etiladi" },
]

// ── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#kurslar', label: 'Kurslar' },
    { href: '#narxlar', label: 'Narxlar' },
    { href: '#oqituvchilar', label: "O'qituvchilar" },
    { href: '#ariza', label: 'Ariza' },
    { href: '/vakansiya', label: 'Vakansiya', external: true },
    { href: '#kontakt', label: 'Kontakt' },
  ]
  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <div className="navbar__logo-icon">
            <GraduationCap size={22} color="white" strokeWidth={2.5} />
          </div>
          <span className="navbar__logo-text">PARVOZ</span>
        </a>
        <ul className={`navbar__links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              {l.external
                ? <Link to={l.href} className="navbar__link" onClick={() => setOpen(false)}>{l.label}</Link>
                : <a href={l.href} className="navbar__link" onClick={() => setOpen(false)}>{l.label}</a>
              }
            </li>
          ))}
        </ul>
        <div className="navbar__right">
          <a href="#ariza" className="btn btn-primary navbar__cta" onClick={() => setOpen(false)}>
            Ariza qoldiring
          </a>
          <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="badge">PARVOZ Online Academy</div>
        <h1 className="hero__title">
          Sertifikat va attestatsiyaga<br />
          <span className="gradient-text">kafolatli tayyorlov</span>
        </h1>
        <p className="hero__desc">
          <strong>Milliy sertifikat 200 000 so'm</strong>, <strong>Attestatsiya 100 000 so'm</strong> —
          barcha fanlar bo'yicha professional tayyorlov
        </p>
        <div className="hero__actions">
          <a href="#ariza" className="btn btn-primary btn-lg">Ariza qoldirish</a>
          <a href="#kurslar" className="btn btn-secondary btn-lg">Kurslarni ko'rish</a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">100%</span>
            <span className="hero__stat-label">Natija kafolati</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">24/7</span>
            <span className="hero__stat-label">Yordam</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">100k-200k</span>
            <span className="hero__stat-label">So'm / oy</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Courses ──────────────────────────────────────────────────────────────────

function Courses() {
  return (
    <section id="kurslar" className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Kurslar</div>
          <h2 className="section-title">Barcha fanlar bo'yicha tayyorlov</h2>
          <p className="section-desc">
            Milliy sertifikat va attestatsiya imtihonlariga professional tayyorlov
          </p>
        </div>
        <div className="courses__grid">
          <div className="course-card">
            <div className="course-card__header" style={{ background: 'linear-gradient(135deg,#6C3CE1,#4B2AB0)' }}>
              <div className="course-card__title">Milliy Sertifikat</div>
              <p className="course-card__sub">Barcha fanlar bo'yicha tayyorgarlik</p>
            </div>
            <ul className="fan-list">
              {SERTIFIKAT_FANLAR.map(f => (
                <li key={f} className="fan-item">
                  <CheckCircle size={14} color="#6C3CE1" style={{ flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="course-card">
            <div className="course-card__header" style={{ background: 'linear-gradient(135deg,#4ECDC4,#2aada4)' }}>
              <div className="course-card__title">Attestatsiya</div>
              <p className="course-card__sub">O'qituvchilar attestatsiya imtihoni</p>
            </div>
            <ul className="fan-list">
              {ATTESTATSIYA_FANLAR.map(f => (
                <li key={f} className="fan-item">
                  <CheckCircle size={14} color="#4ECDC4" style={{ flexShrink: 0 }} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Features / Pricing ───────────────────────────────────────────────────────

function Features() {
  return (
    <section id="narxlar" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Narxlar va imkoniyatlar</div>
          <h2 className="section-title">100 000 — 200 000 so'm / oy</h2>
          <p className="section-desc">Milliy sertifikat 200 000 so'm, Attestatsiya 100 000 so'm — kafolatli natija</p>
        </div>
        <div className="features__grid">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon"><Icon size={24} color="var(--primary)" /></div>
              <h3 className="feature-title">{title}</h3>
              <p className="feature-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Teachers ─────────────────────────────────────────────────────────────────

function Teachers() {
  return (
    <section id="oqituvchilar" className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Jamoamiz</div>
          <h2 className="section-title">Asosiy va yordamchi o'qituvchilar</h2>
          <p className="section-desc">Tajribali o'qituvchilar jamoasi</p>
        </div>
        <div className="teachers__grid">
          <div className="teacher-type-card">
            <div className="teacher-type-icon" style={{ background: 'linear-gradient(135deg,#6C3CE1,#4B2AB0)' }}>
              <GraduationCap size={28} color="white" />
            </div>
            <h3 className="teacher-type-title">Asosiy o'qituvchilar</h3>
            <p className="teacher-type-desc">
              Har bir fan bo'yicha tajribali asosiy o'qituvchi dars olib boradi.
            </p>
          </div>
          <div className="teacher-type-card">
            <div className="teacher-type-icon" style={{ background: 'linear-gradient(135deg,#4ECDC4,#2aada4)' }}>
              <Users size={28} color="white" />
            </div>
            <h3 className="teacher-type-title">Yordamchi o'qituvchilar</h3>
            <p className="teacher-type-desc">
              Har bir o'quvchiga <strong>alohida yordamchi o'qituvchi</strong> biriktiriladi —
              savollar, vazifalar va mustahkamlash uchun 24/7 yordam beradi.
            </p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a
            href="https://t.me/PARVOZONLINE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Send size={15} /> Yangiliklar uchun Telegramga obuna bo'ling
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Application Form ─────────────────────────────────────────────────────────

function ApplicationForm() {
  const [imtihon, setImtihon] = useState('')
  const [form, setForm] = useState({ ism: '', familiya: '', fan: '', telegram: '', telefon: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const fanlar = imtihon === 'sertifikat' ? SERTIFIKAT_FANLAR
    : imtihon === 'attestatsiya' ? ATTESTATSIYA_FANLAR
      : []

  const validate = () => {
    const e = {}
    if (!form.ism.trim()) e.ism = "Ismingizni kiriting"
    if (!form.familiya.trim()) e.familiya = "Familiyangizni kiriting"
    if (!imtihon) e.imtihon = "Imtihon turini tanlang"
    if (!form.fan) e.fan = "Fanni tanlang"
    if (!form.telegram.trim()) e.telegram = "Telegram username kiriting"
    if (!form.telefon.trim()) e.telefon = "Telefon raqamingizni kiriting"
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)

    try {
      // Google Sheets ga yuborish
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwzV4SwedeAGcj8POsZQ_Fl6Hi9D3aNM60go9QW75sCmfmO31rygV0uhTE4opdP3LBIUQ/exec';

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ism: form.ism,
          familiya: form.familiya,
          imtihon: imtihon === 'sertifikat' ? 'Milliy Sertifikat' : 'Attestatsiya',
          fan: form.fan,
          telegram: form.telegram,
          telefon: form.telefon
        })
      });

      console.log('Ariza Google Sheets ga yuborildi:', { ...form, imtihon })
    } catch (error) {
      console.error('Xatolik:', error)
    }

    setLoading(false)
    setSubmitted(true)
  }

  const upd = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }))

  if (submitted) return (
    <section id="ariza" className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="success-box">
          <CheckCircle size={56} color="#10B981" />
          <h2>Ariza qabul qilindi!</h2>
          <p>24 soat ichida Telegram orqali siz bilan bog'lanamiz.</p>
          <a
            href="https://t.me/PARVOZONLINE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <Send size={16} /> Telegram kanal
          </a>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setSubmitted(false)
              setForm({ ism: '', familiya: '', fan: '', telegram: '', telefon: '' })
              setImtihon('')
            }}
          >
            Yana ariza berish
          </button>
        </div>
      </div>
    </section>
  )

  return (
    <section id="ariza" className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Ariza</div>
          <h2 className="section-title">Ariza qoldiring</h2>
          <p className="section-desc">
            Formani to'ldiring — 24 soat ichida Telegram orqali bog'lanamiz
          </p>
        </div>
        <form className="app-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Ism *</label>
              <input
                className={`form-input${errors.ism ? ' err' : ''}`}
                placeholder="Ismi"
                value={form.ism}
                onChange={upd('ism')}
              />
              {errors.ism && <span className="form-error">{errors.ism}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Familiya *</label>
              <input
                className={`form-input${errors.familiya ? ' err' : ''}`}
                placeholder="Familiyasi"
                value={form.familiya}
                onChange={upd('familiya')}
              />
              {errors.familiya && <span className="form-error">{errors.familiya}</span>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Imtihon turi *</label>
            <div className="imtihon-types">
              <button
                type="button"
                className={`imtihon-btn${imtihon === 'sertifikat' ? ' active' : ''}`}
                onClick={() => { setImtihon('sertifikat'); setForm(f => ({ ...f, fan: '' })) }}
              >
                Milliy Sertifikat
              </button>
              <button
                type="button"
                className={`imtihon-btn${imtihon === 'attestatsiya' ? ' active' : ''}`}
                onClick={() => { setImtihon('attestatsiya'); setForm(f => ({ ...f, fan: '' })) }}
              >
                Attestatsiya
              </button>
            </div>
            {errors.imtihon && <span className="form-error">{errors.imtihon}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Fan *</label>
              <select
                className={`form-select${errors.fan ? ' err' : ''}`}
                value={form.fan}
                onChange={upd('fan')}
                disabled={!imtihon}
              >
                <option value="">Fanni tanlang</option>
                {fanlar.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
              {errors.fan && <span className="form-error">{errors.fan}</span>}
            </div>
            <div className="form-group">
              <label className="form-label">Telegram *</label>
              <input
                className={`form-input${errors.telegram ? ' err' : ''}`}
                placeholder="@username"
                value={form.telegram}
                onChange={upd('telegram')}
              />
              {errors.telegram && <span className="form-error">{errors.telegram}</span>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Telefon raqam *</label>
            <input
              className={`form-input${errors.telefon ? ' err' : ''}`}
              type="tel"
              placeholder="+998 50 500 76 13"
              value={form.telefon}
              onChange={upd('telefon')}
            />
            {errors.telefon && <span className="form-error">{errors.telefon}</span>}
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
      </div>
    </section>
  )
}

// ── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="container">
        <div className="section-header">
          <div className="badge">Kontakt</div>
          <h2 className="section-title">Bog'lanish</h2>
        </div>
        <div className="contact__grid">
          <a href="https://t.me/PARVOZONLINE" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Send size={28} color="#26A5E4" />
            <div>
              <div className="contact-card__label">Telegram</div>
              <div className="contact-card__val">@PARVOZONLINE</div>
            </div>
          </a>
          <a href="tel:+998505007613" className="contact-card">
            <Phone size={28} color="#10B981" />
            <div>
              <div className="contact-card__label">Telefon</div>
              <div className="contact-card__val">+998 50 500 76 13</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          <div className="footer__logo-icon">
            <GraduationCap size={18} color="white" strokeWidth={2.5} />
          </div>
          <span>PARVOZ Online Academy</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
          © {new Date().getFullYear()} PARVOZ Online Academy. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  )
}

// ── App ──────────────────────────────────────────────────────────────────────

function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Features />
        <Teachers />
        <ApplicationForm />
        <Contact />
      </main>
      <Footer />

      <a href="https://t.me/PARVOZONLINE" className="fab" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
        <Send size={20} />
      </a>

      <style>{`
        /* ── Navbar ── */
        .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); }
        .navbar__inner { display: flex; align-items: center; justify-content: space-between; height: 64px; position: relative; }
        .navbar__logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .navbar__logo-icon { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, var(--primary), var(--accent)); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .navbar__logo-text { font-family: var(--font-heading); font-weight: 800; font-size: 18px; color: var(--text); letter-spacing: -0.5px; }
        .navbar__links { display: flex; align-items: center; gap: 4px; list-style: none; position: absolute; left: 50%; transform: translateX(-50%); }
        .navbar__link { padding: 6px 12px; color: var(--text-secondary); text-decoration: none; font-size: 14px; border-radius: var(--radius-sm); transition: var(--transition); }
        .navbar__link:hover { color: var(--primary); background: rgba(108,60,225,0.06); }
        .navbar__right { display: flex; align-items: center; gap: 8px; }
        .hamburger { display: none; background: none; border: none; cursor: pointer; color: var(--text); padding: 4px; }
        @media (max-width: 820px) {
          .navbar__cta { display: none; }
          .hamburger { display: flex; }
          .navbar__links { display: none; position: absolute; top: 64px; left: 0; right: 0; transform: none; background: white; border-bottom: 1px solid var(--border); flex-direction: column; padding: 12px 16px 20px; gap: 4px; align-items: stretch; box-shadow: var(--shadow-md); }
          .navbar__links.open { display: flex; }
        }

        /* ── Hero ── */
        .hero { padding: 120px 0 80px; text-align: center; background: linear-gradient(180deg, #f0eaff 0%, white 100%); }
        .hero__inner { display: flex; flex-direction: column; align-items: center; }
        .hero__title { font-size: clamp(30px, 5vw, 54px); font-family: var(--font-heading); font-weight: 800; color: var(--text); line-height: 1.15; margin: 16px 0 20px; }
        .gradient-text { background: linear-gradient(135deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero__desc { font-size: 18px; color: var(--text-secondary); max-width: 520px; margin: 0 auto 36px; line-height: 1.7; }
        .hero__actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 52px; }
        .hero__stats { display: flex; gap: 48px; justify-content: center; flex-wrap: wrap; }
        .hero__stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .hero__stat-num { font-family: var(--font-heading); font-size: 30px; font-weight: 800; color: var(--primary); }
        .hero__stat-label { font-size: 13px; color: var(--text-muted); }

        /* ── Section common ── */
        .section-header { text-align: center; margin-bottom: 48px; }
        .section-title { font-size: clamp(24px, 4vw, 40px); font-family: var(--font-heading); font-weight: 800; color: var(--text); margin: 12px 0 14px; }
        .section-desc { font-size: 16px; color: var(--text-secondary); max-width: 540px; margin: 0 auto; line-height: 1.7; }

        /* ── Courses ── */
        .courses__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 700px) { .courses__grid { grid-template-columns: 1fr; } }
        .course-card { border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-md); background: white; border: 1px solid var(--border); }
        .course-card__header { padding: 28px 28px 22px; color: white; }
        .course-card__title { font-family: var(--font-heading); font-size: 22px; font-weight: 800; margin-bottom: 6px; }
        .course-card__sub { font-size: 14px; opacity: 0.8; }
        .fan-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 24px 28px; list-style: none; }
        .fan-item { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--text-secondary); }
        @media (max-width: 480px) { .fan-list { grid-template-columns: 1fr; } }

        /* ── Features ── */
        .features__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        @media (max-width: 640px) { .features__grid { grid-template-columns: 1fr; } }
        .feature-card { background: white; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 28px; box-shadow: var(--shadow-sm); }
        .feature-icon { width: 52px; height: 52px; border-radius: var(--radius-md); background: rgba(108,60,225,0.08); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .feature-title { font-family: var(--font-heading); font-size: 17px; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .feature-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

        /* ── Teachers ── */
        .teachers__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 740px; margin: 0 auto; }
        @media (max-width: 600px) { .teachers__grid { grid-template-columns: 1fr; } }
        .teacher-type-card { background: white; border: 1px solid var(--border); border-radius: var(--radius-xl); padding: 32px 28px; text-align: center; box-shadow: var(--shadow-md); display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .teacher-type-icon { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 4px; }
        .teacher-type-title { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: var(--text); }
        .teacher-type-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }


        /* ── Form ── */
        .app-form { max-width: 600px; margin: 0 auto; background: white; border-radius: var(--radius-xl); padding: 40px; box-shadow: var(--shadow-lg); border: 1px solid var(--border); display: flex; flex-direction: column; gap: 18px; }
        @media (max-width: 560px) { .app-form { padding: 24px; } }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 560px) { .form-row { grid-template-columns: 1fr; } }
        .imtihon-types { display: flex; gap: 10px; }
        .imtihon-btn { flex: 1; padding: 13px; border: 2px solid var(--border); border-radius: var(--radius-md); background: white; cursor: pointer; font-size: 14px; font-weight: 600; color: var(--text-secondary); transition: var(--transition); }
        .imtihon-btn.active { border-color: var(--primary); background: rgba(108,60,225,0.06); color: var(--primary); }
        .err { border-color: #EF4444 !important; }
        .form-note { font-size: 12px; color: var(--text-muted); text-align: center; }
        .spin { animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Success ── */
        .success-box { max-width: 480px; margin: 0 auto; background: white; border-radius: var(--radius-xl); padding: 52px 40px; text-align: center; box-shadow: var(--shadow-xl); display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .success-box h2 { font-family: var(--font-heading); font-size: 24px; color: var(--text); }
        .success-box p { font-size: 15px; color: var(--text-secondary); }

        /* ── Contact ── */
        .contact__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; max-width: 680px; margin: 0 auto; }
        @media (max-width: 560px) { .contact__grid { grid-template-columns: 1fr; } }
        .contact-card { display: flex; align-items: center; gap: 16px; background: white; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 22px 24px; text-decoration: none; transition: var(--transition); box-shadow: var(--shadow-sm); }
        .contact-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
        .contact-card__label { font-size: 12px; color: var(--text-muted); margin-bottom: 3px; }
        .contact-card__val { font-size: 15px; font-weight: 600; color: var(--text); }

        /* ── Footer ── */
        .footer { background: linear-gradient(135deg, #1A1033, #0D0720); padding: 28px 0; }
        .footer__inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
        .footer__logo { display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 600; }
        .footer__logo-icon { width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, var(--primary), var(--accent)); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        /* ── FAB ── */
        .fab { position: fixed; bottom: 28px; right: 28px; width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, #26A5E4, #0088CC); display: flex; align-items: center; justify-content: center; color: white; text-decoration: none; box-shadow: 0 4px 20px rgba(38,165,228,0.45); z-index: 99; transition: var(--transition); }
        .fab:hover { transform: scale(1.1); }
      `}</style>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/vakansiya" element={<VacancyPage />} />
    </Routes>
  )
}
