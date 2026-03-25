import { Send, AtSign, Phone, Mail, MapPin, Repeat, Rocket } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

export default function ContactPage() {
  const { lang } = useLang()
  const tr = t[lang].contact

  const contactItems = [
    { Icon: Send, label: 'Telegram', value: '@PARVOZ_Online_Academy', href: 'https://t.me/PARVOZ_Online_Academy', color: '#26A5E4', desc: lang === 'uz' ? '24/7 javob beramiz' : 'Отвечаем 24/7' },
    { Icon: AtSign, label: 'AtSign', value: '@parvoz.academy', href: 'https://instagram.com/parvoz.academy', color: '#E1306C', desc: lang === 'uz' ? 'Yangiliklar va natijalar' : 'Новости и результаты' },
    { Icon: Phone, label: tr.phone, value: '+998 90 123 45 67', href: 'tel:+998901234567', color: '#10B981', desc: lang === 'uz' ? 'Dush-Shan: 8:00-22:00' : 'Пн-Сб: 8:00-22:00' },
    { Icon: Phone, label: tr.phone + ' 2', value: '+998 91 234 56 78', href: 'tel:+998912345678', color: '#10B981', desc: lang === 'uz' ? "Qo'shimcha raqam" : 'Доп. номер' },
    { Icon: Mail, label: tr.email, value: 'info@parvoz.uz', href: 'mailto:info@parvoz.uz', color: '#F59E0B', desc: lang === 'uz' ? '24 soat ichida javob' : 'Ответим за 24 ч' },
    { Icon: MapPin, label: tr.address, value: tr.addressVal, href: null, color: '#8B5CF6', desc: lang === 'uz' ? "To'liq onlayn" : 'Полностью онлайн' },
  ]

  const marketingTitle = lang === 'uz' ? 'Marketing Strategiyasi' : 'Маркетинговая стратегия'
  const strategies = {
    uz: {
      instagram: ['📅 Kuniga 1-2 post: natijalar, dars parchalari, motivatsiya', '🎬 Reels: qisqa dars videolari, "5 daqiqada tushun" seriyasi', "📊 Stories: kunlik test, so'rovlar, viktorinalar", '🔴 Live: haftalik bepul dars, Q&A sessiyalar', '🏆 Countdown: imtihon sanasigacha hisoblagich', "📸 UGC: o'quvchilar natijalarini repost qilish"],
      telegram: ["🤖 Bot: avtomatik ro'yxatdan o'tish va dars taqvimi", '📢 Kanal: kunlik bepul materiallar', "💬 Guruh: o'quvchilar hamjamiyati", "🎯 7 kunlik bepul mini-kurs → to'lov", '📊 Quiz Bot: haftalik bilim tekshiruvi', '🔔 Reminder: imtihon sanasi, motivatsiya'],
      referral: ["💰 Har bir do'st uchun 20,000 so'm bonus", "🎁 3 ta do'st = 1 oy bepul o'qish", '📊 Referral kuzatuv paneli', "🏆 Eng ko'p taklif qilganga maxsus sovg'a", '📱 Telegram orqali osongina ulashish'],
      viral: ['🎬 "Mening 90+ ballim" — video challange', '📸 Sertifikat ramkasi — AtSign uchun', '🏅 Haftalik tarix qahramoni kartochkasi', '📊 Viloyatlar reytingi — mahalliy raqobat', "🤝 Maktab hamkorligi — sinf bilan o'qish"],
    },
    ru: {
      instagram: ['📅 1-2 поста в день: результаты, фрагменты уроков, мотивация', '🎬 Reels: короткие видеоуроки, серия "Поймите за 5 минут"', '📊 Stories: тесты, опросы, викторины', '🔴 Прямые эфиры: еженедельные бесплатные уроки, Q&A', '🏆 Обратный отсчёт до экзамена', '📸 UGC: репосты результатов учеников'],
      telegram: ['🤖 Бот: автоматическая регистрация и расписание', '📢 Канал: ежедневные бесплатные материалы', '💬 Группа: сообщество учеников', '🎯 7-дневный бесплатный мини-курс → оплата', '📊 Quiz Bot: еженедельная проверка знаний', '🔔 Напоминания: отсчёт до экзамена, мотивация'],
      referral: ['💰 Бонус 20 000 сум за каждого друга', '🎁 3 друга = 1 месяц бесплатного обучения', '📊 Панель отслеживания рефералов', '🏆 Специальный подарок лучшему рефереру', '📱 Лёгкий обмен через Telegram'],
      viral: ['🎬 Челлендж "Мои 90+ баллов"', '📸 Рамка сертификата для AtSign', '🏅 Карточка героя недели', '📊 Рейтинг регионов — местная конкуренция', '🤝 Партнёрство со школами'],
    },
  }[lang]

  const sections = [
    { Icon: AtSign, title: lang === 'uz' ? 'AtSign Strategiyasi' : 'Стратегия AtSign', items: strategies.instagram, bg: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366)' },
    { Icon: Send, title: lang === 'uz' ? 'Telegram Funnel' : 'Telegram Воронка', items: strategies.telegram, bg: 'linear-gradient(135deg, #0088cc, #26A5E4)' },
    { Icon: Repeat, title: lang === 'uz' ? 'Referral Dasturi' : 'Реферальная программа', items: strategies.referral, bg: 'linear-gradient(135deg, #10B981, #059669)' },
    { Icon: Rocket, title: lang === 'uz' ? 'Viral Marketing' : 'Вирусный маркетинг', items: strategies.viral, bg: 'linear-gradient(135deg, #6C3CE1, #4ECDC4)' },
  ]

  return (
    <main style={{ paddingTop: 80 }}>
      <div className="page-header">
        <div className="container">
          <div className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>{tr.badge}</div>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px,5vw,52px)', marginBottom: 16 }}>{tr.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>{tr.subtitle}</p>
        </div>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="contact-grid">
            {contactItems.map(({ Icon, label, value, href, color, desc }, i) => (
              <div key={i} className="contact-card">
                <div className="contact-icon" style={{ background: color + '15', color }}>
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="contact-label">{label}</div>
                  {href ? (
                    <a href={href} className="contact-value" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{value}</a>
                  ) : (
                    <div className="contact-value" style={{ cursor: 'default' }}>{value}</div>
                  )}
                  <div className="contact-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge">Strategy</div>
            <h2>{marketingTitle}</h2>
          </div>
          <div className="marketing-grid">
            {sections.map(({ Icon, title, items, bg }, i) => (
              <div key={i} className="marketing-card">
                <div className="marketing-header" style={{ background: bg }}>
                  <Icon size={24} color="white" />
                  <span style={{ color: 'white', fontWeight: 700, fontSize: 17 }}>{title}</span>
                </div>
                <ul className="marketing-list">
                  {items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-header { background: linear-gradient(135deg, var(--primary), var(--primary-dark)); padding: 64px 0 48px; text-align: center; color: white; }
        .contact-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
        .contact-card { display: flex; gap: 14px; padding: 22px; border: 1.5px solid var(--border); border-radius: var(--radius-lg); background: white; transition: var(--transition); align-items: flex-start; }
        .contact-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); border-color: rgba(108,60,225,0.2); }
        .contact-icon { width: 48px; height: 48px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .contact-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-secondary); margin-bottom: 3px; }
        .contact-value { font-size: 15px; font-weight: 700; color: var(--text); text-decoration: none; display: block; margin-bottom: 3px; transition: var(--transition); }
        .contact-value:hover { color: var(--primary); }
        .contact-desc { font-size: 12px; color: var(--text-muted); }
        .marketing-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
        .marketing-card { border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: white; transition: var(--transition); }
        .marketing-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); }
        .marketing-header { padding: 18px 22px; display: flex; align-items: center; gap: 12px; }
        .marketing-list { padding: 18px 22px; display: flex; flex-direction: column; gap: 10px; }
        .marketing-list li { font-size: 14px; color: var(--text-secondary); line-height: 1.5; }
        @media (max-width: 1024px) { .contact-grid { grid-template-columns: repeat(2,1fr); } .marketing-grid { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  )
}
