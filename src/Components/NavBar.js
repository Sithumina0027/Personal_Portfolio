import { useState, useEffect, useRef } from "react";
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
  const navRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateScrolled = () => {
      const shouldScroll = window.scrollY > 50;
      setScrolled((current) => (current === shouldScroll ? current : shouldScroll));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // set CSS var for navbar height so scroll offsets are accurate
  useEffect(() => {
    const setNavHeight = () => {
      try {
        const height = navRef.current ? navRef.current.getBoundingClientRect().height : 76;
        document.documentElement.style.setProperty('--navbar-height', `${Math.ceil(height)}px`);
      } catch (e) {
        document.documentElement.style.setProperty('--navbar-height', '76px');
      }
    };

    setNavHeight();
    window.addEventListener('resize', setNavHeight, { passive: true });
    return () => window.removeEventListener('resize', setNavHeight);
  }, []);

  // robust scroll helper used by HashLink so offset accounts for navbar and avoids jumpiness
  const scrollWithOffset = (el) => {
    if (!el) return;
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 76;
    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
    const target = Math.max(0, elementTop - navHeight + 8); // small extra offset
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  }

  return (
      <Navbar ref={navRef} expand="lg" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`} variant="dark" expanded={expanded} onToggle={(exp) => setExpanded(exp)}>
        <Container>
          <Navbar.Brand as={HashLink} to="#home" className="brand" onClick={() => onUpdateActiveLink('home')} scroll={scrollWithOffset}>
            <img src={logo} alt="Logo" className="brand-logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-links">
              <Nav.Link as={HashLink} to="#home" scroll={scrollWithOffset} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link as={HashLink} to="#about" scroll={scrollWithOffset} className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link as={HashLink} to="#skills" scroll={scrollWithOffset} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link as={HashLink} to="#projects" scroll={scrollWithOffset} className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center">
              <div className="social-icons">
                 <a href="https://github.com/Sithumina0027" target="_blank" rel="noreferrer" aria-label="Github"><img src={navIcon0} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/sithumina-lanka-59521128b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.facebook.com/profile.php?id=61562384849922&mibextid=ZbWKwL" target="_blank" rel="noreferrer" aria-label="Facebook"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://www.instagram.com/mr.sithum_02?igsh=MTJkOXFwdjg5OGhxZA==" target="_blank" rel="noreferrer" aria-label="Instagram"><img src={navIcon3} alt="Instagram" /></a>
              </div>

              <HashLink to="#connect" className="connect-link" onClick={() => onUpdateActiveLink('contact')} scroll={scrollWithOffset}>
                <button className="vvd connect-btn"><span>Let's Connect</span></button>
              </HashLink>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}