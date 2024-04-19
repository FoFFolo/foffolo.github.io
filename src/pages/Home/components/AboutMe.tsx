export default function AboutMe() {
    const Title = ({children}: {children: string}) => {
        return <h3 className="text-2xl font-bold">{children}</h3>
    }

    return (
        <div className="grid grid-flow-row gap-4 lg:grid-cols-3">
            <div className="text-lg">
                <Title>Student</Title>
                <p>
                    I am a first year student pursuing Computer science at Verona University, Italy.
                    I'm now enrolled in a 3 year course, but I aspire to get a Phd in AI
                    after this specialisation. Some of my courses include:
                </p>
                <ul className="list-inside list-disc ml-4">
                    <li>Computer science</li>
                    <li>Statistic and probability</li>
                    <li>Operative Systems</li>
                    <li>Architecture of elaborators</li>
                    <li>Analysis</li>
                    <li>Physics</li>
                    <li>Networks</li>
                </ul>
            </div>

            {/* life chart */}
            <div className="justify-self-center self-end
                            p-2 flex justify-between items-center gap-1 relative
                            w-52 h-52 sm:w-72 sm:h-72
                            row-start-1 lg:row-auto">
                <div className="flex-1 self-end
                                h-[96%] bg-developer
                                flex justify-center items-center
                                rounded-s-full">Student</div>
                <div className="flex-1 self-end
                                h-full bg-programmer
                                flex justify-center items-center
                                rounded-e-full">Programmer</div>
            </div>

            <div className="text-lg text-end">
                <Title>Programmer</Title>
                <p>
                    I do programming since years, I graduated in a Computer Science high school.
                    I've earned a lot of experience on problem solving, I like solving LeetCode
                    problems and starting my own projects, which I'm starting to publish on
                    GitHub.<br />
                    I'm mostly interested in:
                </p>
                <div className="w-52 float-right">
                    <ul className="list-inside list-disc ml-4 text-start">
                        <li>Artificial Intelligence</li>
                        <li>Machine Learning</li>
                        <li>Web development</li>
                        <li>ABM</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}