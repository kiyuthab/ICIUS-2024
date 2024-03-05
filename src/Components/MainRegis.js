import React from 'react';
import {Table, Container} from 'react-bootstrap';
import imgHero from "../assets/img/hero.jpg";

const MainRegis = () =>{
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
                        Registration Fee
                </h1>
            </div>
            <Container className='p-5' style={{
                fontSize: '15px'
            }}>
                <Table bordered>
                    <thead className='table-warning'>
                        <tr>
                            <th>Onsite Presentation</th>
                            <th>Online Presentation</th>
                            <th>Local</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <td>
                                <h3 className='fs-6 pb-5'>Regular : </h3>
                                <p>USD 350* / USD 400</p>
                            </td>
                            <td>
                                <h3 className='fs-6 pb-5'>Regular : </h3>
                                <p>USD 175* / USD 200</p>
                            </td>
                            <td>
                                <h3 className='fs-6 pb-5'>Regular : </h3>
                                <p>IDR 2.500.000,00* / IDR 3.500.000,00</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h3 className='fs-6 pb-5'>Student : </h3>
                                <p>USD 175* / USD 200</p>
                            </td>
                            <td>
                                <h3 className='fs-6 pb-5'>Student : </h3>
                                <p>USD 100* / USD 125</p>
                            </td>
                            <td>
                                <h3 className='fs-6 pb-5'>Student : </h3>
                                <p>IDR 1.000.000,00* / IDR 1.500.000,00</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <div className='my-5' style={{
                    backgroundColor: "rgb(255, 221, 147, 0.6)",
                    height: '2px',
                    borderRadius: '5px',
                }}></div>
                
            </Container>
        </div>
    )
}

export default MainRegis;