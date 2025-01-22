import eval_hero from './assets/hand_shake.jpg'

const EvaluationSection = () => {
    return(
       <section className="eval_section" >
        <img src={eval_hero} alt="" className="eval_hero" />
        <div className="eval_form_container" >
            <h2 className="section_title" style={{color: '#fff'}}>Free Case Evaluation</h2>
            <div className="container ">
                <form action="" className="eval_form">
                    <div className="input_fields column_row">
                        <input type="text"  placeholder="Your Name" className="input_field"/>
                        <input type="email" name="" id="" placeholder="Your Email" className="input_field" />
                        <input type="phone" placeholder="Phone Number" className="input_field" />
                    </div>
                    <textarea name="" id="" className="text_field" placeholder='Your comment'></textarea>
                    <input type="submit" value="Send your message"  className='submit_btn'/>
                </form>
            </div>
        </div>
        
       </section>
       
    )
}

export default EvaluationSection