'use client';

import Link from 'next/link';

export default function Showreel() {
    return (
        <section className="showreel-section" id="showreel-section">
            <Link href="/noticias/7-3-4-atualizacoes-agosto" className="showreel__content">
                <p className="showreel__subtitle">último patch notes</p>
                <h2 className="showreel__title">7.3.4 — Agosto</h2>
            </Link>
        </section>
    );
}
