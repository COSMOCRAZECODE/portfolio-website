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

                    <Button
                        variant="info"
                        size="lg"
                        href="/raj_gohel_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-pill fw-bold shadow-lg"
                        style={{ letterSpacing: '1px' }}
                    >
                        <i className="bi bi-download me-2"></i> Download / View Resume
                    </Button>
                </div>
            </motion.div>
        </Container>
    );
}

export default Resume;
