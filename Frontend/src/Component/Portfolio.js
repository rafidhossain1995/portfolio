import React from "react"
import rafidData from "../rafidData"
import "../CSS/portfolio.css"
const Portfolio = ()=>{
    return(
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>These are some of my Projects as well as a link to my Resume. Check them out!</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf"></div>
                    {
                        rafidData.portfolio && rafidData.portfolio.map((item)=>{
                            return(
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01">
                                        <img src={`${item.imgurl}`}className="item-img" to="google.com"/>
                                        <div href={item.link}>
                                        <a href={item.link} target="_blank">
                                        <div className="overlay" link="google.com">
                                            <div className="portfolio-item-meta">
                                                {/* <a href="google.com">{item.imgurl}</a> */}
                                                <h1 className="synopsis">{item.description}</h1>
                                            </div>
                                        </div>
                                        </a>
                                            
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