import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './NavBar.css';
import logo from '../assets/img/header-img.svg';
import navIcon0 from '../assets/img/nav-icon0.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  }

  return (
      <Navbar expand="lg" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`} variant="dark" expanded={expanded} onToggle={(exp) => setExpanded(exp)}>
        <Container>
          <Navbar.Brand as={HashLink} to="#home" className="brand" onClick={() => onUpdateActiveLink('home')}>
            <img src={logo} alt="Logo" className="brand-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-links">
              <Nav.Link as={HashLink} to="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link as={HashLink} to="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link as={HashLink} to="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link as={HashLink} to="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center">
              <div className="social-icons">
                 <a href="https://github.com/Sithumina0027" target="_blank" rel="noreferrer" aria-label="Github"><img src={navIcon0} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/sithumina-lanka-59521128b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.facebook.com/profile.php?id=61562384849922&mibextid=ZbWKwL" target="_blank" rel="noreferrer" aria-label="Facebook"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://www.instagram.com/mr.sithum_02?igsh=MTJkOXFwdjg5OGhxZA==" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={navIcon3} alt="Instagram" /></a>
              </div>

              <HashLink to="#connect" className="connect-link" onClick={() => onUpdateActiveLink('contact')}>
                <button className="vvd connect-btn"><span>Let's Connect</span></button>
              </HashLink>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}