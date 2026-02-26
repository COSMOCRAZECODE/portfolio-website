import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar({ activeTheme, setActiveTheme }) {
    const [expanded, setExpanded] = useState(false);

    const handleClose = () => setExpanded(false);

    return (
        <Navbar expanded={expanded} onToggle={setExpanded} bg="dark" variant="dark" expand="lg" fixed="top" style={{ background: 'rgba(5, 5, 16, 0.8)' }}>
            <Container>
                <Navbar.Brand as={Link} to="/" className="text-gradient fw-bold" onClick={handleClose}>Raj</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
                        <Nav.Link as={Link} to="/skills" onClick={handleClose}>Skills</Nav.Link>
                        <Nav.Link as={Link} to="/projects" onClick={handleClose}>Projects</Nav.Link>
                        <Nav.Link as={Link} to="/notes" onClick={handleClose}>Notes</Nav.Link>
                        <Nav.Link as={Link} to="/learning" onClick={handleClose}>Learning</Nav.Link>
                        <Nav.Link as={Link} to="/certifications" onClick={handleClose}>Certifications</Nav.Link>
                        <Nav.Link as={Link} to="/resume" onClick={handleClose}>Resume</Nav.Link>
                        <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contact</Nav.Link>

                        <NavDropdown title={<span className="text-info opacity-75"><i className="bi bi-palette me-1"></i>Theme: {activeTheme}</span>} id="theme-nav-dropdown" className="ms-lg-3" align="end" menuVariant="dark">
                            <NavDropdown.Item onClick={() => { setActiveTheme('starfield'); handleClose(); }} active={activeTheme === 'starfield'}>Starfield (Space)</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { setActiveTheme('minimalist'); handleClose(); }} active={activeTheme === 'minimalist'}>Minimalist (Clean)</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { setActiveTheme('quantum'); handleClose(); }} active={activeTheme === 'quantum'}>Quantum (Cyber)</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => { setActiveTheme('synthwave'); handleClose(); }} active={activeTheme === 'synthwave'}>Synthwave (80s)</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { setActiveTheme('neuralnet'); handleClose(); }} active={activeTheme === 'neuralnet'}>Neural Net (AI)</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
