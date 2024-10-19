import { FC } from 'react'

export interface EducationCardProps {
    title: string
    school: string
    time_span: string
}

const EducationCard: FC<EducationCardProps> = ({ title, school, time_span }) => {
  return (
    <div className="flex flex-col bg-secondary">
        <h3 className="text-2x text-text">{title}</h3>
        <p className="text-text_secondary">{school}</p>
        <p className="text-text_secondary">{time_span}</p>
    </div>
  )
}

export default EducationCard