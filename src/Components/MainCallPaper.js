import React from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import { FaCloudDownloadAlt } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import icius1 from "../assets/icius1.jpg";
import icius2 from "../assets/icius2.jpg";
import imgHero from "../assets/img/hero.jpg";

const MainCallPaper = ()=>{

    const handleDownload = () => {
        // Membuat objek yang berisi data URL gambar
        const image1 = icius1;
        const image2 = icius2;
    
        // Membuat elemen anchor untuk mengunduh file
        const link1 = document.createElement('a');
        link1.href = image1;
        link1.download = 'icius1.jpg';
    
        const link2 = document.createElement('a');
        link2.href = image2;
        link2.download = 'icius2.jpg';
    
        // Menambahkan link ke dalam dokumen
        document.body.appendChild(link1);
        document.body.appendChild(link2);
    
        // Mengunduh kedua gambar setelah ditambahkan ke dalam dokumen
        link1.click();
        link2.click();
    
        // Menghapus elemen setelah pengunduhan selesai
        document.body.removeChild(link1);
        document.body.removeChild(link2);
    };
    

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
                        Call For Paper
                </h1>
            </div>
            <Container className='p-5'>
                <Button onClick={handleDownload} className='d-flex justify-center m-auto btn-light'>Download<FaCloudDownloadAlt className='ms-2 my-1'/></Button>
            <div className='my-5' style={{
                    backgroundColor: "rgb(255, 221, 147, 0.6)",
                    height: '2px',
                    borderRadius: '5px',
                }}></div>
                <Row>
                    <Col>
                        <Card className="]text-white">
                            <Card.Img src={icius1} alt="Card image" />
                        </Card>
                    </Col>
                    <Col>
                    <Card className="text-white">
                            <Card.Img src={icius2} alt="Card image" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainCallPaper;