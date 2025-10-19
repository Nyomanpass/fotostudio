
import Navbar from "../componentes/Navbar"
import TestiHeader from "../componentes/testimonial/TestiHeader"
import TestiValue from "../componentes/testimonial/TestiValue"
import CtaSection from "../componentes/CtaSection"
import Footer from "../componentes/Footer"

function Testimonial(){
    return(
        <> 
            <Navbar/>
            <TestiHeader/>
            <TestiValue/>
            <CtaSection/>
            <Footer/>
        </>
    )
}

export default Testimonial