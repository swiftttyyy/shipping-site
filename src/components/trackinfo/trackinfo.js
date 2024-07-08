import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./trackinfo.css"

function TrackInfo() {
  const { trackingNumber } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

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
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {order && (
        <div className="tracking-details">
          <h2>Your Tracking Details</h2>
          <div className="tracking-numbers"> 
            <p><span>Recepient Name: </span>{order.name}</p>
              <p><span>Tracking ID:</span> {order.orderId}</p>
          <p><span>Tracking Number:</span> {order.trackingNumber}</p>
          <p><span>Delivery Address:</span> {order.address}</p>
          
            </div>

            <p>Amount To Be Paid: ${order.amount}</p>
       
          {/* Display additional order details as needed */}
          <p>Status: {order.status}</p>
        </div>
      )}
    </div>
  );
}

export default TrackInfo;
