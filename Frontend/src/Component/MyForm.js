// import React, { useState } from "react";
// import axios from "axios"
// import rafidData from "../rafidData"
// // const Mailto = require('react-mailto');
// import emailjs from "emailjs-com"

// const MyForm = ()=>{

//     const [serverState, setServerState] = useState({ submitting:false, status:null });
    
//     const handleServerResponse = (ok, msg, form)=>{
//         setServerState({
//             submitting:false,
//             status:{ok, msg}
//         })
//         if(ok){
//             form.reset()
//         }
//     }

//     const handleOnSubmit = (e)=>{
//         e.preventDefault()
//         const form = e.target
//         setServerState({submitting:true})
//         axios({
//             method:"post",
//             url: "https://formspree.io/f/xpzoplvz",
//             data: new FormData(form)

//         })
//         .then(r=>{
//             handleServerResponse(true, "thanks", form)
//         })
//         .catch(r=>{
//             handleServerResponse(false, r.response.data.error, form)
//         })
//     }
    
//     return(
//         <div>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleOnSubmit}>
//         <label htmlFor="email">Email:</label>
//         <input id="email" type="email" name="email" required />
//         <label htmlFor="message">Message:</label>
//         <textarea id="message" name="message"></textarea>
//         <button type="submit" disabled={serverState.submitting}>
//           Submit
//         </button>
//         {serverState.status && (
//           <p className={!serverState.status.ok ? "errorMsg" : ""}>
//             {serverState.status.msg}
//           </p>
//         )}
//       </form>
//     </div>
      
//     )
// }
// export default MyForm

