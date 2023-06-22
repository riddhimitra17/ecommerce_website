import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Signup = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: '', email: '', password: '', geolocation: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const data = await response.json();
        console.log(data); // Handle the response data as per your application requirements

        if (!data.success) {
            alert("Enter Valid credentials")
        }
        navigate('/');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const bgStyle = {
        backgroundImage: `url('/images/bg.png')`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        margin: 0
    };

    // const bodyStyle = {
    //     margin: 0, // Set margin to 0
    //     padding: 0
    // };

    return (
        <div style={bgStyle}>
            <div><Navbar></Navbar></div>
            <div className="container-fluid h-custom">
                <div className="container-fluid h-custom">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5 d-flex justify-content-center">
                        </div>
                        <form className='col-md-9 col-lg-9 col-xl-7' style={{paddingTop:'150px'}} onSubmit={handleSubmit}>
                            <div className='m-3'>
                                <div className='mb-3    '>
                                    <label htmlFor='name' className='form-label'>
                                        Name
                                    </label>
                                    <input type='text' className='form-control' name='name' value={credentials.name} onChange={handleChange} />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label'>
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        name='email'
                                        value={credentials.email}
                                        onChange={handleChange}
                                        aria-describedby='emailHelp'
                                    />
                                    <div id='emailHelp' className='form-text'>
                                        We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label'>
                                        Password
                                    </label>
                                    <input
                                        type='password' className='form-control' name='password' value={credentials.password} onChange={handleChange}
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='geolocation' className='form-label'>
                                        Address
                                    </label>
                                    <input type='text' className='form-control' name='geolocation' value={credentials.geolocation} onChange={handleChange} />
                                </div>
                                <button type='submit' className='btn btn-success'>
                                    Submit
                                </button>
                                <Link to='/' className='m-3 mx-2 btn btn-danger' style={{backgroundColor:"red"}}>
                                    Already a user
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
