export const navItems = ['Home', 'About', 'Technology', 'Projects', 'Resume', 'Blog'];

export const techCategories = ['Elite Stack', 'Languages', 'Frameworks', 'Databases', 'Tools', 'Ai'];

export const skills = [
  // Languages
  { name: 'Java', category: 'Languages', icon: '☕' },
  { name: 'JavaScript', category: 'Languages', icon: '🟨' },
  { name: 'HTML5', category: 'Languages', icon: '📄' },
  { name: 'CSS3', category: 'Languages', icon: '🎨' },

  // Frameworks
  { name: 'Spring Boot', category: 'Frameworks', icon: '🍃' },
  { name: 'Hibernate', category: 'Frameworks', icon: '🐿️' },
  { name: 'JPA', category: 'Frameworks', icon: '🗄️' },
  { name: 'Spring Security', category: 'Frameworks', icon: '🛡️' },
  { name: 'React.js', category: 'Frameworks', icon: '⚛️' },
  { name: 'Tailwind CSS', category: 'Frameworks', icon: '🌊' },
  { name: 'Bootstrap', category: 'Frameworks', icon: '🅱️' },
  { name: 'Framer Motion', category: 'Frameworks', icon: '✨' },
  { name: 'Swiper.js', category: 'Frameworks', icon: '🔄' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', icon: '🐘' },
  { name: 'Redis', category: 'Databases', icon: '🔴' },

  // Tools
  { name: 'Docker', category: 'Tools', icon: '🐳' },
  { name: 'K8s', category: 'Tools', icon: '☸️' },
  { name: 'Kafka', category: 'Tools', icon: '📨' },
  { name: 'RabbitMQ', category: 'Tools', icon: '🐇' },
  { name: 'AWS S3', category: 'Tools', icon: '☁️' },
  { name: 'Maven', category: 'Tools', icon: '🛠️' },
  { name: 'Git', category: 'Tools', icon: '🔀' },
  { name: 'GitHub', category: 'Tools', icon: '🐙' },
  { name: 'ELK Stack', category: 'Tools', icon: '📊' },
  { name: 'New Relic', category: 'Tools', icon: '📈' },
  { name: 'Swagger', category: 'Tools', icon: '📜' },
  { name: 'JUnit', category: 'Tools', icon: '🧪' },
  { name: 'Mockito', category: 'Tools', icon: '🤡' },
  { name: 'REST APIs', category: 'Tools', icon: '🔗' },
  { name: 'Figma', category: 'Tools', icon: '🖌️' },
  { name: 'Canva', category: 'Tools', icon: '🖼️' },
  { name: 'VS Code', category: 'Tools', icon: '💻' },
  { name: 'Postman', category: 'Tools', icon: '🚀' },
  { name: 'Antygravity', category: 'Tools', icon: '🌌' },

  // Ai
  { name: 'OpenAI API', category: 'Ai', icon: '🤖' },
  { name: 'Prompt Engineering', category: 'Ai', icon: '🧠' },
];

export const projects = [
  {
    tag: 'E-Commerce',
    title: 'Udrakala — Odisha Handloom Platform',
    desc: 'Engineered a full-stack e-commerce platform to promote authentic Odisha handloom products, featuring secure JWT authentication, role-based access control, multi-step product management, inventory tracking, and a responsive, scalable architecture.',
    techs: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL'],
    link: 'https://github.com/AdityaPrasadSwain',
  },
  {
    tag: 'Full Stack App',
    title: 'Event Management & Booking System',
    desc: 'Built an enterprise-grade event management platform with role-based access (Admin/Organizer/User), QR-code ticketing, attendance scanning, email notifications, partial payments, GST calculations, and organizer analytics dashboards.',
    techs: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL'],
    link: 'https://github.com/AdityaPrasadSwain',
  },
  {
    tag: 'Finance Tracker',
    title: 'Expense Management System',
    desc: 'Developed a comprehensive expense management system to track personal or business finances. Includes features like categorizing expenses, budget limits, monthly reporting, and secure authentication.',
    techs: ['React.js', 'Spring Boot', 'PostgreSQL'],
    link: 'https://github.com/AdityaPrasadSwain',
  },
];

export const blogs = [
  {
    title: 'Mastering Spring Boot Microservices',
    date: 'June 20, 2026',
    snippet: 'Discover the best practices for structuring, securing, and scaling your microservices architecture using Spring Boot and Netflix OSS.',
    readTime: '8 min read',
    link: '#',
  },
  {
    title: 'React Server Components Explained',
    date: 'May 14, 2026',
    snippet: 'A deep dive into how Server Components change the way we build React applications, focusing on performance and bundle sizes.',
    readTime: '6 min read',
    link: '#',
  },
  {
    title: 'Optimizing PostgreSQL Queries',
    date: 'April 02, 2026',
    snippet: 'Stop your database from being the bottleneck. Learn how to use EXPLAIN, indexes, and materialized views to speed up complex queries.',
    readTime: '10 min read',
    link: '#',
  },
];
