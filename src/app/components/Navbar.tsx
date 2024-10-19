import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState, FC } from 'react';

interface NavbarProps {
    darkMode: boolean
    setDarkMode: (darkMode: boolean) => void
}

const Navbar: FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`flex justify-between text-2xl w-[100vw] px-[5vw] py-[1%] bg-navbar dark:bg-navbar_dark dark:bg-opacity-50 bg-opacity-50 dark:text-text_secondary fixed z-50 ${darkMode && "dark"} transition-colors hover:duration-300`}>
            <Link href="/" className="flex-1 text-3xl font-ultra text-accent">Græsberg</Link>

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
                        <Link href="#about" className="hover:text-accent transition-colors duration-200">About</Link>
                        <Link href="#experience" className="hover:text-accent transition-colors duration-200">Experience</Link>
                        <Link href="#projects" className="hover:text-accent transition-colors duration-200">Projects</Link>
                        <Link href="#contact" className="hover:text-accent transition-colors duration-200">Contact</Link>
                        <Link href="https://github.com/henrygraesberg" target='_blank'><Icon icon="jam:github" className="text-3xl hover:text-accent transition-colors duration-200" /></Link>
                        <Icon icon={darkMode ? "mingcute:sun-fill" : "mingcute:moon-fill"} className="text-3xl hover:text-accent transition-colors duration-200" onClick={() => setDarkMode(!darkMode)} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;