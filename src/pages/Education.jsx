export default function Education() {
  return (
    <section className="timeline-section" id="education" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="section-label">Education</div>
        <h2 className="section-title" style={{ marginBottom: '0' }}>Academic Background</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-dot">🎓</div>
          <div className="glass timeline-content">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">Bachelor in Computer Application (BCA)</h3>
                <h4 className="timeline-subtitle">Centurion University of Technology & Management</h4>
              </div>
              <span className="timeline-date">2022 — 2025</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot">🏫</div>
          <div className="glass timeline-content">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-title">Higher Secondary (Science)</h3>
                <h4 className="timeline-subtitle">Arihant Higher Secondary School, Berhampur</h4>
              </div>
              <span className="timeline-date">2020 — 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
