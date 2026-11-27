import React from 'react';
import styles from './CallToAction.module.css';
 
// Load the artwork if it is available.
const portalImages = import.meta.glob<string>(
    '../../assets/images/destiny-portal.jpg',
    { eager: true, query: '?url', import: 'default' }
);
 
const portalImage =
    portalImages['../../assets/images/destiny-portal.jpg'];
 
const CallToAction: React.FC = () => {
    return (
        <section
            id="join"
            className={styles.ctaSection}
        >
            {/* Cinematic portal artwork */}
            <div className={styles.artwork}>
                {portalImage && (
                    <img
                        src={portalImage}
                        alt="Elemental warriors approaching a magical portal"
                        className={styles.portalImage}
                        loading="lazy"
                    />
                )}

                {/* Blends the artwork into the content */}
                <div
                    className={styles.artworkOverlay}
                    aria-hidden="true"
                ></div>
            </div>

            {/* Call to action content */}
            <div className={styles.content}>
                <div
                    className={styles.decoration}
                    aria-hidden="true"
                >
                    <span></span>
                    <span className={styles.diamond}>✧</span>
                    <span></span>
                </div>

                <p className={styles.subtitle}>
                    Your Destiny Begins
                </p>

                <h2 className={styles.title}>
                    <span>Claim</span> 
                    <span>Your</span>
                    <span>Glory</span> 
                </h2>

                <p className={styles.description}>
                    Choose your power. Enter the arena.
                    Become a legend.
                </p>

                {/* Primary call to action */}
                <a
                    href="#elements"
                    className={styles.ctaButton}
                >
                    Choose Your Element

                    <span
                        className={styles.arrow}
                        aria-hidden="true"
                    >
                        →
                    </span>
                </a>

                <p className={styles.tagline}>
                    One Element. One Destiny.
                </p>
            </div>
        </section>
    );
};
 
export default CallToAction;