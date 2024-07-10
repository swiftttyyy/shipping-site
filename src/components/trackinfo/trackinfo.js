import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./trackinfo.css"
import ProgressBar from 'react-bootstrap/ProgressBar';


function TrackInfo() {
  const { trackingNumber } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const [numStatus, setNumStatus] = useState(25)

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/track/${trackingNumber}`
        );
        console.log(trackingNumber)
        setOrder(response.data.order);
        setError(null);
        console.log(response.data.order);
         if (response.data.order.status == "Pending"){
    setNumStatus(25)
  }
  else if(response.data.order.status == "In Transit"){
    setNumStatus(75)
  }
  else if (response.data.order.status = "Picked Up"){
    setNumStatus(50)
  }
  else if(response.data.order.status == "Delivered") {
    setNumStatus(100)
  }
      } catch (error) {
        console.error("Error fetching order:", error);
        setOrder(null);
        setError("Order not found or server error");
        console.log(trackingNumber)

      }
    }

    fetchOrder();
  }, [trackingNumber]);

 

  return (
    <div className="track-info-container">
      {error && <p style={{ color: "red" }}>{error}</p>}

      {order && (
        <div className="tracking-details">
          <h2>Your Tracking Details</h2>
          <div className="tracking-numbers"> 
            <p><span>Recepient Name: </span>{order.name}</p>
              <p><span>Tracking ID:</span> {order.orderId}</p>
          <p><span>Tracking Number:</span> {order.trackingNumber}</p>
          <p><span>Delivery Address:</span> {order.address}</p>
                      <p><span>Amount To Be Paid:</span> ${order.amount}</p>

            </div>

       
          {/* Display additional order details as needed */}
          <div className="status-container"> 

            <p><span>Status:</span> {order.status}</p>

            <div>
            <ProgressBar striped variant="success" now={numStatus} label={`${numStatus}%`}/>
            </div>

            </div>
         
        </div>
      )}
    </div>
  );
}

export default TrackInfo;
