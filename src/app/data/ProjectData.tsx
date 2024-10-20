import { ProjectProps } from "@/components/Project";

import PortfolioImage from "@/assets/placeholder_Portfolio.png";
import OldPortfolioImage from "@/assets/old_Portfolio.png";

export const projects: ProjectProps[] = [
    {
        title: "Portfolio",
        url: "https://grasberg.no",
        urlShorthand: "grasberg.no",
        github: "https://github.com/henrygraesberg/react_portfolio",
        image: PortfolioImage,
        technologies: ["logos:nextjs-icon", "logos:react", "logos:typescript-icon", "devicon:tailwindcss"],
        deployment: ["logos:microsoft-azure"]
    },
    {
        title: "Vanilla Portfolio",
        url: "https://henrygraesberg.github.io/Portfolio/",
        urlShorthand: "henrygraesberg.github.io",
        github: "https://github.com/henrygraesberg/Portfolio",
        image: OldPortfolioImage,
        technologies: ["logos:html-5", "logos:css-3", "logos:javascript"],
        deployment: ["simple-icons:githubpages"]
    }
]