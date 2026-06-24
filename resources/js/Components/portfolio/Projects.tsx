import React, { useState } from 'react';
import { Fade } from './Fade';
import { PROJECTS } from '@/data/portfolioData';
import { useInView } from '@/hooks/useInView';
import { IconArrow, IconExternal, IconGithub } from './ui/icons';

interface ProjectCardProps {
    project: typeof PROJECTS[0];
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const { ref, inView } = useInView({ threshold: 0.1 });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            ref={ref}
            className="transition-all duration-600"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : 'translateY(32px)',
                transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
            }}
        >
            <div
                className="bg-[#0f172a]/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col"
                style={{
                    borderColor: isHovered ? `${project.accent}44` : 'rgba(255,255,255,0.05)',
                    transform: isHovered ? 'translateY(-6px)' : 'none',
                    boxShadow: isHovered ? `0 20px 48px ${project.accent}18` : 'none',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image Section */}
                <div className="relative overflow-hidden h-50 flex-shrink-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 block"
                        style={{ transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
                        onError={(e) => {
                            const el = e.currentTarget;
                            el.style.display = 'none';
                            const parent = el.parentElement!;
                            parent.style.background = `linear-gradient(135deg, #0f172a 0%, ${project.accent}22 100%)`;
                            parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center text-4xl">
                                    ${['🛒','🗺️','📊','🌐'][index] ?? '💻'}
                                </div>
                            `;
                        }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-[#0a0e1a]/95 to-transparent" />
                    
                    {/* Action Buttons */}
                    <div
                        className="absolute top-3 right-3 flex gap-2 transition-all duration-250"
                        style={{
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateY(0)' : 'translateY(-8px)',
                        }}
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-[#e2e8f0] bg-[#0a0e1a]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full no-underline transition-all hover:bg-[#0a0e1a] hover:border-white/20"
                        >
                            <IconGithub size={14} /> GitHub
                        </a>
                        {project.live && project.live !== '#' && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-medium text-[#e2e8f0] bg-[#0a0e1a]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full no-underline transition-all hover:bg-[#0a0e1a] hover:border-white/20"
                            >
                                <IconExternal size={14} /> Live
                            </a>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center justify-between">
                        <h3 className="font-[Syne] text-lg font-bold text-[#f1f5f9] tracking-[-0.01em]">
                            {project.title}
                        </h3>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-medium no-underline transition-opacity duration-200"
                            style={{
                                color: project.accent,
                                opacity: isHovered ? 1 : 0.6,
                            }}
                        >
                            View code <IconArrow size={14} />
                        </a>
                    </div>

                    <p className="text-sm text-[#94a3b8] leading-[1.75] flex-1">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="font-mono text-[10.5px] px-2.5 py-0.5 rounded-full border transition-colors"
                                style={{
                                    color: project.accent,
                                    background: `${project.accent}18`,
                                    borderColor: `${project.accent}30`,
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {project.year && (
                        <div className="text-[10px] text-[#475569] font-mono mt-1">
                            {project.year}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="py-22 px-6 md:px-12 bg-[#0f172a]/50 relative z-10">
            <div className="max-w-[1100px] mx-auto">
                <Fade>
                    <div className="mb-12">
                        <p className="font-mono text-xs text-[#63b3ed] uppercase tracking-[0.14em] mb-3">
                            — what i've built
                        </p>
                        <h2 className="font-[Syne] text-[clamp(28px,3.5vw,40px)] font-bold tracking-[-0.02em] text-[#f1f5f9]">
                            Featured Projects
                        </h2>
                    </div>
                </Fade>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <Fade delay={200}>
                    <div className="mt-10 text-center">
                        <a
                            href="https://github.com/jusw444"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#63b3ed] bg-[#63b3ed]/10 border border-[#63b3ed]/20 px-7 py-3 rounded-full no-underline transition-all hover:bg-[#63b3ed]/20 hover:border-[#63b3ed] active:scale-95"
                        >
                            <IconGithub size={18} />
                            See all projects on GitHub
                        </a>
                    </div>
                </Fade>
            </div>
        </section>
    );
}