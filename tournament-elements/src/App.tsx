import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';
 
const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
 
            <main className={styles.main}>
                {/* Temporary sections for navigation testing */}

                <section id="home" className={styles.placeholderSection}>
                    <h1>Tournament of Elements</h1>
                    <p>One Element. One Destiny.</p>
                </section>

                <section id="game" className={styles.placeholderSection}>
                    <h2>Enter the Tournament</h2>
                </section>

                <section id="elements" className={styles.placeholderSection}>
                    <h2>Choose Your Element</h2>
                </section>

                <section id="game-modes" className={styles.placeholderSection}>
                    <h2>Choose Your Battle</h2>
                </section>

                <section id="join" className={styles.placeholderSection}>
                    <h2>Your Element Awaits</h2>
                </section>

            </main>
        </div>
    );
};
 
export default App;
