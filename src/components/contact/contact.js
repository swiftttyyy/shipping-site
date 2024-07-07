import React from  "react"
import "./contact.css"

function Contact (){

    
    return(
        <div className="form">
        <h3>Contact Us</h3>
        <form className="contact">
            <input type="text" placeholder="Your Full Name" name="from_name"/><br/>
            <input type="email" placeholder="Your Email" name="email"/><br/>
            <input type="phone" placeholder="Telephone" name="number"/><br/>
            <input placeholder="State" name="state"/><br/>
            <textarea placeholder="Your Message" name="message"/><br/>
            <div className="label">
            <input id="agree" value="I agree to receive message and communications" type="checkbox" name="agree"/>
            <label for="agree">I agree to receive messages and communications</label><br/> 
            </div>
           <button>Send Message</button>
        </form>
        </div>
    )
}

export default Contact