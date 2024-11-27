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
    infra: {
        name: string
        icon: string
    }[]
    other: {
        name: string
        icon: string
    }[]
}

interface ListProps {
    list: {
        name: string
        icon: string
    }[]
    title: string
}

const List: FC<ListProps> = ({ list, title }) => (
    <div className="flex flex-col gap-4 flex-1 min-w-60 max-w-96 max-md:items-center">
        <h3 className="text-3xl text-center text-secondary font-ultra">{title}</h3>
        <div className="flex flex-col gap-4">
            {list.map((skill, index) => (
                <div className="flex gap-2 items-center" key={index}>
                    <Icon icon={skill.icon} className="text-5xl" />
                    <h4 className="text-2xl font-medium">{skill.name}</h4>
                </div>
            ))}
        </div>
    </div> 
)

const Skills: FC<SkillsProps> = ({ frontend, backend, infra, other }) => {
  return (
    <div className="flex md:flex-wrap max-md:flex-col max-md:items-center max-md:gap-5 justify-between">
        <div className="flex max-md:flex-col justify-between flex-1">
        <List list={frontend} title="Frontend" />
        <List list={backend} title="Backend" />
        </div>

        <div className="flex max-md:flex-col justify-between flex-1">
        <List list={infra} title="Infrastructure" />
        <List list={other} title="Other" />
        </div>
    </div>
  )
}

export default Skills