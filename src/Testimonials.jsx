import { forwardRef, useRef, useState, useLayoutEffect, useEffect } from "react"
import {flushSync} from 'react-dom'
import person1 from './assets/test_1.jpg'
import person2 from './assets/insp_1.jpg';
import person3 from './assets/insp_3.avif';
import person4 from './assets/insp_4.avif';
import { use } from "react";

const Testimonials = () => {
    
    const[activeIndex, setActiveIndex] = useState(0);
    const firstTestimonialRef = useRef(null);
    const secondTestimonialRef = useRef(null);
    const thirdTestimonialRef = useRef(null);
    const fourthTestimonialRef = useRef(null);
    const containerRef = useRef(null);
    const intervalRef = useRef(null)

    const  handleFirstTestimonialClick = () => {
        firstTestimonialRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
        setActiveIndex(0);
    }

    const  handleSecondTestimonialClick = () => {
        secondTestimonialRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
        setActiveIndex(1);
    }

    const  handleThirdTestimonialClick = () => {
        thirdTestimonialRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
        setActiveIndex(2);
    }

    const  handleFourthTestimonialClick = () => {
        fourthTestimonialRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
        setActiveIndex(3);
    }
    
    console.log(activeIndex)
    
     useLayoutEffect(() => {
        console.log( 'scrollLeft: ' + containerRef.current.scrollLeft);
       
        intervalRef.current =  setInterval(() => {
            containerRef.current.scrollLeft  = (containerRef.current.scrollLeft + (containerRef.current.scrollWidth / 4)) % (containerRef.current.scrollWidth)
            setActiveIndex( index =>  (index + 1) % 4);  

                 
        }, 4000)

            


        return () => clearInterval(intervalRef.current);

     }, [])
    
    return(
        <section className="section testimonials">
            <h2 className="section_title">Our Testimonial</h2>
            <div className="testimonial_grid" ref={containerRef} >
                <div className="testimonial" ref={firstTestimonialRef}>
                    <img src={person1} alt="" className="test_img" />
                    <p className="test_info">
                        <q>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Reprehenderit mollitia expedita deleniti laudantium! Iste minima 
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, eligendi?
                        </q>
                    </p>
                    <p className="test_name">Adama</p>
                </div>
                <div className="testimonial" ref={secondTestimonialRef}>
                    <img src={person2} alt="" className="test_img" />
                    <p className="test_info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit mollitia expedita deleniti laudantium! Iste minima 
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, eligendi?
                    </p>
                    <p className="test_name">James</p>
                </div>
                <div className="testimonial" ref={thirdTestimonialRef}>
                    <img src={person3} alt="" className="test_img" />
                    <p className="test_info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit mollitia expedita deleniti laudantium! Iste minima 
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, eligendi?
                    </p>
                    <p className="test_name">Oliver</p>
                </div>
                <div className="testimonial" ref={fourthTestimonialRef}>
                    <img src={person4} alt="" className="test_img" />
                    <p className="test_info">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Reprehenderit mollitia expedita deleniti laudantium! Iste minima 
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, eligendi?
                    </p>
                    <p className="test_name">Mahmoud</p>
                </div>
            </div>
            
            <div className="dots">
                <Dot isActive={activeIndex == 0} onActive={handleFirstTestimonialClick} />
                <Dot isActive={activeIndex == 1} onActive={handleSecondTestimonialClick}/>
                <Dot isActive={activeIndex == 2} onActive={handleThirdTestimonialClick}/>
                <Dot isActive={activeIndex == 3} onActive={handleFourthTestimonialClick}/>
                
            </div>

        </section>
    )
}

const Dot = ({isActive, onActive}) => {
    return <span className={isActive ? 'dot active_dot' : 'dot'} onClick={onActive}></span>
    
}




export default Testimonials
