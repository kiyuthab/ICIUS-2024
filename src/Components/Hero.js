import React from "react";
import imgHero from "../assets/img/hero.jpg"


const Hero = ()=>{
    return(        
        <div className="position-relative">
            <img fluid
            src={imgHero} 
            alt="" 
            style={{ width: "100%", height: "30rem" }}
            className="mw-100 h-auto"
            />
            <h1 
            className="position-absolute px-5 py-4"
            style={{
                backgroundColor: "rgb(244, 206, 20, 0.8)",
                color: "white",
                fontSize: "3rem",
                left: "70%",
                width: "60%",
                transform: "translate(-50%, -100%)" }}>
                    Dear colleagues,
            </h1>
        </div>
    )
}


export default Hero;