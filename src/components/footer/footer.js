import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import {BsTelephone} from "react-icons/bs"
import {BsPinMap} from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { BsEnvelope } from "react-icons/bs"
import "./footer.css"


function Footer () {
    return(
    <footer>
    <section className="footer-first-section">
     <img src={logo}/>
     <ul>
     <li><Link className="link" to="/">Home</Link></li>
 
        <li><Link className="link" to="/techspec">Technical Specifications</Link></li>
        <li><Link className="link" to="/contact">Contact Us</Link></li>
     </ul>
     <div>
        <BsPinMap className="icon"/>

    
     </div>
     <div className="icons">
     
     <div className="contacts-link">
        <BsTelephone className="icon"/>
</div>
     </div>
     </section>
        
     <section className="second-section">
        <hr/>
        <p>
        © 2021 TrustWay Shipping. All rights reserved.<br/>
Reproduction, in whole or in part, is prohibited.
        </p>
     </section>   
     
    </footer>
    )                        
}

export default Footer