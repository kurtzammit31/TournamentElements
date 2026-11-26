import React from 'react';
import styles from './App.module.css';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <main className={styles.main}>
                {/* Temporary content to test the application */}
                <h1>Tournament of Elements</h1>
                <p>One Element. One Destiny.</p>
            </main>
        </div>
    );
};

export default App;
