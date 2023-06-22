import React, { useState } from 'react'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {

    const [address] = useState('');

    let data = useCart();
    let dispatch = useDispatchCart();
    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3' style={{color: "black"}}>
                    The Cart is Empty!
                    <hr />
                </div>
                {/* <img src="https://kurtrees.files.wordpress.com/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="" /> */}
            </div>
        )
    }

    const handleCheckOut = async (e) => {
        e.preventDefault();
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/orderdata", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                address: address,
                order_date: new Date().toDateString()
            })
        });

        console.log("JSON RESPONSE:::::", response.status);
        if (response.status === 200) {
            dispatch({ type: "DROP" })
        }
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0)

    return (
        <div>
            {console.log(data)}
            <div className='all-cart container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
                <table className='table '>
                    <thead className=' text-success fs-4'>
                        <tr>
                            <th scope='col' >#</th>
                            <th scope='col' >Name</th>
                            <th scope='col' >Quantity</th>
                            <th scope='col' >Option</th>
                            <th scope='col' >Amount</th>
                            <th scope='col' ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((food, index) => (
                            <tr className="slide-in">
                                <th scope='row' >{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                {/* <td><button className='btn bg-danger btn-sm' onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>X</button></td> */}
                                <td>
                                    <button className='btn btn-sm' style={{ backgroundColor: 'transparent', border: 'none' }} onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
                                        <FontAwesomeIcon icon={faTrashAlt} style={{ color: '#fd5c63' }} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div><h1 className='fs-2 total-price'>Total Price: {totalPrice}/-</h1></div>
                {/* <div className='mt-3 total-price'>
                    <label htmlFor='address' className='form-label fs-4'>Enter Address:</label>
                    <input type='text' className='form-control' id='address' placeholder='Enter Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                </div> */}
                <div>
                    <button className='btn bg-success mt-5 ' onClick={
                        handleCheckOut
                        //handleSend();
                    }> Check Out </button>
                </div>
            </div>
        </div>
    )
}