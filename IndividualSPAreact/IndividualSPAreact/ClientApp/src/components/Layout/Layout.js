import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

const layout = props => {
  return (
    <React.Fragment>
      <Container className="wrapper" fluid>
        <Row>
          <NavBar />
        </Row>
        <Row>{props.children}</Row>
      </Container>
      <footer className="footer text-center">
        <div className="container">
          <Row>
            <Col md={6}>
              <p className="footer-text-title">
                Individuel Oppgave Webapplikasjoner SPA(react)
              </p>
            </Col>
            <Col md={6}>
              <p className="footer-text-name">
                Laget av Nikita Petrovs s325918
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default layout;
