import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";


import "./admin.css";

function Admin() {
    const [allList, setAllList] = useState([]);
    const [editTrackingNumber, setEditTrackingNumber] = useState(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        async function fetchOrder() {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/admin/list-orders`
                );
                console.log(response.data.orders);
                setAllList(response.data.orders);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setAllList([]);
            }
        }

        fetchOrder();
    }, []);

    const handleEdit = (trackingNumber, currentStatus) => {
        setEditTrackingNumber(trackingNumber);
        setStatus(currentStatus);
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleSave = async (trackingNumber) => {
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/admin/update-status/${trackingNumber}`, {
                status: status
            });
            const updatedOrders = allList.map(order => 
                order.trackingNumber === trackingNumber ? { ...order, status: status } : order
            );
            setAllList(updatedOrders);
            setEditTrackingNumber(null);
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleDelete = async (trackingNumber) => {
        console.log(trackingNumber)
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/admin/delete-order/${trackingNumber}`);
            const updatedOrders = allList.filter(order => order.trackingNumber !== trackingNumber);
            setAllList(updatedOrders);
        } catch (error) {
            console.error("Error deleting order:", error);
        }
    };

    return (
        <div className="admin">
            <h3>Admin Page</h3>
            <a className="admin-generate" href="/admin/generate">
          <button >Generate new Tracking Number</button>       
            </a>
           
            <h1>Order List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Tracking Number</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allList.map(order => (
                        <tr key={order.trackingNumber}>
                            <td>{order.trackingNumber}</td>
                            <td>
                                {editTrackingNumber === order.trackingNumber ? (
                                    <input
                                        type="text"
                                        value={status}
                                        onChange={handleStatusChange}
                                    />
                                ) : (
                                    order.status
                                )}
                            </td>
                            <td>
                                {editTrackingNumber === order.trackingNumber ? (
                                    <button
                                        className="save-button"
                                        onClick={() => handleSave(order.trackingNumber)}
                                    >
                                        <IoCheckmark/>
                                    </button>
                                ) : (
                                    <button
                                        className="edit-button"
                                        onClick={() => handleEdit(order.trackingNumber, order.status)}
                                    >
                                        <CiEdit/>
                                    </button>
                                )}
                            </td>
                            <td>
                                <button className="delete-button">
                                    <MdDelete onClick={() => handleDelete(order.trackingNumber)} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
