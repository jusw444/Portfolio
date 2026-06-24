import React from 'react';
import { Fade } from './Fade';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { IconArrow } from './ui/icons';

interface AboutProps {
    onNavigate: (href: string) => void;
}

export function About({ onNavigate }: AboutProps) {
    const stats = [
        { number: '11+', label: 'Technologies' },
        { number: '4+', label: 'Projects Built' },
        { number: '100%', label: 'Committed' },
        { number: '∞', label: 'Curiosity' },
    ];

    return (
        <section id="about" className="py-22 px-6 md:px-12 relative z-10">
            <div className="max-w-[1100px] mx-auto">
                <Fade>
                    <div className="mb-12">
                        <p className="font-mono text-xs text-[#63b3ed] uppercase tracking-[0.14em] mb-3">
                            — who i am
                        </p>
                        <h2 className="font-[Syne] text-[clamp(28px,3.5vw,40px)] font-bold tracking-[-0.02em] text-[#f1f5f9]">
                            About Me
                        </h2>
                    </div>
                </Fade>

                <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
                    {/* Left - Bio */}
                    <Fade direction="left">
                        <div className="flex flex-col gap-4">
                            {PERSONAL_INFO.bio.map((paragraph, index) => (
                                <p key={index} className="text-sm text-[#94a3b8] leading-[1.9]">
                                    {paragraph}
                                </p>
                            ))}

                            <div className="flex gap-3 mt-2">
                                <button
                                    onClick={() => onNavigate('#contact')}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[#63b3ed] border border-[#63b3ed]/25 px-5 py-2.5 rounded-full bg-[#63b3ed]/10 transition-all hover:bg-[#63b3ed]/20 hover:border-[#63b3ed]/50 active:scale-95"
                                >
                                    Let's talk <IconArrow />
                                </button>
                            </div>
                        </div>
                    </Fade>

                    {/* Right - Stats */}
                    <Fade direction="right" delay={100}>
                        <div className="grid grid-cols-2 gap-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-white/5 border border-white/5 rounded-xl p-5 text-center transition-all hover:bg-white/10 hover:border-white/10"
                                >
                                    <div className="font-mono text-[28px] font-medium text-[#63b3ed] leading-none mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs text-[#475569] uppercase tracking-[0.08em]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}