import { Link } from 'react-router-dom'
import { Send, AtSign, Phone, MapPin, GraduationCap } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

export default function Footer() {
  const { lang } = useLang()
  const tr = t[lang]
  const year = new Date().getFullYear()

  const navLinks = [
    { to: '/', label: tr.nav.home },
    { to: '/courses', label: tr.nav.courses },
    { to: '/about', label: tr.nav.about },
    { to: '/results', label: tr.nav.results },
    { to: '/pricing', label: tr.nav.pricing },
    { to: '/faq', label: tr.nav.faq },
    { to: '/contact', label: tr.nav.contact },
    { to: '/apply', label: tr.nav.apply },
  ]

  const socials = [
    { Icon: Send, href: 'https://t.me/parvozacademy', label: 'Telegram' },
    { Icon: AtSign, href: 'https://instagram.com/parvoz.academy', label: 'Instagram' },
  ]

  const contacts = [
    { Icon: Phone, label: tr.footer.phone, value: '+998 50 500 76 13', href: 'tel:+998505007613' },
    { Icon: Send, label: 'Telegram', value: '@parvozacademy', href: 'https://t.me/parvozacademy' },
    { Icon: MapPin, label: tr.contact.address, value: tr.footer.address, href: null },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-icon">
                <GraduationCap size={20} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="footer__logo-name">PARVOZ</div>
                <div className="footer__logo-sub">Online Academy</div>
              </div>
            </Link>
            <p className="footer__desc">{tr.footer.desc}</p>
            <div className="footer__socials">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} className="footer__social" target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">{tr.footer.links}</h4>
            <ul className="footer__links">
              {navLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">{tr.footer.contact}</h4>
            <ul className="footer__contact-list">
              {contacts.map(({ Icon, label, value, href }) => (
                <li key={label}>
                  <span className="footer__contact-row">
                    <Icon size={14} style={{ opacity: 0.5, flexShrink: 0 }} />
                    {href ? (
                      <a href={href} className="footer__link" target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{value}</a>
                    ) : (
                      <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14 }}>{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>
            © {year} PARVOZ Online Academy. {tr.footer.rights}
          </p>
        </div>
      </div>

      <style>{`
        .footer { background: linear-gradient(135deg, #1A1033 0%, #0D0720 100%); padding: 64px 0 0; margin-top: auto; }
        .footer__grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 48px; padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .footer__logo { text-decoration: none; display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .footer__logo-icon { width: 36px; height: 36px; border-radius: 9px; background: linear-gradient(135deg, var(--primary), var(--accent)); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .footer__logo-name { font-family: var(--font-heading); font-size: 18px; font-weight: 800; color: white; letter-spacing: -0.5px; }
        .footer__logo-sub { font-size: 10px; color: rgba(255,255,255,0.4); letter-spacing: 1px; text-transform: uppercase; }
        .footer__desc { color: rgba(255,255,255,0.5); font-size: 14px; line-height: 1.7; margin-bottom: 24px; }
        .footer__socials { display: flex; gap: 8px; }
        .footer__social { width: 36px; height: 36px; border-radius: var(--radius-sm); background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); transition: var(--transition); text-decoration: none; }
        .footer__social:hover { background: var(--primary); border-color: var(--primary); color: white; transform: translateY(-2px); }
        .footer__section-title { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 20px; }
        .footer__links { display: flex; flex-direction: column; gap: 10px; }
        .footer__link { color: rgba(255,255,255,0.6); font-size: 14px; text-decoration: none; transition: var(--transition); }
        .footer__link:hover { color: white; }
        .footer__contact-list { display: flex; flex-direction: column; gap: 12px; }
        .footer__contact-row { display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.5); }
        .footer__bottom { display: flex; align-items: center; justify-content: space-between; padding: 20px 0; gap: 16px; flex-wrap: wrap; }
@media (max-width: 900px) { .footer__grid { grid-template-columns: 1fr 1fr; } .footer__brand { grid-column: 1 / -1; } }
        @media (max-width: 560px) { .footer__grid { grid-template-columns: 1fr; } .footer__bottom { flex-direction: column; text-align: center; } }
      `}</style>
    </footer>
  )
}
