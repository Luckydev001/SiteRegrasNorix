'use client';

import Link from 'next/link';
import { getFeatured } from '@/lib/news';

export default function NewsGrid() {
    const featured = getFeatured();
    if (!featured) return null;

    return (
        <section className="news-section" id="noticias">
            <div className="news-heading">
                <span className="news-kicker">patch notes</span>
                <h2>Atualizações da cidade</h2>
                <img
                    src="/assets/Card-Sticker SVG/sticker-heart.svg"
                    alt=""
                    className="news-heading__sticker news-heading__sticker--heart"
                />
                <img
                    src="/assets/Card-Sticker SVG/sticker-smiley.svg"
                    alt=""
                    className="news-heading__sticker news-heading__sticker--smiley"
                />
            </div>

            <div className="news-stage">
                <img
                    src="/assets/MotionCard SVG/motion-card-blob.svg"
                    alt=""
                    className="news-stage__blob"
                />
                <img
                    src="/assets/Card-Sticker SVG/sticker-hand.svg"
                    alt=""
                    className="news-stage__sticker news-stage__sticker--hand"
                />
                <img
                    src="/assets/VimeoHero SVG/pink-star.svg"
                    alt=""
                    className="news-stage__sticker news-stage__sticker--star"
                />

                <Link href={`/noticias/${featured.slug}`} className="news-polaroid">
                    <span className="news-polaroid__icon">
                        <img src="/brand/isotipo.png" alt="Florida" />
                    </span>
                    <div className="news-polaroid__photo">
                        <img src={featured.cover} alt={featured.title} />
                    </div>
                    <div className="news-polaroid__copy">
                        <span className="news-polaroid__chips">
                            <span className="news-tag">{featured.tag}</span>
                            <span className="news-version">{featured.version}</span>
                        </span>
                        <h3>{featured.title}</h3>
                        <p>{featured.excerpt}</p>
                        <span className="news-more">VER MAIS</span>
                    </div>
                </Link>

                <div className="news-chip">patch notes da florida</div>
            </div>
        </section>
    );
}
