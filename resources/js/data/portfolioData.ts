import { NavLink, PersonalInfo, Project, Skill } from "@/types/portfolio";


// Navigation Links
export const NAV_LINKS: NavLink[] = [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

// Personal Information
export const PERSONAL_INFO: PersonalInfo = {
    name: 'Joshua Almazan',
    title: 'Full Stack Developer',
    email: 'almazanjoshuanoel@gmail.com',
    location: 'Laguna, Philippines',
    photo: '/images/gradPic.JPG',
    github: 'https://github.com/jusw444',
    linkedin: 'https://linkedin.com/in/yourprofile',
    bio: [
        "I'm a full stack web developer from the Philippines, specializing in Laravel, React, and TypeScript. I build scalable web applications that solve real problems.",
        "My expertise spans from designing robust backend APIs to crafting responsive, interactive frontends. I believe in writing clean, maintainable code that stands the test of time.",
        "When I'm not coding, I'm exploring new technologies, contributing to open source, or sharing knowledge with the developer community."
    ]
};

// Skills Data
export const SKILLS: Skill[] = [
    { name: 'Laravel', category: 'Framework', color: '#f9a8a8', bg: 'rgba(239,68,68,0.10)' },
    { name: 'PHP', category: 'Language', color: '#c4b5fd', bg: 'rgba(139,92,246,0.10)' },
    { name: 'React', category: 'Frontend', color: '#93c5fd', bg: 'rgba(59,130,246,0.10)' },
    { name: 'TypeScript', category: 'Language', color: '#67e8f9', bg: 'rgba(6,182,212,0.10)' },
    { name: 'JavaScript', category: 'Language', color: '#fde68a', bg: 'rgba(234,179,8,0.10)' },
    { name: 'Tailwind CSS', category: 'Styling', color: '#6ee7b7', bg: 'rgba(16,185,129,0.10)' },
    { name: 'Node.js', category: 'Runtime', color: '#86efac', bg: 'rgba(34,197,94,0.10)' },
    { name: 'MySQL', category: 'Database', color: '#fdba74', bg: 'rgba(249,115,22,0.10)' },
    { name: 'REST APIs', category: 'Architecture', color: '#f9a8d4', bg: 'rgba(236,72,153,0.10)' },
    { name: 'Git', category: 'DevOps', color: '#fca5a5', bg: 'rgba(239,68,68,0.10)' },
    { name: 'HTML & CSS', category: 'Foundation', color: '#93c5fd', bg: 'rgba(99,102,241,0.10)' },
    { name: 'Docker', category: 'DevOps', color: '#a5f3fc', bg: 'rgba(6,182,212,0.10)' },
];

// Projects Data
export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'LARASTORE',
        description: 'Full-featured e-commerce platform with product management, shopping cart, order tracking, and an admin analytics dashboard. Built with Laravel + React + Inertia.js.',
        image: '/images/project-larastore.jpg',
        tags: ['Laravel', 'React TSX', 'Inertia.js', 'MySQL', 'Tailwind'],
        github: 'https://github.com/yourusername/larastore',
        live: 'https://larastore.demo.com',
        accent: '#63b3ed',
        year: 2024,
    },
    {
        id: '2',
        title: 'GIS Web Dashboard',
        description: 'Interactive map dashboard on Laravel Blade + Leaflet.js with dynamic legend rendering, print-to-PDF layout, zoom controls, and a superadmin panel.',
        image: '/images/project-gis.jpg',
        tags: ['Laravel', 'Leaflet.js', 'PHP', 'MySQL', 'CSS'],
        github: 'https://github.com/yourusername/gis-dashboard',
        live: 'https://gis-dashboard.demo.com',
        accent: '#68d391',
        year: 2024,
    },
    {
        id: '3',
        title: 'ERaufi | CORE',
        description: 'Dark navy admin dashboard UI with a custom red-accent design system, Space Grotesk typography, role-based access, and fully responsive Tailwind layout.',
        image: '/images/project-eraufi.jpg',
        tags: ['Laravel Blade', 'Tailwind CSS', 'JavaScript', 'PHP'],
        github: 'https://github.com/yourusername/eraufi-core',
        live: 'https://eraufi-core.demo.com',
        accent: '#fc8181',
        year: 2023,
    },
    {
        id: '4',
        title: 'REST API Service',
        description: 'RESTful API backend with JWT authentication, versioned resource controllers, rate limiting, and full Postman documentation. Production-ready architecture.',
        image: '/images/project-api.jpg',
        tags: ['Laravel', 'REST API', 'JWT', 'MySQL', 'Postman'],
        github: 'https://github.com/yourusername/rest-api',
        live: 'https://api-docs.demo.com',
        accent: '#b794f4',
        year: 2023,
    },
];