import blog1 from './assets/blog1.jpg'
import blog2 from './assets/blog2.jpg'
import blog3 from './assets/blog3.jpg'
import calendar from './assets/calendar.svg'
import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import right_chevron from './assets/right_chevron.svg'


const Blogs =  () => {
        return(
            <section className="section blogs">
                <h2 className="section_title">
                    Latest Blog Posts
                </h2>
                <div className="container column_row">
                    <Blog imgSrc={blog1} >
                        <h5 className="blog_header">We won against criminal</h5>
                        <p className="published_date">
                            <img src={calendar} alt='' className='calendar'/>
                            <span className="date">12 Aug 2023</span>
                        </p>
                        <p className="blog_text">
                            In this Kidnapping the unlawful taking 
                            away or transportation of person against 
                            that person's will unlawfully
                        </p>
                    </Blog>
                    <Blog imgSrc={blog2}>
                        <h5 className="blog_header">Legal issues regarding paternity</h5>
                        <p className="published_date">
                            <img src={calendar} alt="" className='calendar'/>
                            <span className="date">12 Aug 2023</span>
                        </p>
                        <p className="blog_text">
                            In this Kidnapping the unlawful taking 
                            away or transportation of person against 
                            that person's will unlawfully
                        </p>
                    </Blog>
    
                    <Blog imgSrc={blog3}>
                        <h5 className="blog_header">Judgement, Unfair business</h5>
                        <p className="published_date">
                            <img src={calendar} alt="" className='calendar' />
                            <span className="date">12 Aug 2023</span>
                        </p>
                        <p className="blog_text">
                            In this Kidnapping the unlawful taking 
                            away or transportation of person against 
                            that person's will unlawfully
                        </p>
                    </Blog>
                </div>
                
            </section>
        )
    }


    



const Blog = ({imgSrc, children}) => {
    return(
        <div className="blog">
            <img src={imgSrc} alt="" className="blog_img" />
            <div className="blog_desc">
                {children}
                
                <div className="bottom_row">
                    <div className="read_more">
                        <span>Read more </span> 
                        <img src={right_chevron} alt="" className="read_img" />
                    </div>
                    <div className="share">
                        <span>Share:</span>
                        <img src={facebook} alt="" className="share_img" />
                        <img src={twitter} alt="" className="share_img" />
                    </div>
                </div>
            </div>
        </div>
    )
   
}

export default Blogs