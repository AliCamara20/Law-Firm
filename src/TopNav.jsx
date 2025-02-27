import { useState} from 'react';
import firm_logo from './assets/logo.png';
import { SwipeContext, VisibilityContext} from './VisibilityContext';
import { useContext } from 'react';

const Navbar = () => {
    const[isVisible, setIsVisible] =useState(false); 
    const visibleContext = useContext(VisibilityContext);
    const swipeContext = useContext(SwipeContext)

    let navClassName = 'nav nav-visible'
    if(isVisible === false ) navClassName = 'nav';
        
     
    return(
        <>
        
            <header>
            <div className="container" >
                <div className="navbar row">
                    <ul className="nav__mobile_view ">
                        <li className="nav_item left_side" >
                            <svg onClick={() => setIsVisible(!isVisible)} className='bar' xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                            <a href="" className='logo'><img src={firm_logo} alt="" className="logo_img" /></a>
                        </li>
                        <li className='search_item' onClick={visibleContext} ><svg className='search_icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></li>
                    </ul>

                    <nav className={navClassName} >
                        <ul className="nav_list row">
                            <li className="nav_item"><a href="" className="nav_link" onClick={ e => swipeContext(e, 1)}>Home</a></li>
                            <li className="nav_item"><a href="" className="nav_link" onClick={ e => swipeContext(e, 2)}>About</a></li>
                            <li className="nav_item"><a href="" className="nav_link" onClick={ e => swipeContext(e, 4)}>Practice Areas</a></li>
                            <li className="nav_item"><a href="" className="nav_link" onClick={ e => swipeContext(e, 5)}>Testimonials</a></li>
                            <li className="nav_item"><a href="" className="nav_link" onClick={ e => swipeContext(e, 6)}>Attorney</a></li>
                            <li className="nav_item"><a href="" className="nav_link" onClick={ e => swipeContext(e, 8)} >Blogs</a></li>
                            <li className="nav_item"><a href="" className="nav_link" onClick={ e => swipeContext(e, 11)}>Contact</a></li>
                            <li className='desktop_search_icon'>
                                <a href="nav_link" onClick={visibleContext}>
                                    <svg className ='search_icon' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>   
            </div>    
        </header>
       
            
        </>

    )
}

export default Navbar