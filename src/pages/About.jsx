import Navbar from "../componentes/Navbar"
import AboutHero from "../componentes/about/AboutHero"
import VisionMissionSection from "../componentes/about/VisiMissionSection"
import KeunggulanKamiSection from "../componentes/about/KeunggulanKamiSection"
import FaqSection from "../componentes/FaqSection"
import CtaSection from "../componentes/CtaSection"
import Footer from "../componentes/Footer"
import OurProcessSection from "../componentes/about/OnProcessSection"
import AboutHeader from "../componentes/about/AboutHeader"

function About(){
    return(
        <>  
            <Navbar/>
            <AboutHeader/>
            <AboutHero/>
            <VisionMissionSection/>
            <KeunggulanKamiSection/>
            <OurProcessSection/>
            <FaqSection/>
            <CtaSection/>
            <Footer/>
        </>
    )
}

export default About