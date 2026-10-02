'use client';

import SvgSymbols from '@/components/SvgSymbols';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';
import NewsGrid from '@/components/NewsGrid';

export default function NoticiasPage() {
    return (
        <>
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <Navbar />
            <main style={{ paddingTop: '6rem' }}>
                <NewsGrid />
            </main>
            <footer className="main-footer">
                <Footer />
            </footer>
        </>
    );
}
