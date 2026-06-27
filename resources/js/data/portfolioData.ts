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
    jobstreet: 'https://www.jobstreet.com.ph//profiles/MNVXrrDLbr',
    bio: [
        "I'm a full stack web developer from Laguna Philippines, specializing in Laravel, React, Blade, PHP, MySQL and TypeScript. I build scalable web applications that solve real problems.",
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
        title: 'Laguna Project Monitoring System',
        description: 'Province-wide project tracking system for Laguna, monitoring development projects across all barangays, municipalities, and districts.',
        image: '/images/monitor.png',
        tags: ['Laravel', 'Blade', 'MySQL', 'Bootstrap', 'JavaScript'],
        github: 'https://github.com/MISOJOHNRAY/Laguna_Project_Monitoring_System.git',
        live: '',
        accent: '#63b3ed',
        year: 2025,
    },
    {
        id: '2',
        title: 'Centralized GIS',
        description: 'Interactive mapping platform with dynamic legend rendering, print-to-PDF functionality, zoom controls, and comprehensive admin panel for managing metadata and user roles.',
        image: '/images/gis.png',
        tags: ['Laravel', 'Leaflet.js', 'PHP', 'MySQL', 'CSS', 'Blade'],
        github: 'https://github.com/jusw444/GIS-Capstone.git',
        live: '',
        accent: '#68d391',
        year: 2025,
    },
    {
        id: '3',
        title: 'Laguna Portal',
        description: 'Multi-portal management system with role-based admin controls for creating and managing Laguna\'s sub-portals.',
        image: '/images/portal.png',
        tags: ['Laravel Blade', 'Bootstrap', 'JavaScript', 'PHP'],
        github: 'https://github.com/kristhian1/laguna-web.git',
        live: '',
        accent: '#fc8181',
        year: 2025,
    },
];