import React, { useState } from 'react';
import type { Element } from '../../types/element';
import { elements } from '../../data/element';
import ElementCard from '../ElementCard/ElementCard';
import styles from './ElementSelector.module.css';
 
// Load all elemental PNG icons.
const elementIcons = import.meta.glob<string>(
    '../../assets/icons/*-icon.png',
    { eager: true, query: '?url', import: 'default' }
);
 
const ElementSelector: React.FC = () => {
 
    // Fire is selected by default.
    const [selectedElement, setSelectedElement] =
        useState<Element>(elements[0]);
 
    const selectElement = (element: Element) => {
        setSelectedElement(element);
    };
 
    return (
        <section
            id="elements"
            className={styles.elementSection}
        >
            <div className={styles.container}>
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
                        Discover Your Power
                    </p>

                    <h2 className={styles.title}>
                        Choose Your Element
                    </h2>

                    <p className={styles.description}>
                        Eight elements. Endless possibilities.
                        One destiny.
                    </p>
                </div>

                {/* Element selection buttons */}
                <div
                    className={styles.elementGrid}
                    role="group"
                    aria-label="Choose an element"
                >
                    {elements.map((element) => {
                        const iconImage = elementIcons[
                            `../../assets/icons/${element.icon}`
                        ];
 
                        return (
                            <button
                                key={element.id}
                                type="button"
                                className={`${styles.elementButton} ${
                                    selectedElement.id === element.id
                                        ? styles.active
                                        : ''
                                }`}
                                style={{
                                    '--element-color': element.color
                                } as React.CSSProperties}
                                onMouseEnter={() => selectElement(element)}
                                onClick={() => selectElement(element)}
                                onFocus={() => selectElement(element)}
                                aria-pressed={
                                    selectedElement.id === element.id
                                }
                            >
                                {/* Element PNG icon */}
                                <img
                                    src={iconImage}
                                    alt=""
                                    className={styles.elementIconImage}
                                />

                                <span className={styles.elementName}>
                                    {element.name}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Selected character showcase */}
                <ElementCard
                    key={selectedElement.id}
                    element={selectedElement}
                />
            </div>
        </section>
    );
};
 
export default ElementSelector;