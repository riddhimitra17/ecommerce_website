import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import './Home.css'
// import Carousal from "../components/Carousal";

function Home() {
    const [search, setsearch] = useState('')
    const [foods, setfoods] = useState([])
    const [foodCat, setfoodCat] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/getfoodcat", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((datas) => {
                // console.log(data);
                setfoodCat(datas.data)
            })
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/api/getitems", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setfoods(data.data)
            })
    }, [])

    return (
        <div>
            <div> <Navbar /> </div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

                    <div className="carousel-inner" id='carousel' style={{ height: "400px" }}>
                        <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                            <div className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                                <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" value={search} onChange={(e) => { setsearch(e.target.value) }} />
                                {/* <button className="btn text-white bg-success" type="submit">Search</button> */}
                            </div>
                        </div>
                        <div className="carousel-item active" >
                            <img src="https://previews.123rf.com/images/dusanzidar/dusanzidar1703/dusanzidar170300006/73297139-selection-of-healthy-food-on-white-background.jpg" className="d-block w-100  " style={{ filter: "brightness(80%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100 " style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100 " style={{ filter: "brightness(30%)", }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                {
                    foodCat.map((i) => {
                        return (
                            <div className="row mb-3">
                                <div key={i._id}>
                                    <div className="fs-3 m-3 cat-name">{i.CategoryName}</div>
                                </div>
                                <hr />
                                {
                                    foods.filter((item) => (item.CategoryName === i.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                        .map(filterItems => {
                                            return (
                                                <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                                                    <Card foodItem={filterItems}
                                                        options={filterItems.options[0]}
                                                    ></Card>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div> <Footer /> </div>
        </div>
    );
}

export default Home;
