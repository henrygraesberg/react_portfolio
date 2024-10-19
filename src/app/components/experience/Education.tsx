import { FC } from 'react'

export interface EducationCardProps {
    title: string
    school: string
    time_span: string
}

const EducationCard: FC<EducationCardProps> = ({ title, school, time_span }) => {
  return (
    <div className="flex flex-col p-4 gap-1 bg-secondary rounded-xl">
        <h3 className="text-xl text-accent font-bold">{title}</h3>
        <p className="text-text_secondary font-bold">{school}</p>
        <p className="text-text_secondary font-bold">{time_span}</p>
    </div>
  )
}

export default EducationCard