import React from 'react-bootstrap';
import {Card, Container, Row, Col} from 'react-bootstrap';
import imgHero from '../assets/img/hero.jpg';
import venue1 from '../assets/venue1.jpg';
import venue2 from '../assets/venue2.jpg';

const MainVenue = ()=>{
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
                        Venue
                </h1>
            </div>
            <Container className='p-5'>
                        <Card className='mb-4' style={{border: 'none'}}>
                            <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Img style={{
                                        borderRadius: '0px 100px 0 100px',
                                        boxShadow: '1px 5px 1px 5px #445069'
                                    }} variant="bottom" src={venue1} />
                                </Col>
                                <Col>
                                    <Card.Text>
                                        Institut Teknologi Bandung, Jl. Ganesa No. 10, Bandung, Indonesia. 40132.
                                    </Card.Text>
                                    <div className="iframe">
                                        <iframe style={{border: '0', width: '100%', height: '270px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.000916633059!2d107.60778432367138!3d-6.890492143108564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65767c9b183%3A0x2478e3dcdce37961!2sInstitut%20Teknologi%20Bandung!5e0!3m2!1sid!2sid!4v1709612784920!5m2!1sid!2sid" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{border: 'none'}}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Img style={{
                                            borderRadius: '0px 100px 0 100px',
                                            boxShadow: '1px 5px 1px 5px #445069'
                                        }}variant="bottom" src={venue2} />
                                    </Col>
                                    <Col>
                                        <Card.Text>
                                            Pullman Hotel, Jl. Diponegoro No.27, Bandung, Indonesia. 40115.
                                        </Card.Text>
                                        <div className="iframe">
                                            <iframe style={{border: '0', width: '100%', height: '270px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9163606558823!2d107.6148749736715!3d-6.9006059930986705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7efa5fc13fd%3A0x4601c4c3db0a0f4d!2sPullman%20Bandung%20Grand%20Central!5e0!3m2!1sid!2sid!4v1709613136037!5m2!1sid!2sid" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
            </Container>
            
        </div>
    )
}

export default MainVenue;