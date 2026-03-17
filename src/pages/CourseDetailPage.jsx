import { Link, useParams } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import { User, Users, Star, Send, Target, Clock, Smartphone, Trophy } from 'lucide-react'

const COURSE_DATA = {
  1: {
    nameUz: 'Matematika', nameRu: 'Математика',
    icon: '📐', color: '#6C3CE1',
    teacherUz: 'Abdullayev Javlon', teacherRu: 'Абдуллаев Жавлон',
    teacherBioUz: "Matematika o'qituvchisi, 8 yillik tajriba. 500+ o'quvchini imtihonga tayyorlagan.",
    teacherBioRu: 'Преподаватель математики, 8 лет опыта. Подготовил 500+ учеников к экзаменам.',
    avgScore: 88,
    studentsCount: 480,
    types: ['cert', 'attest'],
    programUz: [
      { week: 'Hafta 1-2', topics: 'Arifmetika, natural va butun sonlar' },
      { week: 'Hafta 3-4', topics: "Kasrlar, o'nlik kasrlar, foizlar" },
      { week: 'Hafta 5-6', topics: 'Algebraik ifodalar, tenglamalar' },
      { week: 'Hafta 7-8', topics: 'Funksiyalar va grafiklari' },
      { week: 'Hafta 9-10', topics: 'Geometriya asoslari' },
      { week: 'Hafta 11-12', topics: 'Statistika va ehtimollik' },
      { week: 'Hafta 13-14', topics: 'Test mashqlari va namunaviy imtihon' },
    ],
    programRu: [
      { week: 'Неделя 1-2', topics: 'Арифметика, натуральные и целые числа' },
      { week: 'Неделя 3-4', topics: 'Дроби, десятичные, проценты' },
      { week: 'Неделя 5-6', topics: 'Алгебраические выражения, уравнения' },
      { week: 'Неделя 7-8', topics: 'Функции и их графики' },
      { week: 'Неделя 9-10', topics: 'Основы геометрии' },
      { week: 'Неделя 11-12', topics: 'Статистика и вероятность' },
      { week: 'Неделя 13-14', topics: 'Практика тестов и пробный экзамен' },
    ],
    reviewsUz: [
      { name: 'Aziza K.', score: 92, text: "Ustoz juda yaxshi tushuntiradi. 92 ball to'pladim!", avatar: 'AK' },
      { name: 'Bobur T.', score: 87, text: 'Onlayn darslar qulay va samarali. Tavsiya etaman.', avatar: 'BT' },
      { name: 'Zulfiya M.', score: 95, text: 'Eng yaxshi matematika kursi! 95 ball — mening rekordim!', avatar: 'ZM' },
    ],
    reviewsRu: [
      { name: 'Азиза К.', score: 92, text: 'Преподаватель объясняет очень хорошо. Набрала 92 балла!', avatar: 'АК' },
      { name: 'Бобур Т.', score: 87, text: 'Онлайн-уроки удобны и эффективны. Рекомендую.', avatar: 'БТ' },
      { name: 'Зульфия М.', score: 95, text: 'Лучший курс математики! 95 баллов — мой рекорд!', avatar: 'ЗМ' },
    ],
  }
}

export default function CourseDetailPage() {
  const { id } = useParams()
  const { lang } = useLang()
  const tr = t[lang]
  const course = COURSE_DATA[id] || COURSE_DATA[1]

  const name = lang === 'uz' ? course.nameUz : course.nameRu
  const teacher = lang === 'uz' ? course.teacherUz : course.teacherRu
  const teacherBio = lang === 'uz' ? course.teacherBioUz : course.teacherBioRu
  const program = lang === 'uz' ? course.programUz : course.programRu
  const reviews = lang === 'uz' ? course.reviewsUz : course.reviewsRu

  const certLabel = lang === 'uz' ? 'Milliy sertifikat' : 'Нац. сертификат'
  const attestLabel = lang === 'uz' ? 'Attestatsiya' : 'Аттестация'

  const sidebarFeatures = [
    { Icon: Target, text: lang === 'uz' ? '100% kafolat' : '100% гарантия' },
    { Icon: User, text: lang === 'uz' ? 'Shaxsiy mentor' : 'Личный ментор' },
    { Icon: Clock, text: '24/7' },
    { Icon: Smartphone, text: lang === 'uz' ? 'Onlayn darslar' : 'Онлайн уроки' },
    { Icon: Trophy, text: lang === 'uz' ? "Sovg'a tizimi" : 'Система призов' },
  ]

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(135deg, ${course.color}20, ${course.color}08)`, borderBottom: '1px solid var(--border)', padding: '56px 0' }}>
        <div className="container">
          <div className="course-detail-hero">
            <div>
              <div className="course-detail-types">
                {course.types.includes('cert') && <span className="course-type course-type--cert">{certLabel}</span>}
                {course.types.includes('attest') && <span className="course-type course-type--attest">{attestLabel}</span>}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 16 }}>
                <div style={{ fontSize: 56 }}>{course.icon}</div>
                <h1 style={{ fontSize: 'clamp(32px,5vw,52px)' }}>{name}</h1>
              </div>
              <div style={{ display: 'flex', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <User size={16} color="var(--text-secondary)" />
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)' }}>{teacher}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Users size={16} color="var(--text-secondary)" />
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)' }}>{course.studentsCount}+ {lang === 'uz' ? "o'quvchi" : 'учеников'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Star size={15} color="#F59E0B" fill="#F59E0B" />
                  <span style={{ fontSize: 15, color: 'var(--text-secondary)' }}>4.9/5</span>
                </div>
              </div>
              <Link to="/apply" className="btn btn-primary btn-lg">
                {tr.nav.apply}
              </Link>
            </div>
            <div className="course-detail-score-card">
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 8 }}>
                {lang === 'uz' ? "O'rtacha ball" : 'Средний балл'}
              </div>
              <div style={{ fontSize: 72, fontWeight: 900, color: course.color, fontFamily: 'var(--font-heading)', lineHeight: 1, letterSpacing: -2 }}>
                {course.avgScore}
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8 }}>
                {lang === 'uz' ? "o'quvchilarimiz o'rtacha natijasi" : 'средний результат учеников'}
              </div>
              <div style={{ marginTop: 16, height: 8, background: '#E5E7EB', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${course.avgScore}%`, background: `linear-gradient(90deg, ${course.color}, var(--accent))`, borderRadius: 4 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="course-detail-layout">
            {/* Main Content */}
            <div>
              {/* Teacher */}
              <div className="detail-section">
                <h2>{lang === 'uz' ? "O'qituvchi haqida" : 'О преподавателе'}</h2>
                <div className="teacher-block">
                  <div className="teacher-avatar" style={{ background: course.color }}>
                    {teacher.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{teacher}</div>
                    <div style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{teacherBio}</div>
                  </div>
                </div>
              </div>

              {/* Program */}
              <div className="detail-section">
                <h2>{lang === 'uz' ? "O'quv dasturi" : 'Учебная программа'}</h2>
                <div className="program-list">
                  {program.map((item, i) => (
                    <div key={i} className="program-item">
                      <div className="program-week" style={{ background: `${course.color}15`, color: course.color }}>
                        {item.week}
                      </div>
                      <div className="program-topics">{item.topics}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="detail-section">
                <h2>{lang === 'uz' ? "O'quvchi sharhlari" : 'Отзывы учеников'}</h2>
                <div className="reviews-list">
                  {reviews.map((r, i) => (
                    <div key={i} className="review-item">
                      <div className="review-header">
                        <div className="review-avatar" style={{ background: course.color }}>{r.avatar}</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 15 }}>{r.name}</div>
                          <div style={{ display: 'flex', gap: 2, marginTop: 2 }}>
                            {[...Array(5)].map((_, si) => (
                              <Star key={si} size={12} color="#F59E0B" fill="#F59E0B" />
                            ))}
                          </div>
                        </div>
                        <div className="review-score" style={{ color: course.color }}>{r.score} {lang === 'uz' ? 'ball' : 'баллов'}</div>
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 10, fontStyle: 'italic' }}>
                        "{r.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="course-detail-sidebar">
              <div className="sidebar-card">
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--text)', fontFamily: 'var(--font-heading)', marginBottom: 4 }}>
                  200,000 <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{lang === 'uz' ? "so'm/oy" : 'сум/мес'}</span>
                </div>
                <Link to="/apply" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}>
                  {tr.nav.apply} →
                </Link>
                <a href="https://t.me/parvozacademy" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', gap: 8 }} target="_blank" rel="noopener noreferrer">
                  <Send size={16} /> Telegram
                </a>
                <div className="sidebar-features">
                  {sidebarFeatures.map((f, i) => (
                    <div key={i} className="sidebar-feature">
                      <f.Icon size={16} color="var(--primary)" strokeWidth={2} />
                      <span style={{ fontSize: 14 }}>{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .course-detail-hero {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
        }
        .course-detail-types { display: flex; gap: 8px; margin-bottom: 16px; }
        .course-type {
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .course-type--cert { background: rgba(108,60,225,0.1); color: var(--primary); }
        .course-type--attest { background: rgba(78,205,196,0.1); color: #0D9488; }
        .course-detail-score-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 28px 32px;
          text-align: center;
          box-shadow: var(--shadow-lg);
          min-width: 200px;
        }
        .course-detail-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 40px;
          align-items: flex-start;
        }
        .detail-section { margin-bottom: 48px; }
        .detail-section h2 { font-size: 24px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid var(--border); }
        .teacher-block { display: flex; gap: 20px; align-items: flex-start; padding: 20px; background: var(--bg-soft); border-radius: var(--radius-lg); }
        .teacher-avatar {
          width: 64px; height: 64px;
          border-radius: 50%;
          color: white;
          font-weight: 700;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .program-list { display: flex; flex-direction: column; gap: 10px; }
        .program-item { display: flex; gap: 16px; align-items: flex-start; padding: 14px 16px; background: var(--bg-soft); border-radius: var(--radius-md); border: 1px solid var(--border); }
        .program-week { padding: 4px 10px; border-radius: var(--radius-full); font-size: 12px; font-weight: 700; white-space: nowrap; }
        .program-topics { font-size: 14px; color: var(--text); line-height: 1.5; }
        .reviews-list { display: flex; flex-direction: column; gap: 16px; }
        .review-item { padding: 20px; background: var(--bg-soft); border-radius: var(--radius-lg); border: 1px solid var(--border); }
        .review-header { display: flex; align-items: center; gap: 12px; }
        .review-avatar { width: 40px; height: 40px; border-radius: 50%; color: white; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
        .review-score { margin-left: auto; font-weight: 700; font-size: 16px; }
        .sidebar-card { background: white; border: 1.5px solid var(--primary); border-radius: var(--radius-xl); padding: 28px; position: sticky; top: 100px; box-shadow: var(--shadow-xl); }
        .sidebar-features { margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
        .sidebar-feature { display: flex; gap: 10px; align-items: center; font-size: 14px; color: var(--text); }
        @media (max-width: 1024px) {
          .course-detail-hero { grid-template-columns: 1fr; }
          .course-detail-score-card { display: none; }
          .course-detail-layout { grid-template-columns: 1fr; }
          .course-detail-sidebar { order: -1; }
          .sidebar-card { position: static; }
        }
      `}</style>
    </main>
  )
}
