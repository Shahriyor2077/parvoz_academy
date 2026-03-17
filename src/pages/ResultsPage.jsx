import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import { MapPin, Trophy, BarChart2 } from 'lucide-react'

const RESULTS = [
  { name: 'Aziza Karimova', region: 'Toshkent', subject: { uz: 'Matematika', ru: 'Математика' }, score: 95, type: 'cert', avatar: 'AK', color: '#6C3CE1' },
  { name: 'Bobur Toshmatov', region: 'Samarqand', subject: { uz: 'Fizika', ru: 'Физика' }, score: 92, type: 'attest', avatar: 'BT', color: '#4ECDC4' },
  { name: 'Nilufar Rashidova', region: 'Toshkent', subject: { uz: 'Ingliz tili', ru: 'Английский' }, score: 95, type: 'cert', avatar: 'NR', color: '#F59E0B' },
  { name: 'Jasur Nazarov', region: "Farg'ona", subject: { uz: 'Kimyo', ru: 'Химия' }, score: 88, type: 'attest', avatar: 'JN', color: '#10B981' },
  { name: 'Malika Yusupova', region: 'Buxoro', subject: { uz: 'Biologiya', ru: 'Биология' }, score: 91, type: 'cert', avatar: 'MY', color: '#FF6B6B' },
  { name: 'Sardor Ergashev', region: 'Namangan', subject: { uz: 'Tarix', ru: 'История' }, score: 87, type: 'attest', avatar: 'SE', color: '#8B5CF6' },
  { name: 'Gulnora Xasanova', region: 'Andijon', subject: { uz: "O'zbek tili", ru: 'Узбекский' }, score: 93, type: 'cert', avatar: 'GX', color: '#F97316' },
  { name: 'Ulugbek Mirzayev', region: 'Qashqadaryo', subject: { uz: 'Geografiya', ru: 'География' }, score: 86, type: 'attest', avatar: 'UM', color: '#06B6D4' },
  { name: 'Zulfiya Tursunova', region: 'Xorazm', subject: { uz: 'Rus tili', ru: 'Русский язык' }, score: 89, type: 'cert', avatar: 'ZT', color: '#A855F7' },
  { name: 'Otabek Raximov', region: 'Surxondaryo', subject: { uz: 'Matematika', ru: 'Математика' }, score: 94, type: 'cert', avatar: 'OR', color: '#22C55E' },
  { name: 'Dilorom Saidova', region: 'Jizzax', subject: { uz: 'Ingliz tili', ru: 'Английский' }, score: 90, type: 'cert', avatar: 'DS', color: '#EC4899' },
  { name: 'Mansur Qodirov', region: 'Sirdaryo', subject: { uz: 'Fizika', ru: 'Физика' }, score: 85, type: 'attest', avatar: 'MQ', color: '#6C3CE1' },
]

const LEADERBOARD = [
  { rank: 1, name: 'Nilufar Rashidova', score: 95, subject: { uz: 'Ingliz tili', ru: 'Английский' }, medal: '🥇' },
  { rank: 2, name: 'Aziza Karimova', score: 95, subject: { uz: 'Matematika', ru: 'Математика' }, medal: '🥈' },
  { rank: 3, name: 'Otabek Raximov', score: 94, subject: { uz: 'Matematika', ru: 'Математика' }, medal: '🥉' },
  { rank: 4, name: 'Gulnora Xasanova', score: 93, subject: { uz: "O'zbek tili", ru: 'Узбекский' }, medal: '4' },
  { rank: 5, name: 'Bobur Toshmatov', score: 92, subject: { uz: 'Fizika', ru: 'Физика' }, medal: '5' },
]

export default function ResultsPage() {
  const { lang } = useLang()
  const tr = t[lang].results

  const certLabel = lang === 'uz' ? 'Milliy sertifikat' : 'Нац. сертификат'
  const attestLabel = lang === 'uz' ? 'Attestatsiya' : 'Аттестация'
  const scoreLabel = lang === 'uz' ? 'ball' : 'баллов'
  const leaderTitle = lang === 'uz' ? "Top O'quvchilar" : 'Лучшие ученики'
  const leaderDesc = lang === 'uz' ? 'Bu oy eng yuqori ball to\'plagan o\'quvchilar' : 'Ученики с наивысшими баллами в этом месяце'
  const allResultsTitle = lang === 'uz' ? 'Yaqinda erishilgan natijalar' : 'Недавние достижения'

  const getScoreColor = (score) => {
    if (score >= 90) return '#10B981'
    if (score >= 80) return '#F59E0B'
    return '#6C3CE1'
  }

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
            {tr.badge}
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px,5vw,52px)', marginBottom: 16 }}>
            {tr.title} <span style={{ color: '#4ECDC4' }}>{tr.titleHighlight}</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>{tr.subtitle}</p>
        </div>
      </div>

      {/* Stats */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="results-stats-grid">
            {tr.stats.map((s, i) => (
              <div key={i} className="results-stat-card">
                <div className="results-stat-num">{s.num}</div>
                <div className="results-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Trophy size={14} /> Leaderboard
            </div>
            <h2>{leaderTitle}</h2>
            <p>{leaderDesc}</p>
          </div>
          <div className="leaderboard">
            {LEADERBOARD.map((item, i) => (
              <div key={i} className={`leaderboard-item ${i < 3 ? 'leaderboard-item--top' : ''}`}
                style={{ '--rank-color': i === 0 ? '#F59E0B' : i === 1 ? '#9CA3AF' : i === 2 ? '#F97316' : 'var(--primary)' }}>
                <div className="leaderboard-medal">{item.medal}</div>
                <div className="leaderboard-info">
                  <div className="leaderboard-name">{item.name}</div>
                  <div className="leaderboard-subject">{item.subject[lang]}</div>
                </div>
                <div className="leaderboard-score" style={{ color: getScoreColor(item.score) }}>
                  {item.score} {scoreLabel}
                </div>
                <div className="leaderboard-bar">
                  <div className="leaderboard-fill" style={{ width: `${item.score}%`, background: getScoreColor(item.score) }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Results */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <BarChart2 size={14} /> {allResultsTitle}
            </div>
            <h2>{allResultsTitle}</h2>
          </div>
          <div className="results-grid">
            {RESULTS.map((r, i) => (
              <div key={i} className="result-card">
                <div className="result-avatar" style={{ background: r.color }}>{r.avatar}</div>
                <div className="result-info">
                  <div className="result-name">{r.name}</div>
                  <div className="result-meta">
                    <MapPin size={11} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 2 }} />
                    {r.region} • {r.subject[lang]}
                  </div>
                  <div className="result-type-badge">
                    {r.type === 'cert' ? certLabel : attestLabel}
                  </div>
                </div>
                <div className="result-score-block">
                  <div className="result-score" style={{ color: getScoreColor(r.score) }}>{r.score}</div>
                  <div className="result-score-label">{scoreLabel}</div>
                  {r.score >= 90 && (
                    <div className="result-gift">
                      <Trophy size={16} color="#F59E0B" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Score Distribution */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge">{lang === 'uz' ? 'Statistika' : 'Статистика'}</div>
            <h2>{lang === 'uz' ? 'Ball Taqsimoti' : 'Распределение баллов'}</h2>
          </div>
          <div className="score-distribution">
            {[
              { range: '90-100', count: 38, color: '#10B981', label: lang === 'uz' ? "A'lo" : 'Отлично' },
              { range: '80-89', count: 42, color: '#F59E0B', label: lang === 'uz' ? 'Yaxshi' : 'Хорошо' },
              { range: '70-79', count: 14, color: '#6C3CE1', label: lang === 'uz' ? "O'rta" : 'Средне' },
              { range: '< 70', count: 6, color: '#FF6B6B', label: lang === 'uz' ? 'Past' : 'Низко' },
            ].map((d, i) => (
              <div key={i} className="score-dist-item">
                <div className="score-dist-range" style={{ color: d.color }}>{d.range}</div>
                <div className="score-dist-bar-wrap">
                  <div className="score-dist-bar" style={{ width: `${d.count}%`, background: d.color }}>
                    <span className="score-dist-pct">{d.count}%</span>
                  </div>
                </div>
                <div className="score-dist-label">{d.label}</div>
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
        .results-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .results-stat-card {
          text-align: center;
          padding: 36px 20px;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          transition: var(--transition);
          background: white;
        }
        .results-stat-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); border-color: rgba(108,60,225,0.2); }
        .results-stat-num { font-size: 40px; font-weight: 800; color: var(--primary); font-family: var(--font-heading); letter-spacing: -1px; }
        .results-stat-label { font-size: 14px; color: var(--text-secondary); margin-top: 6px; }
        .leaderboard { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
        .leaderboard-item {
          display: grid;
          grid-template-columns: 40px 1fr auto 200px;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: white;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .leaderboard-item:hover { box-shadow: var(--shadow-md); transform: translateX(4px); }
        .leaderboard-item--top { border-color: var(--rank-color); }
        .leaderboard-medal { font-size: 24px; text-align: center; }
        .leaderboard-name { font-weight: 700; font-size: 15px; }
        .leaderboard-subject { font-size: 12px; color: var(--text-secondary); }
        .leaderboard-score { font-weight: 800; font-size: 16px; white-space: nowrap; }
        .leaderboard-bar { height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; }
        .leaderboard-fill { height: 100%; border-radius: 4px; transition: width 1s ease; }
        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .result-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          background: white;
          transition: var(--transition);
        }
        .result-card:hover { box-shadow: var(--shadow-md); border-color: rgba(108,60,225,0.15); transform: translateY(-2px); }
        .result-avatar {
          width: 48px; height: 48px;
          border-radius: 50%;
          color: white;
          font-weight: 700;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .result-info { flex: 1; min-width: 0; }
        .result-name { font-weight: 700; font-size: 15px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .result-meta { font-size: 12px; color: var(--text-secondary); margin: 3px 0; display: flex; align-items: center; gap: 3px; }
        .result-type-badge {
          display: inline-block;
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 10px;
          font-weight: 700;
          background: rgba(108,60,225,0.08);
          color: var(--primary);
        }
        .result-score-block { text-align: center; flex-shrink: 0; }
        .result-score { font-size: 26px; font-weight: 800; font-family: var(--font-heading); line-height: 1; }
        .result-score-label { font-size: 10px; color: var(--text-secondary); }
        .result-gift { margin-top: 4px; display: flex; justify-content: center; }
        .score-distribution { max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
        .score-dist-item { display: grid; grid-template-columns: 80px 1fr 80px; align-items: center; gap: 16px; }
        .score-dist-range { font-weight: 700; font-size: 15px; }
        .score-dist-bar-wrap { height: 24px; background: var(--border); border-radius: 12px; overflow: hidden; }
        .score-dist-bar {
          height: 100%;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 10px;
          min-width: 40px;
          transition: width 1.2s ease;
        }
        .score-dist-pct { font-size: 11px; font-weight: 700; color: white; }
        .score-dist-label { font-size: 13px; color: var(--text-secondary); }
        @media (max-width: 1024px) {
          .results-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .leaderboard-item { grid-template-columns: 40px 1fr auto; }
          .leaderboard-bar { display: none; }
        }
        @media (max-width: 640px) {
          .results-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .results-grid { grid-template-columns: 1fr; }
          .score-dist-item { grid-template-columns: 70px 1fr; }
          .score-dist-label { display: none; }
          .leaderboard-item { grid-template-columns: 32px 1fr auto; gap: 10px; }
        }
      `}</style>
    </main>
  )
}
