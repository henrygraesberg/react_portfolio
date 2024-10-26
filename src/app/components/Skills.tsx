import { FC } from 'react'
import { Icon } from '@iconify/react'

export interface SkillsProps {
    frontend: {
        name: string
        icon: string
    }[]
    backend: {
        name: string
        icon: string
    }[]
    other: {
        name: string
        icon: string
    }[]
}

const Skills: FC<SkillsProps> = ({ frontend, backend, other }) => {
  return (
    <div className="flex max-md:flex-col max-md:items-center max-md:gap-5 justify-between">
        <div className="flex flex-col gap-4 flex-1 max-w-96 max-md:items-center">
            <h3 className="text-4xl text-center text-secondary font-ultra">Frontend</h3>
            <div className="flex flex-col gap-4">
                {frontend.map((skill, index) => (
                    <div className="flex gap-2 items-center" key={index}>
                        <Icon icon={skill.icon} className="text-5xl" />
                        <h5 className="text-2xl font-medium">{skill.name}</h5>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex flex-col gap-4 flex-1 max-w-96 max-md:items-center">
            <h3 className="text-4xl text-center text-secondary font-ultra">Backend</h3>
            <div className="flex flex-col gap-4">
                {backend.map((skill, index) => (
                    <div className="flex gap-2 items-center" key={index}>
                        <Icon icon={skill.icon} className="text-5xl" />
                        <h5 className="text-2xl font-medium">{skill.name}</h5>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex flex-col gap-4 flex-1 max-w-96 max-md:items-center">
            <h3 className="text-4xl text-center text-secondary font-ultra">Other</h3>
            <div className="flex flex-col gap-4">
                {other.map((skill, index) => (
                    <div className="flex gap-2 items-center" key={index}>
                        <Icon icon={skill.icon} className="text-5xl" />
                        <h5 className="text-2xl font-medium">{skill.name}</h5>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills