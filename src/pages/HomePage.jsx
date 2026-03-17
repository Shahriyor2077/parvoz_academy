import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Target, Users, Clock, Trophy, BarChart2, Wallet, ArrowRight, CheckCircle, Star, Zap, ChevronRight, Send } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

const WHY_ICONS = [Target, Users, Clock, Trophy, BarChart2, Wallet]

function Hero({ tr }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / 1600, 1)
      setCount(Math.floor(p * 5000))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [])
  return (
    <section className="hero-section">
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="container hero-container">
        <div className="badge animate-fadeInUp">{tr.hero.badge}</div>
        <h1 className="hero-title animate-fadeInUp">
          {tr.hero.title}<br />
          <span className="text-gradient">{tr.hero.titleHighlight}</span>
        </h1>
        <p className="hero-subtitle animate-fadeInUp">{tr.hero.subtitle}</p>
        <div className="hero-actions animate-fadeInUp">
          <Link to="/apply" className="btn btn-primary btn-lg">
            <Zap size={18} /> {tr.hero.cta1}
          </Link>
          <Link to="/courses" className="btn btn-secondary btn-lg">
            {tr.hero.cta2} <ArrowRight size={16} />
          </Link>
        </div>
        <div className="hero-stats animate-fadeInUp">
          {[
            { num: count.toLocaleString() + '+', label: tr.hero.stat1 },
            { num: '100%', label: tr.hero.stat2 },
            { num: '87+', label: tr.hero.stat3 },
            { num: '5+', label: tr.hero.stat4 },
          ].map((s, i) => (
            <div key={i} className="hero-stat-wrap">
              {i > 0 && <div className="hero-stat__divider" />}
              <div className="hero-stat">
                <span className="hero-stat__num">{s.num}</span>
                <span className="hero-stat__label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .hero-section { min-height: 100vh; position: relative; overflow: hidden; display: flex; align-items: center; padding-top: 90px; background: linear-gradient(135deg, #F8F7FF 0%, #EDE9FE 60%, #F0FDFA 100%); }
        .hero-orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }
        .hero-orb--1 { width: 500px; height: 500px; background: rgba(108,60,225,0.14); top: -120px; right: -80px; }
        .hero-orb--2 { width: 350px; height: 350px; background: rgba(78,205,196,0.1); bottom: -60px; left: -60px; }
        .hero-container { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 48px 0 80px; position: relative; z-index: 1; }
        .hero-title { font-size: clamp(36px,5.5vw,64px); font-family: var(--font-heading); font-weight: 800; line-height: 1.1; margin: 12px 0 20px; letter-spacing: -2px; max-width: 780px; }
        .hero-subtitle { font-size: 18px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 36px; max-width: 540px; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; margin-bottom: 48px; }
        .hero-stats { display: flex; align-items: center; flex-wrap: wrap; justify-content: center; padding: 22px 32px; background: white; border-radius: var(--radius-xl); border: 1px solid var(--border); box-shadow: var(--shadow-md); }
        .hero-stat-wrap { display: flex; align-items: center; }
        .hero-stat { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 0 20px; }
        .hero-stat__num { font-family: var(--font-heading); font-size: 26px; font-weight: 800; color: var(--primary); line-height: 1; }
        .hero-stat__label { font-size: 12px; color: var(--text-secondary); font-weight: 500; }
        .hero-stat__divider { width: 1px; height: 36px; background: var(--border); }
        @media (max-width: 640px) { .hero-actions { flex-direction: column; align-items: center; } .hero-stat { padding: 0 12px; } .hero-stat__num { font-size: 20px; } }
      `}</style>
    </section>
  )
}

function SubjectsSection({ tr }) {
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">{tr.subjects.badge}</div>
          <h2>{tr.subjects.title}</h2>
          <p>{tr.subjects.subtitle}</p>
        </div>
        <div className="subjects-grid">
          {tr.subjects.subjects.map((s, i) => (
            <Link to="/courses" key={i} className="subject-card">
              <div className="subject-icon" style={{ background: s.color + '12', color: s.color }}>{s.icon}</div>
              <span className="subject-name">{s.name}</span>
              <ChevronRight size={15} color={s.color} className="subject-arrow" />
            </Link>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: 36 }}>
          <Link to="/courses" className="btn btn-secondary">{tr.subjects.viewAll} <ArrowRight size={16} /></Link>
        </div>
      </div>
      <style>{`
        .subjects-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
        .subject-card { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border: 1.5px solid var(--border); border-radius: var(--radius-md); background: white; transition: var(--transition); text-decoration: none; color: var(--text); }
        .subject-card:hover { border-color: var(--primary); box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .subject-card .subject-arrow { opacity: 0; transition: opacity 0.2s, transform 0.2s; margin-left: auto; }
        .subject-card:hover .subject-arrow { opacity: 1; transform: translateX(3px); }
        .subject-icon { width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
        .subject-name { flex: 1; font-size: 13px; font-weight: 600; }
        @media (max-width: 1024px) { .subjects-grid { grid-template-columns: repeat(3,1fr); } }
        @media (max-width: 640px) { .subjects-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>
    </section>
  )
}

function WhySection({ tr }) {
  return (
    <section className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">{tr.why.badge}</div>
          <h2>{tr.why.title} <span className="text-gradient">{tr.why.titleHighlight}</span></h2>
        </div>
        <div className="why-grid">
          {tr.why.features.map((f, i) => {
            const Icon = WHY_ICONS[i]
            return (
              <div key={i} className="why-card">
                <div className="why-icon-wrap"><Icon size={22} color="var(--primary)" strokeWidth={2} /></div>
                <h3 className="why-title">{f.title}</h3>
                <p className="why-desc">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
      <style>{`
        .why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .why-card { background: white; border-radius: var(--radius-lg); padding: 28px; border: 1px solid var(--border); transition: var(--transition); position: relative; overflow: hidden; }
        .why-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg,var(--primary),var(--accent)); transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease; }
        .why-card:hover::before { transform: scaleX(1); }
        .why-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); }
        .why-icon-wrap { width: 50px; height: 50px; border-radius: var(--radius-md); background: rgba(108,60,225,0.08); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .why-title { font-size: 17px; font-weight: 700; margin-bottom: 8px; }
        .why-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.7; }
        @media (max-width: 1024px) { .why-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px) { .why-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

function HowSection({ tr }) {
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">{tr.how.badge}</div>
          <h2>{tr.how.title}</h2>
        </div>
        <div className="how-steps">
          {tr.how.steps.map((step, i) => (
            <div key={i} className="how-step">
              <div className="how-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-steps { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        .how-step { text-align: center; padding: 28px 20px; border: 1px solid var(--border); border-radius: var(--radius-lg); transition: var(--transition); }
        .how-step:hover { box-shadow: var(--shadow-md); border-color: rgba(108,60,225,0.2); transform: translateY(-3px); }
        .how-num { width: 54px; height: 54px; border-radius: 50%; background: linear-gradient(135deg,var(--primary),var(--primary-dark)); color: white; font-size: 17px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; font-family: var(--font-heading); box-shadow: 0 4px 16px rgba(108,60,225,0.35); }
        .how-step h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
        .how-step p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
        @media (max-width: 768px) { .how-steps { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 480px) { .how-steps { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

function ScoreCalculator({ tr }) {
  const [current, setCurrent] = useState(50)
  const [target, setTarget] = useState(85)
  const [result, setResult] = useState(null)
  const calculate = () => setResult(target - current <= 0 ? 0 : Math.ceil((target - current) / 8))
  return (
    <section className="section calc-section">
      <div className="container">
        <div className="calc-wrapper">
          <div>
            <div className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>{tr.diagnostic.badge}</div>
            <h2 style={{ color: 'white', fontSize: 'clamp(26px,4vw,38px)', marginBottom: 12 }}>{tr.diagnostic.title}</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, lineHeight: 1.7 }}>{tr.diagnostic.subtitle}</p>
          </div>
          <div className="calc-card">
            <div className="calc-field">
              <label className="calc-label">{tr.diagnostic.currentLabel}: <strong style={{ color: 'var(--primary)' }}>{current}</strong></label>
              <input type="range" min={20} max={100} value={current} onChange={e => setCurrent(+e.target.value)} className="calc-range" />
            </div>
            <div className="calc-field">
              <label className="calc-label">{tr.diagnostic.targetLabel}: <strong style={{ color: 'var(--secondary)' }}>{target}</strong></label>
              <input type="range" min={20} max={100} value={target} onChange={e => setTarget(+e.target.value)} className="calc-range calc-range--yellow" />
            </div>
            <button className="btn btn-primary" onClick={calculate} style={{ width: '100%' }}>{tr.diagnostic.calculate} <ArrowRight size={16} /></button>
            {result !== null && (
              <div className="calc-result">
                <CheckCircle size={26} color={result === 0 ? '#10B981' : 'var(--primary)'} />
                <div>
                  <div className="calc-result__main">{result === 0 ? "Maqsadga yetgansiz!" : result + " " + tr.diagnostic.needMonths}</div>
                  {result > 0 && <div className="calc-result__sub">{tr.diagnostic.withParvoz}</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .calc-section { background: linear-gradient(135deg,var(--primary) 0%,var(--primary-dark) 100%); }
        .calc-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .calc-card { background: white; border-radius: var(--radius-xl); padding: 36px; box-shadow: var(--shadow-xl); display: flex; flex-direction: column; gap: 22px; }
        .calc-field { display: flex; flex-direction: column; gap: 10px; }
        .calc-label { font-size: 14px; font-weight: 600; color: var(--text); }
        .calc-range { width: 100%; height: 6px; border-radius: 3px; outline: none; appearance: none; cursor: pointer; background: #E5E7EB; }
        .calc-range::-webkit-slider-thumb { appearance: none; width: 20px; height: 20px; border-radius: 50%; background: var(--primary); border: 3px solid white; box-shadow: 0 2px 8px rgba(108,60,225,0.4); cursor: pointer; }
        .calc-range--yellow::-webkit-slider-thumb { background: var(--secondary); }
        .calc-result { display: flex; align-items: center; gap: 14px; padding: 16px; background: var(--bg-soft); border-radius: var(--radius-md); border: 1px solid var(--border-soft); animation: fadeInUp 0.4s ease; }
        .calc-result__main { font-size: 15px; font-weight: 700; color: var(--text); }
        .calc-result__sub { font-size: 13px; color: var(--text-secondary); margin-top: 2px; }
        @media (max-width: 768px) { .calc-wrapper { grid-template-columns: 1fr; gap: 32px; } }
      `}</style>
    </section>
  )
}

function TestimonialsSection({ tr }) {
  return (
    <section className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">{tr.testimonials.badge}</div>
          <h2>{tr.testimonials.title}</h2>
          <p>{tr.testimonials.subtitle}</p>
        </div>
        <div className="testimonials-grid">
          {tr.testimonials.items.map((item, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ background: item.color }}>{item.avatar}</div>
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
                <div className="testimonial-score" style={{ background: item.color + '15', color: item.color }}>{item.score}</div>
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#F59E0B" color="#F59E0B" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .testimonials-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .testimonial-card { background: white; border-radius: var(--radius-lg); padding: 24px; border: 1px solid var(--border); transition: var(--transition); display: flex; flex-direction: column; gap: 14px; }
        .testimonial-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); }
        .testimonial-header { display: flex; align-items: center; gap: 12px; }
        .testimonial-avatar { width: 42px; height: 42px; border-radius: 50%; color: white; font-weight: 700; font-size: 13px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .testimonial-name { font-size: 14px; font-weight: 700; }
        .testimonial-role { font-size: 12px; color: var(--text-secondary); }
        .testimonial-score { margin-left: auto; padding: 3px 10px; border-radius: var(--radius-full); font-size: 12px; font-weight: 700; white-space: nowrap; flex-shrink: 0; }
        .testimonial-text { font-size: 14px; color: var(--text-secondary); line-height: 1.7; flex: 1; font-style: italic; }
        @media (max-width: 1024px) { .testimonials-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px) { .testimonials-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}

function PricingPreview({ tr }) {
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">{tr.pricing.badge}</div>
          <h2>{tr.pricing.title}</h2>
          <p>{tr.pricing.subtitle}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="price-card">
            <div className="price-popular">{tr.pricing.popular}</div>
            <div className="price-amount">
              <span className="price-num">{tr.pricing.price}</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span className="price-currency">{tr.pricing.currency}</span>
                <span className="price-period">{tr.pricing.month}</span>
              </div>
            </div>
            <ul className="price-features">
              {tr.pricing.features.map((f, i) => (
                <li key={i} className="price-feature">
                  <CheckCircle size={17} color="var(--primary)" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/apply" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              {tr.pricing.cta} <ArrowRight size={16} />
            </Link>
            <p className="price-note">{tr.pricing.note}</p>
          </div>
        </div>
      </div>
      <style>{`
        .price-card { background: white; border: 2px solid var(--primary); border-radius: var(--radius-xl); padding: 40px; max-width: 420px; width: 100%; position: relative; box-shadow: var(--shadow-xl); }
        .price-popular { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg,var(--primary),var(--primary-dark)); color: white; padding: 5px 20px; border-radius: var(--radius-full); font-size: 13px; font-weight: 700; white-space: nowrap; }
        .price-amount { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; margin-top: 20px; }
        .price-num { font-size: 50px; font-weight: 800; color: var(--text); font-family: var(--font-heading); line-height: 1; letter-spacing: -2px; }
        .price-currency { font-size: 14px; color: var(--text-secondary); font-weight: 600; }
        .price-period { font-size: 13px; color: var(--text-muted); }
        .price-features { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
        .price-feature { display: flex; align-items: center; gap: 10px; font-size: 15px; color: var(--text); }
        .price-note { margin-top: 14px; font-size: 12px; color: var(--text-muted); text-align: center; }
      `}</style>
    </section>
  )
}

function CTABanner({ tr }) {
  return (
    <section className="cta-banner">
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ color: 'white', fontSize: 'clamp(26px,4vw,42px)', marginBottom: 14, fontFamily: 'var(--font-heading)' }}>{tr.cta.title}</h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, marginBottom: 36, maxWidth: 480, margin: '0 auto 36px' }}>{tr.cta.subtitle}</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/apply" className="btn btn-white btn-lg"><Zap size={18} /> {tr.cta.btn1}</Link>
          <a href="https://t.me/parvozacademy" className="btn btn-lg" target="_blank" rel="noopener noreferrer"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-full)' }}>
            <Send size={16} /> {tr.cta.btn2}
          </a>
        </div>
      </div>
      <style>{`
        .cta-banner { padding: 96px 0; background: linear-gradient(135deg,var(--primary) 0%,var(--primary-dark) 100%); position: relative; overflow: hidden; }
        .cta-banner::before { content: ''; position: absolute; width: 400px; height: 400px; border-radius: 50%; background: rgba(255,255,255,0.05); top: -150px; left: -100px; }
        .cta-banner::after { content: ''; position: absolute; width: 300px; height: 300px; border-radius: 50%; background: rgba(255,255,255,0.04); bottom: -80px; right: -80px; }
      `}</style>
    </section>
  )
}

export default function HomePage() {
  const { lang } = useLang()
  const tr = t[lang]
  return (
    <>
      <Hero tr={tr} />
      <SubjectsSection tr={tr} />
      <WhySection tr={tr} />
      <HowSection tr={tr} />
      <ScoreCalculator tr={tr} />
      <TestimonialsSection tr={tr} />
      <PricingPreview tr={tr} />
      <CTABanner tr={tr} />
    </>
  )
}
