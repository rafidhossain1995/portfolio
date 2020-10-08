import React from "react"
import rafidData from "../rafidData"

const Portfolio = ()=>{
    return(
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>These are some of my Projects. Check them out!</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf"></div>
                    {
                        rafidData.portfolio && rafidData.portfolio.map((item)=>{
                            return(
                                <div className="columns portfolio-item">
                                    <div className="item-wrap">
                                        <a href="#modal-01">
                                        <img src={`${item.imgurl}`}className="item-img" to="google.com"/>
                                        <a href={item.link}>
                                        <div className="overlay" link="google.com">
                                            <div className="portfolio-item-meta">
                                                {/* <a href="google.com">{item.imgurl}</a> */}
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                            
                                        </a>
                                       
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