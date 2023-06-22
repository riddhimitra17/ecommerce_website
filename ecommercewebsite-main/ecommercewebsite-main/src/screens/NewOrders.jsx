import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';

function NewOrders() {
    const [orderData, setOrderData] = useState([]);

    const fetchAllOrders = async () => {
        await fetch("http://localhost:5000/api/allorders", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async (res) => {
            let response = await res.json()
            await setOrderData(response)
        })
    }

    console.log(orderData);

    useEffect(() => {
        fetchAllOrders()
    }, [])

    return (
        <>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '' }}><h3>All Orders</h3></div>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Order Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.slice().reverse().map((order) => (
                                <tr key={order._id}>
                                    <td>{order.email}</td>
                                    <td>
                                        <table className='table table-bordered'>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Qty</th>
                                                    <th>Size</th>
                                                    {/* <th>Order Date</th> */}
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.order_data.slice().reverse().map((orderItems) => (
                                                    <React.Fragment key={orderItems[0].Order_date}>
                                                        <tr>
                                                            <td colSpan="5" style={{ fontWeight: "bold" }}>{orderItems[0].Order_date} {"   "}  || {"   "}  Delivery address: {order.order_data[0].address}</td>
                                                        </tr>
                                                        
                                                        {Object.values(orderItems).slice(1).map((item) => (
                                                            <tr key={item.id}>
                                                                <td>{item.name}</td>
                                                                <td>{item.qty}</td>
                                                                <td>{item.size}</td>
                                                                {/* <td>{orderItems[0].Order_date}</td> */}
                                                                <td>₹{item.price}/-</td>
                                                            </tr>
                                                        ))}
                                                    </React.Fragment>
                                                    
                                                ))}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table >
                </div >
                <Footer />
            </div >
        </>
    );
}

export default NewOrders;
