import React, { useState } from 'react';
import { Fade } from './Fade';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { IconGithub, IconLinkedin, IconMail } from './ui/icons';

export function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        isSubmitting: false,
        isSubmitted: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState(prev => ({ ...prev, isSubmitting: true }));
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setFormState({
            name: '',
            email: '',
            message: '',
            isSubmitting: false,
            isSubmitted: true,
        });
    };

    const socialLinks = [
        { name: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: <IconMail /> },
        { name: 'GitHub', url: PERSONAL_INFO.github, icon: <IconGithub /> },
        { name: 'LinkedIn', url: PERSONAL_INFO.linkedin, icon: <IconLinkedin /> },
    ];

    return (
        <section id="contact" className="py-22 px-6 md:px-12 bg-[#0f172a]/50 relative z-10">
            <div className="max-w-[1100px] mx-auto">
                <Fade>
                    <div className="mb-12">
                        <p className="font-mono text-xs text-[#63b3ed] uppercase tracking-[0.14em] mb-3">
                            — let's connect
                        </p>
                        <h2 className="font-[Syne] text-[clamp(28px,3.5vw,40px)] font-bold tracking-[-0.02em] text-[#f1f5f9]">
                            Get in Touch
                        </h2>
                    </div>
                </Fade>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left - Contact Info */}
                    <Fade direction="left">
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-8 md:p-10">
                            <h3 className="font-[Syne] text-2xl font-bold text-[#f1f5f9] mb-3 tracking-[-0.01em]">
                                Let's Work Together
                            </h3>
                            <p className="text-sm text-[#64748b] leading-[1.8] mb-8">
                                I'm always open to new projects, collaborations, or just a friendly chat. 
                                Feel free to reach out through any of the channels below.
                            </p>

                            <div className="flex flex-col gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target={link.name !== 'Email' ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-sm text-[#94a3b8] bg-white/5 border border-white/10 px-4 py-3 rounded-xl transition-all hover:border-[#63b3ed]/40 hover:text-[#63b3ed] hover:bg-[#63b3ed]/10"
                                    >
                                        <span className="text-[#63b3ed]">{link.icon}</span>
                                        <span>{link.name}</span>
                                        <span className="ml-auto text-[#475569]">{link.url}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Fade>

                    {/* Right - Contact Form */}
                    <Fade direction="right" delay={100}>
                        <div className="bg-white/5 border border-white/5 rounded-2xl p-8 md:p-10">
                            {formState.isSubmitted ? (
                                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                                    <div className="text-5xl">🎉</div>
                                    <h4 className="font-[Syne] text-xl font-bold text-[#f1f5f9]">
                                        Message Sent!
                                    </h4>
                                    <p className="text-sm text-[#64748b]">
                                        Thanks for reaching out. I'll get back to you soon.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-[#94a3b8] mb-1.5">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-[#e2e8f0] text-sm transition-all focus:outline-none focus:border-[#63b3ed]/50 focus:ring-1 focus:ring-[#63b3ed]/50"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-[#94a3b8] mb-1.5">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-[#e2e8f0] text-sm transition-all focus:outline-none focus:border-[#63b3ed]/50 focus:ring-1 focus:ring-[#63b3ed]/50"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-[#94a3b8] mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            value={formState.message}
                                            onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-[#e2e8f0] text-sm transition-all focus:outline-none focus:border-[#63b3ed]/50 focus:ring-1 focus:ring-[#63b3ed]/50 resize-y min-h-[100px]"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formState.isSubmitting}
                                        className="w-full bg-gradient-to-r from-[#63b3ed] to-[#7c6ff7] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all hover:opacity-85 hover:-translate-y-0.5 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                    >
                                        {formState.isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </span>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}