import { Container, Row, Col } from "react-bootstrap";
import navIcon0 from '../assets/img/nav-icon0.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h5>About</h5>
            <p>Full-stack developer passionate about creating beautiful and functional web experiences.</p>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#connect">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Follow Me</h5>
            <div className="footer-social">
               <a href="https://github.com/Sithumina0027" target="_blank" rel="noreferrer" aria-label="Github"><img src={navIcon0} alt="Github" /></a>
                              <a href="https://www.linkedin.com/in/sithumina-lanka-59521128b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
                              <a href="https://www.facebook.com/profile.php?id=61562384849922&mibextid=ZbWKwL" target="_blank" rel="noreferrer" aria-label="Facebook"><img src={navIcon2} alt="Facebook" /></a>
                              <a href="https://www.instagram.com/mr.sithum_02?igsh=MTJkOXFwdjg5OGhxZA==" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={navIcon3} alt="Instagram" /></a>
                           </div>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row>
          <Col xs={12} className="text-center footer-bottom">
            <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
