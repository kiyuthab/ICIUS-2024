import React from 'react';
import imgHero from "../assets/img/hero.jpg"
import {Card, Row, Col} from "react-bootstrap";

const MainThemes = ()=>{
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
                        Themes
                </h1>
            </div>
                <div className="themes">
                    <Card className='p-5'>
                        <Card.Title>
                            The conference will serve as a focal point for comprehensive exploration into various types and dimensions of intelligent unmanned systems. Topics of interest encompass, but are not limited to:
                        </Card.Title>
                        <Card.Body>
                            <Row className='mb-4 gap-3'>
                                <Col>
                                    <Card className='p-4'
                                    style={{
                                        border: "none"
                                    }}
                                    >
                                        <Card.Title style={{
                                            backgroundColor: "#445069",
                                            color: "white",
                                            
                                        }}
                                        className='px-4 py-2'
                                        >
                                            Mechatronics, Robotics, and Biomimetics:
                                        </Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Artificial muscle actuators</li>
                                                <li>Smart sensors</li>
                                                <li>Design and applications of MEMS/NEMS systems</li>
                                                <li>Intelligent robot systems</li>
                                                <li>Evolutionary algorithms</li>
                                                <li>Control of biological systems</li>
                                                <li>Biological learning control systems</li>
                                                <li>Neural networks</li>
                                                <li>Bioinspired systems</li>
                                            </ul>
                                        </Card.Text>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='p-4'
                                    style={{
                                        border: "none"
                                    }}
                                    >
                                        <Card.Title style={{
                                            backgroundColor: "#445069",
                                            color: "white",
                                            
                                        }}
                                        className='px-4 py-2'>
                                            Unmanned Systems:
                                        </Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Micro air vehicle</li>
                                                <li>Micro-satellite</li>
                                                <li>Unmanned aerial vehicle</li>
                                                <li>Underwater vehicle</li>
                                                <li>Multi-agent systems</li>
                                                <li>Autonomous ground vehicle</li>
                                                <li>Blimp</li>
                                                <li>Swarm intelligence</li>
                                            </ul>
                                        </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='mb-4 gap-3'>
                                <Col>
                                    <Card className='p-4'
                                    style={{
                                        border: "none"
                                    }}
                                    >
                                        <Card.Title style={{
                                            backgroundColor: "#445069",
                                            color: "white",
                                            
                                        }}
                                        className='px-4 py-2'>
                                            Control and Computation:
                                        </Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Distributed and embedded systems</li>
                                                <li>Complex systems</li>
                                                <li>Embedded intelligent control</li>
                                                <li>Pervasive computing</li>
                                                <li>Soft computing</li>
                                                <li>Discrete event systems</li>
                                                <li>Hybrid systems</li>
                                                <li>Networked control systems</li>
                                                <li>Delay systems</li>
                                                <li>Identification and estimation</li>
                                                <li>Nonlinear systems</li>
                                                <li>Precision motion control</li>
                                                <li>Control applications</li>
                                                <li>Control engineering education</li>
                                                <li>Computer Architecture & VLSI</li>
                                                <li>Signal, image, and multimedia processing</li>
                                                <li>Computational Fluid Dynamics</li>
                                            </ul>
                                        </Card.Text>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className='p-4'
                                    style={{
                                        border: "none"
                                    }}
                                    >
                                        <Card.Title style={{
                                            backgroundColor: "#445069",
                                            color: "white",
                                            
                                        }}
                                        className='px-4 py-2'>
                                            Intelligent Systems:
                                        </Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Ubiquitous computing</li>
                                                <li>Algorithms</li>
                                                <li>Distributed intelligence</li>
                                                <li>Distributed/decentralized intelligent control</li>
                                                <li>Fuzzy systems</li>
                                                <li>AI and expert systems</li>
                                                <li>Virtual reality</li>
                                                <li>Wearable computers</li>
                                                <li>Information systems and retrieval</li>
                                                <li>Software engineering</li>
                                                <li>Knowledge data engineering</li>
                                                <li>Data communications and compression</li>
                                            </ul>
                                        </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card className='p-4'
                                        style={{
                                            border: "none"
                                        }}>
                                        <Card.Title style={{
                                                    backgroundColor: "#445069",
                                                    color: "white",
                                                    
                                                }}
                                                className='px-4 py-2'>
                                            Smart Systems:
                                        </Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Internet of Things (IoT) applications</li>
                                                <li>Cyber-physical systems</li>
                                                <li>Machine learning in smart systems</li>
                                                <li>Smart sensors and actuators</li>
                                                <li>Smart cities and infrastructure</li>
                                                <li>Smart healthcare systems</li>
                                                <li>Smart energy systems</li>
                                                <li>Industrial IoT and Industry 4.0 applications</li>
                                            </ul>
                                        </Card.Text>
                                    </Card>
                                </Col>
                                <Col>
                                <Card className='p-4'
                                style={{
                                    border: "none"
                                }}>
                                    <Card.Title style={{
                                        backgroundColor: "#445069",
                                        color: "white",                        
                                    }}
                                    className='px-4 py-2'>
                                        Renewable Energy:
                                    </Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>EV</li>
                                            <li>Hidrogen</li>
                                            <li>Biofuels</li>
                                            <li>Fuel Cells</li>
                                            <li>Biomass</li>
                                        </ul>
                                    </Card.Text>
                                </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
        </div>
    )
}

export default MainThemes;