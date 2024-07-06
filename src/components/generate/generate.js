import axios from "axios"
import "./generate.css"
import { useState } from "react"

function Generate () {
    const [trackingNumber, setTrackingNumber] = useState("")
    async function submit (e){
        e.preventDefault()
        
                 const response = await axios.post(`${process.env.REACT_APP_API_URL}/generate`, {
                  
               })
               setTrackingNumber(response.data.trackingNumber)
            } 
          
        
    
    return(
        <div className="tracking_result">
           <form className="generate_form" onSubmit={submit}>
<button>Generate Tracking Number</button>
        </form>
        <p> New Tracking No: <span className="new_tracking_no">{trackingNumber}</span></p>  
        </div>
       

    )
}

export default Generate