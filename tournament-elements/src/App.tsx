import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GameIntro from './components/GameIntro/GameIntro';
import ElementSelector from './components/ElementSelector/ElementSelector';
import styles from './App.module.css';
 
const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />

            <main className={styles.main}>
                <Hero />

                <GameIntro />

                <ElementSelector />

                {/* Temporary sections for future development */}

                <section
                    id="game-modes"
                    className={styles.placeholderSection}
                >
                    <h2>Choose Your Battle</h2>
                </section>

                <section
                    id="join"
                    className={styles.placeholderSection}
                >
                    <h2>Your Element Awaits</h2>
                </section>
            </main>
        </div>
    );
};
 
export default App;