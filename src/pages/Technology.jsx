import { useState } from 'react';
import { skills, techCategories } from '../data';

export default function Technology() {
  const [activeTab, setActiveTab] = useState('Elite Stack');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter skills
  const filteredSkills = skills.filter(sk => {
    const matchesSearch = sk.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'Elite Stack' || sk.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <section className="skills-section" id="technology" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="section-label">Tech Stack</div>
        <h2 className="section-title" style={{ marginBottom: '30px' }}>Technologies & Tools</h2>
        
        {/* Search Bar */}
        <div className="tech-search-container">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search skills..." 
            className="tech-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories Tabs */}
        <div className="tech-tabs">
          {techCategories.map(cat => (
            <button 
              key={cat} 
              className={`tech-tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat === 'Elite Stack' && '⌘ '}
              {cat === 'Languages' && '</> '}
              {cat === 'Frameworks' && '📦 '}
              {cat === 'Databases' && '🛢️ '}
              {cat === 'Tools' && '🛠️ '}
              {cat === 'Ai' && '✨ '}
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="tech-grid">
        {filteredSkills.map((sk) => (
          <div key={sk.name} className="glass tech-card">
            <div className="tech-icon">{sk.icon}</div>
            <div className="tech-name">{sk.name}</div>
            <div className="tech-category">{sk.category}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
