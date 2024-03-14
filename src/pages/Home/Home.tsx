import TitleScreen from "./components/TitleScreen/_TitleScreen"

import Section from "../../components/Section/Section"
import AboutMe from "./components/AboutMe/_AboutMe"
import Abilities from "./components/Abilities/_Ablities"
import ProjectFetch from "./components/Projects/_ProjectFetch";
import Contacts from "./components/Contacts/_Contacts";
import Footer from "./components/Footer/_Footer";
import ScrollToTop from "./components/ScrollToTop/_ScrollToTop";

import "./index.min.css"

export default function Home() {
    return (
        <>
            <TitleScreen />
            
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

            <Footer />

            <ScrollToTop />
        </>
    )
}