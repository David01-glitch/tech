import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/tutorials', label: 'Tutorials' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-brand-800">
          <span className="inline-flex w-9 h-9 rounded-xl bg-brand-600 text-white items-center justify-center">T</span>
          Tech Ease After 50
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({isActive}) => `text-base font-medium transition ${isActive ? 'text-brand-700' : 'text-slate-700 hover:text-brand-600'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-x py-3 flex flex-col gap-2">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
                className={({isActive}) => `py-2 px-3 rounded-lg text-base ${isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700'}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
