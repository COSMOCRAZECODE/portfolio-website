import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="mt-auto py-4" style={{ backgroundColor: 'rgba(5, 5, 16, 0.9)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="text-light opacity-50 mb-0" style={{ fontSize: '0.9rem' }}>
                            &copy; {new Date().getFullYear()} Raj Gohel. All rights reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            {/* --- SOCIAL LINKS START --- */}
                            {/* To update your social links, replace the URL inside the href="..." quotes below with your actual profile URL! */}

                            {/* GitHub Link */}
                            <a href="https://github.com/cosmocrazecode" target="_blank" rel="noopener noreferrer" className="text-light opacity-75 custom-hover" title="GitHub">
                                <i className="bi bi-github fs-5"></i>
                            </a>

                            {/* LinkedIn Link */}
                            <a href="https://linkedin.com/in/rajthespaceman" target="_blank" rel="noopener noreferrer" className="text-light opacity-75 custom-hover" title="LinkedIn">
                                <i className="bi bi-linkedin fs-5"></i>
                            </a>

                            {/* Instagram Link (Update the href below!) */}
                            <a href="https://instagram.com/raj_gohel_20" target="_blank" rel="noopener noreferrer" className="text-light opacity-75 custom-hover" title="Instagram">
                                <i className="bi bi-instagram fs-5"></i>
                            </a>

                            {/* Facebook Link (Update the href below!) */}
                            <a href="https://www.facebook.com/profile.php?id=100017191690826" target="_blank" rel="noopener noreferrer" className="text-light opacity-75 custom-hover" title="Facebook">
                                <i className="bi bi-facebook fs-5"></i>
                            </a>

                            {/* Email Link */}
                            <a href="mailto:rajkishan.gohel@gmail.com" className="text-light opacity-75 custom-hover" title="Email Me">
                                <i className="bi bi-envelope fs-5"></i>
                            </a>
                            {/* --- SOCIAL LINKS END --- */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
