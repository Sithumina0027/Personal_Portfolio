import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from  '../assets/img/photo_2026-01-26_21-24-16-removebg-preview.png';
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <div className="about-bx wow zoomIn">
              <h2>About Me</h2>
               <p className="section-subtitle">Get to know me better</p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
        <Col md={6} xs={12} className="my-5">
          <div className="about-img">
            <img src={aboutImg} alt="about" />
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className="about-text">
            <p>
              I am an Information Technology undergraduate with a strong foundation in software development and a growing interest in emerging technologies. My journey in tech began with curiosity and has developed into a commitment to building practical and impactful digital solutions.
            </p>
            <p>
              I have experience in both frontend and backend development and continuously work on improving my technical and problem-solving skills. I am particularly interested in contributing to innovative projects that create real-world value and enhance user experiences.
            </p>
            <Row className="about-list">
              <Col md={6} xs={12}>
                <div className="mx-2">
                  <h5>Education</h5>
                  <p>Bachelor of Information Technology - KDU</p>
                  <p className="education-year">2023 to 2026 (Expected)</p>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className="mx-2">
                  <h5>Focus Areas</h5>
                  <ul className="focus-list">
                    <li>Web Development</li>
                    <li>QA Engineering</li>
                    <li>Business Analysis</li>
                    <li>Network Administration</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      </Container>
    </section>
  );
}
