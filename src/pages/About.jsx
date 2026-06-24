import Experience from './Experience';
import Education from './Education';
import { NavLink } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* About */}
      <section className="about-section" id="about" style={{ paddingTop: '120px', minHeight: '80vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label">About Me</div>
          <h2 className="section-title" style={{ marginBottom: '0' }}>Who I Am</h2>
        </div>

        <div className="about-layout">
          {/* Left Column - Visuals */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <div className="about-orb orb-1"></div>
              <div className="about-orb orb-2"></div>
              
              <div className="glass about-avatar-container">
                <div className="about-avatar-inner">
                  <span className="about-initials gradient-text">AS</span>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="glass-sm floating-badge badge-top">
                <span className="badge-icon">💻</span>
                <span className="badge-text">Full Stack Dev</span>
              </div>
              <div className="glass-sm floating-badge badge-bottom">
                <span className="badge-icon">🚀</span>
                <span className="badge-text">Problem Solver</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-text-content">
            <h3 className="about-headline">
              Transforming Ideas into <br/>
              <span className="gradient-text">High-Performance</span> Applications
            </h3>
            
            <div className="about-desc-container">
              <p>
                I am a passionate <strong>Java Full Stack Developer</strong> with strong expertise in backend development, frontend integration, and database management. I thrive on building scalable, high-performance applications and solving complex technical challenges.
              </p>
              <p>
                My primary focus is developing enterprise-grade web applications using <strong>Java, Spring Boot, React.js, and PostgreSQL</strong> — with a strong emphasis on clean architecture, RESTful API design, secure authentication, and seamless user experiences.
              </p>
              <p>
                I have hands-on experience building real-world full-stack projects including e-commerce platforms and event management systems with JWT authentication, role-based access control, and production-ready architecture.
              </p>
            </div>

            <div className="about-action">
              <div className="about-highlights">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React.js</span>
                <span>PostgreSQL</span>
                <span>REST APIs</span>
                <span>JWT Auth</span>
                <span>Git & GitHub</span>
                <span>Agile</span>
              </div>
              <NavLink to="/blog" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '24px' }}>
                Read My Blog
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Sections */}
      <Experience />
      <Education />
    </>
  );
}
