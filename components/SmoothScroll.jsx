'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
    useEffect(() => {
        let lenis;
        let tickerFn;

        try {
            gsap.registerPlugin(ScrollTrigger);

            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                touchMultiplier: 1.5,
            });

            lenis.on('scroll', ScrollTrigger.update);
            tickerFn = (time) => { lenis.raf(time * 1000); };
            gsap.ticker.add(tickerFn);
            gsap.ticker.lagSmoothing(0);
            window.__lenis = lenis;
        } catch (err) {
            console.warn('SmoothScroll:', err);
        }

        const originalTitle = document.title;
        const handleVisibility = () => {
            document.title = document.hidden ? "Hey, volta aqui!👋 - Florida RP" : originalTitle;
        };
        document.addEventListener('visibilitychange', handleVisibility);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibility);
            if (tickerFn) gsap.ticker.remove(tickerFn);
            if (lenis) lenis.destroy();
            delete window.__lenis;
        };
    }, []);

    return null;
}
