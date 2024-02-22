import React from 'react';
import imgHero from "../assets/img/hero.jpg";
import {Container, Table} from 'react-bootstrap';

const MainImportantDates = ()=>{
    return (
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
                        Important Dates
                </h1>
            </div>
            <Container className='p-5' style={{
                fontSize: '15px'
            }}>
                <Table class="table table-hover">
                    <tbody>
                        <tr>
                            <td>Extended Abstract submission :</td>
                            <td>
                                <h3 className='fs-6'>Mar 1, 2024</h3>
                            </td>
                        </tr>
                        <tr> 
                            <td>
                                Full paper submission :                          
                            </td>
                            <td>
                                <h3 className='fs-6'>Apr 1, 2024</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Acceptance notification :
                            </td>
                            <td>
                                <h3 className='fs-6'>May 1, 2024</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>Final paper submission : </td>
                            <td>
                                <h3 className='fs-6'>June 1, 2024</h3>
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

export default MainImportantDates;