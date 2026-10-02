'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorBubble from '@/components/CursorBubble';
import SmoothScroll from '@/components/SmoothScroll';
import SvgSymbols from '@/components/SvgSymbols';

export default function NewsOpen({ post }) {
    return (
        <div className="news-open content-section">
            <SvgSymbols />
            <SmoothScroll />
            <CursorBubble />
            <Navbar />

            <main className="news-open__main">
                <img
                    src="/assets/MotionCard SVG/motion-card-blob.svg"
                    alt=""
                    className="news-open__blob"
                />
                <img
                    src="/assets/Card-Sticker SVG/sticker-heart.svg"
                    alt=""
                    className="news-open__sticker news-open__sticker--heart"
                />
                <img
                    src="/assets/Card-Sticker SVG/sticker-hand.svg"
                    alt=""
                    className="news-open__sticker news-open__sticker--hand"
                />
                <img
                    src="/assets/Card-Sticker SVG/sticker-smiley.svg"
                    alt=""
                    className="news-open__sticker news-open__sticker--smiley"
                />
                <img
                    src="/assets/VimeoHero SVG/pink-star.svg"
                    alt=""
                    className="news-open__sticker news-open__sticker--star"
                />

                <article className="news-sheet">
                    <span className="news-sheet__icon">
                        <img src="/brand/isotipo.png" alt="Florida" />
                    </span>

                    <div className="news-sheet__photo">
                        <img src={post.cover} alt={post.title} />
                    </div>

                    <div className="news-sheet__copy">
                        <div className="news-sheet__chips">
                            <span className="news-tag">{post.tag}</span>
                            <span className="news-version">{post.version}</span>
                        </div>
                        <p className="news-sheet__date">{post.date}</p>
                        <h1>{post.title}</h1>
                        <p className="news-sheet__lead">{post.excerpt}</p>

                        <div className="news-sheet__body">
                            {post.body.map((block, index) => {
                                if (block.type === 'heading') {
                                    return <h2 key={index}>{block.text}</h2>;
                                }
                                if (block.type === 'kicker') {
                                    return <p className="news-sheet__kicker" key={index}>{block.text}</p>;
                                }
                                if (block.type === 'image') {
                                    return (
                                        <figure className="news-sheet__shot" key={index}>
                                            <img src={block.src} alt={block.caption || post.title} />
                                            {block.caption ? <figcaption>{block.caption}</figcaption> : null}
                                        </figure>
                                    );
                                }
                                if (block.type === 'list') {
                                    return (
                                        <ul key={index}>
                                            {block.items.map((item) => <li key={item}>{item}</li>)}
                                        </ul>
                                    );
                                }
                                return <p key={index}>{block.text}</p>;
                            })}
                        </div>

                        {post.gallery?.length ? (
                            <div className="news-sheet__gallery">
                                {post.gallery.map((src) => (
                                    <img key={src} src={src} alt={post.title} />
                                ))}
                            </div>
                        ) : null}

                        <Link href="/#noticias" className="news-sheet__back">
                            voltar para as notas
                        </Link>
                    </div>
                </article>
            </main>

            <footer className="main-footer">
                <Footer />
            </footer>
        </div>
    );
}
