'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const colorSchemeDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
      
        if (colorSchemeDark.matches) {
          setDarkMode(true);
        }

        colorSchemeDark.addEventListener("change", (evt) => setDarkMode(evt.matches));
      }, []);

  return (
    <main className={`bg-background dark:bg-background_dark ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1>Page</h1>
    </main>
  );
}

export default Home;