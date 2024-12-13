import { ProjectProps } from "@/components/Project";

import PortfolioImage from "@/assets/react_portfolio.png";
import OldPortfolioImage from "@/assets/old_Portfolio.png";
import ShotegoriesImage from "@/assets/shotegories_screenshot.png"

export const projects: ProjectProps[] = [
    {
        title: "Shotegories",
        url: "https://shotegories.graesberg.com",
        urlShorthand: "shotregories.graesberg.com",
        github: "https://git.graesberg.com/deno-shotegories",
        image: ShotegoriesImage,
        technologies: ["logos:deno", "logos:typescript-icon"],
        technologiesTooltip: ["Deno", "TypeScript"],
        deployment: ["logos:deno"],
        deploymentTooltip: ["Deno Deploy"]
    },
    {
        title: "Portfolio",
        url: "https://graesberg.com",
        urlShorthand: "graesberg.com",
        github: "https://github.com/henrygraesberg/react_portfolio",
        image: PortfolioImage,
        technologies: ["logos:nextjs-icon", "logos:react", "logos:typescript-icon", "devicon:tailwindcss"],
        technologiesTooltip: ["Next.js", "React", "TypeScript", "TailwindCSS"],
        deployment: ["skill-icons:vercel-dark"],
        deploymentTooltip: ["Vercel"]
    },
    {
        title: "Vanilla Portfolio",
        url: "https://old.graesberg.com",
        urlShorthand: "old.graesberg.com",
        github: "https://github.com/henrygraesberg/Portfolio",
        image: OldPortfolioImage,
        technologies: ["logos:html-5", "logos:css-3", "logos:javascript"],
        technologiesTooltip: ["HTML", "CSS", "Javascript"],
        deployment: ["simple-icons:githubpages"],
        deploymentTooltip: ["GitHub pages"]
    }
]