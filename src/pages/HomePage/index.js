import React from "react";
import './index.css';
import background from "../../pic11.jpg"

function HomePage() {
    const myStyle={
        backgroundImage: `url(${background})`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div className="container" style={myStyle}>
        {/* <img src="/pictures/pic11.jpg" alt="HomePage" className="HomeImage" /> */}
        <div className="Slogan ">
            Everything, Everywhere, <br /> All at once ...
        </div> 
        <br/>
    </div>);
}

export default HomePage;