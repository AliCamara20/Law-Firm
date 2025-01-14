import hero_image from './assets/hero.jpeg'
const Hero = () => {
    return(
        <section className="hero">
            <img src={hero_image} alt="" className="hero_image" />
            <div className="hero_text container">
                <h2 className="text_header">Your Trusted Advocate</h2>
                <p className='text_info'>Investigate Power of your voice</p>
                <button className="call_to_action"><a href="" className="action_link">Click Here</a></button>
            </div>
        </section>
    )
}

export default Hero