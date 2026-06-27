import React from 'react';
import { Fade } from './Fade';
import { SKILLS } from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';

interface SkillCardProps {
    skill: typeof SKILLS[0];
    index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
    const { ref, inView } = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-3 cursor-default transition-all hover:-translate-y-0.5 flex-shrink-0 w-[190px]"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 50}ms, transform 0.5s ease ${index * 50}ms`,
                borderColor: inView ? `${skill.color}33` : 'rgba(255,255,255,0.05)',
                backgroundColor: inView ? skill.bg : 'rgba(255,255,255,0.03)',
            }}
        >
            {/* Icon Box */}
            <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                style={{
                    background: skill.bg,
                    border: `1px solid ${skill.color}33`,
                }}
            >
                <span
                    className="font-mono text-sm font-medium transition-colors"
                    style={{ color: skill.color }}
                >
                    {skill.name.slice(0, 2).toUpperCase()}
                </span>
            </div>
            
            {/* Text */}
            <div>
                <div className="text-sm font-medium text-[#e2e8f0]">{skill.name}</div>
                <div className="text-xs text-[#64748b] mt-0.5">{skill.category}</div>
            </div>
        </div>
    );
}

export function Skills() {
    // Split skills into two rows
    const halfLength = Math.ceil(SKILLS.length / 2);
    const firstRow = SKILLS.slice(0, halfLength);
    const secondRow = SKILLS.slice(halfLength);

    // Duplicate skills for seamless looping (3x for smooth infinite scroll)
    const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
    const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

    return (
        <section id="skills" className="py-22 px-6 md:px-12 relative z-10 overflow-hidden">
            <div className="max-w-[1100px] mx-auto">
                <Fade>
                    <div className="mb-12">
                        <p className="font-mono text-xs text-[#63b3ed] uppercase tracking-[0.14em] mb-3">
                            — what i work with
                        </p>
                        <h2 className="font-[Syne] text-[clamp(28px,3.5vw,40px)] font-bold tracking-[-0.02em] text-[#f1f5f9]">
                            Skills & Technologies
                        </h2>
                    </div>
                </Fade>

                <div className="flex flex-col gap-3">
                    {/* First Row - Moves Right */}
                    <div className="relative overflow-hidden">
                        <div className="flex gap-3 animate-marquee-right w-max">
                            {duplicatedFirstRow.map((skill, index) => (
                                <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Second Row - Moves Left */}
                    <div className="relative overflow-hidden">
                        <div className="flex gap-3 animate-marquee-left w-max">
                            {duplicatedSecondRow.map((skill, index) => (
                                <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}