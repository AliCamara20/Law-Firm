import court_building from './assets/building.png'
import chain from './assets/chain.png'
import directory from './assets/directory.png'

const LeftColumn = () => {
    return(
        <div className="column left_column">
            <Column imgSrc={court_building} >
                <div className="column_info">
                        <h3 className='column_title'>Request an Attorney</h3>
                        <p className="about_column">
                            Loop back message a initiative mobile friendly baseline 
                            the procedure and samepage issue of department work 
                            flows hammer.
                        </p>
                </div>
            </Column>

            <Column imgSrc={chain} >
                <div className="column_info">
                    <h3 className='column_title'>Case Investigation</h3>
                    <p className="about_column">
                        Accountable talk locked and loaded. 
                        We need a recap by eod, cob or whatever 
                        comes first win-win-win for where do we stand.
                    </p>
                </div>
            </Column>

            <Column imgSrc={directory} >
                <div className="column_info">
                    <h3 className='column_title'>Search Directory</h3>
                    <p className="about_column">
                        This proposal is a win-win situation which they cause
                        a stellar paradigm shift, and produce a multi-fold
                        increase in deliverables.
                    </p>
                </div>
            </Column>


        </div>
    )
    
}

const Column = ({imgSrc, children}) => {
    return(
        <div className="column__left-col">
            <img src={imgSrc} alt="" className="column_img" />
            {children}
        </div>
    )
}

export default LeftColumn