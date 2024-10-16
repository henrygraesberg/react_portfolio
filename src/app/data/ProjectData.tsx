import { ProjectProps } from "@/app/components/Project";

import PortfolioImage from "@/app/assets/placeholder_Portfolio.png";
import OldPortfolioImage from "@/app/assets/old_Portfolio.png";

export const projects: ProjectProps[] = [
    {
        title: "Portfolio",
        url: "https://google.com",
        urlShorthand: "google.com",
        github: "https://github.com/henrygraesberg/react_portfolio",
        image: PortfolioImage,
        technologies: ["logos:nextjs-icon", "logos:react", "logos:typescript-icon", "devicon:tailwindcss"],
        deployment: ["simple-icons:githubpages"]
    },
    {
        title: "Vanilla Portfolio",
        url: "https://henrygraesberg.github.io/Portfolio/",
        urlShorthand: "henrygraesberg.github.io",
        github: "https://github.com/henrygraesberg/Portfolio",
        image: OldPortfolioImage,
        technologies: ["logos:html-5", "logos:css-3", "logos:javascript"],
        deployment: ["logos:microsoft-azure"]
    }
]