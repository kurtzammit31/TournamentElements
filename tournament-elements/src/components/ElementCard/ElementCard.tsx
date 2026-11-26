import React from 'react';
import type { Element } from '../../types/element';
import styles from './ElementCard.module.css';
 
// Load character artwork.
const characterImages = import.meta.glob<string>(
    '../../assets/images/*-character.png',
    { eager: true, query: '?url', import: 'default' }
);
 
// Load elemental PNG icons.
const elementIcons = import.meta.glob<string>(
    '../../assets/icons/*-icon.png',
    { eager: true, query: '?url', import: 'default' }
);
 
// Defines the props received from ElementSelector.
interface ElementCardProps {
    element: Element;
}
 
const ElementCard: React.FC<ElementCardProps> = ({ element }) => {
 
    // Find the selected character image.
    const characterImage = characterImages[
        `../../assets/images/${element.characterImage}`
    ];
 
    // Find the selected element icon.
    const iconImage = elementIcons[
        `../../assets/images/${element.icon}`
    ];
 
    return (
        <article
            className={styles.elementCard}
            style={{
                '--element-color': element.color
            } as React.CSSProperties}
            aria-label={`${element.name} element details`}
        >
            {/* Element information */}
            <div className={styles.content}>
                <p className={styles.subtitle}>
                    Elemental Power — {String(element.id).padStart(2, '0')}
                </p>

                <h3 className={styles.title}>
                    {element.name}
                </h3>

                <p className={styles.combatStyle}>
                    {element.combatStyle}
                </p>

                <p className={styles.description}>
                    {element.description}
                </p>

                <div
                    className={styles.divider}
                    aria-hidden="true"
                ></div>

                {/* Element abilities */}
                <div className={styles.abilities}>
                    <h4 className={styles.abilitiesTitle}>
                        Signature Abilities
                    </h4>

                    <ul className={styles.abilityList}>
                        {element.abilities.map((ability) => (
                            <li
                                key={ability.id}
                                className={styles.ability}
                            >
                                {/* Element PNG icon */}
                                <div className={styles.abilityIcon}>
                                    <img
                                        src={iconImage}
                                        alt=""
                                        className={styles.abilityIconImage}
                                    />
                                </div>

                                <div className={styles.abilityContent}>
                                    <h5 className={styles.abilityName}>
                                        {ability.name}
                                    </h5>

                                    <p className={styles.abilityDescription}>
                                        {ability.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Character artwork */}
            <div className={styles.characterContainer}>
                {characterImage ? (
                    <img
                        src={characterImage}
                        alt={`${element.name} elemental warrior`}
                        className={styles.characterImage}
                        loading="lazy"
                    />
                ) : (
                    /* PNG fallback if character artwork is missing */
                    <img
                        src={iconImage}
                        alt=""
                        className={styles.characterPlaceholder}
                    />
                )}

                <div
                    className={styles.characterOverlay}
                    aria-hidden="true"
                ></div>
            </div>

            {/* Decorative corner accents */}
            <span
                className={styles.cornerTop}
                aria-hidden="true"
            ></span>

            <span
                className={styles.cornerBottom}
                aria-hidden="true"
            ></span>
        </article>
    );
};
 
export default ElementCard;