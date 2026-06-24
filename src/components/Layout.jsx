import { NavLink, Outlet } from 'react-router-dom';
import { navItems } from '../data';
import { Home, User, Cpu, FolderOpen, FileText, BookOpen } from 'lucide-react';

const iconMap = {
  Home: <Home size={18} />,
  About: <User size={18} />,
  Technology: <Cpu size={18} />,
  Projects: <FolderOpen size={18} />,
  Resume: <FileText size={18} />,
  Blog: <BookOpen size={18} />,
};

export default function Layout() {
  return (
    <>
      {/* Blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />

      {/* Navbar */}
      <nav className="navbar" id="navbar">
        <NavLink to="/" className="nav-logo" style={{ textDecoration: 'none' }}>A.P.S.</NavLink>
        <ul className="nav-links">
          {navItems.map((item) => {
            // Mapping names to paths
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
            return (
              <li key={item}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  {iconMap[item]}
                  {item}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="nav-logo" style={{ marginBottom: '16px', display: 'inline-block', fontSize: '22px' }}>A.P.S.</h3>
            <p>Java Full Stack Developer specializing in Spring Boot, React.js, and PostgreSQL.</p>
            <p>📍 Chatrapur / Bhubaneswar, Odisha</p>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {navItems.slice(0, 4).map(item => (
                <li key={item}><NavLink to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</NavLink></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="footer-links">
              <li><a href="mailto:swainaditya921@gmail.com">📧 swainaditya921@gmail.com</a></li>
              <li><a href="tel:+917815013235">📞 +91 7815013235</a></li>
              <li><a href="https://github.com/AdityaPrasadSwain" target="_blank" rel="noreferrer">💻 GitHub profile</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          ✦ Designed &amp; Built with 💜 by Aditya Prasad Swain — 2026
        </div>
      </footer>
    </>
  );
}
