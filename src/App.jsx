import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code2,
  Compass,
  Download,
  ExternalLink,
  Globe,
  Mail,
  Menu,
  MessageCircle,
  MoonStar,
  Palette,
  Search,
  Sparkles,
  SunMedium,
  X,
} from 'lucide-react';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './App.css';
import {
  articles,
  contactConfig,
  featuredProjects,
  galleryItems,
  journeyItems,
  navigationItems,
  profile,
  projects,
  resumeData,
  services,
  skillsGroups,
  socialLinks,
  testimonials,
} from './data/siteData';

const formspreeEndpoint = contactConfig.formspreeEndpoint;

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('muqaddas-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('muqaddas-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <AppContent theme={theme} setTheme={setTheme} />
    </BrowserRouter>
  );
}

function AppContent({ theme, setTheme }) {
  const location = useLocation();

  return (
    <div className="site-shell">
      <Header theme={theme} setTheme={setTheme} />
      <main className="page-shell">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: 'easeOut' }}
            className="page-viewport"
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/journey" element={<JourneyPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/journal/:slug" element={<ArticleDetailPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function Header({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Muqaddas home">
          <span className="brand-mark">M</span>
          <span className="brand-word">MUQADDAS</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <MoonStar size={18} /> : <SunMedium size={18} />}
          </button>
          <Link to="/contact" className="button button-primary header-cta">
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Open mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="button button-primary" onClick={() => setIsOpen(false)}>
            Contact me
          </Link>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">MUQADDAS</p>
          <p className="footer-copy">Creative developer crafting thoughtful digital experiences.</p>
        </div>
        <div className="footer-links">
          {navigationItems.slice(0, 5).map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-socials">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
              {renderSocialIcon(item.icon)}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Muqaddas. All rights reserved.</p>
        <Link to="/contact">Start a project</Link>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [location.pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Creative developer</span>
            <h1>Hello, I&apos;m Muqaddas.</h1>
            <p className="hero-title">Creative Developer</p>
            <p className="hero-tagline">I turn ideas into beautiful digital experiences.</p>
            <p className="hero-text">
              I design and build websites that feel premium, intentional, and memorable — balancing creative direction,
              usability, and thoughtful frontend execution.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="button button-primary">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="button button-secondary">
                Let&apos;s Work Together
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Creative workspace collage">
            <div className="visual-card visual-card-large">
              <img
                src="/images/about-portrait.webp"
                alt="Muqaddas in a pink suit outside a modern office"
                fetchPriority="high"
              />
            </div>
            <div className="visual-card visual-card-small">
              <img
                src="/images/home-hero.webp"
                alt="Working at a laptop at a bright, tidy desk"
              />
            </div>
            <div className="floating-note">Editorial • Responsive • Thoughtful</div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <SectionHeading
          eyebrow="Featured projects"
          title="Selected work shaped for clarity and expression."
          copy="A set of concept-driven experiences exploring brand storytelling, product presentation, and immersive interfaces."
        />
        <div className="project-grid home-projects">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="container section-block about-intro-card">
        <div className="about-intro-copy">
          <SectionHeading eyebrow="About" title="Creating digital experiences with purpose." copy="I enjoy turning ideas into beautifully structured experiences that feel considered from first glance to final interaction." />
          <Link className="text-link" to="/about">
            Read more <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="about-intro-stats">
          <div>
            <strong>Creative-first</strong>
            <span>Thoughtful design and practical coding.</span>
          </div>
          <div>
            <strong>Responsive</strong>
            <span>Built to feel elegant across devices.</span>
          </div>
          <div>
            <strong>Strategic</strong>
            <span>Clear structure and stronger user journeys.</span>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <SectionHeading eyebrow="Services" title="Creative support for thoughtful websites." copy="Each engagement is shaped around clarity, visual polish, and a digital experience that feels premium and useful." />
        <div className="services-grid">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="container section-block">
        <SectionHeading eyebrow="Skills" title="A focused mix of design and frontend craft." copy="I work across structure, visual hierarchy, and UI implementation with a strong emphasis on clarity and usability." />
        <div className="skills-showcase">
          {skillsGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block philosophy-block">
        <SectionHeading eyebrow="Creative philosophy" title="Less noise. More intention." copy="I believe the best design feels calm, focused, and memorable — letting the work speak with clarity instead of excess." />
      </section>

      <section className="container section-block">
        <SectionHeading eyebrow="My journey" title="A steady path of learning and creative growth." copy="Each project adds to a growing understanding of design, interaction, and digital storytelling." />
        <div className="journey-preview">
          {journeyItems.map((item) => (
            <div key={`${item.title}-${item.period}`} className="journey-item compact">
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container cta-banner">
        <div>
          <p className="eyebrow">Let&apos;s build something beautiful</p>
          <h2>Need a portfolio, landing page, or full digital presence that feels premium?</h2>
        </div>
        <Link to="/contact" className="button button-primary">
          Start a project
        </Link>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <div className="page-content">
      <section className="page-hero container">
        <SectionHeading eyebrow="About me" title="A creative developer who enjoys visual clarity and purposeful experiences." copy="I’m interested in building digital spaces that feel human, elegant, and thoughtfully considered." />
      </section>
      <section className="container editorial-layout">
        <div className="editorial-image">
          <img src="/images/gallery-4.webp" alt="Pink laptop on a styled creative desk" loading="lazy" />
        </div>
        <div className="editorial-copy">
          <h3>My story</h3>
          <p>
            My creative journey began with a fascination for visual storytelling, composition, and how digital spaces can guide feeling and action.
          </p>
          <p>
            I develop websites with an emphasis on elegance, structure, and a clear sense of purpose. I like to create experiences that feel premium without becoming complicated.
          </p>
          <h3>How I work</h3>
          <p>
            I approach each project by learning the emotional and practical goals behind the experience, then translating those into an interface that feels both memorable and useful.
          </p>
        </div>
      </section>
      <section className="container value-grid">
        <div className="value-card">
          <Palette size={22} />
          <h3>Design thinking</h3>
          <p>Thoughtful visual direction and balanced composition are central to every project.</p>
        </div>
        <div className="value-card">
          <Code2 size={22} />
          <h3>Frontend craft</h3>
          <p>I care about responsive structure, semantic code, and experiences that feel smooth and grounded.</p>
        </div>
        <div className="value-card">
          <Compass size={22} />
          <h3>Intentionality</h3>
          <p>Every decision should support clarity, trust, and a stronger digital narrative.</p>
        </div>
      </section>
    </div>
  );
}

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map((project) => project.category))];
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-content container">
      <SectionHeading eyebrow="Projects" title="Portfolio concepts with a more editorial perspective." copy="A selection of premium web experiences and creative interface explorations." />
      <div className="filters-row">
        <div className="filter-chips" role="tablist" aria-label="Project categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={category === activeCategory ? 'chip active' : 'chip'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={16} />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search projects"
            aria-label="Search projects"
          />
        </label>
      </div>

      <div className="masonry-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <div className="empty-state">
          <p>No projects match your search. Try a different keyword or category.</p>
        </div>
      )}
    </div>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <div className="page-content project-detail">
      <div className="container">
        <Link to="/projects" className="back-link">
          <ChevronLeft size={16} /> Back to projects
        </Link>
        <div className="project-hero">
          <div className="project-hero-copy">
            <span className="eyebrow">{project.category}</span>
            <h1>{project.title}</h1>
            <p>{project.shortDescription}</p>
            {project.demoUrl && project.demoUrl !== '#' ? (
              <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noreferrer">
                {project.demoLabel} <ExternalLink size={16} />
              </a>
            ) : (
              <span className="button button-secondary button-disabled">{project.demoLabel}</span>
            )}
          </div>
          <div className="project-hero-media">
            <img src={project.image} alt={project.alt || project.title} />
          </div>
        </div>
      </div>

      <section className="container detail-grid">
        <div>
          <h3>Overview</h3>
          <p>{project.overview}</p>
        </div>
        <div>
          <h3>Problem & purpose</h3>
          <p>{project.problem}</p>
        </div>
      </section>

      <section className="container detail-layout">
        <div className="detail-panel">
          <h3>Approach</h3>
          <p>{project.approach}</p>
        </div>
        <div className="detail-panel">
          <h3>Features</h3>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container tech-panel">
        <h3>Technology stack</h3>
        <div className="tag-row">
          {project.stack.map((item) => (
            <span key={item} className="tag">{item}</span>
          ))}
        </div>
      </section>

      <section className="container gallery-grid">
        {project.gallery.map((image, index) => (
          <img key={`${project.slug}-${index}`} loading="lazy" src={image} alt={`${project.title} gallery view ${index + 1}`} />
        ))}
      </section>

      <section className="container detail-layout">
        <div className="detail-panel">
          <h3>Challenges & learning</h3>
          <p>{project.challenge}</p>
          <p>{project.learning}</p>
        </div>
        <div className="detail-panel">
          <h3>What this project explores</h3>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="page-content container">
      <SectionHeading eyebrow="Skills & expertise" title="A balance of creative and practical frontend skills." copy="I build with clarity, utility, and a strong interest in visual craft." />
      <div className="skills-layout">
        <div className="skills-grid">
          {skillsGroups.map((group) => (
            <div key={group.title} className="skill-card large">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="skills-visual-card" aria-label="Skills visual">
          <img src="/images/skills-desk.webp" alt="Hands typing code on a laptop" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="page-content container">
      <SectionHeading eyebrow="Services" title="Support for brands, founders, and creative businesses." copy="Focused services designed to create a premium digital presence with clear value and a strong experience." />
      <div className="services-grid full-width">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}

function JourneyPage() {
  return (
    <div className="page-content container">
      <SectionHeading eyebrow="My journey" title="A timeline of learning, practice, and creative momentum." copy="The path is shaped by curiosity, experimentation, and a consistent focus on improving the digital experience." />
      <div className="journey-layout">
        <div className="timeline">
          {journeyItems.map((item, index) => (
            <div key={`${item.title}-timeline`} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <small>{item.type}</small>
              </div>
              {index < journeyItems.length - 1 && <div className="timeline-line" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="journey-visual-card" aria-label="My journey visual story">
          <img src="/images/journey-vision.webp" alt="My journey vision board" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', ...new Set(galleryItems.map((item) => item.category))];
  const visibleGallery = activeFilter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  const selectedIndex = visibleGallery.findIndex((item) => item.id === selectedImage?.id);

  const handleNext = () => {
    if (selectedIndex === -1) return;
    const nextIndex = (selectedIndex + 1) % visibleGallery.length;
    setSelectedImage(visibleGallery[nextIndex]);
  };

  const handlePrevious = () => {
    if (selectedIndex === -1) return;
    const previousIndex = (selectedIndex - 1 + visibleGallery.length) % visibleGallery.length;
    setSelectedImage(visibleGallery[previousIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedImage(null);
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'ArrowLeft') handlePrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex, visibleGallery]);

  return (
    <div className="page-content container">
      <SectionHeading eyebrow="Creative gallery" title="Visual explorations and concept studies." copy="A collection of moodboards, design explorations, and interface experiments shaped by calm contrast and thoughtful composition." />
      <div className="filters-row gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeFilter ? 'chip active' : 'chip'}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="masonry-grid gallery-grid-items">
        {visibleGallery.map((item) => (
          <button type="button" key={item.id} className="gallery-item" onClick={() => setSelectedImage(item)}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-lightbox" onClick={() => setSelectedImage(null)} aria-label="Close gallery image">
              <X size={18} />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-meta">
              <div>
                <span>{selectedImage.category}</span>
                <h3>{selectedImage.title}</h3>
              </div>
              <div className="lightbox-controls">
                <button type="button" onClick={handlePrevious} aria-label="Previous image">
                  <ChevronLeft size={16} />
                </button>
                <button type="button" onClick={handleNext} aria-label="Next image">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function JournalPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(articles.map((article) => article.category))];
  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-content container">
      <SectionHeading eyebrow="Journal" title="Notes on creativity, learning, and thoughtful digital craft." copy="Short notes on design, development, and creative work." />
      <div className="filters-row">
        <div className="filter-chips">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={category === activeCategory ? 'chip active' : 'chip'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={16} />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search articles"
            aria-label="Search articles"
          />
        </label>
      </div>

      <div className="article-grid">
        {filteredArticles.map((article) => (
          <Link key={article.slug} to={`/journal/${article.slug}`} className="article-card">
            <img src={article.image} alt={article.title} loading="lazy" />
            <div className="article-card-body">
              <span className="eyebrow tiny">{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="article-meta">
                <span>{article.readTime}</span>
                <span>Read article</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function ArticleDetailPage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <NotFoundPage />;
  }

  const relatedArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <div className="page-content container article-detail">
      <Link to="/journal" className="back-link">
        <ChevronLeft size={16} /> Back to journal
      </Link>
      <article className="article-layout">
        <header className="article-hero">
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <div className="article-meta">
            <span>{article.readTime}</span>
            <span>Journal</span>
          </div>
        </header>
        <img src={article.image} alt={article.title} className="article-feature-image" />
        <div className="article-body">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <aside className="related-articles">
        <h3>Related articles</h3>
        {relatedArticles.map((related) => (
          <Link key={related.slug} to={`/journal/${related.slug}`} className="related-link">
            <span>{related.category}</span>
            <strong>{related.title}</strong>
          </Link>
        ))}
      </aside>
    </div>
  );
}

function TestimonialsPage() {
  return (
    <div className="page-content container">
      <SectionHeading eyebrow="Testimonials" title="Feedback will appear here when available." copy="No client testimonials have been provided yet, so this page remains intentionally empty and ready for future updates." />
      <div className="empty-state large-empty">
        <Sparkles size={36} />
        <p>No testimonials have been shared yet. When real feedback becomes available, it will be added here.</p>
      </div>
    </div>
  );
}

function ResumePage() {
  const hasPdf = false;

  return (
    <div className="page-content container">
      <SectionHeading eyebrow="Resume" title="Professional summary and editable details." copy="A quick look at my skills, learning, and the kind of work I do." />
      <div className="resume-layout">
        <div className="resume-panel">
          <h3>Professional summary</h3>
          <p>{resumeData.summary}</p>
        </div>
        <div className="resume-panel">
          <h3>Skills</h3>
          <div className="tag-row">
            {skillsGroups.flatMap((group) => group.items).map((item) => (
              <span key={item} className="tag">{item}</span>
            ))}
          </div>
        </div>
        <div className="resume-panel">
          <h3>Education</h3>
          <ul>
            {resumeData.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="resume-panel">
          <h3>Courses</h3>
          <ul>
            {resumeData.courses.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="resume-panel">
          <h3>Projects</h3>
          <ul>
            {resumeData.projects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {hasPdf ? (
        <a className="button button-primary" href="/Muqaddas-CV.pdf" download>
          <Download size={18} /> Download CV
        </a>
      ) : (
        <a className="button button-primary" href={`mailto:${profile.email}?subject=CV%20request`}>
          <Mail size={18} /> Request my CV
        </a>
      )}
    </div>
  );
}

function ContactPage() {
  const initialForm = { name: '', email: '', subject: '', message: '' };
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState({ type: '', message: '' });

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!formData.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) nextErrors.message = 'Message is required.';

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setNotice({ type: 'error', message: 'Please fix the highlighted fields and try again.' });
      return;
    }

    if (!formspreeEndpoint) {
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
      setNotice({ type: 'success', message: 'Your email app is opening with your message ready to send.' });
      return;
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Request failed');
      setNotice({ type: 'success', message: 'Thank you! Your message has been sent.' });
      setFormData(initialForm);
    } catch {
      setNotice({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  return (
    <div className="page-content container contact-page">
      <SectionHeading eyebrow="Contact" title="Let&apos;s build something thoughtful together." copy="Share a little about your idea, timeline, and the kind of experience you want to create." />

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field-row">
            <label>
              <span>Name</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'invalid' : ''} />
              {errors.name && <small>{errors.name}</small>}
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'invalid' : ''} />
              {errors.email && <small>{errors.email}</small>}
            </label>
          </div>

          <label>
            <span>Subject</span>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} className={errors.subject ? 'invalid' : ''} />
            {errors.subject && <small>{errors.subject}</small>}
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" rows="6" value={formData.message} onChange={handleChange} className={errors.message ? 'invalid' : ''} />
            {errors.message && <small>{errors.message}</small>}
          </label>

          <button type="submit" className="button button-primary">
            Send message
          </button>

          {notice.message && <p className={`form-notice ${notice.type}`}>{notice.message}</p>}
        </form>

        <aside className="contact-panel">
          <div className="contact-card">
            <Mail size={18} />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-card">
            <MessageCircle size={18} />
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">WhatsApp • {profile.phone}</a>
          </div>
          <div className="contact-card">
            <BriefcaseBusiness size={18} />
            <a href="https://www.linkedin.com/in/%EA%9C%81-muqaddas-umrani%EA%9C%82-8617223ba" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </aside>
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="page-content container not-found">
      <h1>Page not found.</h1>
      <p>The page you are looking for doesn&apos;t exist or may have moved.</p>
      <Link to="/" className="button button-primary">
        Return home
      </Link>
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card-media">
        <img src={project.image} alt={project.alt || project.title} loading="lazy" />
      </div>
      <div className="project-card-content">
        <span className="eyebrow tiny">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      {service.image && <img src={service.image} alt={service.title} className="service-image" loading="lazy" />}
      <div className="service-content">
        <span className="service-icon"><Sparkles size={18} /></span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul>
          {service.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
        <small>{service.idealFor}</small>
      </div>
    </article>
  );
}

function renderSocialIcon(iconName) {
  switch (iconName) {
    case 'website':
      return <Globe size={16} />;
    case 'sparkles':
      return <Sparkles size={16} />;
    case 'palette':
      return <Palette size={16} />;
    case 'briefcase':
      return <BriefcaseBusiness size={16} />;
    case 'message':
      return <MessageCircle size={16} />;
    case 'mail':
      return <Mail size={16} />;
    default:
      return <ArrowUpRight size={16} />;
  }
}

export default App;
