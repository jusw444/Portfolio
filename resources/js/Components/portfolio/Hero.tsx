import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface HeroProps {
    onNavigate: (href: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center px-6 md:px-12 relative z-10"
            style={{ paddingTop: '120px', paddingBottom: '80px' }}
        >
            <div className="max-w-[1100px] mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column - Content */}
                    <div
                        className="transition-all duration-700 ease-out"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'none' : 'translateY(20px)',
                            transitionDelay: '100ms',
                        }}
                    >
                        {/* Badge */}
                        <div className="font-mono text-xs text-[#63b3ed] uppercase tracking-[0.15em] mb-5 flex items-center gap-2.5">
                            <span className="inline-block w-6 h-px bg-[#63b3ed]" />
                            Full Stack Developer · {PERSONAL_INFO.location}
                        </div>

                        {/* Heading */}
                        <h1 className="font-[Syne] text-[clamp(44px,6vw,72px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-4 text-[#f8fafc]">
                            Hi, I'm<br />
                            <span className="bg-gradient-to-r from-[#63b3ed] via-[#7c6ff7] to-[#68d391] bg-clip-text text-transparent">
                                {PERSONAL_INFO.name}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="font-[Syne] text-[clamp(16px,2vw,20px)] text-[#64748b] mb-6 leading-[1.5]">
                            I craft scalable web apps with<br />
                            <span className="text-[#94a3b8]">Laravel · React · TypeScript</span>
                        </p>

                        {/* Description */}
                        <p className="text-sm text-[#64748b] leading-[1.85] max-w-[430px] mb-10">
                            From RESTful APIs to interactive React frontends — I build full stack applications
                            that are fast, maintainable, and delightful to use.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-3 flex-wrap">
                            <button
                                onClick={() => onNavigate('#projects')}
                                className="bg-gradient-to-r from-[#63b3ed] to-[#7c6ff7] text-white font-semibold text-sm px-7 py-3 rounded-full border-none cursor-pointer transition-all hover:opacity-85 hover:-translate-y-0.5 active:scale-95"
                            >
                                View my work
                            </button>
                            <button
                                onClick={() => onNavigate('#contact')}
                                className="bg-transparent text-[#e2e8f0] font-medium text-sm px-7 py-3 rounded-full border border-white/10 cursor-pointer transition-all hover:border-[#63b3ed]/40 hover:bg-[#63b3ed]/10 active:scale-95"
                            >
                                Get in touch
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Photo */}
                    <div
                        className="hidden md:flex justify-center"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'none' : 'translateX(30px)',
                            transition: 'opacity 0.8s ease 300ms, transform 0.8s ease 300ms',
                        }}
                    >
                        <div className="relative">
                            {/* Animated Rings */}
                            <div className="absolute -inset-3 rounded-full border-[1.5px] border-transparent border-t-[#63b3ed] border-r-[#7c6ff7] animate-[spin_8s_linear_infinite]" />
                            <div className="absolute -inset-1.5 rounded-full border border-[#63b3ed]/20" />

                            {/* Profile Photo */}
                            <div className="w-[260px] h-[260px] rounded-full overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a] border-3 border-[#63b3ed]/50 relative">
                                <img
                                    src={PERSONAL_INFO.photo}
                                    alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`}
                                    className="w-full h-full object-cover block"
                                    onError={(e) => {
                                        const el = e.currentTarget;
                                        el.style.display = 'none';
                                        const parent = el.parentElement!;
                                        parent.innerHTML = `
                                            <div class="w-full h-full flex flex-col items-center justify-center gap-2">
                                                <div class="text-6xl font-[Syne] font-extrabold bg-gradient-to-r from-[#63b3ed] to-[#7c6ff7] bg-clip-text text-transparent">
                                                    ${PERSONAL_INFO.name[0]}
                                                </div>
                                            </div>
                                        `;
                                    }}
                                />
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute bottom-2.5 right-[-20px] bg-[#0f172a]/92 backdrop-blur-xl border border-[#ef4444]/30 rounded-full px-3.5 py-2 flex items-center gap-2 animate-[floatY_3.5s_ease-in-out_infinite]">
                                <span className="text-sm">🔺</span>
                                <span className="font-mono text-xs text-[#fca5a5] font-medium">Laravel</span>
                            </div>
                            <div className="absolute top-5 left-[-28px] bg-[#0f172a]/92 backdrop-blur-xl border border-[#3b82f6]/30 rounded-full px-3.5 py-2 flex items-center gap-2 animate-[floatY_4s_ease-in-out_infinite_0.8s]">
                                <span className="text-sm">⚛️</span>
                                <span className="font-mono text-xs text-[#93c5fd] font-medium">React TSX</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div 
                    className="mt-18 flex items-center gap-3 transition-opacity duration-1000"
                    style={{ 
                        opacity: isVisible ? 0.4 : 0,
                        transitionDelay: '1.2s'
                    }}
                >
                    <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#64748b] ml-0.5 animate-pulse" />
                    <span className="font-mono text-xs text-[#64748b] tracking-[0.1em] uppercase select-none">
                        scroll to explore
                    </span>
                </div>
            </div>
        </section>
    );
}