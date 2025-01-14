import chain from './assets/chain.png'
import  briefcase from './assets/bag.png'
import trade_finance_img from './assets/Trade_finance.png'
import placeholder_img from './assets/balance.png'
const RightColumn = () => {
    return(
        <div className="column right_column">
            <h3 className="column_header">
            <span className='emphasis'>Over 20 years of experience</span> <br />
            Founded in 2014, Our agency has 120 lawyers
            </h3>
            <div className="card_container column_row">
                <Card cardImg={placeholder_img} >
                    <img src={chain} alt="" className="desc_img" />
                    <p className="desc_info">Family Law</p>
                </Card>
                <Card cardImg={placeholder_img} >
                    <img src={chain} alt="" className="desc_img" />
                    <p className="desc_info">Criminal Law</p>
                </Card>

                <Card cardImg={placeholder_img} >
                    <img src={briefcase} alt="" className="desc_img" />
                    <p className="desc_info">Financial Law</p>
                </Card>
            </div>

            <button className="contact_btn"><a href="" className="action_link">Contact</a></button>
        </div>
    )
}

const Card = ({cardImg, children}) => {
    return(
            <div className="card">
                <img src={cardImg} alt="" className="card_img" />
                <div className="card_desc">
                    {children}
                </div>
            </div>
    )
}

export default RightColumn