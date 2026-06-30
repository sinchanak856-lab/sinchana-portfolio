import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="sw">
        <div className="sec-num">03 // EXPERIENCE</div>
        <h2 className="sec-h2">Experience &amp; <span className="teal">Education</span></h2>

        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <div className={`tl-item${item.type === 'edu' ? ' edu' : ''}`} key={i}>
              <div className="tl-dot" />
              <div className="tl-card card">
                <div className="tl-top">
                  <div>
                    <div className="tl-title">{item.title}</div>
                    <div className="tl-company teal">{item.company}</div>
                  </div>
                  <div className="tl-right">
                    <span className="tl-period">{item.period}</span>
                    <span className="tl-location">{item.location}</span>
                  </div>
                </div>
                <p className="tl-desc">{item.desc}</p>
                <div className="tl-tags">
                  {item.tags.map((t) => <span className="pill" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
