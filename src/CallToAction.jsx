import balance from './assets/justice.png';
const CallToAction = () => {
    return(
        <section className="ctl_section">
        <div className="container column_row ctl_box">
            <img src={balance} alt="" className="justice_img" />
            <p className="ctl_text">
                Pushing your case done is what we are responsible for.
            </p>
            <button className="ctl_btn"><a href="" className="action_link">contact us</a></button>
        </div>
       </section>
    )
   
}

export default CallToAction