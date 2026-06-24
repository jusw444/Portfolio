import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 py-7 text-center relative z-10">
            <div className="max-w-[1100px] mx-auto px-6">
                <p className="font-mono text-xs text-[#334155]">
                    Designed & built by{' '}
                    <span className="text-[#63b3ed]">{PERSONAL_INFO.name}</span>
                    {' '}·{' '}
                    <span className="text-[#475569]">{currentYear}</span>
                    {' '}·{' '}
                    <span className="text-[#475569]">Laravel + React + TypeScript</span>
                </p>
            </div>
        </footer>
    );
}