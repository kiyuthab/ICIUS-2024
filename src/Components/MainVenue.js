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
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
            </Container>
            
        </div>
    )
}

export default MainVenue;