import Image from "next/image"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { FC } from "react"

interface ProjectProps {
    title: string
    url: string
    urlShorthand: string
    github: string
    image: StaticImageData
    className?: string
}

interface ButtonProps {
    text?: string
    url: string
    className?: string
}

const LinkButton: FC<ButtonProps> = ({ text, url, className }) => {
    return (
        <Link href={url} className={`w-[100%] rounded-md p-5 bg-primary grid place-content-center ${className}`}>
        {text}
        </Link>
    )
}

const GithubButton: FC<ButtonProps> = ({ text="GitHub", url, className }) => {
    return (
        <Link href={url} className={`w-[100%] rounded-md p-5 bg-secondary grid place-content-center ${className}`}>
        {text}
        </Link>
    )
}

const Project: FC<ProjectProps> = ({ title, url, urlShorthand, github, image, className }) => {
  return (
    <div className={`w-[40rem] h-[24rem] text-text_secondary grid grid-cols-5 grid-rows-6 gap-4 overflow-hidden rounded-lg border-2 border-accent ${className}`}>
        <div className="object-cover col-start-1 col-end-6">
            <Image src={image} alt={`Screenshot of ${title}`} />
        </div>
        <h1 className="ml-4 text-3xl row-start-3 col-span-3">{title}</h1>
        <LinkButton text={urlShorthand} url={url} className="row-start-4 col-span-2 ml-4" />
        <GithubButton url={github} className="row-start-5 col-span-2 ml-4" />
    </div>
  )
}

export default Project