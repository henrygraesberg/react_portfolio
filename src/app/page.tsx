'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Footer from './components/Footer';

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
    <main className={`bg-background dark:bg-background_dark grid place-content-center -z-30 ${darkMode && "dark"} transition-colors duration-700`}>
    <div className="h-[100vh] w-[100vw] px-[5vw] flex flex-col justify-center hero">
      <div className="font-ultra z-10">
        <h3 className="text-3xl text-secondary">Hello world, I&apos;m</h3>
        <h1 className="text-7xl text-accent">Henry<br />Græsberg</h1>
      </div>
    </div>



    <div id="#projects">
      {
        projects.map((project, index) => (
          <Project 
          key={index}
          {...project}
          />
        ))
      }
    </div>
    <Footer />
    </main>
    </>
  );
}

export default Home;