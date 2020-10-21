import React from "react"
import rafidData from "../rafidData"
import "../CSS/skills.css"
const Skills = ()=>{
    return (
      <section id="skills">

         <div className="row skill">

            <div className="three columns header-col">
               <h1 className="skill-skills"><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p className="several-skills">
               These are several skills I have learned along my journey as a developer.
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  rafidData.skills && rafidData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span>
                      <img src={`${item.imgurl}`} className="h"/>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
}
export default Skills


