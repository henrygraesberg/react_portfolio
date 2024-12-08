import { WorkExperienceCardProps } from "@/components/experience/WorkExperience";

import dotkomLogo from "@/assets/dotkom.png";
//import nodeLogo from "@/assets/nodekom.png";

export const WorkExperience: WorkExperienceCardProps[] = [
    {
        title: <span><span className="text-accent">Member</span> of the Systems Development and Administration Committee</span>,
        employer: "Online, Student Association",
        time_span: "Sep. 2024 - present",
        description: [
            "Developed solutions to support active members and the running of the student association",
            "Developed the public website of the student association"
        ],
        image: dotkomLogo
    },
    /*{
        title: <span><span className="text-accent">Head</span> of the Welcoming Committee</span>,
        employer: "Online, Student Association",
        time_span: "Dec. 2024 - present",
        description: [
            "Led a team of [TBD] in the planning of welcoming events for new students of Informatics at NTNU",
            "Led the execution of a two-week long period of welcoming events for ~200 new students (both bachelor and masters)"
        ],
        image: nodeLogo
    },
    {
        title: <span><span className="text-accent">Deputy Head</span> of the Anniversary Committee</span>,
        employer: "Online, Student Association",
        time_span: "Oct. 2024 - present",
        description: [
            "Led a team of [TBD] in the planning of a week-long event",
            "Hosted a successful banquet with [TBD] attendees"
        ],
        image: nodeLogo
    },*/
    {
        title: <span>Game Development <span className="text-accent">Intern</span></span>,
        employer: "Innova Interactive Studios Co. Ltd.",
        time_span: "Jul. 2021 - Aug. 2021",
        description: [
            "Developed games using the game engine Unity",
            "Used git to track changes and collaborate"
        ]
    }
]