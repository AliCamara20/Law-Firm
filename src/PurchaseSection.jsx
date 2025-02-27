import dowloadIcon from './assets/download.svg'
const PurchaseSection = () => {
    return(
        <section className="ctl_section purchase_section">
            <div className="container">
                <div className="purchase_box column_row">
                    <div className="left_col">
                        <p className="purchase_text">
                            <span className='em'>Law Firm: </span>
                            fully responsible template in the market
                        </p>
                        <p className="purchase_text2">
                            Exclusive multi-purpose light-weight responsive 
                            with powerful features.
                        </p>
                    </div>
                    <button className="purchase_btn">
                        <a href="" className="action_link">
                            Purchase Now
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PurchaseSection