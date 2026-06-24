import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const techList = [
  "Java Full Stack Developer",
  "Spring Boot Expert",
  "React.js Specialist",
  "PostgreSQL Master",
  "UI/UX Enthusiast",
  "Software Engineer"
];

export default function Home() {
  const [techIndex, setTechIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTech = techList[techIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentTech) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        // Move to next word after deleting
        setIsDeleting(false);
        setTechIndex((prev) => (prev + 1) % techList.length);
      } else {
        // Type or delete characters
        const nextText = isDeleting 
          ? currentTech.substring(0, displayedText.length - 1)
          : currentTech.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, techIndex]);

  return (
    <>
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="availability-badge">
          <span className="availability-dot" />
          Open to Opportunities
        </div>
        <h1 className="hero-title">
          Hi, I'm <span>Aditya Prasad Swain</span>
        </h1>
        <div style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '900', marginBottom: '32px', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
          <span className="gradient-text">{displayedText}</span>
          <span style={{ animation: 'blink 1s step-end infinite', borderRight: '4px solid #8B5CF6', height: '1.2em', marginLeft: '8px' }}></span>
        </div>
        <div className="hero-buttons">
          <NavLink to="/projects" className="btn-primary" style={{ textDecoration: 'none' }}>View Projects</NavLink>
          <NavLink to="/blog" className="btn-outline" style={{ textDecoration: 'none' }}>Read Blog</NavLink>
        </div>
        <div className="stats-row">
          {[
            { num: '2+', label: 'Projects Built' },
            { num: '15+', label: 'Tech Skills' },
            { num: '1', label: 'Internship' },
          ].map((s) => (
            <div key={s.label} className="glass-sm stat-card">
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        {/* Floating glass orbs */}
        <div className="phone-orb phone-orb-1" />
        <div className="phone-orb phone-orb-2" />
        <div className="phone-orb phone-orb-3" />
        <div className="phone-orb phone-orb-4" />

        {/* Phone 1 — Home Screen */}
        <div className="phone">
          <div className="ph-header">
            <div className="ph-hamburger">
              <span /><span /><span />
            </div>
            <div className="ph-settings-icon">⚙</div>
          </div>
          <div className="ph-greeting">Good Morning!</div>
          <div className="ph-time">08:24</div>
          <div className="ph-section-label">Room</div>
          <div className="room-grid">
            {[
              { name: 'Living Room', icon: '🛋️', active: true },
              { name: 'Bedroom', icon: '🛏️' },
              { name: 'Kitchen', icon: '🍳' },
              { name: 'Dining', icon: '🍽️' },
            ].map((r) => (
              <div key={r.name} className={`room-card${r.active ? ' active' : ''}`}>
                <div className="room-icon-wrap">
                  <span className="room-icon">{r.icon}</span>
                </div>
                <div className="room-name">{r.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone 2 — Living Room (center) */}
        <div className="phone phone-center">
          <div className="ph2-header">
            <span className="ph-back">←</span>
            <span className="ph2-title">Living Room</span>
            <div className="ph-settings-icon">⚙</div>
          </div>
          <div className="temp-dial-outer">
            <div className="temp-dial">
              <span className="temp-value">24</span>
              <span className="temp-unit">°C</span>
            </div>
          </div>
          <div className="ph2-info-row">
            <span className="ph2-info-item"><span className="ph2-info-prefix">↓</span> COOLING +24°</span>
            <span className="ph2-info-item"><span className="ph2-info-prefix">◈</span> HUMID +54%</span>
          </div>
          <div className="ph2-stats">
            {[
              { val: '24°', lbl: 'Room' },
              { val: '15°', lbl: 'Outside' },
              { val: '26°', lbl: 'Target' },
            ].map((s) => (
              <div key={s.lbl} className="ph2-stat-pill">
                <div className="ph2-stat-val">{s.val}</div>
                <div className="ph2-stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone 3 — Daily Balance */}
        <div className="phone">
          <div className="ph2-header">
            <span className="ph-back">←</span>
            <span className="ph2-title">Daily Balance</span>
            <div className="ph-settings-icon">⚙</div>
          </div>
          <div className="ph3-today">Today in $</div>
          <div className="ph3-balance">43,058</div>
          <div className="ph3-elec-label">Electricity Usage</div>
          <div className="ph3-chart">
            <svg viewBox="0 0 130 45" width="100%" height="45" fill="none">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(139,92,246,0.45)" />
                  <stop offset="70%" stopColor="rgba(196,181,253,0.2)" />
                  <stop offset="100%" stopColor="rgba(139,92,246,0)" />
                </linearGradient>
                <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <path
                d="M0 35 Q12 28 25 30 Q38 32 48 20 Q58 8 70 14 Q82 20 95 10 Q108 2 120 8 L130 5"
                stroke="url(#strokeGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M0 35 Q12 28 25 30 Q38 32 48 20 Q58 8 70 14 Q82 20 95 10 Q108 2 120 8 L130 5 L130 45 L0 45 Z"
                fill="url(#areaGrad)"
              />
              {/* Data dots */}
              <circle cx="25" cy="30" r="2.5" fill="#8B5CF6" opacity="0.7" />
              <circle cx="48" cy="20" r="2.5" fill="#8B5CF6" opacity="0.7" />
              <circle cx="70" cy="14" r="2.5" fill="#A78BFA" opacity="0.7" />
              <circle cx="95" cy="10" r="3" fill="#EC4899" opacity="0.8" />
              <circle cx="120" cy="8" r="2.5" fill="#EC4899" opacity="0.7" />
            </svg>
          </div>
          <div className="ph3-usage-pill">
            <span className="ph3-usage-pct">79%</span>
            <span className="ph3-usage-kw">7,876 kW</span>
          </div>
        </div>
      </div>
    </section>

    {/* Why Hire Me */}
    <section className="why-hire-section" id="why-hire-me" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="section-label">My Value</div>
        <h2 className="section-title" style={{ marginBottom: '0' }}>Why Hire Me?</h2>
      </div>
      <div className="why-hire-grid">
        <div className="why-hire-card">
          <div className="why-hire-icon-wrapper">
            <div className="why-hire-icon">🚀</div>
          </div>
          <h3 className="why-hire-title">Scalable Architecture</h3>
          <p className="why-hire-desc">
            I build robust backends with Java and Spring Boot that can handle growing user bases, focusing on clean code, microservices, and performance optimization.
          </p>
        </div>
        <div className="why-hire-card">
          <div className="why-hire-icon-wrapper">
            <div className="why-hire-icon">🛡️</div>
          </div>
          <h3 className="why-hire-title">Secure & Reliable</h3>
          <p className="why-hire-desc">
            Security is built-in, not bolted on. I implement industry-standard authentication (JWT, OAuth2) and ensure data integrity with PostgreSQL.
          </p>
        </div>
        <div className="why-hire-card">
          <div className="why-hire-icon-wrapper">
            <div className="why-hire-icon">✨</div>
          </div>
          <h3 className="why-hire-title">Seamless Experiences</h3>
          <p className="why-hire-desc">
            With deep React.js expertise, I craft intuitive, responsive, and highly interactive frontends that users love to engage with.
          </p>
        </div>
        <div className="why-hire-card">
          <div className="why-hire-icon-wrapper">
            <div className="why-hire-icon">🤝</div>
          </div>
          <h3 className="why-hire-title">Agile Collaborator</h3>
          <p className="why-hire-desc">
            I thrive in Agile environments. I communicate clearly, review code rigorously, and deliver features on time to drive business success.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
