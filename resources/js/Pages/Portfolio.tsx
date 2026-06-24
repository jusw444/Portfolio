import React from 'react';
import { Navigation } from '@/Components/portfolio/Navigation';
import { Hero } from '@/Components/portfolio/Hero';
import { Skills } from '@/Components/portfolio/Skills';
import { Projects } from '@/Components/portfolio/Projects';
import { About } from '@/Components/portfolio/About';
import { Contact } from '@/Components/portfolio/Contact';
import { Footer } from '@/Components/portfolio/Footer';

export default function Portfolio() {
    const scrollTo = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#060b18] text-[#e2e8f0] font-[Inter] antialiased overflow-x-hidden min-h-screen">
            {/* Ambient Background Orbs */}
            <div aria-hidden className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,179,237,0.055)_0%,transparent_70%)] -top-[10%] left-1/4" />
                <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,111,247,0.05)_0%,transparent_70%)] bottom-[5%] right-[10%]" />
                <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(104,211,145,0.04)_0%,transparent_70%)] top-1/2 -left-[5%]" />
            </div>

            {/* Main Content */}
            <Navigation onNavigate={scrollTo} />
            <Hero onNavigate={scrollTo} />
            <Skills />
            <Projects />
            <About onNavigate={scrollTo} />
            <Contact />
            <Footer />
        </div>
    );
}