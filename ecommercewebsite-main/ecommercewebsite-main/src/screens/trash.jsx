// import React, { useState, useEffect } from 'react';
// import Footer from '../components/Footer';

// function NewOrders() {
//     const [orderData, setOrderData] = useState([]);

//     const fetchAllOrders = async () => {
//         await fetch("http://localhost:5000/api/allorders", {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(async (res) => {
//             let response = await res.json()
//             await setOrderData(response)
//         })
//     }

//     useEffect(() => {
//         fetchAllOrders()
//     }, [])

//     return (
//         <>
//             <div>
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#4BB543' }}><h3>All Orders</h3></div>
//                 <hr />
//                 <div className='table-responsive'>
//                     <table className='table table-bordered'>
//                         <thead>
//                             <tr>
//                                 <th>Email</th>
//                                 <th>Order Data</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orderData.map((order) => (
//                                 <tr key={order._id}>
//                                     <td>{order.email} </td>
//                                     <td>
//                                         <table className='table table-bordered'>
//                                             <thead>
//                                                 <tr>
//                                                     <th>Name</th>
//                                                     <th>Qty</th>
//                                                     <th>Size</th>
//                                                     <th>Order Date</th>
//                                                     <th>Price</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {order.order_data.map((orderItems) => (
//                                                     orderItems.map((orderItem) => (
//                                                         <tr key={orderItem.id}>
//                                                             <td>{orderItem.name}</td>
//                                                             <td>{orderItem.qty}</td>
//                                                             <td>{orderItem.size}</td>
//                                                             <td>{orderItem.Order_date}</td>
//                                                             <td>₹{orderItem.price}/-</td>
//                                                         </tr>
//                                                     ))
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table >
//                 </div >
//                 <Footer />
//             </div >
//         </>
//     );
// }

// export default NewOrders;

// import React, { useState, useEffect } from 'react';
// import Footer from '../components/Footer';

// function NewOrders() {
//     const [orderData, setOrderData] = useState([]);

//     const fetchAllOrders = async () => {
//         await fetch("http://localhost:5000/api/allorders", {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(async (res) => {
//             let response = await res.json()
//             await setOrderData(response)
//         })
//     }

//     console.log(orderData);

//     useEffect(() => {
//         fetchAllOrders()
//     }, [])

//     return (
//         <>
//             <div>
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '' }}><h3>All Orders</h3></div>
//                 <div className='table-responsive'>
//                     <table className='table table-bordered'>
//                         <thead>
//                             <tr>
//                                 <th>Email</th>
//                                 <th>Order Data</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orderData.slice().reverse().map((order) => (
//                                 <tr key={order._id}>
//                                     <td>{order.email}</td>
//                                     <td>
//                                         <table className='table table-bordered'>
//                                             <thead>
//                                                 <tr>
//                                                     <th>Name</th>
//                                                     <th>Qty</th>
//                                                     <th>Size</th>
//                                                     <th>Order Date</th>
//                                                     <th>Price</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {order.order_data.slice().reverse().map((orderItem) => (
//                                                     <tr key={orderItem.id}>
//                                                         <td>{orderItem.name}</td>
//                                                         <td>{orderItem.qty}</td>
//                                                         <td>{orderItem.size}</td>
//                                                         <td>{orderItem.Order_date}</td>
//                                                         <td>₹{orderItem.price}/-</td>
//                                                     </tr>
//                                                 )
//                                                 )}
//                                                 <tr>
//                                                     <td colSpan="3"></td>
//                                                     <td>Address:</td>
//                                                     <td>{order.order_data[0].address}</td>
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table >
//                 </div >
//                 <Footer />
//             </div >
//         </>
//     );
// }

// export default NewOrders;

