import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { FC } from "react"

export interface ProjectProps {
    title: string
    url: string
    urlShorthand: string
    github: string
    image: StaticImageData
    technologies: string[]
    deployment: string[]
    className?: string
}

interface ButtonProps {
    text?: string
    url: string
    className?: string
}

const LinkButton: FC<ButtonProps> = ({ text, url, className }) => {
    return (
        <Link href={url} target="_blank" className={`w-[100%] rounded-md p-5 bg-primary grid place-content-center hover:scale-105 transition-all duration-500 ${className}`}>
        {text}
        </Link>
    )
}

const GithubButton: FC<ButtonProps> = ({ text="GitHub", url, className }) => {
    return (
        <Link href={url} target="_blank" className={`w-[100%] rounded-md p-5 bg-secondary grid place-content-center hover:scale-105 transition-all duration-500 ${className}`}>
        {text}
        </Link>
    )
}

const Project: FC<ProjectProps> = ({ title, url, urlShorthand, github, image, className, technologies, deployment }) => {
  return (
    <div className={`w-[100%] max-w-[50rem] min-h-[24rem] h-[40vh] text-text_secondary grid grid-cols-[2fr_2fr_3fr_1fr_1fr_1fr_1fr] grid-rows-6 overflow-hidden rounded-lg border-2 border-accent bg-black ${className} hover:scale-110 transition-all duration-500`}>
        <div className="col-start-1 col-end-8">
            <Image src={image} alt={`Screenshot of ${title}`} className="opacity-50" />
        </div>

        <h1 className="ml-4 text-3xl row-start-3 col-span-3 z-10">{title}</h1>
        <LinkButton text={urlShorthand} url={url} className="row-start-4 col-span-2 ml-4 mb-4 z-10" />
        <GithubButton url={github} className="row-start-5 col-span-2 ml-4 mb-4 z-10" />

        <h2 className="text-sideways col-start-5 row-start-3 row-span-2 z-10 ml-5">Made with</h2>

        <div className="row-start-3 col-start-4 row-span-4 flex flex-col gap-3 justify-start items-end">
            {
                technologies.map((tech) => (
                    <Icon key={tech} icon={tech} className="text-4xl z-10" />
                ))
            }
        </div>

        <h2 className="text-sideways col-start-7 row-start-3 row-span-2 z-10 ml-5">Deployed on</h2>

        <div className="row-start-3 col-start-6 row-span-4 flex flex-col gap-3 justify-start items-end">
            {
                deployment.map((tech) => (
                    <Icon key={tech} icon={tech} className="text-4xl z-10" />
                ))
            }
        </div>
    </div>
  )
}

export default Project