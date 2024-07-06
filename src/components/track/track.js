import { useState } from "react"
import "./track.css"

function Track () {
    const [trackingNumber, setTrackingNumber] = useState("")

    function redirect(e) {
        e.preventDefault();
        window.location.href = `/tracking/${trackingNumber}`;
      }
    

    return(
        <div className="track">
            <h3>Track Shipment</h3>

            <h5>Enter the Consignment No.</h5>
<form onSubmit={redirect}>
    <input 
    placeholder="Enter Tracking Number" 
    onChange={(e) => {
setTrackingNumber(e.target.value)}}
    required
    />
    <button type="submit">
        Track Order
    </button>
</form>
        </div>
    )
}

export default Track