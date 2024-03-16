import { useEffect, useState } from "react"

import Projects from "./Projects";

export default function ProjectFetch() {
    const [githubData, setGithubData] = useState<Record<string, any>>([]);
    const [projectImagesUrl, setProjectImagesUrl] = useState({});
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

                        return fetch(`https://raw.githubusercontent.com/FoFFolo/${repo.name}/master/.gitignore`)
                                .then((response) => response.text())
                                .then((data) => {
                                    // console.log(data.split("\n")[0])
                                    const url = data.split("\n")[0].split('url:')[1];
                                    console.log(url)
                                    setProjectImagesUrl({
                                        ...projectImagesUrl,
                                        [repo.name]: url,
                                    })
                                });
                    }
                })
                setGithubData(personal_repo);
            }).then(() => setIsLoading(false));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        !isLoading && <Projects githubData={githubData} projectImagesUrl={projectImagesUrl}/>
    )
}