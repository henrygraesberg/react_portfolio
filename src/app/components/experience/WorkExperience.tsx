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
    <div className="flex flex-col bg-primary">
        <div className="flex items-center justify-between">
            {image && <Image src={image} alt={`${employer} logo`} />}
            <h3 className="text-2x text-text text-end">{title}</h3>
        </div>

        <p className="text-text_secondary">{employer}</p>
        <p className="text-text_secondary">{time_span}</p>

        {
        description && <ul>
            {description.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
        }
    </div>
  )
}

export default WorkExperienceCard