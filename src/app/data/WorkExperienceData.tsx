import { WorkExperienceCardProps } from "@/components/experience/WorkExperience";

import dotkomLogo from "@/assets/dotkom.png";
import jubkomLogo from "@/assets/nodekom.png";

export const WorkExperienceData: WorkExperienceCardProps[] = [
    {
        title: "Member of the Systems Development and Administration Committee",
        employer: "Online, Student Association",
        time_span: "Sep. 2024 - present",
        description: [
            "Developed solutions to support active members and the running of the student association",
            "Developed the public website of the student association"
        ],
        image: dotkomLogo
    },
    {
        title: "Deputy Head of the Anniversary Committee",
        employer: "Online, Student Association",
        time_span: "Oct. 2024 - present",
        description: [
            "Led a team of [TBD] in the planning of a week-long event",
            "Hosted a successful banquet with [TBD] attendees"
        ],
        image: jubkomLogo
    },
    {
        title: "Game Development Intern",
        employer: "Innova Interactive Studios Co. Ltd.",
        time_span: "Jul. 2021 - Aug. 2021",
        description: [
            "Developed games using the game engine Unity",
            "Used git to track changes and collaborate"
        ]
    }
]