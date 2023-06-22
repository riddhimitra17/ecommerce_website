import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Open = () => {
    return (
        <div>
            <div> <Navbar /> </div>
            <div style={{
                backgroundImage: `url("https://www.smarther.co/wp-content/uploads/2021/07/5-own-food-delivery-app.jpg")`,
                height: "800px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}>
                
            </div>
            <div> <Footer /> </div>
        </div>
    )
}

export default Open
