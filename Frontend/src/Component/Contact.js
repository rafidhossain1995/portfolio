import React, { useState } from "react";
import axios from "axios"
import rafidData from "../rafidData"
// const Mailto = require('react-mailto');
import emailjs from "emailjs-com"
import "../CSS/MyForm.css";

const ContactUs =() => {

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tztsxmb', 'template_4qwi7q4', e.target, 'user_VVykGIaM0thNFXIY8kKtR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
    <div className="container">
      <form onSubmit={sendEmail}>
      {/* <div className="row pt-5 mx-auto">
        <div className="col-8 form-group mx-auto">
        <label>Subject</label>
        <input type="text" name="subject" />
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
        <label>Name</label>
        <input type="text" name="name" />
        </div>
        <div className="col-8 form-group pt-2 mx-auto">
        <label>Email</label>
        <input type="email" name="email" />
        </div>
       
        <div className="col-8 form-group pt-2 mx-auto">
        <label>Message</label>
        <textarea name="message"  name="message"/>
        </div>
        <div className="col-8 form-group pt-3 mx-auto">
        <input type="submit" value="Send" />
        </div>
        
      </div> */}
      <div className="row pt-5 mx-auto" id="contact">
      <h1 className="lets-connect"> Let's Connect!</h1>
          <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="name"/>
          </div>

          <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email"/>
          </div>
          
          <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
          </div>

          <div className="col-8 form-group pt-2 mx-auto">
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
          </div>

          <div className="col-9 form-group pt-3 mx-auto">
            <input type="submit" className="btn btn-info" value="send message"></input>
          </div>
      </div>
       
      </form>
      </div>
    );
  }
  export default ContactUs