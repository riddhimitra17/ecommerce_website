import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

const Hotel = () => {

    const [hotelcred, sethotelcred] = useState({ name: '', location: '', image: '', menulink: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/addhotel", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: hotelcred.name, location: hotelcred.location, image: hotelcred.image, menulink: hotelcred.menulink })
        })
        const data = await response.json();
        console.log(data);

        if (!data.success) {
            alert("Enter Valid data")
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        sethotelcred((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>

            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>
                            Name
                        </label>
                        <input type='text' className='form-control' name='name' value={hotelcred.name} onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='location' className='form-label'>
                            location
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            name='location'
                            value={hotelcred.location}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='image' className='form-label'>
                            Image
                        </label>
                        <input
                            type='text' className='form-control' name='image' value={hotelcred.image} onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='menulink' className='form-label'>
                            Menu
                        </label>
                        <input type='text' className='form-control' name='menulink' value={hotelcred.menulink} onChange={handleChange} />
                    </div>
                    <button type='submit' className='btn btn-success'>
                        Submit
                    </button>
                    {/* <Link to='/login' className='m-3 mx-2 btn btn-danger'>
                        Already a user
                    </Link> */}
                </form>
            </div>
        </div>
    )
}

export default Hotel