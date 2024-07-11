import React from  "react"
import { useState } from "react";
import "./contact.css"
import { BsEnvelope } from "react-icons/bs"
import axios from "axios";

function Contact (){
 const [message, setMessage] = useState("")
 const[error, setError]= useState("")
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        number: '',
        state: '',
        message: '',
        agree: false,
      });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/contact`, formData)
          .then(response => {
            console.log(response.data);
            setMessage(response.data.message)
            alert('Message sent successfully!');
            
          })
          .catch(error => {
            setError("agree to the terms and condition")
            console.error('There was an error sending the message!', error);
          });
      };
    return(
        <div className="form">
        <h3>Contact Us</h3>
        <p className="error">{error}</p>
        <p>{message}</p>
        <form className="contact" onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Full Name" name="from_name" value={formData.from_name} onChange={handleChange} /><br />
      <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} /><br />
      <input type="phone" placeholder="Telephone" name="number" value={formData.number} onChange={handleChange} /><br />
      <input placeholder="State" name="state" value={formData.state} onChange={handleChange} /><br />
      <textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} /><br />
      <div className="label">
        <input id="agree" type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
        <label htmlFor="agree">I agree to receive messages and communications</label><br />
      </div>
      <button type="submit">Send Message</button>
    </form>  
        <p className="help"> You can send us an email at <a href="mailto:help@trustwayshipping.com"><BsEnvelope/> help@trustwayshipping.com</a></p>
        </div>
    )
}

export default Contact