import React from 'react';
import {Container, Card} from "react-bootstrap";
import imgHero from "../assets/img/hero.jpg";

const MainAbout = () => {

  return (
    <>
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
                        About
                </h1>
            </div>
        <div className='content'>
            <Container>
                        <Card className='p-3' style={{
                            borderRight: 'none',
                            borderTop: 'none',
                            borderBottom: 'none',
                            borderLeft: '2px'}}>
                            <Card.Body>
                                <Card.Title className='text-center mb-5'>
                                    <h1>WELCOME TO ICIUS2024 - THE 2024 INTERNATIONAL CONFERENCE ON INTELLIGENT UNMANNED SYSTEMS</h1>
                                </Card.Title>
                                <Card.Text>
                                    <div className='my-5' style={{
                                        backgroundColor: "rgb(255, 221, 147, 0.6)",
                                        height: '2px',
                                        borderRadius: '5px',
                                    }}></div>
                                    
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ float: 'end' }}>21-23 AUGUST 2024, Bandung, Indonesia</p>
                                    </div>
                                    <p>The 2024 International Conference on Intelligent Unmanned Systems (ICIUS 2024) will be hosted at the prestigious Pullman Bandung Grand Central, located at Jl. Diponegoro No.27, Bandung, Indonesia, from August 21st to 23rd, 2024. Our conference continues to serve as a unique and engaging platform for scientists, engineers, and practitioners worldwide to showcase and exchange their latest research findings and innovative ideas in the domains of unmanned systems, robotics, automation, and intelligent systems.</p>

                                    <p>ICIUS is a well-established annual conference that reflects the dynamic landscape of unmanned systems, including Unmanned Aerial Vehicles (UAVs), Unmanned Ground Vehicles (UGVs), Unmanned Surface Vehicles (USVs), Unmanned Underwater Vehicles (UUVs), robotics, automation, intelligent systems, biomimetics, and more. The conference offers valuable insights into the current state of the art, future directions for fundamental research, device development, and technology deployment across the globe.</p>

                                    <p>Our conference prides itself on delivering high-quality content and fostering international networking opportunities. ICIUS2024 is set to be the premier global event, seamlessly integrating academic excellence with industrial representations. In addition to the main conference program, attendees can expect enriching exhibitions and workshops.</p>

                                    <p>Researchers, scientists, engineers, and practitioners from diverse corners of the world will gather to exchange knowledge and expertise in the development and innovative applications of various unmanned systems, payloads, and accompanying systems. Accepted papers will undergo further review for potential post-conference publication in esteemed journals, including the International Journal of Intelligent Unmanned Systems (IJIUS), the Journal of Instrumentation, Automation and Systems (JIAS), the Journal of Robotics and Mechatronics (IJRM), and the Journal of Unmanned System Technology (JUST).</p>

                                    <p>As part of our commitment to recognizing outstanding contributions, any contributed or invited paper can be nominated for the ICIUS 2024 Best Conference Paper Award and the ICIUS 2024 Best Student Paper Award. The awards committee will assess the final evaluations, considering the presentations during ICIUS 2024.</p>

                                    <p>We extend a warm invitation to our colleagues worldwide to join us for this exceptional conference. We eagerly anticipate your participation in Bandung, Indonesia, for what promises to be an exciting and intellectually stimulating event!</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
            </Container>

        </div>
    </>
  );
};

export default MainAbout;