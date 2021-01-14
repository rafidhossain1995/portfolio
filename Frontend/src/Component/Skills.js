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
               These are the skills that I have learned throughout my journey as a developer.
               </p>

   		<div className="bars">
               <div className="icon">
                     <img src="https://img.icons8.com/color/96/000000/javascript.png" className="js"/>
                     <p>JavaScript</p>
               </div>

               <div className="icon">
                     <img src="https://img.icons8.com/color/96/000000/html-5.png" className="html"/>
                     <p>HTML</p>
               </div>
               <div className="icon">
                     <img src="https://img.icons8.com/color/96/000000/css3.png" className="css-icon"/>
                     <p>CSS</p>

               </div>
               <div className="icon">
                     <img src="https://img.icons8.com/color/96/000000/postgreesql.png" className="sql"/>
                     <p>PostgreSQL</p>

               </div>
               <div className="icon">
                     {/* <img src="https://img.icons8.com/color/96/000000/npm.png" className="express"/> */}
               </div>
               <div className="icon">
                     <img src="https://img.icons8.com/color/96/000000/nodejs.png" className="node"/>
                     <p>Node</p>

               </div>
               <div className="icon">
                     <img src="https://img.icons8.com/plasticine/96/000000/react.png" className="react"/>
                     <p>React</p>

               </div>

               <div className="icon">
               <img src="https://img.icons8.com/fluent/96/000000/visual-studio-code-insides.png" className="VS"/>
                     <p>VS Code</p>

               </div>

               <div className="icon">
               <img src="https://img.icons8.com/ultraviolet/96/000000/merge-git.png" className="git"/>
                     <p>Git</p>

               </div>

               <div className="icon">
               <img src="https://img.icons8.com/plasticine/96/000000/github.png" className="github"/>
                     <p>Github</p>

               </div>
                     {/* //add vscode, git and github */}
   				</div>
   			</div>
         </div>
      </section>
    );
}
export default Skills


