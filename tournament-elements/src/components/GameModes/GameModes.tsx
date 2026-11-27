import React from 'react';
import styles from './GameModes.module.css';
 
// Load game mode artwork if available.
const gameModeImages = import.meta.glob<string>(
    '../../assets/images/*-battle.jpg',
    { eager: true, query: '?url', import: 'default' }
);
 
const pvpImage =
    gameModeImages['../../assets/images/pvp-battle.jpg'];
 
const pveImage =
    gameModeImages['../../assets/images/pve-battle.jpg'];
 
const GameModes: React.FC = () => {
    return (
        <section
            id="game-modes"
            className={styles.gameModesSection}
        >
            {/* Section heading */}
            <div className={styles.heading}>
                <div
                    className={styles.decoration}
                    aria-hidden="true"
                >
                    <span></span>
                    <span className={styles.diamond}>✧</span>
                    <span></span>
                </div>

                <p className={styles.subtitle}>
                    Two Paths. One Destiny.
                </p>

                <h2 className={styles.title}>
                    Choose Your Battle
                </h2>

                <p className={styles.description}>
                    Challenge your rivals or unite against
                    the forces threatening the realms.
                </p>
            </div>

            {/* Game mode panels */}
            <div className={styles.modesGrid}>
                {/* PvP Game Mode */}
                <article
                    className={`${styles.modeCard} ${styles.pvpCard}`}
                >
                    {pvpImage && (
                        <img
                            src={pvpImage}
                            alt="Two elemental warriors fighting in an arena"
                            className={styles.modeImage}
                            loading="lazy"
                        />
                    )}

                    <div
                        className={styles.overlay}
                        aria-hidden="true"
                    ></div>

                    <span className={styles.modeNumber}>
                        01
                    </span>

                    <div className={styles.modeContent}>
                        <span className={styles.modeLabel}>
                            Player vs Player
                        </span>

                        <h3 className={styles.modeTitle}>
                            The Tournament
                        </h3>

                        <div
                            className={styles.modeDivider}
                            aria-hidden="true"
                        ></div>

                        <p className={styles.modeDescription}>
                            Enter the arena, master your element
                            and defeat your opponents in intense
                            knockout tournaments. Fight your way
                            to the final and claim your place
                            as champion.
                        </p>

                        <div className={styles.features}>
                            <span>1v1 Combat</span>
                            <span>Knockout Tournaments</span>
                            <span>Competitive Battles</span>
                        </div>
                    </div>
                </article>

                {/* PvE Game Mode */}
                <article
                    className={`${styles.modeCard} ${styles.pveCard}`}
                >
                    {pveImage && (
                        <img
                            src={pveImage}
                            alt="Elemental warriors defending a realm from invading enemies"
                            className={styles.modeImage}
                            loading="lazy"
                        />
                    )}

                    <div
                        className={styles.overlay}
                        aria-hidden="true"
                    ></div>

                    <span className={styles.modeNumber}>
                        02
                    </span>

                    <div className={styles.modeContent}>
                        <span className={styles.modeLabel}>
                            Player vs Environment
                        </span>

                        <h3 className={styles.modeTitle}>
                            Realm Defence
                        </h3>

                        <div
                            className={styles.modeDivider}
                            aria-hidden="true"
                        ></div>

                        <p className={styles.modeDescription}>
                            Unite with fellow elemental warriors
                            and defend the realms against waves
                            of invading enemies. Combine your
                            abilities, protect your allies and
                            stand together against the darkness.
                        </p>

                        <div className={styles.features}>
                            <span>Cooperative Combat</span>
                            <span>Enemy Waves</span>
                            <span>Realm Protection</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};
 
export default GameModes;