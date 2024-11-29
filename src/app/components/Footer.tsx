import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
import { FC } from "react"

type contactType = "mailto" | "tel" | ""
interface ContactElementProps {
  title: string
  type: contactType
  content: string
}

const ContactElement: FC<ContactElementProps> = ({ title, type, content }) => (
  <>
    <h3 className="text-xl font-ultra text-text_purple dark:text-accent transition-colors duration-700">{title}</h3>
    <Link href={`${type}:${content}`} className="font-medium hover:text-accent transition-colors hover:duration-150">{content}</Link>
  </>
)

interface SocialElementProps {
  title: string
  serviceLogo?: string
  link: string
}

const SocialElement: FC<SocialElementProps> = ({ title, serviceLogo, link }) => (
  <div className="flex gap-2">
    <Icon icon="ion:triangle" className="text-lg rotate-90 self-center text-text_purple dark:text-accent transition-colors duration-700" />
    <Link href={link}  target="_blank" className="font-medium text-2xl hover flex gap-1 hover:text-accent transition-colors hover:duration-150">{title} {serviceLogo && <Icon icon={serviceLogo} className="text-2xl self-center" />}</Link>
  </div>
)

const Footer = () => {
  return (
    <footer id="contact" className={`flex max-md:flex-col gap-5 justify-between items-center px-[5vw] py-3 max-md:pb-10 bg-navbar dark:bg-navbar_dark dark:text-text_secondary transition-colors duration-700`}>
        <h2 className="text-2xl font-ultra max-md:text-center">Contact<br />& Socials</h2>

        <div className="flex gap-4 flex-col">
            <SocialElement title="GitHub" serviceLogo="jam:github" link="https://git.graesberg.com" />
            <SocialElement title="LinkedIn" serviceLogo="uil:linkedin" link="https://linkedin.com/in/henry-graesberg" />
        </div>

        <div className="flex gap-4 flex-col max-md:text-center text-end">
            <ContactElement title="Email" type="mailto" content="henry@graesberg.com" />
            <ContactElement title="Phone" type="tel" content="+47 416 29 153" />
        </div>
    </footer>
  )
}

export default Footer