export default function Experience() {
  return (
    <section className="timeline-section" id="experience" style={{ paddingTop: '120px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="section-label">Career</div>
        <h2 className="section-title" style={{ marginBottom: '0' }}>Professional Experience</h2>
      </div>
      
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-dot">💼</div>
          <div className="glass timeline-content">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">Java Full Stack Intern</h3>
                <h4 className="timeline-subtitle">Zidio Development — Bangalore</h4>
              </div>
              <span className="timeline-date">Jun 2025 – Aug 2025</span>
            </div>
            <p className="timeline-desc">
              Contributed to the development and maintenance of scalable web applications using Spring Boot, Java, React.js, and PostgreSQL within an Agile team environment.
            </p>
            <ul className="timeline-list">
              <li>Designed and implemented RESTful APIs for seamless frontend-backend integration</li>
              <li>Integrated React.js frontend with Spring Boot backend services</li>
              <li>Applied JWT authentication and role-based access control for secure endpoints</li>
              <li>Contributed to database schema design and optimized SQL queries for performance</li>
              <li>Managed version control workflows using Git and GitHub</li>
              <li>Collaborated in Agile sprints, code reviews, and daily stand-ups</li>
              <li>Debugged critical issues and delivered scalable, production-ready features</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
