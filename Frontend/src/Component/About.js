import React from "react"
import rafidData from "../rafidData"

const About = ()=>{
    return(
        <section id="about">
            <div className="row">
                <div className="three columns">
                <img className="profile-pic"  src="images/Hike.jpg" alt="" />
                </div>
                <div className="nine columns main-col"></div>
                <h2>About me</h2>
                <p>
                    {
                        rafidData.aboutme
                    }
                </p>

                <a className="my-resume" href="https://docs.google.com/document/d/1_ABXkBt8wnX3c2-dkMoOEwzkxNlpEI6Fo41JdAUNVDw/edit" className="fa fa-file"> Check Out My Resume </a>
        
                {/* <div className="row">
                    <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
       						<span>{rafidData.name}</span>
                     <br></br>
       						   <span>
                     {rafidData.address}
                    </span>
                    <br></br>
                    <span>{rafidData.website}</span>
       					   </p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
export default About