import React from "react"
import rafidData from "../rafidData"
// const Mailto = require('react-mailto');
import emailjs from "emailjs-com"


const ContactMe = ()=>{
    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('gmail', 'dragon12345', e.target, 'user_Q7DvqUZhVbVhmhmw0jEmg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
      debugger
    
    return(
        <section id="contact">
        <form onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
        </form>
        </section>
    )
}
export default ContactMe


