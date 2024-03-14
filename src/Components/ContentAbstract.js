import React from 'react';
import { BsBoxArrowUpRight } from "react-icons/bs";
import {Container, Card, Button, Row, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Download from '../assets/file/TemplateAbstractICIUS2024rev3.docx';


const CardAbstract = ()=>{
    const email = 'icius2024@pptik.itb.ac.id';
    const mailtoLink = `mailto:${email}`;
  
    return (
        <div>
            <Container  className='p-5'>
                <Row>
                    <Col md={4}>
                        <Card className="text-center p-2"  style={{
                            border: 'none',
                            boxShadow: '5px 5px 0px 10px #445069' 
                    }}>
                            <Card.Body>
                                <Card.Text style={{
                                    textAlign: 'justify',
                                }}>
                                    The committee is receiving expression of interest (EOI) from the prospective participants. If you are interested in attending the conference, please submit your (extended) abstract using the link below
                                </Card.Text>
                                <Link style={{
                                    textDecoration: 'none',
                                }} to='https://docs.google.com/forms/d/e/1FAIpQLSe7pWyeIAN0FSCWJzHfVAPQvA5yKPg3xX2pnNKsAyVcTLDlRQ/viewform'>
                                    <Button className='bg-warning' style={{border: 'none'}}>
                                        Abstract Submission
                                    </Button>
                                </Link>
                                <p  class="mt-3" style={{fontSize: '12px', textAlign: 'justify', color: 'red'}}>
                                    <i>*When having problem uploading the abstract, the author can send the file to <Link to={mailtoLink} style={{color: 'red'}}>{email}</Link></i>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card className='px-4' style={{
                            border: 'none'
                        }}>
                            <Card.Body>
                                <Card.Text>
                                    The submitted document (1-3 pages long) can be in docx or PDF and contains the following elements:
                                    <ul>
                                        <li>Title of abstract</li>
                                        <li>Name of authors and their affiliations</li>
                                        <li>Abstract</li>
                                        <li>Keywords</li>
                                        <li>Introduction (can include necessary figures or tables)</li>
                                    </ul>
                                    <p>Please use the template below for submitting your abstract</p>
                                    Link : <Button variant="outline-info"><a className='text-decoration-none px-5' href={Download} download>Template Abstract</a></Button>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CardAbstract;