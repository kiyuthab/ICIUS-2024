import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-light py-2"
        style={{
            backgroundColor: "#445069"
        }}
    >
      <Container>
        <Row>
          <Col className="text-center mt-3">
            <p>Copyright &copy; ICIUS 2024. All right reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
