import Title from "./Title";

export default function TitleScreen() {

    const NavLink = ({href, children}: {href: string, children: string}) => {
        return (
                <a className="text-description hover:underline"
             href={href}>{children}</a>
        )
    }

    return (
        <div className="h-svh bg-titlescreen-bg bg-[length:30em] bg-repeat
                        flex flex-col justify-between">
            <nav className="py-4 px-8 flex flex-row justify-end gap-6
                            font-bold text-ts_nav_clamp">
                <NavLink href="https://github.com/FoFFolo">GitHub</NavLink>
                <NavLink href="#Contacts">Contacts</NavLink>
            </nav>

            <Title />

            <div className="text-dsc_clamp font-bold
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