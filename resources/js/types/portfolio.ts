export interface Skill {
    name: string;
    category: string;
    color: string;
    bg: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    live: string;
    accent: string;
    year?: number;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}

export interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    location: string;
    photo: string;
    bio: string[];
    github: string;
    jobstreet: string;
}