import { useEffect, useState } from "react"

import Projects from "./Projects";

export default function ProjectFetch() {
    const [githubData, setGithubData] = useState<Record<string, any>>([]);
    const githubUser = "FoFFolo" as const;

    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        return fetch(`https://api.github.com/users/${githubUser}/repos`)
            .then((response) => response.json())
            .then((data) => {
                let personal_repo: Record<string, any>[] = []
                data.map((repo: Record<string, any>) => {
                    if (!repo.fork && repo.full_name !== "FoFFolo/foffolo.github.io") {
                        personal_repo.push(repo);
                    }
                })
                setGithubData(personal_repo);
            })
            .then(() => setIsLoading(false));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        !isLoading ? <Projects githubData={githubData}/> : null
    )
}