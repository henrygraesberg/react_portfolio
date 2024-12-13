import { Icon } from "@iconify/react/dist/iconify.js"
import { Tooltip } from "react-tooltip"
import Image from "next/image"
import { StaticImageData } from "next/image"
import Link from "next/link"
import { FC } from "react"
import * as changeCase from "change-case"

interface TechImage {
    src: StaticImageData | string
    alt: string
}

export interface ProjectProps {
    title: string
    url: string
    urlShorthand: string
    github: string
    image: StaticImageData | string
    technologies: (string | TechImage)[]
    technologiesTooltip: string[]
    deployment: string[]
    deploymentTooltip: string[]
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

const LargeScreenProject: FC<ProjectProps> = ({ title, url, urlShorthand, github, image, className, technologies, technologiesTooltip, deployment, deploymentTooltip }) => (
    <div className={`w-[100%] max-w-[50rem] aspect-video text-text_secondary grid grid-cols-[2fr_2fr_3fr_1fr_1fr_1fr_1fr] grid-rows-6 overflow-hidden rounded-lg border-2 border-accent bg-black ${className} hover:scale-110 transition-all duration-500`}>
        <div className="col-start-1 col-end-8">
            <Image src={image} alt={`Screenshot of ${title}`} className="opacity-50" />
        </div>

        <h1 className="ml-4 text-3xl row-start-3 col-span-3 z-10">{title}</h1>
        <LinkButton text={urlShorthand} url={url} className="row-start-4 col-span-2 ml-4 mb-4 z-10" />
        <GithubButton url={github} className="row-start-5 col-span-2 ml-4 mb-4 z-10" />

        <h2 className="text-sideways col-start-5 row-start-3 row-span-2 z-10 ml-5">Made with</h2>

        <div className="row-start-3 col-start-4 row-span-4 flex flex-col gap-3 justify-start items-end">
            {
                technologies.map((tech, index) => {
                    if (typeof tech === "string") return (
                        <>
                        <Icon key={tech} id={changeCase.kebabCase(technologiesTooltip[index])} icon={tech} className="text-4xl z-10" />
                        <Tooltip anchorSelect={`#${changeCase.kebabCase(technologiesTooltip[index])}`} place="left">{technologiesTooltip[index]}</Tooltip>
                        </>
                    )
                    else return (
                    <>
                    <Image key={tech.alt} src={tech.src} alt={tech.alt} height={36} className="z-10" />
                    <Tooltip anchorSelect={`#${technologiesTooltip[index]}`} place="left">{technologiesTooltip[index]}</Tooltip>
                    </>
                    )
                })
            }
        </div>

        <h2 className="text-sideways col-start-7 row-start-3 row-span-2 z-10 ml-5">Deployed on</h2>

        <div className="row-start-3 col-start-6 row-span-4 flex flex-col gap-3 justify-start items-end">
            {
                deployment.map((tech, index) => (
                    <>
                    <Icon key={tech} id={changeCase.kebabCase(deploymentTooltip[index])} icon={tech} className="text-4xl z-10" />
                    <Tooltip anchorSelect={`#${changeCase.kebabCase(deploymentTooltip[index])}`} place="top">{deploymentTooltip[index]}</Tooltip>
                    </>
                ))
            }
        </div>
    </div>
)

const SmallScreenProject: FC<ProjectProps> = ({ title, url, urlShorthand, github, image, className, technologies, technologiesTooltip, deployment, deploymentTooltip }) => (
    <div className={`flex gap-4 flex-col w-full rounded-2xl p-5 border-2 border-accent bg-slate-900 bg-opacity-50 ${className}`}>
        <h3 className="text-3xl text-text_secondary">{title}</h3>
        <Image src={image} alt={`Screenshot of ${title}`} className="w-full rounded-2xl aspect-video" />

        <div className="flex flex-wrap gap-4">
            <LinkButton text={urlShorthand} url={url} className="text-text_secondary" />
            <GithubButton url={github} className="text-text_secondary" />
        </div>

        <div className="flex gap-4 justify-between">
            <div className="flex flex-col max-w-[50%] flex-1">
                <h4 className="text-2xl text-text_secondary">Made with</h4>
                <div className="flex gap-4">
                {
                    technologies.map((tech, index) => {
                        if (typeof tech === "string") return (
                            <>
                            <Icon key={tech} id={changeCase.kebabCase(technologiesTooltip[index])} icon={tech} className="text-4xl z-10" />
                            <Tooltip anchorSelect={`#${changeCase.kebabCase(technologiesTooltip[index])}`} place="bottom-start">{technologiesTooltip[index]}</Tooltip>
                            </>
                        )
                        else return (
                        <>
                        <Image key={tech.alt} src={tech.src} alt={tech.alt} height={36} className="z-10" />
                        <Tooltip anchorSelect={`#${technologiesTooltip[index]}`} place="bottom-start">{technologiesTooltip[index]}</Tooltip>
                        </>
                        )
                    })
                }
                </div>
            </div>
            <div className="flex flex-col">
                <h4 className="text-2xl text-text_secondary">Deployed on</h4>
                <div className="flex gap-4 justify-end">
                {
                    deployment.map((tech, index) => (
                        <>
                        <Icon key={tech} id={changeCase.kebabCase(deploymentTooltip[index])} icon={tech} className="text-4xl z-10" />
                        <Tooltip anchorSelect={`#${changeCase.kebabCase(deploymentTooltip[index])}`} place="bottom-end">{deploymentTooltip[index]}</Tooltip>
                        </>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
)

const Project: FC<ProjectProps> = ({ title, url, urlShorthand, github, image, className, technologies, technologiesTooltip, deployment, deploymentTooltip }) => (
    <>
        <LargeScreenProject title={title} url={url} urlShorthand={urlShorthand} github={github} image={image} className={`${className} max-md:hidden`} technologies={technologies} technologiesTooltip={technologiesTooltip} deployment={deployment} deploymentTooltip={deploymentTooltip} />
        <SmallScreenProject title={title} url={url} urlShorthand={urlShorthand} github={github} image={image} className={`${className} md:hidden`} technologies={technologies} technologiesTooltip={technologiesTooltip} deployment={deployment} deploymentTooltip={deploymentTooltip} />
    </>
)

export default Project