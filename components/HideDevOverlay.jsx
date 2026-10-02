'use client';

import { useEffect } from 'react';

export default function HideDevOverlay() {
    useEffect(() => {
        const hide = () => {
            document.querySelectorAll('nextjs-portal').forEach((el) => {
                const text = (el.textContent || '').toLowerCase();
                if (text.includes('exception') || text.includes('uncaught') || text.includes('error')) {
                    return;
                }
                el.style.setProperty('display', 'none', 'important');
                el.style.setProperty('visibility', 'hidden', 'important');
                el.style.setProperty('pointer-events', 'none', 'important');
            });
        };

        hide();
        const observer = new MutationObserver(hide);
        observer.observe(document.documentElement, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    return null;
}
