import twitterIcon from './assets/twitter.svg'
import linkedinIcon from './assets/linkedin.svg'
import facebookIcon from './assets/facebook.svg'
import lurch from './assets/Lurch.jpg'
import phillip from './assets/Phillip.jpg'
import flech from './assets/flech.jpg'
import druid from './assets/Druid.jpg'
const Attorneys =  () => {
   return(
      <section className="section attorney_section">
            <div className="container">
               <h2 className="section_title">Our Attorney</h2>
                  <AttorneyGrid>
                     <Attorney attorneyImg={flech} attorney_name={'Fletch Skinner'} att_specialty={'Criminal Law'} />
                     <Attorney attorneyImg={druid} attorney_name={'Druid Wensleydale'} att_specialty={'Real Estate Law'} />
                  </AttorneyGrid>
                  
                  <AttorneyGrid>
                     <Attorney attorneyImg={lurch} attorney_name={'Lurch Schpellchek'} att_specialty={'Civil cases'}/>
                     <Attorney attorneyImg={phillip} attorney_name={'Phillip Anthropy'} att_specialty={'Financial Law'}/>
                  </AttorneyGrid>
               
               
            </div>
      </section>
   )
}

const AttorneyGrid = ({children}) => {
   return <div className="attorney_grid row">{children}</div>
}

const Attorney = ({attorneyImg, attorney_name, att_specialty}) => {
   return(
      <div className="attorney">
         <img src= {attorneyImg} alt="" className="attorney_img" />
         <div className="att_desc">
            <h4 className="att_name">{attorney_name}</h4>
            <p className="specialty">{att_specialty}</p>
            <p className="case"><span className="like_btn"></span>1544 cases</p>

            <div className="social_media_links">
               <div className="img_box">
                  <img src={facebookIcon} alt="" className="facebook_link s_m_link" />         
               </div>
               <div className="img_box">
                  <img src={twitterIcon} alt="" className="facebook_link s_m_link" />
               </div>
               <div className="img_box">
                  <img src={linkedinIcon} alt="" className="facebook_link s_m_link" />      
               </div>
               
            </div>
         </div>
      </div>
   )
}

export default Attorneys