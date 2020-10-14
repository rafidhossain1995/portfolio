import React from "react"
import rafidData from "../rafidData"

const Resume = ()=>{
    return(
        <section id="resume">
         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {rafidData.skillsDescription}
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

    )
}
export default Resume


{/* <section id="resume">
            <div className="row skill">
            <div className="three columns header-col">
                <h1><span>Skills</span></h1>

            </div>
            <div className="nine columns header-col">
                <p>
                    {rafidData.skillsDescription}
                </p>
                <div className="bars">
                    <ul className="skills">
                        {
                            rafidData.skills && rafidData.skills.map((item)=>{
                                return(
                                    <li>
                                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                                        </span><em>{item.skillname}</em>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
      </section> */}