import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { t } from '../data/translations'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const tr = t[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const links = [
    { to: '/', label: tr.home },
    { to: '/courses', label: tr.courses },
    { to: '/about', label: tr.about },
    { to: '/results', label: tr.results },
    { to: '/pricing', label: tr.pricing },
    { to: '/faq', label: tr.faq },
    { to: '/contact', label: tr.contact },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <GraduationCap size={22} color="white" strokeWidth={2.5} />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">PARVOZ</span>
              <span className="navbar__logo-sub">Online Academy</span>
            </div>
          </Link>

          <div className="navbar__links">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="navbar__actions">
            <button className="lang-toggle" onClick={toggle}>
              <span className={lang === 'uz' ? 'lang-active' : ''}>UZ</span>
              <span className="lang-divider">|</span>
              <span className={lang === 'ru' ? 'lang-active' : ''}>RU</span>
            </button>
            <Link to="/apply" className="btn btn-primary btn-sm">{tr.apply}</Link>
            <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`mobile-menu__link ${location.pathname === l.to ? 'mobile-menu__link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/apply" className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center' }}>
            {tr.apply}
          </Link>
          <button className="lang-toggle lang-toggle--mobile" onClick={toggle}>
            <span className={lang === 'uz' ? 'lang-active' : ''}>O'zbekcha</span>
            <span className="lang-divider"> / </span>
            <span className={lang === 'ru' ? 'lang-active' : ''}>Русский</span>
          </button>
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      <style>{`
        .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; transition: all 0.3s ease; padding: 12px 0; }
        .navbar--scrolled { background: rgba(255,255,255,0.96); backdrop-filter: blur(12px); box-shadow: 0 2px 20px rgba(108,60,225,0.1); }
        .navbar__inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .navbar__logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .navbar__logo-icon { width: 38px; height: 38px; border-radius: 10px; background: linear-gradient(135deg, var(--primary), var(--accent)); display: flex; align-items: center; justify-content: center; }
        .navbar__logo-text { display: flex; flex-direction: column; line-height: 1.1; }
        .navbar__logo-name { font-family: var(--font-heading); font-size: 18px; font-weight: 800; color: var(--primary); letter-spacing: -0.5px; }
        .navbar__logo-sub { font-size: 10px; font-weight: 500; color: var(--text-secondary); letter-spacing: 0.5px; text-transform: uppercase; }
        .navbar__links { display: flex; align-items: center; gap: 2px; }
        .navbar__link { padding: 8px 12px; border-radius: var(--radius-sm); font-size: 14px; font-weight: 500; color: var(--text-secondary); transition: var(--transition); white-space: nowrap; }
        .navbar__link:hover, .navbar__link--active { color: var(--primary); background: rgba(108,60,225,0.07); }
        .navbar__actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .lang-toggle { display: flex; align-items: center; gap: 4px; padding: 6px 12px; border-radius: var(--radius-full); border: 1.5px solid var(--border); font-size: 13px; font-weight: 600; color: var(--text-secondary); background: white; cursor: pointer; transition: var(--transition); }
        .lang-toggle:hover { border-color: var(--primary); color: var(--primary); }
        .lang-active { color: var(--primary); }
        .lang-divider { color: var(--border); }
        .lang-toggle--mobile { margin-top: 12px; justify-content: center; width: 100%; padding: 12px; }
        .hamburger { display: none; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: var(--radius-sm); border: 1.5px solid var(--border); background: white; color: var(--text); cursor: pointer; transition: var(--transition); }
        .hamburger:hover { border-color: var(--primary); color: var(--primary); }
        .mobile-menu { position: fixed; top: 0; right: -100%; width: min(320px,100%); height: 100vh; background: white; z-index: 999; transition: right 0.35s cubic-bezier(0.4,0,0.2,1); box-shadow: -8px 0 40px rgba(0,0,0,0.12); }
        .mobile-menu--open { right: 0; }
        .mobile-menu__inner { display: flex; flex-direction: column; padding: 80px 24px 24px; gap: 4px; height: 100%; overflow-y: auto; }
        .mobile-menu__link { padding: 14px 16px; border-radius: var(--radius-md); font-size: 16px; font-weight: 500; color: var(--text); transition: var(--transition); }
        .mobile-menu__link:hover, .mobile-menu__link--active { color: var(--primary); background: var(--bg-soft); }
        .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 998; }
        @media (max-width: 1024px) { .navbar__links { display: none; } .hamburger { display: flex; } }
        @media (max-width: 480px) { .navbar__actions .btn { display: none; } }
      `}</style>
    </>
  )
}
