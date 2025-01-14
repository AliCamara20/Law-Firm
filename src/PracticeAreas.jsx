import family_law from './assets/law.png'
import accident_img from './assets/accident.png'
import  tax_img from './assets/tax.png'
import criminal_img from './assets/criminal.png'
import injury_img from './assets/injuries.png'
import tf_img from './assets/Trade_Finance.png'
import edu_img from './assets/education.png'
import cl_img from './assets/corporate.png'
const PracticeAreas = () => {
    return(
        <section className="section practice_areas">
            <h2 className="section_title">
                We are Effective in such areas of practices
            </h2>
            <div className="container">
                <div className="grid_layout">
                    <GridItem gridImg={family_law}  gridLabel={'Family Law'}/>
                    <GridItem gridImg={accident_img} gridLabel={'Accident Law'} />
                    <GridItem gridImg={tax_img} gridLabel={'Business Taxation'} />
                    <GridItem gridImg={criminal_img} gridLabel={'Criminal Law'} />
                    <GridItem gridImg={injury_img} gridLabel={'Personal Injuries Law'}  />
                    <GridItem gridImg={tf_img} gridLabel={'Trade & Finance Law'}/>
                    <GridItem gridImg={edu_img} gridLabel={'Education Law'} />
                    <GridItem gridImg={cl_img} gridLabel={'Corporate Law'} />
                </div>
            </div>
            
        </section>
    )
}

const GridItem = ({gridImg, gridLabel}) => {
    return(
        <div className="grid_item">
            <img src={gridImg} alt="" className="grid_img" />
            <div className="grid_desc">
                <p className="grid_info">{gridLabel}</p>
            </div>
        </div>
    )
    
}

export default PracticeAreas