import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container className="vh-100 d-flex align-items-center justify-content-center text-center" style={{ paddingTop: '80px', position: 'relative' }}>

            {/* Decorative blurred orbit lines for space effect */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: 'min(600px, 100vw)', height: 'min(600px, 100vw)', borderRadius: '50%', border: '1px solid rgba(187, 134, 252, 0.1)',
                boxShadow: '0 0 100px rgba(187, 134, 252, 0.05)', zIndex: -1
            }}></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <Row>
                    <Col>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-uppercase tracking-wider mb-2 text-info opacity-75"
                            style={{ letterSpacing: '3px', fontSize: '0.9rem' }}
                        >
                            SYSTEM ONLINE
                        </motion.p>

                        <h1 className="display-1 fw-bold mb-3 text-white" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                            Raj Gohel
                        </h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="h3 text-light opacity-75 mb-4 fw-light"
                        >
                            Computer Science Undergraduate | <span className="text-gradient fw-normal">AI & NLP Enthusiast</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 1 }}
                            className="lead text-light opacity-50 mx-auto mb-5"
                            style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.8' }}
                        >
                            Passionate about Artificial Intelligence and Natural Language Processing.
                            Currently engineering the future through machine learning and deep learning innovations.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="d-flex flex-column flex-sm-row justify-content-center gap-3 gap-sm-4 px-3 px-sm-0"
                        >
                            <Button as={Link} to="/projects" variant="outline-info" size="lg" className="px-4 px-sm-5 rounded-pill" style={{ backdropFilter: 'blur(5px)' }}>
                                Initialize Projects
                            </Button>
                            <Button as={Link} to="/contact" variant="outline-light" size="lg" className="px-4 px-sm-5 rounded-pill opacity-75 theme-outline-btn">
                                Establish Contact
                            </Button>
                        </motion.div>
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
}

export default Home;
