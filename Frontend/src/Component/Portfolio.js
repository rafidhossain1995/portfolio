import React from "react"
import rafidData from "../rafidData"
import "../CSS/portfolio.css"
const Portfolio = ()=>{
    return(
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Below you can find my past projects as well as a link to my resume.</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf"></div>
                    {
                        rafidData.portfolio && rafidData.portfolio.map((item)=>{
                            return(
                                <div className="columns portfolio-item project-card">
                                    <div className="item-wrap">
                                        <a href="#modal-01">
                                        <img src={`${item.imgurl}`}className="item-img" to="google.com"/>
                                       
                                        <div className="overlay" link="google.com">
                                            <div className="portfolio-item-meta">
                                                {/* <a href="google.com">{item.imgurl}</a> */}
                                                <h1 className="synopsis">{item.description}</h1>
                                                <h3 className="portfolio-links">
                                                    <a href={item.link}>LIVE SITE</a>
                                                    <a href={item.git}>GITHUB</a>
                                                </h3>
                                            </div>
                                        </div>
                                        </a>
                                            
                                       
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Portfolio