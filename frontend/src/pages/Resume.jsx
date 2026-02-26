import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Resume() {
    return (
        <Container className="min-vh-100 py-5 d-flex flex-column align-items-center justify-content-center" style={{ marginTop: '50px' }}>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-100 text-center"
                style={{ maxWidth: '800px' }}
            >
                <div>
                    <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>PERSONNEL FILE</p>
                    <h2 className="display-4 fw-bold mb-4 text-gradient">Curriculum Vitae</h2>
                    <p className="lead text-light opacity-75 mb-5 mx-auto theme-text" style={{ maxWidth: '600px', lineHeight: '1.8' }}>
                        Review my full professional history, technical skills, and educational background.
                    </p>

                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4">
                        <Button
                            variant="outline-info"
                            size="lg"
                            href="/raj_gohel_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-pill fw-bold"
                            style={{ letterSpacing: '1px', backdropFilter: 'blur(5px)' }}
                        >
                            <i className="bi bi-eye me-2"></i> View Resume
                        </Button>
                        <Button
                            variant="info"
                            size="lg"
                            href="/raj_gohel_resume.pdf"
                            download="Raj_Gohel_Resume.pdf"
                            className="px-5 py-3 rounded-pill fw-bold shadow-lg text-dark"
                            style={{ letterSpacing: '1px' }}
                        >
                            <i className="bi bi-download me-2"></i> Download PDF
                        </Button>
                    </div>

                    <p className="text-secondary" style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                        <i className="bi bi-clock-history me-1"></i> Last Updated: February 2026
                    </p>
                </div>
            </motion.div>
        </Container>
    );
}

export default Resume;
