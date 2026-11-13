export const profile = {
  name: 'Muqaddas',
  title: 'Creative Developer',
  tagline: 'Creating beautiful digital experiences with creativity and purpose.',
  email: 'muqaddasumrani2@gmail.com',
  phone: '+92 310 5988235',
  location: 'Your city, Country',
  whatsapp: 'https://wa.me/923105988235',
};

export const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Services', path: '/services' },
  { label: 'Journey', path: '/journey' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Journal', path: '/journal' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/%EA%9C%81-muqaddas-umrani%EA%9C%82-8617223ba', icon: 'briefcase' },
  { label: 'WhatsApp', href: 'https://wa.me/923105988235', icon: 'message' },
  { label: 'Email', href: 'mailto:muqaddasumrani2@gmail.com', icon: 'mail' },
];

export const featuredProjects = [
  {
    id: 1,
    slug: 'editorial-brand-refresh',
    title: 'Editorial Brand Refresh',
    category: 'Business Websites',
    shortDescription: 'A premium brand narrative built for a services business with a memorable digital presence.',
    description:
      'A concept website created to elevate a business brand with an editorial, confident, and conversion-focused experience.',
    image:
      '/images/project-mahirr.webp',
    alt: 'Luxury editorial website mockup',
    tags: ['Branding', 'Strategy', 'UI Design'],
    demoLabel: 'Concept project',
    demoUrl: '#',
    overview:
      'This concept brings together immersive storytelling, curated layouts, and clear calls to action to help a business appear premium and trustworthy online.',
    problem:
      'The original digital presence lacked clarity, visual identity, and a distinct product story. The goal was to create a brand experience that feels intentional and premium.',
    approach:
      'A warm palette, editorial rhythm, and simplified navigation helped establish consistency across the website while keeping the user journey focused and polished.',
    features: ['Clear service positioning', 'Premium editorial layout', 'Conversion-driven CTA blocks'],
    stack: ['React', 'Vite', 'CSS', 'Responsive Layout'],
    gallery: [
      '/images/gallery-3.webp',
      '/images/gallery-4.webp',
      '/images/gallery-1.webp',
    ],
    challenge: 'Balancing premium aesthetics with simplicity and usability was the main creative challenge.',
    learning: 'This concept reinforced the importance of strong hierarchy, accessible spacing, and intentional storytelling in business branding.',
  },
  {
    id: 2,
    slug: 'personal-brand-portfolio',
    title: 'Personal Brand Portfolio',
    category: 'Portfolio Websites',
    shortDescription: 'A refined portfolio concept to present work, personality, and creative direction in one elegant experience.',
    description:
      'A concept portfolio that blends editorial storytelling, curated visuals, and clean structure for a creative professional.',
    image:
      '/images/project-murevo.webp',
    alt: 'Creative portfolio inspiration',
    tags: ['Portfolio', 'UX', 'Responsive'],
    demoLabel: 'Concept project',
    demoUrl: '#',
    overview:
      'The layout emphasizes identity, creativity, and clarity by making each project feel intentional and visually compelling without overwhelming the visitor.',
    problem:
      'The goal was to create a personal portfolio that feels premium yet expressive, without relying on generic template patterns.',
    approach:
      'The website uses softer tones, strong typography, and a consistent modular layout to support both storytelling and project discovery.',
    features: ['Masonry project gallery', 'Creative homepage narrative', 'Service and journey sections'],
    stack: ['React', 'Motion', 'CSS Grid', 'Content Architecture'],
    gallery: [
      '/images/gallery-1.webp',
      '/images/gallery-2.webp',
      '/images/gallery-4.webp',
    ],
    challenge: 'Creating a balance between artistic flair and practical usability required careful restraint in layout and motion.',
    learning: 'This project highlighted the value of editorial rhythm and white space in creating an elevated personal identity.',
  },
  {
    id: 3,
    slug: 'boutique-commerce-journey',
    title: 'Boutique Commerce Journey',
    category: 'E-commerce',
    shortDescription: 'A calm and conversion-friendly storefront concept for a boutique digital brand.',
    description:
      'An e-commerce concept focused on product storytelling, curated visuals, and a frictionless shopping experience.',
    image:
      '/images/project-aurila.webp',
    alt: 'Boutique store concept',
    tags: ['E-commerce', 'UX', 'Conversion'],
    demoLabel: 'Concept project',
    demoUrl: '#',
    overview:
      'The experience combines gentle product storytelling with a streamlined customer journey designed to make browsing feel premium and easy.',
    problem:
      'The challenge was to create a strong shopping experience while keeping the layout minimal, warm, and emotionally appealing.',
    approach:
      'Large imagery, clean product cards, and thoughtful sectioning helped spotlight products without cluttering the experience.',
    features: ['Product-focused storytelling', 'Curated collection blocks', 'Simple checkout path'],
    stack: ['React', 'Shopify-inspired patterns', 'CSS', 'Product UX'],
    gallery: [
      '/images/gallery-4.webp',
      '/images/gallery-3.webp',
      '/images/gallery-2.webp',
    ],
    challenge: 'The main challenge was aligning conversion goals with a softer, more editorial visual style.',
    learning: 'The strongest takeaway was that an emotional brand story and a simple purchase flow can work together beautifully.',
  },
  {
    id: 4,
    slug: 'ui-ux-creative-experiment',
    title: 'UI/UX Creative Experiment',
    category: 'UI/UX Concepts',
    shortDescription: 'A layout exploration focused on storytelling, modular composition, and tactile interactions.',
    description:
      'A study in visual rhythm, spatial balance, and exploratory design patterns for a creative interface.',
    image:
      '/images/project-lumora.webp',
    alt: 'Creative interface concept',
    tags: ['Concept', 'Design Systems', 'Interaction'],
    demoLabel: 'Concept prototype',
    demoUrl: '#',
    overview:
      'This concept explores how typography, texture, and motion can support deeper engagement in a digital interface while staying refined and maintainable.',
    problem:
      'The objective was to create a concept that celebrates creativity but remains practical enough to scale into a thoughtful product experience.',
    approach:
      'The design uses layered cards, soft contrast, and carefully composed whitespace to make each interaction feel tactile and memorable.',
    features: ['Modular interface blocks', 'Exploratory design patterns', 'Interaction-led pacing'],
    stack: ['Figma-style exploration', 'React', 'Motion', 'Design Thinking'],
    gallery: [
      '/images/gallery-2.webp',
      '/images/gallery-1.webp',
      '/images/gallery-3.webp',
    ],
    challenge: 'Encouraging experimentation without losing clarity was the central design consideration.',
    learning: 'Design systems work best when they allow creativity to remain expressive while preserving consistency.',
  },
  {
    id: 5,
    slug: 'creative-campaign-landing-page',
    title: 'Creative Campaign Landing Page',
    category: 'Business Websites',
    shortDescription: 'A campaign landing page concept built to highlight a story-driven product launch.',
    description:
      'A landing page concept for a launch, event, or campaign that needed memorable visuals and persuasive messaging.',
    image:
      '/images/service-responsive.webp',
    alt: 'Campaign landing page',
    tags: ['Landing Page', 'Campaign', 'Messaging'],
    demoLabel: 'Concept preview',
    demoUrl: '#',
    overview:
      'This concept focuses on launch messaging, social proof, and an immersive visual rhythm designed to keep attention on the story.',
    problem:
      'The challenge was to make a campaign feel premium and shareable while still communicating one clear message clearly.',
    approach:
      'A combination of editorial typography, emotional imagery, and defined action blocks made the landing page attention-grabbing and easy to navigate.',
    features: ['Hero story arc', 'Feature highlights', 'CTA sequence'],
    stack: ['Marketing UX', 'React', 'Motion', 'Responsive'],
    gallery: [
      '/images/gallery-3.webp',
      '/images/gallery-2.webp',
      '/images/gallery-4.webp',
    ],
    challenge: 'The most important balance was creating emotional resonance without sacrificing simple conversion mechanics.',
    learning: 'Strong campaigns benefit from clear hierarchy, pacing, and a focused message that supports a confident CTA.',
  },
];

export const projects = featuredProjects;

export const skillsGroups = [
  { title: 'Core Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Web Design'] },
  { title: 'UI & Interaction', items: ['UI Implementation', 'Design Systems', 'Interaction Design', 'Accessibility', 'Motion'] },
  { title: 'Content & Workflow', items: ['Content Architecture', 'Performance', 'SEO Basics', 'Git', 'CMS-friendly builds'] },
  { title: 'Optional Stack', items: ['Supabase', 'Vite', 'Framer Motion', 'Formspree', 'Lucide Icons'] },
];

export const services = [
  {
    title: 'Website Development',
    description: 'Build custom websites that balance visual identity, content structure, and usability.',
    benefits: ['Clear digital presence', 'Reusable frontend structure', 'Scalable user experience'],
    idealFor: 'Creative businesses, founders, and personal brands needing a polished online presence.',
    image: '/images/service-web-dev.webp',
  },
  {
    title: 'Responsive Website Design',
    description: 'Design layouts that feel intentional and elegant across phones, tablets, and desktop screens.',
    benefits: ['Responsive layouts', 'Accessible design decisions', 'Consistent visual rhythm'],
    idealFor: 'Brands looking to look refined and coherent on every device.',
    image: '/images/service-responsive.webp',
  },
  {
    title: 'E-commerce Website Development',
    description: 'Create storefront experiences with a clear journey, stronger branding, and a cleaner shopping flow.',
    benefits: ['Conversion-friendly structure', 'Product-focused storytelling', 'Simplified browsing journey'],
    idealFor: 'Boutiques, independent sellers, and small businesses ready to grow online.',
    image: '/images/service-ecommerce.webp',
  },
  {
    title: 'Landing Page Development',
    description: 'Design focused landing pages that communicate a message clearly and encourage action.',
    benefits: ['Strong call-to-action flow', 'Clear brand storytelling', 'Campaign-ready structure'],
    idealFor: 'Product launches, service offers, and promotional campaigns.',
    image: '/images/project-aurila.webp',
  },
  {
    title: 'Website Redesign',
    description: 'Refresh existing websites to feel more cohesive, purposeful, and current without losing their core intent.',
    benefits: ['Improved clarity', 'Updated visual identity', 'Better user experience'],
    idealFor: 'Businesses needing a more refined and effective online presence.',
    image: '/images/service-redesign.webp',
  },
  {
    title: 'UI Implementation',
    description: 'Bring design concepts to life with polished frontend implementation and thoughtful interaction details.',
    benefits: ['Design fidelity', 'Reliable frontend build', 'Improved accessibility'],
    idealFor: 'Teams and founders who need creative designs translated into real interfaces.',
    image: '/images/project-lumora.webp',
  },
];

export const journeyItems = [
  { period: 'Learning', title: 'Building foundation in web design and frontend development', detail: 'Focused on understanding structure, layout, accessibility, and modern UI implementation.', type: 'Education' },
  { period: 'Practice', title: 'Exploring portfolio and concept projects', detail: 'Developed design-led exercises to build a clearer visual and technical voice.', type: 'Projects' },
  { period: 'Growth', title: 'Improving skills in interaction design and responsive systems', detail: 'Refined creative decision-making through layout systems, motion, and code structure.', type: 'Skills' },
  { period: 'Next step', title: 'Expanding into more polished brand experiences', detail: 'Looking toward stronger portfolio work, deeper UI craft, and product-driven design thinking.', type: 'Goals' },
];

export const galleryItems = [
  { id: 1, category: 'Workspace', title: 'Workspace', image: '/images/gallery-1.webp' },
  { id: 2, category: 'Flowers & Butterflies', title: 'Flowers & Butterflies', image: '/images/gallery-2.webp' },
  { id: 3, category: 'Pinterest Moodboard', title: 'Pinterest Moodboard', image: '/images/gallery-3.webp' },
  { id: 4, category: 'Creative Setup', title: 'Creative Setup', image: '/images/gallery-4.webp' },
];

export const articles = [
  {
    slug: 'designing-with-intention',
    category: 'Design Inspiration',
    title: 'Designing with intention: why clarity matters more than noise',
    readTime: '4 min read',
    description: 'A reflective note on how thoughtful spacing and editing can transform a digital design into something premium and memorable.',
    image: '/images/gallery-1.webp',
    content: [
      'Good design is not about using every available feature. It is about giving each section hierarchy, rhythm, and a sense of purpose.',
      'When a layout feels crowded, the eye has no place to rest. Clear decisions around type scale, spacing, and image composition create a stronger experience.',
      'This is especially important for creative portfolios, where the goal is to present personality without losing clarity. A premium digital experience often feels simpler, not louder.',
    ],
  },
  {
    slug: 'building-a-personal-brand-online',
    category: 'Web Development',
    title: 'Building a personal brand online without losing your voice',
    readTime: '5 min read',
    description: 'A simple approach to creating a portfolio that feels polished, personal, and genuinely reflective of your work.',
    image: '/images/gallery-4.webp',
    content: [
      'A personal brand is easier to trust when it feels coherent. The colors, typography, content structure, and interaction details should all tell the same story.',
      'As a creator, your website should make visitors understand your thinking, not just your output. That means showing context, process, and values alongside your work.',
      'This level of clarity does not need to be complicated. A thoughtful structure and calm visual system can do a lot of heavy lifting.',
    ],
  },
  {
    slug: 'finding-flow-in-creative-work',
    category: 'Creativity',
    title: 'Finding flow in creative work: practical habits that help',
    readTime: '3 min read',
    description: 'A brief reflection on creative routines, focus, and how to build momentum in design and development work.',
    image: '/images/gallery-3.webp',
    content: [
      'Creative work often improves when there is rhythm. This may mean shorter sessions, fewer distractions, or a more intentional review process.',
      'The goal is not to force inspiration but to create the conditions where thoughtful work can emerge naturally.',
      'Small rituals, a clear project direction, and time for iteration often lead to stronger output than pushing through noise without structure.',
    ],
  },
];

export const testimonials = [];

export const resumeData = {
  summary:
    'Creative developer focused on elegant web experiences, thoughtful content structure, and refined interfaces that help brands feel clear, premium, and memorable.',
  education: ['Self-directed learning in design and frontend development', 'Ongoing study of visual hierarchy, interaction design, and responsive systems'],
  courses: ['Frontend fundamentals and UI implementation', 'Responsive design practice', 'Creative portfolio and personal branding exploration'],
  projects: ['Editorial website concepts', 'Creative portfolio experiments', 'E-commerce UI explorations', 'Landing page concepts'],
};

export const contactConfig = {
  formspreeEndpoint: '',
};
