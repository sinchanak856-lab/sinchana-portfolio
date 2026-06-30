import React, { useRef, useEffect, useState } from 'react';
import { META, CERTIFICATIONS, ABOUT_TAGLINE, ABOUT_ROLES, ABOUT_PARAGRAPHS } from '../data/portfolioData';
import './About.css';

export default function About() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cardDelay = (i) => (animate ? `${i * 100}ms` : '0ms');

  return (
    <section id="about">
      <div className="sw" ref={ref}>
        <div className="sec-num">01 // ABOUT</div>
        <h2 className="sec-h2">About <span className="teal">Me</span></h2>
        <p className="about-lead">{ABOUT_TAGLINE}</p>

        <div className="about-roles">
          {ABOUT_ROLES.map((r, i) => (
            <span
              className={`about-role-tag${animate ? ' in' : ''}`}
              key={r}
              style={{ transitionDelay: animate ? `${i * 70}ms` : '0ms' }}
            >
              {r}
            </span>
          ))}
        </div>

        <div className="about-grid">
          {/* Bio card */}
          <div className={`about-card about-card-bio card${animate ? ' in' : ''}`} style={{ transitionDelay: cardDelay(0) }}>
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p className="about-para" key={i}>{p}</p>
            ))}
          </div>

          {/* Quick info card */}
          <div className={`about-card about-card-info card${animate ? ' in' : ''}`} style={{ transitionDelay: cardDelay(1) }}>
            <div className="about-card-title">Quick Info</div>
            <div className="about-info">
              {[
                ['Degree',   META.degree],
                ['College',  META.college],
                ['Passed',   META.yearOfPassing],
                ['Location', META.location],
                ['Email',    META.email],
              ].map(([label, value]) => (
                <div className="about-info-row" key={label}>
                  <span className="ainfo-bullet" />
                  <span className="ainfo-label">{label}</span>
                  <span className="ainfo-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-grid about-grid-2">
          {/* Certifications card — full width */}
          <div className={`about-card about-card-certs card${animate ? ' in' : ''}`} style={{ transitionDelay: cardDelay(2) }}>
            <div className="about-card-title">Certifications</div>
            <div className="cert-list">
              {CERTIFICATIONS.map((c, i) => (
                <div className="cert-item" key={i}>
                  <div className="cert-num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-meta">{c.issuer} · {c.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
