import React from "react"
import rafidData from "../rafidData"
const NavBar = ()=>{
    return(
        <React.Fragment>
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide Navigation</a>
                    <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#skills">Skills</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
               
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h2 className="responsive-headline" syle={{color:'#F7F9F9', fontFamily:'sans-serif'}}>I am Rafid Hossain</h2>
                        <h3 style={{color:'#F7F9F9', fontFamily:'sans-serif '}}> I Am a Full Stack Web Developer Based In Queens NY</h3>
                        <hr/>
                            <ul className="social">
                                {
                                    rafidData.socialLinks && rafidData.socialLinks.map(item=>{
                                        return(
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                    </div>
                </div>
                <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
            </header>
        </React.Fragment>
    )
}
export default NavBar