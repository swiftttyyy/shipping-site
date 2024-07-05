import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        <div>
          <h2>Order Details</h2>
          <p>Order ID: {order.orderId}</p>
          <p>Status: {order.status}</p>
          <p>Tracking Number: {order.trackingNumber}</p>
          {/* Display additional order details as needed */}
        </div>
      )}
    </div>
  );
}

export default TrackInfo;
