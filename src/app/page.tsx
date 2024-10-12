'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';

import portfolioScreenshot from './assets/Screenshot 2024-10-11 at 01.38.33.png';

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
    <>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <main className={`bg-background dark:bg-background_dark grid grid-cols-2 p-3 py-24 ${darkMode ? "dark" : ""}`}>
      <Project 
      title={'Portfolio'} 
      url={'https://google.com'} 
      urlShorthand={'google.com'} 
      github={'https://github.com/henrygraesberg/react_portfolio'} 
      image={portfolioScreenshot} />
      <Project 
      title={'Portfolio'} 
      url={'https://google.com'} 
      urlShorthand={'google.com'} 
      github={'https://github.com/henrygraesberg/react_portfolio'} 
      image={portfolioScreenshot}
      className="" />
    </main>
    </>
  );
}

export default Home;