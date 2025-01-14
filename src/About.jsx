import LeftColumn from "./LeftColumn"
import RightColumn from "./RightColumn"
const About  = () => {
  return(
    <section className="section about columns">
        <div className="container  row">
            <LeftColumn />
            <RightColumn />
        </div>
        
    </section>
    
  )
}

export default About