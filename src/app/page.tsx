'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';

import { projects } from '@/app/data/ProjectData';

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
    <main className={`bg-background dark:bg-background_dark grid grid-cols-2 p-3 py-24 -z-30 ${darkMode && "dark"} transition-colors duration-700`}>
      {
        projects.map((project, index) => (
          <Project 
          key={index}
          {...project}
          />
        ))
      }
    </main>
    </>
  );
}

export default Home;