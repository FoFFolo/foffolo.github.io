import TitleScreen from "./components/TitleScreen/TitleScreen"
import Section from "../../components/Section"
import AboutMe from "./components/AboutMe"
import Abilities from "./components/Ablities"
import ProjectFetch from "./components/Projects/ProjectFetch";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
    return (
        <>
            <TitleScreen />
            
            <div className="px-3 sm:px-5 md:px-7 lg:px-8">
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