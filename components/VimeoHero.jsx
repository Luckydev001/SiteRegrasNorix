'use client';

import { useRef } from 'react';

export default function VimeoHero() {
    const titleRef = useRef(null);

    return (
        <div className="vimeo-hero is-playing is-muted">
            <div className="vimeo-hero__fade" />

            <div className="home-header__title">
                <h1 className="vimeo-hero__title" ref={titleRef}>
                    <span className="vimeo-hero__word">A </span>
                    <span className="vimeo-hero__word">Florida </span>

                    <span className="vimeo-hero__word is--relative">
                        <em>Inova </em>
                        <div className="home-header__smiley">
                            <img
                                src="/assets/VimeoHero SVG/smiley-face.svg"
                                alt=""
                                className="home-header__smiley-svg"
                            />
                        </div>
                    </span>

                    <span className="vimeo-hero__word">cada </span>
                    <span className="vimeo-hero__word">Dia </span>
                    <span className="vimeo-hero__word">mais,</span>

                    <div style={{ flexBasis: '100%', height: 0 }} />

                    <span className="vimeo-hero__word">Venha </span>

                    <span className="vimeo-hero__word is--relative">
                        <div className="home-header__star">
                            <div className="home-header__star-inner">
                                <img
                                    src="/assets/VimeoHero SVG/pink-star.svg"
                                    alt=""
                                    className="home-header__star-svg"
                                />
                            </div>
                        </div>
                        <img
                            src="/assets/VimeoHero SVG/oval-underline.svg"
                            alt=""
                            className="home-header__title-line-svg"
                        />
                        <span>Participar</span>
                    </span>
                </h1>
            </div>
        </div>
    );
}
