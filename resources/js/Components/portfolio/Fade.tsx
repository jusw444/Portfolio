import React from 'react';
import { useInView } from '@/hooks/useInView';

interface FadeProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    duration?: number;
    threshold?: number;
}

export function Fade({ 
    children, 
    delay = 0, 
    className = '', 
    direction = 'up',
    duration = 650,
    threshold = 0.15
}: FadeProps) {
    const { ref, inView } = useInView({ threshold });

    const translateMap = {
        up: 'translateY(28px)',
        down: 'translateY(-28px)',
        left: 'translateX(28px)',
        right: 'translateX(-28px)',
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'none' : translateMap[direction],
                transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}