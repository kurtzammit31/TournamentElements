import React, { useRef, useState } from 'react';
import styles from './Hero.module.css';
 
// Vite searches for the assets without requiring them
// to exist during the initial development stage.
const heroImages = import.meta.glob<string>(
    '../../assets/images/hero-background.jpg',
    { eager: true, query: '?url', import: 'default' }
);
 
const heroVideos = import.meta.glob<string>(
    '../../assets/videos/hero-trailer.mp4',
    { eager: true, query: '?url', import: 'default' }
);
 
const heroBackground =
    heroImages['../../assets/images/hero-background.jpg'];
 
const heroTrailer =
    heroVideos['../../assets/videos/hero-trailer.mp4'];
 
const Hero: React.FC = () => {
    // Reference to the background video element
    const videoRef = useRef<HTMLVideoElement>(null);
 
    // Tracks whether the video is currently playing
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
 
    const toggleVideo = async () => {
        const video = videoRef.current;
 
        if (!video) return;
 
        if (video.paused) {
            try {
                await video.play();
            } catch (error) {
                console.error('Unable to play the video:', error);
            }
        } else {
            video.pause();
        }
    };
 
    return (
        <section id="home" className={styles.hero}>
            {/* Background image */}
            {heroBackground && (
                <img
                    src={heroBackground}
                    alt=""
                    className={styles.backgroundImage}
                    aria-hidden="true"
                />
            )}

            {/* Background gameplay and cinematic video */}
            {heroTrailer && (
                <video
                    ref={videoRef}
                    className={styles.backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={heroBackground}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setIsPlaying(false)}
                    aria-hidden="true"
                >
                    <source src={heroTrailer} type="video/mp4" />
                </video>
            )}

            {/* Dark overlay to improve text readability */}
            <div className={styles.overlay}></div>

            {/* Main hero content */}
            <div className={styles.content}>
                <div className={styles.titleDecoration}>
                    <span></span>
                    <span className={styles.diamond}>✧</span>
                    <span></span>
                </div>

                <h1 className={styles.title}>
                    <span className={styles.titleSmall}>
                        Tournament of
                    </span>

                    <span className={styles.titleLarge}>
                        Elements
                    </span>
                </h1>

                <p className={styles.tagline}>
                    One Element. One Destiny.
                </p>

                <a
                    href="#game"
                    className={styles.exploreButton}
                >
                    Explore the Tournament
                    <span aria-hidden="true">›</span>
                </a>
            </div>

            {/* Scroll indicator */}
            <a
                href="#game"
                className={styles.scrollIndicator}
                aria-label="Scroll to the game introduction"
            >
                <span>Discover More</span>
                <span className={styles.scrollArrow}></span>
            </a>

            {/* Video controls */}
            {heroTrailer && (
                <button
                    type="button"
                    className={styles.videoControl}
                    onClick={toggleVideo}
                    aria-label={
                        isPlaying
                            ? 'Pause background video'
                            : 'Play background video'
                    }
                >
                    <span aria-hidden="true">
                        {isPlaying ? 'Ⅱ' : '▶'}
                    </span>
                </button>
            )}
        </section>
    );
};
 
export default Hero;