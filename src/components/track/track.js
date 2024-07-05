import { useState } from "react"


function Track () {
    const [trackingNumber, setTrackingNumber] = useState("")

    function redirect(e) {
        e.preventDefault();
        window.location.href = `/tracking/${trackingNumber}`;
      }
    

    return(
        <div>
<form className="generate_form" onSubmit={redirect}>
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