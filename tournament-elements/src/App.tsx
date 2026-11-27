import React from 'react';
 
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import GameIntro from './components/GameIntro/GameIntro';
import ElementSelector from './components/ElementSelector/ElementSelector';
import GameModes from './components/GameModes/GameModes';
import CallToAction from './components/CallToAction/CallToAction';
 
import styles from './App.module.css';
 
const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />

            <main className={styles.main}>
                {/* Hero Section */}
                <Hero />

                {/* Game Introduction */}
                <GameIntro />

                {/* Element Selection and Character Showcase */}
                <ElementSelector />

                {/* PvP and PvE Game Modes */}
                <GameModes />

                {/* Final Call to Action */}
                <CallToAction />
            </main>
        </div>
    );
};
 
export default App;