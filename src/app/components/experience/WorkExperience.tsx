import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

export interface WorkExperienceCardProps {
    title: string
    employer: string
    time_span: string
    image?: StaticImageData
    description?: string[]
}

const WorkExperienceCard: FC<WorkExperienceCardProps> = ({ title, employer, time_span, image, description }) => {
  return (
    <div className="flex flex-col p-4 gap-1 rounded-xl bg-primary">
        <div className="flex items-center justify-between">
            {image && <Image src={image} alt={`${employer} logo`} width={70} />}
            <h3 className="text-xl text-accent text-end flex-1 font-bold m-2">{title}</h3>
        </div>

        <p className="text-text_secondary font-bold">{employer}</p>
        <p className="text-text_secondary font-bold">{time_span}</p>

        {
        description && <ul className="list-disc list-inside font-medium">
            {description.map((point, index) => (
                <li key={index} className="text-text_secondary">{point}</li>
            ))}
        </ul>
        }
    </div>
  )
}

export default WorkExperienceCard