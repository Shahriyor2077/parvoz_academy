import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import { Trophy, BookOpen, Star, Target, MapPin, GraduationCap } from 'lucide-react'

const TEAM = [
  { name: 'Sherzod Xolmatov', role: { uz: 'Asoschi & CEO', ru: 'Основатель & CEO' }, avatar: 'SX', color: '#6C3CE1' },
  { name: 'Dilnoza Rahimova', role: { uz: 'Bosh metodolog', ru: 'Главный методолог' }, avatar: 'DR', color: '#4ECDC4' },
  { name: 'Abdullayev Javlon', role: { uz: "Matematika o'qituvchisi", ru: 'Преподаватель математики' }, avatar: 'AJ', color: '#F59E0B' },
  { name: 'Mirzayeva Shahlo', role: { uz: "Kimyo o'qituvchisi", ru: 'Преподаватель химии' }, avatar: 'MS', color: '#10B981' },
  { name: 'Petrov Andrey', role: { uz: "Rus tili o'qituvchisi", ru: 'Преподаватель русского языка' }, avatar: 'PA', color: '#FF6B6B' },
  { name: 'Karimov Asilbek', role: { uz: 'Texnologiya direktori', ru: 'Технический директор' }, avatar: 'KA', color: '#8B5CF6' },
]

const ACHIEVEMENTS = [
  { Icon: Trophy, numUz: '5,000+', numRu: '5,000+', labelUz: "Muvaffaqiyatli o'quvchi", labelRu: 'Успешных учеников', color: '#F59E0B' },
  { Icon: BookOpen, numUz: '12+', numRu: '12+', labelUz: "Fan yo'nalishi", labelRu: 'Предметов', color: '#6C3CE1' },
  { Icon: Star, numUz: '4.9/5', numRu: '4.9/5', labelUz: "O'rtacha reyting", labelRu: 'Средний рейтинг', color: '#F59E0B' },
  { Icon: Target, numUz: '92%', numRu: '92%', labelUz: 'Maqsadga erishish', labelRu: 'Достигают цели', color: '#4ECDC4' },
  { Icon: MapPin, numUz: '48+', numRu: '48+', labelUz: 'Shahar va tuman', labelRu: 'Городов и районов', color: '#FF6B6B' },
  { Icon: GraduationCap, numUz: '30+', numRu: '30+', labelUz: "Mutaxassis o'qituvchi", labelRu: 'Преподавателей', color: '#4ECDC4' },
]

export default function AboutPage() {
  const { lang } = useLang()
  const tr = t[lang].about
  const navTr = t[lang].nav

  const brandSection = {
    uz: {
      missionTitle: 'Missiyamiz',
      visionTitle: 'Vizionimiz',
      visionText: "2030 yilga qadar O'zbekistonning har bir viloyatida 10,000+ o'quvchiga sifatli ta'lim yetkazish.",
      historyTitle: 'Tariximiz',
      historyItems: [
        { year: '2020', text: "PARVOZ Online Academy tashkil etildi. Birinchi 50 ta o'quvchi." },
        { year: '2021', text: "500+ o'quvchi. Shaxsiy repetitor tizimi joriy etildi." },
        { year: '2022', text: "1,500+ o'quvchi. Attestatsiya yo'nalishi ochildi." },
        { year: '2023', text: "3,000+ o'quvchi. O'zbekistonning 48 shahrida o'quvchilar." },
        { year: '2024', text: "5,000+ o'quvchi. 100% natija kafolati tizimi." },
        { year: '2025', text: "Yangi platforma. AI asosidagi shaxsiylashtirilgan o'qitish." },
      ],
    },
    ru: {
      missionTitle: 'Наша миссия',
      visionTitle: 'Наше видение',
      visionText: 'К 2030 году обеспечить качественным образованием 10 000+ учеников в каждом регионе Узбекистана.',
      historyTitle: 'Наша история',
      historyItems: [
        { year: '2020', text: 'Основана PARVOZ Online Academy. Первые 50 учеников.' },
        { year: '2021', text: '500+ учеников. Внедрена система личного репетитора.' },
        { year: '2022', text: '1,500+ учеников. Открыто направление аттестации.' },
        { year: '2023', text: '3,000+ учеников. Ученики из 48 городов Узбекистана.' },
        { year: '2024', text: '5,000+ учеников. Система 100% гарантии результата.' },
        { year: '2025', text: 'Новая платформа. Персонализированное обучение на основе AI.' },
      ],
    }
  }[lang]

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>{tr.badge}</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px,5vw,52px)', marginBottom: 16 }}>
            {tr.title} <span style={{ color: '#4ECDC4' }}>{tr.titleHighlight}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto', fontSize: 18 }}>{tr.story}</p>
        </div>
      </div>

      {/* Achievements */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="achievements-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className="achievement-card">
                <div className="achievement-icon">
                  <a.Icon size={28} color={a.color} strokeWidth={2} />
                </div>
                <div className="achievement-num">{lang === 'uz' ? a.numUz : a.numRu}</div>
                <div className="achievement-label">{lang === 'uz' ? a.labelUz : a.labelRu}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="mission-grid">
            <div className="mission-left">
              <h2 style={{ fontSize: 'clamp(28px,3.5vw,40px)', marginBottom: 16 }}>
                {brandSection.missionTitle}
              </h2>
              <p style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
                {tr.mission}
              </p>
              <div style={{ padding: '20px 24px', background: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: 24 }}>
                <h4 style={{ marginBottom: 8, color: 'var(--primary)' }}>{brandSection.visionTitle}</h4>
                <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{brandSection.visionText}</p>
              </div>
              <Link to="/apply" className="btn btn-primary">{navTr.apply} →</Link>
            </div>
            <div className="values-right">
              {tr.values.map((v, i) => (
                <div key={i} className="value-item">
                  <div className="value-icon">{v.icon}</div>
                  <div>
                    <h4 style={{ marginBottom: 4, fontSize: 16 }}>{v.title}</h4>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge">Timeline</div>
            <h2>{brandSection.historyTitle}</h2>
          </div>
          <div className="timeline">
            {brandSection.historyItems.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-text">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge">{lang === 'uz' ? 'Jamoa' : 'Команда'}</div>
            <h2>{lang === 'uz' ? 'Bizning Mutaxassislar' : 'Наши Специалисты'}</h2>
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className="team-card">
                <div className="team-avatar" style={{ background: m.color }}>{m.avatar}</div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          padding: 64px 0 48px;
          text-align: center;
          color: white;
        }
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }
        .achievement-card {
          text-align: center;
          padding: 24px 16px;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          transition: var(--transition);
        }
        .achievement-card:hover {
          box-shadow: var(--shadow-md);
          border-color: rgba(108,60,225,0.2);
          transform: translateY(-2px);
        }
        .achievement-icon { display: flex; justify-content: center; margin-bottom: 10px; }
        .achievement-num { font-size: 24px; font-weight: 800; color: var(--primary); font-family: var(--font-heading); }
        .achievement-label { font-size: 12px; color: var(--text-secondary); margin-top: 4px; line-height: 1.4; }
        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .values-right { display: flex; flex-direction: column; gap: 20px; }
        .value-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 20px;
          background: white;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .value-item:hover { box-shadow: var(--shadow-md); transform: translateX(4px); }
        .value-icon { font-size: 28px; flex-shrink: 0; }
        .timeline { max-width: 600px; margin: 0 auto; }
        .timeline-item {
          display: grid;
          grid-template-columns: 80px 24px 1fr;
          gap: 16px;
          align-items: flex-start;
          padding-bottom: 32px;
          position: relative;
        }
        .timeline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: calc(80px + 11px);
          top: 24px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--primary), var(--border));
        }
        .timeline-year { font-weight: 800; color: var(--primary); font-family: var(--font-heading); font-size: 16px; padding-top: 2px; text-align: right; }
        .timeline-dot {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: var(--primary);
          border: 3px solid white;
          box-shadow: 0 0 0 3px rgba(108,60,225,0.2);
          margin-top: 3px;
          flex-shrink: 0;
        }
        .timeline-text { font-size: 15px; color: var(--text-secondary); line-height: 1.7; padding-top: 2px; }
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .team-card {
          text-align: center;
          padding: 32px 24px;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          transition: var(--transition);
        }
        .team-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); }
        .team-avatar {
          width: 70px; height: 70px;
          border-radius: 50%;
          color: white;
          font-weight: 700;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .team-name { font-size: 16px; font-weight: 700; margin-bottom: 4px; }
        .team-role { font-size: 13px; color: var(--text-secondary); }
        @media (max-width: 1024px) {
          .achievements-grid { grid-template-columns: repeat(3, 1fr); }
          .mission-grid { grid-template-columns: 1fr; }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .achievements-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: 1fr; }
          .timeline-item { grid-template-columns: 56px 20px 1fr; }
        }
      `}</style>
    </main>
  )
}
