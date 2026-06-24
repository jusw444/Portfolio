import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/data/portfolioData';
import { IconMenu, IconX } from './ui/icons';

interface NavigationProps {
    onNavigate: (href: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigate = (href: string) => {
        setIsOpen(false);
        onNavigate(href);
    };

    return (
        <nav 
            className={`
                fixed top-0 left-0 right-0 z-50 
                flex items-center justify-between 
                px-6 md:px-12 h-16 
                transition-all duration-300
                ${isScrolled 
                    ? 'bg-[#060b18]/95 backdrop-blur-lg border-b border-white/5' 
                    : 'bg-transparent'
                }
            `}
        >
            {/* Logo/Brand */}
            <div className="font-mono text-sm text-[#63b3ed] tracking-[0.06em] select-none">
                &lt;josh /&gt;
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-9 list-none">
                {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                        <button
                            onClick={() => handleNavigate(link.href)}
                            className="text-[#94a3b8] text-sm hover:text-[#e2e8f0] transition-colors bg-none border-none cursor-pointer p-0"
                        >
                            {link.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <button
    onClick={() => {
        window.open(
            'https://mail.google.com/mail/?view=cm&fs=1&to=almazanjoshuanoel@gmail.com',
            '_blank'
        );
    }}
    className="hidden md:inline-block font-mono text-xs text-[#63b3ed] bg-[#63b3ed]/10 border border-[#63b3ed]/40 px-5 py-2 rounded-full transition-all hover:bg-[#63b3ed]/20 hover:border-[#63b3ed] cursor-pointer"
>
    hire me
</button>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-[#94a3b8] bg-none border-none cursor-pointer p-1"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <IconX /> : <IconMenu />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[#060b18]/98 backdrop-blur-xl border-b border-white/5 p-6 md:hidden animate-fadeIn">
                    <div className="flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavigate(link.href)}
                                className="text-left text-[#e2e8f0] text-base py-3 px-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}