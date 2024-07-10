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
  const [statusResponse, setStatusResponse] = useState("")
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
    setStatusResponse(`This Means We Are currently awaiting a pending payment or experiencing issues related to your package`)
  } else if (response.data.order.status = "Picked Up"){
    setNumStatus(50)
    setStatusResponse(`This Means Your Order is ${response.data.order.status} up from ${response.data.order.fromAddress} and on its way to ${response.data.order.toAddress}`)
  }
  else if(response.data.order.status == "In Transit"){
    setNumStatus(75)
    setStatusResponse(`This Means Your Order is ${response.data.order.status} from ${response.data.order.fromAddress} and on its way to ${response.data.order.toAddress}`)
  }
 
  else if(response.data.order.status == "Delivered") {
    setNumStatus(100)
    setStatusResponse(`Congratulations your item is Delivered and is at ${response.data.order.toAddress}`)
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
          <p><span>Delivery Address:</span> {order.toAddress}</p>
          <p><span>From Address:</span> {order.fromAddress}</p>
                      <p><span>Amount To Be Paid:</span> ${order.amount}</p>
 
 <p className="status-response">Your Item is {order.status} {statusResponse} </p>
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
