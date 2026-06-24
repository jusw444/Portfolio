import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
    const {
        threshold = 0.15,
        root = null,
        rootMargin = '0px',
        triggerOnce = true,
    } = options;

    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // If triggerOnce is true and we've already triggered, skip
        if (triggerOnce && hasTriggered) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (triggerOnce) {
                        setHasTriggered(true);
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setInView(false);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, root, rootMargin, triggerOnce, hasTriggered]);

    return { ref, inView };
}

// Alias for backward compatibility
export const useInViewOnce = useInView;