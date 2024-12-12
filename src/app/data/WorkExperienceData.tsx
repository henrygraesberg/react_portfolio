import { WorkExperienceCardProps } from "@/components/experience/WorkExperience";

import dotkomLogo from "@/assets/dotkom.png";
//import slbLogo from "@/assets/slb_logo.jpeg";
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
        title: <span>Student <span className="text-accent">Intern</span></span>,
        employer: "SLB Norway Technology Center",
        time_span: "jun. 2025 - aug. 2025",
        description: [
            
        ],
        image: slbLogo
    },
    {
        title: <span><span className="text-accent">Deputy Head</span> of the Anniversary Committee</span>,
        employer: "Online, Student Association",
        time_span: "Oct. 2024 - present",
        description: [
            "Led a team of 10 people in the planning of a week-long event",
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