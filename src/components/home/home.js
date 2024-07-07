import banner from "../../assets/banner.mp4"
import "./home.css"
import  customer from "../../assets/customer.svg"
import  delivery from "../../assets/delivery.svg"
import  location from "../../assets/location.svg"


function Home (){
    return(
        <div>
            <div className="banner-bg">
            <video className="banner" autoPlay loop muted playsInline>
        <source src={banner} type="video/mp4"  />
      </video>

<div className="banner-info">
          <h3>
        TRUSTWAY SHIPPING 
        <br/>SERVICE
      </h3>
      <div>
             <a className="banner-button" href="/track">Track Order</a>
      </div>
      <p>Trustway Shipping Service is a representative logistics operator providing full range of<br/>
         service in the sphere of customs clearance and transportation worldwide for any type of cargo.</p>
</div>     
            </div>


<div className="infoContainer">
             <div className="aboutinfo">
                <div className="infodiv bder-btm">
                <img src={delivery} alt="delivery package image"/>
                <div className="numNtext">
            <p className="num">10000</p>
                <p className="greytext">Fast Delivery</p>
                </div>
                </div>
        
                <div className="infodiv bder-btm">    
                <img src={customer} alt="customers image"/>
                <div className="numNtext">
                <p className="num">150+</p>
                <p className="greytext">Happy customers</p>
                </div>
                </div>

                <div className="infodiv">   
                 <img src={location} alt="Gps location image"/>
                 <div className="numNtext">
                <p className="num">100+</p> 
                <p className="greytext">Nationwide Reach</p></div>
                </div>
             </div>
             </div>

             <div className="reasons">
                <h4 className="chooseUs">
                    Why you should choose us?
                </h4>
                <ul>
                    <li><span className="head">Speed</span><br/>
                    Fastest air freight and logistics company
                    servicing communities. We can deliver your cargo
                    between 3 to 7 days.
                    </li> 
                    <li><span className="head">Special Services For the Modern Retailer</span><br/>
                    We offer pocket-friendly rates for clients who ship item in bulk 
                    with us.
                    </li>
                    <li><span className="head" id="services">Advanced Tracking System</span><br/>
                    Track Your Cargo Easily
                    </li>
                    <li>
                        <span className="head">Wider Reach</span><br/>
                        Improved customer offering with shipping options all around the world,
                       
                    </li>
                </ul>
             </div>
        </div>
    )
}

export default Home