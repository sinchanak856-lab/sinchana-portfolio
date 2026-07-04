import React, { useState, useEffect } from 'react';
import { NAV_LINKS, RESUME_URL } from '../data/portfolioData';
import './Navbar.css';

const scroll = (id) => {
  const el = document.getElementById(id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Wordmark logo */}
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav-wordmark">sinchana<span className="nav-wordmark-accent">.kk</span></span>
        </button>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`nav-link${active === link.toLowerCase() ? ' active' : ''}`}
              onClick={() => scroll(link)}
            >
              {link}
            </button>
          ))}
        </div>

        <a
          className="btn btn-teal nav-cta"
          href={RESUME_URL}
          download="Sinchana_KK_Resume.pdf"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download Resume
        </a>

        {/* Mobile hamburger */}
        <button className="nav-hamburger" onClick={() => document.querySelector('.nav-links').classList.toggle('open')}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
