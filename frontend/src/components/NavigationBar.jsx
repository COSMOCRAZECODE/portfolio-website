import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar({ activeTheme, setActiveTheme }) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ background: 'rgba(5, 5, 16, 0.8)' }}>
            <Container>
                <Navbar.Brand as={Link} to="/" className="text-gradient fw-bold">Raj</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/learning">Learning</Nav.Link>
                        <Nav.Link as={Link} to="/certifications">Certifications</Nav.Link>
                        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                        <NavDropdown title={<span className="text-info opacity-75"><i className="bi bi-palette me-1"></i>Theme: {activeTheme}</span>} id="theme-nav-dropdown" className="ms-lg-3" align="end" menuVariant="dark">
                            <NavDropdown.Item onClick={() => setActiveTheme('starfield')} active={activeTheme === 'starfield'}>Starfield (Space)</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setActiveTheme('minimalist')} active={activeTheme === 'minimalist'}>Minimalist (Clean)</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setActiveTheme('quantum')} active={activeTheme === 'quantum'}>Quantum (Cyber)</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
