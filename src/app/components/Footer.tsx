import Link from "next/link"

const Footer = () => {
  return (
    <footer id="contact" className={`flex justify-between items-center px-[5vw] py-3 bg-navbar dark:bg-navbar_dark dark:text-text_secondary transition-colors duration-700`}>
        <h2 className="text-2xl font-ultra">Contact</h2>

        <div className="flex gap-4 flex-col text-end">
            <h3 className="text-xl font-ultra text-primary dark:text-accent transition-colors duration-700">Email</h3>
            <Link href="mailto:henrygras@icloud.com" className="font-medium">henry@graesberg.com</Link>
            <h3 className="text-xl font-ultra text-primary dark:text-accent transition-colors duration-700">Phone number</h3>
            <Link href="tel:+4741629153" className="font-medium">+47 416 29 153</Link>
        </div>
    </footer>
  )
}

export default Footer