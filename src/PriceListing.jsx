import chain from './assets/chain.png'
const PriceListing = () => {
    return(
        <section className=" section price_listing">
            <div className="container">
               <div className="card_container row prices_info">
                <Column priceLabel={'$52300'} >
                  <p className="price_info">Recovered For Our Client</p>
                </Column>
                <Column priceLabel={'$36800'} >
                  <p className="price_info">Recovered For Our Client This Year</p>
                </Column>   
                <Column priceLabel={'$23600'} >
                  <p className="price_info">Average Save Per Case</p>
                </Column> 
               </div>
            </div>
        </section>
    )
}

const Column = ({priceLabel, children}) => {
    return(
        <div className="col">
            <h3 className='price'>{priceLabel}</h3>
            <div className="col__col-mid">
                <span className="line"></span>
                <img src={chain} alt="" className="col_img" />
                <span className='line'></span>
            </div>
            {children}
       </div>
    )
    
}

export default PriceListing