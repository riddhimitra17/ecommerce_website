import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
import './Card.css';


function Card(props) {

    let dispatch = useDispatchCart()
    let data = useCart()
    let options = props.options;
    let priceOptions = Object.keys(options)

    const priceRef = useRef()
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")

    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;

                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({
                    type: "UPDATE",
                    id: props.foodItem._id,
                    price: finalPrice,
                    qty: qty
                })
                return
            } else {
                await dispatch({
                    type: "ADD",
                    id: props.foodItem._id,
                    name: props.foodItem.name,
                    price: finalPrice,
                    qty: qty,
                    size: size
                })
                // console.log(data);
                return
            }
        }
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalPrice,
            qty: qty,
            size: size
        })
    }


    let finalPrice = qty * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src={props.foodItem.img} style={{ "height": "220px", "objectFit": "fill" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="container w-200">
                        <h5 className="m-2 card-title font-merriweather">{props.foodItem.name}</h5>
                        <select className="m-2 h-100 rounded" onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>

                        <select className="m-2 h-100 rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.slice(0, 2).map((data) => {
                                return <option key={data} value={data}>{data}</option>;
                            })}
                        </select>

                        <div className="d-inline h-100 fs-5 font-merriweather">
                            ₹{finalPrice}/-
                        </div>
                        <hr />
                        <div>
                            <button className={`btn btn-success justify-center ms-2 font-merriweather cartBtn`} onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
