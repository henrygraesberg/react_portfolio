import { ProjectProps } from "@/components/Project";

import PortfolioImage from "@/assets/placeholder_Portfolio.png";
import OldPortfolioImage from "@/assets/old_Portfolio.png";

export const projects: ProjectProps[] = [
    {
        title: "Portfolio",
        url: "https://graesberg.com",
        urlShorthand: "graesberg.com",
        github: "https://github.com/henrygraesberg/react_portfolio",
        image: PortfolioImage,
        technologies: ["logos:nextjs-icon", "logos:react", "logos:typescript-icon", "devicon:tailwindcss"],
        deployment: ["logos:microsoft-azure"]
    },
    {
        title: "Vanilla Portfolio",
        url: "https://old.graesberg.com",
        urlShorthand: "old.graesberg.com",
        github: "https://github.com/henrygraesberg/Portfolio",
        image: OldPortfolioImage,
        technologies: ["logos:html-5", "logos:css-3", "logos:javascript"],
        deployment: ["simple-icons:githubpages"]
    }
]