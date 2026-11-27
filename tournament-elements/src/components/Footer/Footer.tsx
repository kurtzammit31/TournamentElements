import React from 'react';
import styles from './Footer.module.css';
 
const Footer: React.FC = () => {
    // Automatically retrieves the current year.
    const currentYear = new Date().getFullYear();
 
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Game logo */}
                <a
                    href="#home"
                    className={styles.logo}
                    aria-label="Tournament of Elements home"
                >
                    <div
                        className={styles.decoration}
                        aria-hidden="true"
                    >
                        <span></span>
                        <span className={styles.diamond}>✧</span>
                        <span></span>
                    </div>

                    <span className={styles.logoTop}>
                        Tournament of
                    </span>

                    <span className={styles.logoBottom}>
                        Elements
                    </span>
                </a>

                {/* Game tagline */}
                <p className={styles.tagline}>
                    One Element. One Destiny.
                </p>

                {/* Footer navigation */}
                <nav
                    className={styles.navigation}
                    aria-label="Footer navigation"
                >
                    <a href="#home">Home</a>
                    <a href="#game">The Game</a>
                    <a href="#elements">Elements</a>
                    <a href="#game-modes">Game Modes</a>
                </nav>

                {/* Social media icons */}
                <div className={styles.socialLinks}>
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="Instagram"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <rect
                                x="3"
                                y="3"
                                width="18"
                                height="18"
                                rx="5"
                            />
                            <circle
                                cx="12"
                                cy="12"
                                r="4"
                            />
                            <circle
                                cx="17.5"
                                cy="6.5"
                                r="0.8"
                                fill="currentColor"
                                stroke="none"
                            />
                        </svg>
                    </a>

                    {/* YouTube */}
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="YouTube"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <rect
                                x="2"
                                y="5"
                                width="20"
                                height="14"
                                rx="4"
                            />
                            <path
                                d="M10 9L15 12L10 15Z"
                                fill="currentColor"
                                stroke="none"
                            />
                        </svg>
                    </a>

                    {/* X */}
                    <a
                        href="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="X"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M18.9 2H22L15.2 9.8L23.2 22H16.9L11.9 14.4L5.2 22H2L9.3 13.6L1.6 2H8.1L12.6 8.9L18.9 2ZM17.8 20H19.5L7.1 4H5.3L17.8 20Z" />
                        </svg>
                    </a>

                    {/* Discord */}
                    <a
                        href="https://discord.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="Discord"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M20.3 4.4a19.8 19.8 0 0 0-4.9-1.5l-.6 1.2a18.2 18.2 0 0 0-5.6 0l-.6-1.2a19.8 19.8 0 0 0-4.9 1.5C.6 9.1-.2 13.6.2 18a20 20 0 0 0 6 3l1.3-2.1-1.9-.9.5-.4a14.3 14.3 0 0 0 11.8 0l.5.4-1.9.9 1.3 2.1a20 20 0 0 0 6-3c.5-5.1-.9-9.5-3.5-13.6ZM8 15.3c-1.2 0-2.1-1.1-2.1-2.4S6.8 10.5 8 10.5s2.1 1.1 2.1 2.4S9.2 15.3 8 15.3Zm8 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.1 1.1 2.1 2.4-.9 2.4-2.1 2.4Z" />
                        </svg>
                    </a>
                </div>

                {/* Decorative divider */}
                <div
                    className={styles.divider}
                    aria-hidden="true"
                ></div>

                {/* Copyright and educational disclaimer */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Tournament of Elements.
                        All rights reserved.
                    </p>

                    <p className={styles.disclaimer}>
                        A fictional game concept created for
                        educational purposes.
                    </p>
                </div>
            </div>
        </footer>
    );
};
 
export default Footer;