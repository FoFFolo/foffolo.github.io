export default function AboutMe() {
    return (
        <div className="aboutme__container">
            <div className="student__section">
                <h3>Student</h3>
                <p>
                    I am a first year student pursuing Computer science at Verona University, Italy.
                    I'm now enrolled in a 3 year course, but I aspire to get a Phd in AI
                    after this specialisation. Some of my courses include:
                </p>
                <ul>
                    <li>Computer science</li>
                    <li>Statistic and probability</li>
                    <li>Operative Systems</li>
                    <li>Architecture of elaborators</li>
                    <li>Analysis</li>
                    <li>Physics</li>
                    <li>Networks</li>
                </ul>
            </div>

            <div className="life__chart">
                <div className="student__half"></div>
                <div className="programmer__half"></div>
            </div>

            <div className="programmer__section">
                <h3>Programmer</h3>
                <p>
                    I do programming since years, I graduated in a Computer Science high school.
                    I've earned a lot of experience on problem solving, I like solving LeetCode
                    problems and starting my own projects, which I'm starting to publish on
                    GitHub.<br />
                    I'm mostly interested in:
                </p>
                <div className="interests__list">
                    <ul>
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