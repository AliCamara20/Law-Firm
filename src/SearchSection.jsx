
const SearchSection = ({onClose}) => {
    
    return(
        <section className="search_section">
            <div className="container">
                <form action="" id="searchForm" className="" onSubmit={e => e.preventDefault()}>
                    <input type="text" className="search_input" placeholder="Search..."/>
                    <button className="search_btn" onClick={() => onClose(false)}>&times;</button>
                </form>
            </div>
                
            
        </section>
    )
}

export default SearchSection