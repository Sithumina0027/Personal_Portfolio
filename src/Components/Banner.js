import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import headerImg from "../assets/img/header-img.svg";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="banner-content">
              <h1 className="banner-title">
                Hi! I'm <span className="name-highlight">Sithumina Lanka</span>
              </h1>
              <p className="banner-subtitle">
                I am an Information Technology Undergraduate in General sir John Kotelawala Defence Univercity.
                Passionate about building beautiful and functional web experiences.
                Let's create something amazing together!
              </p>
              <HashLink to="#connect">
                <button className="banner-button">Let's Connect</button>
              </HashLink>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
            <img src={headerImg} alt="Header" className="banner-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
