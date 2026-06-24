import { blogs } from '../data';

export default function Blog() {
  return (
    <section className="blog-section" id="blog" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="section-label">Thoughts & Insights</div>
        <h2 className="section-title" style={{ marginBottom: '0' }}>My Blog</h2>
      </div>
      <div className="blog-grid">
        {blogs.map((post) => (
          <div key={post.title} className="blog-card">
            <div className="blog-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-snippet">{post.snippet}</p>
            <a href={post.link} className="blog-link">
              Read Article
              <span className="blog-link-arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
