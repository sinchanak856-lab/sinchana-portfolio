import React from 'react';
import { META, RESUME_URL, PHOTO_URL } from '../data/portfolioData';
import './Hero.css';

const scrollTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-grid sw">
        {/* LEFT — copy */}
        <div className="hero-left">
          <div className="hero-badge reveal" style={{ animationDelay: '0s' }}>
            <span className="hero-badge-dot" />
            {META.availability}
          </div>

          <h1 className="hero-headline reveal" style={{ animationDelay: '.08s' }}>
            Hi, I&apos;m <span className="hl-accent">Sinchana</span>.
            <span className="hl-sub">
              I build practical, data-driven solutions <span className="hl-accent">&amp;</span> modern web applications.
            </span>
          </h1>

          <p className="hero-bio reveal" style={{ animationDelay: '.16s' }}>{META.bio}</p>

          <div className="hero-cta-row reveal" style={{ animationDelay: '.24s' }}>
            <a className="btn btn-teal hero-btn-primary" href={RESUME_URL} download="Sinchana_KK_Resume.pdf">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo('projects')}>
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

          <div className="hero-contact reveal" style={{ animationDelay: '.32s' }}>
            <span className="hc-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {META.location}
            </span>
            <a className="hc-item" href={`mailto:${META.email}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              {META.email}
            </a>
            <a className="hc-item" href={META.github} target="_blank" rel="noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
          <div className="hero-contact hero-contact-row2 reveal" style={{ animationDelay: '.36s' }}>
            <a className="hc-item" href={META.linkedin} target="_blank" rel="noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT — photo / identity card */}
        <div className="hero-right reveal" style={{ animationDelay: '.2s' }}>
          <div className="hero-photo-card">
            <div className="hero-photo-stage">
              <div className="hero-photo-blob" aria-hidden="true" />
              <div className="hero-photo-frame">
                <img src={PHOTO_URL} alt="Sinchana K K" className="hero-photo-img" />
              </div>
            </div>
            <div className="hero-photo-divider" />
            <div className="hero-photo-info">
              <div className="hpi-label">{'// currently'}</div>
              <div className="hpi-role">{META.currentRole}</div>
              <div className="hpi-degree">{META.degree}</div>
              <div className="hpi-college">{META.college}</div>
              <div className="hpi-grad">Expected Graduation: <span className="hl-accent">{META.yearOfPassing}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
