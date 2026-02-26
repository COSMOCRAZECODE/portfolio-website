import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

function WorkInProgress() {
    return (
        <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-dark overflow-hidden position-relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: -45 }}
                transition={{ duration: 0.8, type: "spring" }}
                style={{
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    color: 'rgba(255, 255, 255, 0.1)',
                    fontSize: '15vw',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    letterSpacing: '10px',
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}
            >
                Work In Progress
            </motion.div>

            <div className="text-center z-1">
                <h1 className="text-light display-3 fw-bold mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
                    System Updating
                </h1>
                <p className="text-info lead" style={{ letterSpacing: '2px' }}>
                    This module is currently under construction.
                </p>
                <a href="/projects" className="btn btn-outline-light mt-4 rounded-pill px-4">
                    Return to Projects
                </a>
            </div>
        </Container>
    );
}

export default WorkInProgress;
