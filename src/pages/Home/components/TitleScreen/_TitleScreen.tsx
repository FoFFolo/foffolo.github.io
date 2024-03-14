export default function TitleScreen() {
    return (
        <div className="titlescreen__container">
            <nav>
                <a href="https://github.com/FoFFolo">GitHub</a>
                <a href="#Contacts">Contacts</a>
            </nav>

            <div className="title">
                <div className="fullname">
                    <h1 id="surname">Serratore</h1>
                    <h1 id="name">Federico</h1>
                </div>
                <div className="description">
                    <div className="first__sentence">
                        <span>{">"} </span>
                        <span className="first">Developer </span>
                        <span className="second">for</span>
                    </div>
                    <span className="third">everything</span>
                </div>
            </div>

            <div className="sections-list__container">
                <div className="links">
                    <a href="#Aboutme">About Me</a>
                    <a href="#Abilities">Abilities</a>
                    <a href="#Projects">Projects</a>
                </div>
            </div>
        </div>
    )
}