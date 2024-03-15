export default function TitleScreen() {

    const NavLink = ({href, children}: {href: string, children: string}) => {
        return (
            <a className="text-blue-800 hover:underline"
             href={href}>{children}</a>
        )
    }
    const DescriptionSpan = ({children, animation}: {children: string, animation: string}) => {
        return (
            <span  className={`opacity-0 text-start ${animation}`}>{children}</span>
        )
    }

    return (
        <div className="h-svh bg-titlescreen-bg bg-[length:30em] bg-repeat
                        flex flex-col justify-between">
            <nav className="py-4 px-8 flex flex-row justify-end gap-6
                            font-bold [font-size:_clamp(1em,4vw,1.3em)]">
                <NavLink href="https://github.com/FoFFolo">GitHub</NavLink>
                <NavLink href="#Contacts">Contacts</NavLink>
            </nav>

            <div className="flex flex-col justify-center items-center text-center">
                <div className="[font-size:_clamp(2em,7vw,3.5em)] font-righteous 
                                tracking-[.20rem] not-italic text-blue-950">
                    <h1 className="border-r-[.1em] overflow-hidden whitespace-nowrap my-0 mx-auto animate-surname_anim">Serratore</h1>
                    <h1 className="w-0 overflow-hidden whitespace-nowrap my-0 mx-auto animate-name_anim">Federico</h1>
                </div>
                <div className="font-kodemono text-lg text-green-700">
                    <div className="first__sentence">
                        <span>{">"} </span>
                        <DescriptionSpan animation="animate-first_anim">Developer </DescriptionSpan>
                        <DescriptionSpan animation="animate-second_anim">for</DescriptionSpan>
                    </div>
                    <DescriptionSpan animation="animate-third_anim">everything</DescriptionSpan>
                </div>
            </div>

            <div className="[font-size:_clamp(1em,4vw,1.3em)] font-bold
                            flex justify-center py-4">
                <div className="w-full flex justify-evenly">
                    <NavLink href="#Aboutme">About Me</NavLink>
                    <NavLink href="#Abilities">Abilities</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                </div>
            </div>
        </div>
    )
}