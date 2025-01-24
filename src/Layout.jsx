import { useRef, useState } from "react"
import { VisibilityContext, SwipeContext } from "./VisibilityContext"
import Home from "./Home"
import About from "./About"
import PriceListing from "./PriceListing"
import PracticeAreas from "./PracticeAreas"
import Testimonials from "./Testimonials"
import Attorneys from "./Attorneys"
import CallToAction from "./CallToAction"
import Blogs from "./Blogs"
import EvaluationSection from "./EvaluationSection"
import PurchaseSection from "./PurchaseSection"
import Footer from "./Footer"
import SearchSection from "./SearchSection"
import { flushSync } from "react-dom"

const Layout = () => {

    const[isVisible, setIsVisible] = useState(false); 
    const swipeRef = useRef(null);
    
    const handleClose =  () => {
      setIsVisible(false);
    }
    const handleShow = e => {
      e.preventDefault();
      setIsVisible(true);
    }
    const handleSwipe = (e, childIndex) => {
      e.preventDefault();
      flushSync( () => {
        swipeRef.current.children[childIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
      } )
      
      })
        
      console.log(swipeRef.current.children[4]);
        
    }
    return(
        <section className="layout" ref={swipeRef}>
            <VisibilityContext.Provider value={handleShow}>
                <SwipeContext.Provider value={handleSwipe}>
                    {isVisible ? (<SearchSection onClose={handleClose} />) :(
                        <>
                        <Home />
                        <About />
                        <PriceListing />
                        <PracticeAreas />
                        <Testimonials />
                        <Attorneys />
                        <CallToAction />
                        <Blogs />
                        <EvaluationSection />
                        <PurchaseSection />
                        <Footer />
                        </>
                            
                    )}
                </SwipeContext.Provider>
            </VisibilityContext.Provider>
        </section>
      
  
      
      
    )
}

export default Layout