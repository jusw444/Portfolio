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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const openHireMe = () => {
        window.open(
            'https://mail.google.com/mail/?view=cm&fs=1&to=almazanjoshuanoel@gmail.com',
            '_blank'
        );
    };

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                flex items-center justify-between
                px-5 sm:px-8 md:px-12 h-16
                transition-all duration-300
                ${isScrolled
                    ? 'bg-[#060b18]/95 backdrop-blur-lg border-b border-white/5'
                    : 'bg-transparent'
                }
            `}
        >
            {/* Logo/Brand */}
            <div
                onClick={scrollToTop}
                className="font-mono text-sm text-[#63b3ed] tracking-[0.06em] select-none hover:text-[#7cc4f0] transition-colors duration-200 cursor-pointer flex-shrink-0"
            >
                &lt;josh /&gt;
            </div>

            {/* Desktop Navigation Links */}
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

            {/* Right side — hire me + hamburger */}
            <div className="flex items-center gap-3">
                {/* Hire Me Button — always visible */}
                <button
                    onClick={openHireMe}
                    className="font-mono text-xs text-[#63b3ed] bg-[#63b3ed]/10 border border-[#63b3ed]/40 px-4 py-1.5 rounded-full transition-all hover:bg-[#63b3ed]/20 hover:border-[#63b3ed] cursor-pointer whitespace-nowrap"
                >
                    hire me
                </button>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-[#94a3b8] bg-none border-none cursor-pointer p-1"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <IconX /> : <IconMenu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[#060b18]/98 backdrop-blur-xl border-b border-white/5 px-6 py-4 md:hidden animate-fadeIn">
                    <div className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavigate(link.href)}
                                className="text-left text-[#e2e8f0] text-base py-3 px-2 hover:bg-white/5 rounded-lg transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                        {/* Hire Me also inside mobile menu for easy access */}
                        <div className="pt-3 border-t border-white/5 mt-2">
                            <button
                                onClick={() => { setIsOpen(false); openHireMe(); }}
                                className="w-full font-mono text-sm text-[#63b3ed] bg-[#63b3ed]/10 border border-[#63b3ed]/40 px-5 py-3 rounded-full transition-all hover:bg-[#63b3ed]/20 hover:border-[#63b3ed] cursor-pointer"
                            >
                                hire me
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}