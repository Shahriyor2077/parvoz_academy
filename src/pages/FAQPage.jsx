import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Send, MessageCircle, CreditCard, BookOpen, Target, Smartphone } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <div className={`faq-icon ${open ? 'faq-icon--open' : ''}`}>
          <ChevronDown size={16} />
        </div>
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const { lang } = useLang()
  const tr = t[lang].faq
  const navTr = t[lang].nav

  const catIcons = [CreditCard, BookOpen, Target, Smartphone]
  const categories = {
    uz: ["To'lov", "O'qish jarayoni", "Natija", "Texnik"],
    ru: ["Оплата", "Процесс обучения", "Результат", "Технические"],
  }[lang]

  const extraFAQ = {
    uz: [
      { q: "Darslar qaysi platformada o'tkaziladi?", a: "Darslar Telegram va maxsus onlayn platformamiz orqali o'tkaziladi. Video darslar YouTube kanalimizda ham mavjud." },
      { q: "Bir vaqtning o'zida bir necha fandan o'qish mumkinmi?", a: "Ha! Siz bir vaqtning o'zida bir necha fandan o'qiy olasiz. Har bir fan uchun alohida repetitor belgilanadi." },
      { q: "Test natijalarim qanday baholanadi?", a: "Haftalik testlar avtomatik baholanadi. Natijalar Telegram orqali siz va repetitoringizga yuboriladi." },
      { q: "Qachon o'qishni boshlash mumkin?", a: "Ro'yxatdan o'tgandan so'ng 24 soat ichida o'qishni boshlashingiz mumkin. Kutish vaqti yo'q!" },
    ],
    ru: [
      { q: "На какой платформе проводятся занятия?", a: "Занятия проводятся через Telegram и нашу специализированную онлайн-платформу. Видеоуроки доступны на YouTube-канале." },
      { q: "Можно ли учиться по нескольким предметам одновременно?", a: "Да! Вы можете учиться по нескольким предметам. Для каждого предмета назначается отдельный репетитор." },
      { q: "Как оцениваются результаты тестов?", a: "Еженедельные тесты оцениваются автоматически. Результаты отправляются вам и репетитору через Telegram." },
      { q: "Когда можно начать учиться?", a: "После регистрации вы можете начать в течение 24 часов. Никакого ожидания!" },
    ],
  }[lang]

  const allFAQ = [...tr.items, ...extraFAQ]
  const ctaTitle = lang === 'uz' ? "Savolga javob topa olmadingizmi?" : "Не нашли ответ?"
  const ctaDesc = lang === 'uz' ? "Telegram orqali bizga yozing, 5 daqiqa ichida javob beramiz!" : "Напишите нам в Telegram, ответим в течение 5 минут!"

  return (
    <main style={{ paddingTop: 80 }}>
      <div className="page-header">
        <div className="container">
          <div className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>{tr.badge}</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px,5vw,52px)', marginBottom: 16 }}>{tr.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>
            {lang === 'uz' ? "Eng ko'p so'raladigan savollarga javob topasiz" : "Найдите ответы на самые частые вопросы"}
          </p>
        </div>
      </div>

      <section className="section-sm" style={{ background: 'var(--bg-soft)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="faq-categories">
            {categories.map((label, i) => {
              const Icon = catIcons[i]
              return (
                <div key={i} className="faq-category">
                  <Icon size={16} />
                  <span>{label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="faq-list">
            {allFAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', textAlign: 'center' }}>
        <div className="container">
          <MessageCircle size={48} color="rgba(255,255,255,0.8)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ color: 'white', fontSize: 'clamp(24px,3.5vw,36px)', marginBottom: 12 }}>{ctaTitle}</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, marginBottom: 32, maxWidth: 440, margin: '0 auto 32px' }}>{ctaDesc}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://t.me/parvozacademy" className="btn btn-white btn-lg" target="_blank" rel="noopener noreferrer">
              <Send size={16} /> Telegram
            </a>
            <Link to="/apply" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 'var(--radius-full)' }}>
              {navTr.apply}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .page-header { background: linear-gradient(135deg, var(--primary), var(--primary-dark)); padding: 64px 0 48px; text-align: center; color: white; }
        .faq-categories { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
        .faq-category { display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: white; border: 1.5px solid var(--border); border-radius: var(--radius-full); font-size: 14px; font-weight: 600; color: var(--text); cursor: pointer; transition: var(--transition); }
        .faq-category:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-2px); }
        .faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 10px; }
        .faq-item { border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; transition: var(--transition); }
        .faq-item:hover { border-color: rgba(108,60,225,0.25); }
        .faq-item--open { border-color: var(--primary); box-shadow: var(--shadow-md); }
        .faq-question { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 24px; text-align: left; font-size: 16px; font-weight: 600; color: var(--text); background: none; cursor: pointer; transition: var(--transition); }
        .faq-question:hover { color: var(--primary); }
        .faq-item--open .faq-question { color: var(--primary); }
        .faq-icon { width: 30px; height: 30px; border-radius: 50%; background: var(--bg-soft); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: var(--transition); color: var(--text-secondary); }
        .faq-item--open .faq-icon { background: rgba(108,60,225,0.1); color: var(--primary); }
        .faq-icon--open { transform: rotate(180deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1); }
        .faq-item--open .faq-answer { max-height: 300px; }
        .faq-answer-inner { padding: 0 24px 20px; font-size: 15px; color: var(--text-secondary); line-height: 1.7; border-top: 1px solid var(--border); padding-top: 16px; }
      `}</style>
    </main>
  )
}
