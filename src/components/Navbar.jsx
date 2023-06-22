import React, { useState } from 'react'
import Badge from "react-bootstrap/Badge";
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
// import MyOrder from '../screens/MyOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    let data = useCart()

    const [cartView, setCartView] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/")
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ fontFamily: 'Merriweather', fontWeight: 'bold', backgroundColor: '#D5F9F7', opacity: '0.9', zIndex: 999, transition: 'opacity 0.3s ease-in-out' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" style={{ color: 'black' }} to="/home">Quick kart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                {/* <Link className="nav-link active fs-5" aria-current="page" to="/home">Home</Link> */}
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <div className='nav-item' >
                                    {/* <Link className='nav-link active fs-5' aria-current="page" to="/myorder">My Orders</Link> */}
                                </div>
                                : ""}
                        </ul>

                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex' >
                                <Link className="btn bg-white text-success mx-1" to="/">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
                            </div>
                            :
                            <div className='d-flex'>
                                {/* <div className='btn bg-white text-success mx-1' onClick={handleShowModal}>My Orders</div>
                                {showModal && (
                                    <Modal onClose={handleCloseModal}>
                                        <MyOrder></MyOrder>
                                    </Modal>
                                )} */}
                                <div className='btn bg-white text-success mx-1' onClick={() => { setCartView(true) }}>
                                    <FontAwesomeIcon icon={faShoppingCart} className="me-2" />Cart {" "}
                                    <Badge pill bg="danger">{data.length}</Badge>
                                </div>
                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : null}
                                <div>
                                    <button className='btn bg-white text-danger mx-1' onClick={handleLogout}>Logout <FontAwesomeIcon icon={faSignOutAlt} /></button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
