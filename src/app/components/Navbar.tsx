import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between text-2xl px-[5%] my-[3%]">
            <Link href="/" className="flex-1 text-3xl font-bold">Portfolio</Link>

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
                        <Link href="#about">About</Link>
                        <Link href="#experience">Experience</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;