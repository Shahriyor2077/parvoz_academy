import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

const COURSES = [
  {
    id: 1,
    icon: '📐',
    nameUz: 'Matematika',
    nameRu: 'Математика',
    color: '#6C3CE1',
    teacherUz: 'Abdullayev Javlon',
    teacherRu: 'Абдуллаев Жавлон',
    levelUz: 'Boshlang\'ich — Yuqori',
    levelRu: 'Начальный — Продвинутый',
    studentsCount: 480,
    avgScore: 88,
    types: ['cert', 'attest'],
    tags: ['Algebra', 'Geometriya', 'Statistika'],
  },
  {
    id: 2,
    icon: '🇬🇧',
    nameUz: 'Ingliz tili',
    nameRu: 'Английский язык',
    color: '#4ECDC4',
    teacherUz: 'Rahimova Dilnoza',
    teacherRu: 'Рахимова Дилноза',
    levelUz: 'A1 — C1',
    levelRu: 'A1 — C1',
    studentsCount: 620,
    avgScore: 91,
    types: ['cert', 'attest'],
    tags: ['Grammar', 'Writing', 'Speaking'],
  },
  {
    id: 3,
    icon: '🇷🇺',
    nameUz: 'Rus tili',
    nameRu: 'Русский язык',
    color: '#FF6B6B',
    teacherUz: 'Petrov Andrey',
    teacherRu: 'Петров Андрей',
    levelUz: 'Boshlang\'ich — Yuqori',
    levelRu: 'Начальный — Продвинутый',
    studentsCount: 340,
    avgScore: 85,
    types: ['cert', 'attest'],
    tags: ['Grammatika', 'Fonetika', 'Leksika'],
  },
  {
    id: 4,
    icon: '📝',
    nameUz: 'O\'zbek tili',
    nameRu: 'Узбекский язык',
    color: '#F59E0B',
    teacherUz: 'Qodirov Mansur',
    teacherRu: 'Кадиров Мансур',
    levelUz: 'Boshlang\'ich — Yuqori',
    levelRu: 'Начальный — Продвинутый',
    studentsCount: 390,
    avgScore: 87,
    types: ['cert', 'attest'],
    tags: ['Morfologiya', 'Sintaksis', 'Imlo'],
  },
  {
    id: 5,
    icon: '⚗️',
    nameUz: 'Kimyo',
    nameRu: 'Химия',
    color: '#10B981',
    teacherUz: 'Mirzayeva Shahlo',
    teacherRu: 'Мирзаева Шахло',
    levelUz: 'O\'rta — Yuqori',
    levelRu: 'Средний — Продвинутый',
    studentsCount: 280,
    avgScore: 86,
    types: ['cert', 'attest'],
    tags: ['Organik', 'Anorganik', 'Masalalar'],
  },
  {
    id: 6,
    icon: '⚡',
    nameUz: 'Fizika',
    nameRu: 'Физика',
    color: '#3B82F6',
    teacherUz: 'Toshmatov Bekzod',
    teacherRu: 'Тошматов Бекзод',
    levelUz: 'O\'rta — Yuqori',
    levelRu: 'Средний — Продвинутый',
    studentsCount: 310,
    avgScore: 84,
    types: ['cert', 'attest'],
    tags: ['Mexanika', 'Elektr', 'Optika'],
  },
  {
    id: 7,
    icon: '🧬',
    nameUz: 'Biologiya',
    nameRu: 'Биология',
    color: '#EC4899',
    teacherUz: 'Yusupova Nilufar',
    teacherRu: 'Юсупова Нилуфар',
    levelUz: 'O\'rta — Yuqori',
    levelRu: 'Средний — Продвинутый',
    studentsCount: 260,
    avgScore: 89,
    types: ['cert', 'attest'],
    tags: ['Botanika', 'Zoologiya', 'Genetika'],
  },
  {
    id: 8,
    icon: '🌍',
    nameUz: 'Geografiya',
    nameRu: 'География',
    color: '#8B5CF6',
    teacherUz: 'Ergashev Sardor',
    teacherRu: 'Эргашев Сардор',
    levelUz: 'O\'rta — Yuqori',
    levelRu: 'Средний — Продвинутый',
    studentsCount: 220,
    avgScore: 83,
    types: ['cert', 'attest'],
    tags: ['Fizik geo', 'Iqtisodiy geo', 'Xaritalar'],
  },
  {
    id: 9,
    icon: '📜',
    nameUz: 'Tarix',
    nameRu: 'История',
    color: '#F97316',
    teacherUz: 'Nazarov Jasur',
    teacherRu: 'Назаров Жасур',
    levelUz: 'O\'rta — Yuqori',
    levelRu: 'Средний — Продвинутый',
    studentsCount: 290,
    avgScore: 85,
    types: ['cert', 'attest'],
    tags: ['Jahon tarixi', 'O\'zbekiston tarixi', 'Manba'],
  },
  {
    id: 10,
    icon: '💻',
    nameUz: 'Informatika',
    nameRu: 'Информатика',
    color: '#06B6D4',
    teacherUz: 'Karimov Asilbek',
    teacherRu: 'Каримов Асилбек',
    levelUz: 'Boshlang\'ich — Yuqori',
    levelRu: 'Начальный — Продвинутый',
    studentsCount: 350,
    avgScore: 90,
    types: ['attest'],
    tags: ['Algoritm', 'Excel', 'Internet'],
  },
  {
    id: 11,
    icon: '🎵',
    nameUz: 'Musiqa',
    nameRu: 'Музыка',
    color: '#A855F7',
    teacherUz: 'Holmatova Kamola',
    teacherRu: 'Холматова Камола',
    levelUz: 'Boshlang\'ich — Yuqori',
    levelRu: 'Начальный — Продвинутый',
    studentsCount: 120,
    avgScore: 88,
    types: ['attest'],
    tags: ['Nazariya', 'Solfejio', 'Tarix'],
  },
  {
    id: 12,
    icon: '⚽',
    nameUz: 'Jismoniy tarbiya',
    nameRu: 'Физкультура',
    color: '#22C55E',
    teacherUz: 'Razzaqov Ulugbek',
    teacherRu: 'Раззаков Улугбек',
    levelUz: 'Boshlang\'ich — Yuqori',
    levelRu: 'Начальный — Продвинутый',
    studentsCount: 140,
    avgScore: 87,
    types: ['attest'],
    tags: ['Metodika', 'Nazariya', 'Anatomiya'],
  },
]

export default function CoursesPage() {
  const { lang } = useLang()
  const tr = t[lang]
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = COURSES.filter(c => {
    const name = lang === 'uz' ? c.nameUz : c.nameRu
    const matchFilter = filter === 'all' || c.types.includes(filter)
    const matchSearch = !search || name.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  const heading = lang === 'uz' ? 'Barcha Kurslar' : 'Все Курсы'
  const subheading = lang === 'uz'
    ? 'Milliy sertifikat va attestatsiya imtihonlariga professional tayyorgarlik'
    : 'Профессиональная подготовка к национальным и аттестационным экзаменам'
  const searchPh = lang === 'uz' ? 'Fan nomi bo\'yicha qidirish...' : 'Поиск по предмету...'
  const allLabel = lang === 'uz' ? 'Barchasi' : 'Все'
  const studentsLabel = lang === 'uz' ? 'o\'quvchi' : 'учеников'
  const avgLabel = lang === 'uz' ? 'O\'rtacha ball' : 'Средний балл'
  const enrollLabel = lang === 'uz' ? 'Kursga yozilish' : 'Записаться на курс'
  const detailsLabel = lang === 'uz' ? 'Batafsil' : 'Подробнее'
  const teacherLabel = lang === 'uz' ? 'O\'qituvchi' : 'Преподаватель'

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="badge">{tr.subjects.badge}</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', marginBottom: 16 }}>{heading}</h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto' }}>{subheading}</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="courses-filters">
            <input
              className="form-input courses-search"
              placeholder={searchPh}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className="tabs">
              {[
                { key: 'all', label: allLabel },
                { key: 'cert', label: tr.subjects.certLabel },
                { key: 'attest', label: tr.subjects.attestLabel },
              ].map(f => (
                <button key={f.key} className={`tab ${filter === f.key ? 'tab--active' : ''}`} onClick={() => setFilter(f.key)}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="courses-grid">
            {filtered.map(course => {
              const name = lang === 'uz' ? course.nameUz : course.nameRu
              const teacher = lang === 'uz' ? course.teacherUz : course.teacherRu
              const level = lang === 'uz' ? course.levelUz : course.levelRu
              return (
                <div key={course.id} className="course-card">
                  <div className="course-card__top" style={{ background: `linear-gradient(135deg, ${course.color}15, ${course.color}08)` }}>
                    <div className="course-icon" style={{ background: `${course.color}20`, color: course.color }}>
                      {course.icon}
                    </div>
                    <div className="course-card__types">
                      {course.types.includes('cert') && <span className="course-type course-type--cert">Sertifikat</span>}
                      {course.types.includes('attest') && <span className="course-type course-type--attest">Attestatsiya</span>}
                    </div>
                  </div>
                  <div className="course-card__body">
                    <h3 className="course-name" style={{ color: course.color }}>{name}</h3>
                    <div className="course-teacher">
                      <span>👨‍🏫</span> {teacherLabel}: <strong>{teacher}</strong>
                    </div>
                    <div className="course-level">📊 {level}</div>
                    <div className="course-tags">
                      {course.tags.map(tag => (
                        <span key={tag} className="course-tag" style={{ background: `${course.color}10`, color: course.color }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="course-stats">
                      <div className="course-stat">
                        <span className="course-stat__num">{course.studentsCount}+</span>
                        <span className="course-stat__label">{studentsLabel}</span>
                      </div>
                      <div className="course-stat">
                        <span className="course-stat__num">{course.avgScore}</span>
                        <span className="course-stat__label">{avgLabel}</span>
                      </div>
                    </div>
                    <div className="course-actions">
                      <Link to="/apply" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                        {enrollLabel}
                      </Link>
                      <Link to={`/courses/${course.id}`} className="btn btn-secondary btn-sm">
                        {detailsLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--text-secondary)' }}>
              {lang === 'uz' ? 'Natija topilmadi' : 'Ничего не найдено'}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .page-header {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          padding: 64px 0 48px;
          text-align: center;
          color: white;
        }
        .page-header .badge {
          background: rgba(255,255,255,0.15);
          color: white;
          border-color: rgba(255,255,255,0.2);
        }
        .page-header h1 { color: white; }
        .courses-filters {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        .courses-search { max-width: 300px; flex: 1; }
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .course-card {
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: white;
          transition: var(--transition);
        }
        .course-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
          border-color: rgba(108,60,225,0.2);
        }
        .course-card__top {
          padding: 24px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .course-icon {
          width: 56px; height: 56px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
        }
        .course-card__types { display: flex; flex-direction: column; gap: 4px; align-items: flex-end; }
        .course-type {
          padding: 3px 8px;
          border-radius: var(--radius-full);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .course-type--cert { background: rgba(108,60,225,0.1); color: var(--primary); }
        .course-type--attest { background: rgba(78,205,196,0.1); color: #0D9488; }
        .course-card__body { padding: 0 24px 24px; }
        .course-name { font-size: 20px; font-weight: 800; margin-bottom: 10px; }
        .course-teacher, .course-level {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .course-tags { display: flex; gap: 6px; flex-wrap: wrap; margin: 12px 0; }
        .course-tag {
          padding: 3px 8px;
          border-radius: var(--radius-full);
          font-size: 11px;
          font-weight: 600;
        }
        .course-stats {
          display: flex;
          gap: 20px;
          padding: 14px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          margin-bottom: 16px;
        }
        .course-stat { display: flex; flex-direction: column; }
        .course-stat__num { font-size: 20px; font-weight: 800; font-family: var(--font-heading); color: var(--text); }
        .course-stat__label { font-size: 11px; color: var(--text-secondary); }
        .course-actions { display: flex; gap: 8px; }
        @media (max-width: 1024px) { .courses-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .courses-grid { grid-template-columns: 1fr; } .courses-filters { flex-direction: column; align-items: stretch; } .courses-search { max-width: 100%; } }
      `}</style>
    </main>
  )
}
