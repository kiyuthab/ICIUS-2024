import React from 'react';
import {Button} from 'react-bootstrap';
import imgHero from "../assets/img/hero.jpg";
import CardAbstract from './ContentAbstract';

const MainAbstract = ()=>{
    
    return(
        <div>
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
                        Abstract Submission
                </h1>
            </div>
            <CardAbstract />
            
        </div>
    )
}

export default MainAbstract;