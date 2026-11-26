import React from 'react';
import styles from './GameIntro.module.css';
 
// Temporarily allows the component to work
// before the final artwork has been added.
const introImages = import.meta.glob<string>(
    '../../assets/images/game-intro.jpg',
    { eager: true, query: '?url', import: 'default' }
);
 
const introBackground =
    introImages['../../assets/images/game-intro.jpg'];
 
const GameIntro: React.FC = () => {
    return (
        <section id="game" className={styles.gameIntro}>
            {/* Section introduction */}
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
                    A World Shaped by the Elements
                </p>

                <h2 className={styles.title}>
                    Enter the Tournament
                </h2>

                <p className={styles.description}>
                    Master your element. Challenge your rivals.
                    Defend the realms. Your journey to becoming
                    an elemental champion begins here.
                </p>
            </div>

            {/* Full-width cinematic environment */}
            <div className={styles.imageContainer}>
                {introBackground && (
                    <img
                        src={introBackground}
                        alt="An ancient elemental kingdom surrounded by floating islands and cascading waterfalls"
                        className={styles.backgroundImage}
                        loading="lazy"
                    />
                )}
 
                {/* Blends the artwork into adjacent sections */}
                <div
                    className={styles.imageOverlay}
                    aria-hidden="true"
                ></div>
            </div>
        </section>
    );
};
 
export default GameIntro;