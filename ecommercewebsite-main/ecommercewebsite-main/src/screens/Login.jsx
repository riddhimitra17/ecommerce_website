import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import './Login.css'

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });

      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      console.log(data); // Handle the response data as per your application requirements

      if (!data.success) {
        alert('Enter valid credentials');
      }

      if (data.success) {
        localStorage.setItem('userEmail', credentials.email);
        localStorage.setItem('userName', credentials.name);
        localStorage.setItem('authToken', data.authToken);
        console.log(localStorage.getItem('authToken'));
        navigate('/home');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const bgStyle = {
    backgroundImage: 'url(https://img.freepik.com/free-photo/bread-slices-with-topping-tomato-cheese-olives-white-table_23-2148194999.jpg?w=1380&t=st=1682773149~exp=1682773749~hmac=cbe1263c3e887018be3621a2fbb2f6a804d8f1af61923fb44393e42d42401d27)',
    backgroundSize: 'cover',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    margin: 0
  };

  return (
    <div style={bgStyle}>
      <div><Navbar /></div>
      <div className="container-fluid h-custom">
        <div className="container-fluid h-custom">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5 d-flex justify-content-center">
            </div>
            <form className="col-md-9 col-lg-6 col-xl-7" onSubmit={handleSubmit}>
              <div className="m-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone.
                </div>
              </div>
              <div className="m-3">
                <label className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={credentials.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>
              <button type="submit" className="m-3 btn btn-success">
                Submit
              </button>
              <Link to="/createuser" className="m-3 mx-1 btn btn-danger">
                New User
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;