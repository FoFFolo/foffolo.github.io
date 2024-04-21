import TitleScreen from "./components/TitleScreen"
import Section from "../../components/Section"
import AboutMe from "./components/AboutMe"
import Abilities from "./components/Ablities"
import ProjectFetch from "./components/Projects/ProjectFetch";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// import { useEffect } from "react";

export default function Home() {
    // useEffect(() => {
    //     console.log(window.scrollY)
    // }, []);

    return (
        <>
            <TitleScreen />
            
            <div className="px-3 sm:px-5 md:px-7 lg:px-8">
            {/* <div className="[margin-inline:_clamp(.8em,4vw,2em)]"> */}
                <Section title="About me">
                    <AboutMe />
                </Section>

                <Section title="Abilities">
                    <Abilities />
                </Section>

                <Section title="Projects">
                    <ProjectFetch />
                </Section>

                <Section title="Contacts">
                    <Contacts />
                </Section>
            </div>

            <Footer />

            <ScrollToTop />
        </>
    )
}