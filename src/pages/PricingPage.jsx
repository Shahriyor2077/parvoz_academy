import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'
import { CheckCircle, Shield, GraduationCap, Users, CreditCard, Smartphone, Building2, Flame, Sparkles } from 'lucide-react'

export default function PricingPage() {
  const { lang } = useLang()
  const tr = t[lang].pricing

  const comparison = {
    uz: {
      title: 'Nima uchun PARVOZ?',
      headers: ['', 'Oddiy repetitor', 'Akademiyalar', 'PARVOZ'],
      rows: [
        ['Narx', "400,000–800,000 so'm/oy", "300,000–600,000 so'm/oy", "200,000 so'm/oy"],
        ['Kafolat', '❌', '❌', '✅ 100%'],
        ['Shaxsiy mentor', '✅ (1 fan)', '❌', '✅ (barcha fanlar)'],
        ['24/7 yordam', '❌', '❌', '✅'],
        ['Video arxiv', '❌', '✅', '✅'],
        ['Haftalik test', '❌', '✅', '✅'],
        ["Sovg'a tizimi", '❌', '❌', '✅'],
        ['Onlayn format', "Ba'zan", '❌', '✅'],
      ]
    },
    ru: {
      title: 'Почему PARVOZ?',
      headers: ['', 'Частный репетитор', 'Академии', 'PARVOZ'],
      rows: [
        ['Цена', '400 000–800 000 сум/мес', '300 000–600 000 сум/мес', '200 000 сум/мес'],
        ['Гарантия', '❌', '❌', '✅ 100%'],
        ['Личный ментор', '✅ (1 предмет)', '❌', '✅ (все предметы)'],
        ['Поддержка 24/7', '❌', '❌', '✅'],
        ['Видеоархив', '❌', '✅', '✅'],
        ['Еженедельные тесты', '❌', '✅', '✅'],
        ['Система подарков', '❌', '❌', '✅'],
        ['Онлайн формат', 'Иногда', '❌', '✅'],
      ]
    }
  }[lang]

  const paymentLabel = lang === 'uz' ? "To'lov usullari" : 'Способы оплаты'
  const faqLabel = lang === 'uz' ? "Ko'proq savollar" : 'Больше вопросов'
  const scholarTitle = lang === 'uz' ? 'Stipendiya Dasturi' : 'Стипендиальная программа'
  const scholarDesc = lang === 'uz'
    ? "Iqtisodiy qiyinchiliklar tufayli o'qiy olmayotgan iqtidorli o'quvchilar uchun bepul o'qish imkoniyati. Ariza bering va baholansin."
    : 'Возможность бесплатного обучения для талантливых учеников, столкнувшихся с финансовыми трудностями. Подайте заявку и пройдите отбор.'
  const scholarBtn = lang === 'uz' ? 'Stipendiyaga ariza berish' : 'Подать заявку на стипендию'

  const paymentMethods = [
    { Icon: CreditCard, name: 'Payme', color: '#00AAFF' },
    { Icon: Smartphone, name: 'Click', color: '#22C55E' },
    { Icon: Building2, name: lang === 'uz' ? "Bank o'tkazmasi" : 'Банковский перевод', color: '#8B5CF6' },
  ]

  return (
    <main style={{ paddingTop: 80 }}>
      {/* Header */}
      <div className="page-header">
        <div className="container">
          <div className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
            {tr.badge}
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(32px,5vw,52px)', marginBottom: 16 }}>{tr.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>{tr.subtitle}</p>
        </div>
      </div>

      {/* Main Pricing Card */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="pricing-main">
            <div className="pricing-card">
              <div className="pricing-popular">
                <Flame size={14} /> {tr.popular}
              </div>
              <div className="pricing-amount">
                <span className="pricing-currency">{tr.currency}</span>
                <span className="pricing-num">{tr.price}</span>
                <span className="pricing-period">{tr.month}</span>
              </div>

              <ul className="pricing-features">
                {tr.features.map((f, i) => (
                  <li key={i} className="pricing-feature">
                    <CheckCircle size={18} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/apply" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 17, padding: '16px', gap: 8 }}>
                <Sparkles size={18} /> {tr.cta}
              </Link>

              <div className="pricing-note-box">
                <Shield size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                <p>{tr.note}</p>
              </div>
            </div>

            <div className="pricing-side">
              {/* Payment methods */}
              <div className="pricing-info-card">
                <h3 style={{ marginBottom: 20 }}>{paymentLabel}</h3>
                <div className="payment-methods">
                  {paymentMethods.map((p, i) => (
                    <div key={i} className="payment-item">
                      <div className="payment-icon" style={{ background: `${p.color}15`, color: p.color }}>
                        <p.Icon size={18} />
                      </div>
                      <span className="payment-name">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarship */}
              <div className="pricing-info-card scholarship-card">
                <GraduationCap size={36} color="white" style={{ marginBottom: 12 }} />
                <h3 style={{ marginBottom: 10, color: 'white' }}>{scholarTitle}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 20 }}>{scholarDesc}</p>
                <Link to="/apply" className="btn btn-white btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                  {scholarBtn}
                </Link>
              </div>

              {/* Referral */}
              <div className="pricing-info-card">
                <Users size={28} color="var(--primary)" style={{ marginBottom: 12 }} />
                <h3 style={{ marginBottom: 10 }}>
                  {lang === 'uz' ? "Do'st taklif et — chegirma ol!" : 'Пригласи друга — получи скидку!'}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {lang === 'uz'
                    ? "Har bir do'st taklifi uchun 20,000 so'm bonus oling. Do'stingiz ham chegirma oladi!"
                    : 'За каждого приглашённого друга получайте бонус 20 000 сум. Ваш друг тоже получит скидку!'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge">{lang === 'uz' ? 'Taqqoslash' : 'Сравнение'}</div>
            <h2>{comparison.title}</h2>
          </div>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  {comparison.headers.map((h, i) => (
                    <th key={i} className={i === 3 ? 'th--highlight' : ''}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={`${j === 0 ? 'td--label' : ''} ${j === 3 ? 'td--highlight' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ link */}
      <section className="section-sm" style={{ background: 'var(--bg-soft)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
            {lang === 'uz' ? "Qo'shimcha savollar bormi?" : 'Остались вопросы?'}
          </p>
          <Link to="/faq" className="btn btn-secondary">
            {faqLabel} →
          </Link>
        </div>
      </section>

      <style>{`
        .page-header {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          padding: 64px 0 48px;
          text-align: center;
          color: white;
        }
        .pricing-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: flex-start;
        }
        .pricing-card {
          background: white;
          border: 2px solid var(--primary);
          border-radius: var(--radius-xl);
          padding: 40px;
          position: relative;
          box-shadow: var(--shadow-xl);
        }
        .pricing-popular {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: white;
          padding: 6px 20px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .pricing-amount { display: flex; align-items: baseline; gap: 6px; margin-bottom: 28px; margin-top: 16px; }
        .pricing-currency { font-size: 15px; color: var(--text-secondary); font-weight: 600; }
        .pricing-num { font-size: 56px; font-weight: 800; color: var(--text); font-family: var(--font-heading); line-height: 1; letter-spacing: -2px; }
        .pricing-period { font-size: 16px; color: var(--text-secondary); }
        .pricing-features { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
        .pricing-feature { display: flex; align-items: center; gap: 12px; font-size: 15px; }
        .pricing-note-box {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px 16px;
          background: var(--bg-soft);
          border-radius: var(--radius-md);
          margin-top: 20px;
          border: 1px solid var(--border-soft);
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .pricing-side { display: flex; flex-direction: column; gap: 20px; }
        .pricing-info-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
          transition: var(--transition);
        }
        .pricing-info-card:hover { box-shadow: var(--shadow-md); }
        .pricing-info-card h3 { font-size: 17px; }
        .scholarship-card {
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          border: none;
          color: white;
        }
        .scholarship-card h3 { color: white; }
        .payment-methods { display: flex; gap: 12px; flex-wrap: wrap; }
        .payment-item { display: flex; align-items: center; gap: 8px; }
        .payment-icon {
          width: 36px; height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .payment-name { font-size: 14px; font-weight: 600; color: var(--text); }
        .comparison-table-wrap { overflow-x: auto; border-radius: var(--radius-lg); border: 1px solid var(--border); }
        .comparison-table { width: 100%; border-collapse: collapse; }
        .comparison-table th, .comparison-table td {
          padding: 14px 20px;
          text-align: left;
          border-bottom: 1px solid var(--border);
          font-size: 14px;
        }
        .comparison-table thead th { background: var(--bg-soft); font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-secondary); }
        .comparison-table tr:last-child td { border-bottom: none; }
        .comparison-table tr:hover td { background: var(--bg-soft); }
        .th--highlight, .td--highlight { background: rgba(108,60,225,0.05) !important; color: var(--primary); font-weight: 700; }
        .td--label { font-weight: 600; color: var(--text); }
        @media (max-width: 900px) {
          .pricing-main { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
        }
      `}</style>
    </main>
  )
}
