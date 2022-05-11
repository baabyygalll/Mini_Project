import React from 'react';
import "./Home.css"
import NavbarComponent from '../../Components/Navbar/Navbar';
import skincare from "../../image/istockphoto-1306102673-612x612.jpg";
import Products from "../../Components/Products"


function Home() {
  return (
    <div>
      <NavbarComponent />
      <div className="prunella">
        <h1 style={{ fontSize: "200px" }}>PRUNELLA</h1>
        <p style={{ fontSize: "50px" }}>Discover What Your Skin Needs</p>
      </div>
      <img src={skincare} />
     
    </div>
  );
}

export default Home;