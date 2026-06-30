import React, { useRef, useEffect, useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="sw" ref={ref}>
        <div className="sec-num">02 // SKILLS</div>
        <h2 className="sec-h2">Technical <span className="teal">Skills</span></h2>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, gi) => (
            <div className="skill-group card" key={cat.label}>
              <div className="skill-group-hd">
                <span className="sg-icon">{cat.icon}</span>
                <span className="sg-label">{cat.label}</span>
              </div>
              <div className="skill-chips">
                {cat.skills.map((s, si) => (
                  <span
                    className={`skill-chip${animate ? ' in' : ''}`}
                    key={s.name}
                    style={{ transitionDelay: animate ? `${gi * 60 + si * 35}ms` : '0ms' }}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
