import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

function About() {
    return (
        <Container className="min-vh-100 d-flex align-items-center py-5" style={{ marginTop: '80px' }}>
            <Row className="w-100 align-items-center">
                <Col md={6} className="mb-5 mb-md-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>IDENTIFICATION LOG</p>
                        <h2 className="display-4 fw-bold mb-4 text-gradient">Who Am I?</h2>

                        <p className="lead text-light mb-4" style={{ lineHeight: '1.8' }}>
                            I am a Computer Science undergraduate at New L.J. Institute of Engineering and Technology (GTU).
                            I am deeply passionate about Artificial Intelligence, Natural Language Processing, and their real-world applications.
                        </p>

                        <p className="text-light opacity-75 mb-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                            While I enjoy Full Stack Development and exploring the cosmos, my core focus is developing expertise in machine learning and deep learning.
                            I recently completed an AI Internship with CSRBOX (IBM SkillsBuild), where I built a Climate Change Tracker using agentic AI. I'm driven by a curiosity to solve complex problems and build impactful systems.
                        </p>

                        <p className="text-light opacity-50 font-monospace" style={{ fontSize: '0.9rem' }}>
              // objective: build systems as resilient and <br />
              // elegant as the laws of physics governing our universe.
                        </p>
                    </motion.div>
                </Col>

                <Col md={5} className="offset-md-1">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        <Card
                            className="bg-transparent border-0 text-light"
                            style={{
                                borderRadius: '20px',
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                            }}
                        >
                            <Card.Body className="p-5">
                                <h4 className="mb-4 text-info fw-light">Current Trajectory</h4>

                                <div className="mb-4">
                                    <h6 className="text-uppercase text-light opacity-50 mb-1" style={{ fontSize: '0.8rem' }}>Education Level</h6>
                                    <p className="fs-5 mb-0">B.E. Computer Science</p>
                                    <small className="text-gradient">CGPA: 9.37/10 (GTU Rank #1 in Sem 3)</small>
                                </div>

                                <div className="mb-4">
                                    <h6 className="text-uppercase text-light opacity-50 mb-1" style={{ fontSize: '0.8rem' }}>Institution</h6>
                                    <p className="fs-5 mb-0">New L.J. Institute of Engineering & Tech.</p>
                                    <small className="text-info opacity-75">Gujarat Technological University</small>
                                </div>

                                <div className="mb-4">
                                    <h6 className="text-uppercase text-light opacity-50 mb-1" style={{ fontSize: '0.8rem' }}>Primary Focus</h6>
                                    <p className="fs-5 mb-0">AI / Machine Learning</p>
                                    <small className="text-light opacity-50">Natural Language Processing & Full Stack</small>
                                </div>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            </Row>
        </Container >
    );
}

export default About;
