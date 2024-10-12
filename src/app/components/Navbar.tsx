import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState, FC } from 'react';

interface NavbarProps {
    darkMode: boolean
    setDarkMode: Function
}

const Navbar: FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`flex justify-between text-2xl w-[100vw] px-[5%] py-[1%] bg-navbar dark:bg-navbar_dark dark:text-text_secondary fixed ${darkMode && "dark"}`}>
            <Link href="/" className="flex-1 text-3xl font-bold text-accent">Græsberg</Link>

            <div className="flex flex-col items-end">
                <Icon
                    onClick={() => setMenuOpen(!menuOpen)}
                    icon={ `${menuOpen ? "pajamas:close" : "charm:menu-hamburger"}` }
                    className="md:hidden"
                />
            
                <div className={`
                    flex
                    flex-1
                    justify-between
                    gap-4
                    ${!menuOpen && "max-md:hidden"}
                    max-md:flex-col
                    max-md:bg-gradient-to-b
                    max-md:from-secondary
                    max-md:to-dark
                    max-md:p-4
                    rounded-md
                    `}>
                        <Link href="#about" className="hover:text-accent">About</Link>
                        <Link href="#experience" className="hover:text-accent">Experience</Link>
                        <Link href="#projects" className="hover:text-accent">Projects</Link>
                        <Link href="#contact" className="hover:text-accent">Contact</Link>
                        <Link href="https://github.com/henrygraesberg" target='_blank'><Icon icon="jam:github" className="text-3xl hover:text-accent" /></Link>
                        <Icon icon={darkMode ? "mingcute:sun-fill" : "mingcute:moon-fill"} className="text-3xl hover:text-accent" onClick={() => setDarkMode(!darkMode)} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;