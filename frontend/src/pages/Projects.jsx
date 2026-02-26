import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <Container className="min-vh-100 py-5" style={{ marginTop: '80px' }}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-5 text-center text-md-start"
            >
                <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>MISSION LOG</p>
                <h2 className="display-4 fw-bold text-gradient">Projects / Expeditions</h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <Row>
                    {projectsData.map((project, index) => (
                        <Col lg={4} md={6} className="mb-4" key={index}>
                            <motion.div variants={itemVariants} className="h-100">
                                <Card
                                    as={Link}
                                    to={`/projects/${project.id}`}
                                    className="bg-transparent text-light h-100 project-card text-decoration-none"
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: '15px',
                                        background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                                        border: project.status === "Currently Developing" ? '1px solid rgba(236, 72, 153, 0.4)' : '1px solid rgba(255,255,255,0.05)',
                                        boxShadow: project.status === "Currently Developing" ? '0 0 20px rgba(236, 72, 153, 0.1)' : '0 4px 15px 0 rgba(0, 0, 0, 0.2)',
                                        backdropFilter: 'blur(5px)',
                                        position: 'relative'
                                    }}
                                >
                                    {project.status === "Currently Developing" && (
                                        <div className="position-absolute top-0 end-0 m-3 z-3">
                                            <Badge bg="danger" className="border border-danger px-3 py-2 rounded-pill shadow" style={{ letterSpacing: '1px' }}>
                                                <i className="bi bi-tools me-2"></i>Currently Developing
                                            </Badge>
                                        </div>
                                    )}
                                    <div
                                        className="w-100 position-relative"
                                        style={{
                                            height: '180px',
                                            backgroundColor: 'rgba(0,0,0,0.3)',
                                            borderTopLeftRadius: '15px',
                                            borderTopRightRadius: '15px',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <Card.Img src={project.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                                    </div>

                                    <Card.Body className="d-flex flex-column p-4">
                                        <Card.Title className="fw-bold mb-3 fs-4">{project.title}</Card.Title>
                                        <Card.Text className="text-light opacity-75 mb-4" style={{ fontSize: '0.95rem', flexGrow: 1 }}>
                                            {project.description}
                                        </Card.Text>

                                        <div className="mb-4 d-flex flex-wrap gap-2">
                                            {project.techStack.map((tech, i) => (
                                                <Badge pill bg="dark" className="border border-secondary fw-normal text-light opacity-75" key={i}>
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
                                            <span className="text-info text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 'bold' }}>
                                                View Details <i className="bi bi-arrow-right ms-1"></i>
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </motion.div>
        </Container>
    );
}

export default Projects;
