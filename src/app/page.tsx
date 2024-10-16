'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Footer from './components/Footer';
import Skills from './components/Skills';

import { projects } from '@/data/ProjectData';
import { skills } from '@/data/SkillsData';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const colorSchemeDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
      
        if(colorSchemeDark.matches) {
          setDarkMode(true);
        }

        colorSchemeDark.addEventListener("change", (evt) => setDarkMode(evt.matches));
      }, []);

  return (
    <>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <main className={`flex flex-col gap-14 bg-background dark:bg-background_dark place-content-center -z-30 ${darkMode && "dark"} transition-colors duration-700`}>
    <div className="h-[100vh] w-[100vw] px-[5vw] flex flex-col justify-center hero">
      <div className="font-ultra z-10">
        <h3 className="text-3xl text-secondary">Hello world, I&apos;m</h3>
        <h1 className="text-7xl text-accent">Henry<br />Græsberg</h1>
      </div>
    </div>

    <div id="about" className="flex flex-col gap-7 p-[2.5vw] mx-[2.5vw] bg-background_dark dark:bg-text text-text_secondary rounded-3xl transition-colors duration-700">
      <div>
        <h2 className="text-5xl font-ultra text-accent">About</h2>
        <p className="text-3xl font-medium">
          I&apos;m a computer science student at the Norwegian University of Science and Technology.<br />
          With experience in game development and web development, I use my experience and spare time to work on fun projects!
          </p>
      </div>
      <div>
        <h2 className="text-5xl font-ultra text-accent">Skills</h2>
        <Skills {...skills} />
      </div>
    </div> 

    <div id="projects">
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