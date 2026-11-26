import React, { useState } from 'react';
import styles from './Header.module.css';
 
const Header: React.FC = () => {
    // Controls whether the mobile navigation menu is open
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
 
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };
 
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
 
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Temporary game logo */}
                <a
                    href="#home"
                    className={styles.logo}
                    onClick={closeMenu}
                    aria-label="Tournament of Elements home"
                >
                    <span className={styles.logoDecoration}>✧</span>
                    <span className={styles.logoSmall}>
                        Tournament of
                    </span>
                    <span className={styles.logoLarge}>
                        Elements
                    </span>
                    <span className={styles.logoDecoration}>✧</span>
                </a>

                {/* Main navigation */}
                <nav
                    id="main-navigation"
                    aria-label="Main navigation"
                    className={`${styles.navigation} ${
                        isMenuOpen ? styles.navigationOpen : ''
                    }`}
                >
                    <a href="#game" onClick={closeMenu}>
                        The Game
                    </a>

                    <a href="#elements" onClick={closeMenu}>
                        Elements
                    </a>

                    <a href="#game-modes" onClick={closeMenu}>
                        Game Modes
                    </a>

                    {/* CTA displayed inside the mobile menu */}
                    <a
                        href="#join"
                        className={styles.mobileJoinButton}
                        onClick={closeMenu}
                    >
                        Join the Tournament
                    </a>
                </nav>

                {/* Desktop call-to-action button */}
                <a href="#join" className={styles.joinButton}>
                    Join the Tournament
                    <span aria-hidden="true">›</span>
                </a>

                {/* Mobile hamburger menu */}
                <button
                    type="button"
                    className={`${styles.menuButton} ${
                        isMenuOpen ? styles.menuButtonOpen : ''
                    }`}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </header>
    );
};
 
export default Header;