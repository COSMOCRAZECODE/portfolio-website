import { Container, Row, Col, Badge, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

function ProjectDetails() {
    const { projectId } = useParams();
    const project = projectsData.find(p => p.id === projectId);

    if (!project) {
        return (
            <Container className="min-vh-100 py-5 d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h2 className="text-light">Project Not Found</h2>
                    <Button as={Link} to="/projects" variant="outline-info" className="mt-3 rounded-pill">
                        Return to Projects
                    </Button>
                </div>
            </Container>
        );
    }

    return (
        <Container className="min-vh-100 py-5" style={{ marginTop: '80px' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-4">
                    <Button as={Link} to="/projects" variant="link" className="text-info text-decoration-none p-0 mb-3 d-inline-flex align-items-center">
                        <i className="bi bi-arrow-left me-2"></i> Back to Projects
                    </Button>
                    <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>PROJECT ARCHIVE</p>
                    <h1 className="display-4 fw-bold text-gradient mb-3">{project.title}</h1>

                    <div className="mb-4 d-flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                            <Badge pill bg="dark" className="border border-secondary fw-normal text-light opacity-75 px-3 py-2" key={i}>
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Video / Placeholder Section */}
                <div className="mb-5 position-relative rounded-4 overflow-hidden" style={{ width: '100%', paddingTop: '56.25%', background: '#000', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {project.videoUrl ? (
                        <iframe
                            src={project.videoUrl}
                            title={`${project.title} Demo`}
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center">
                            <img src={project.videoPlaceholder || project.thumbnail} alt="Work in progress demo" className="w-100 h-100" style={{ objectFit: 'cover', opacity: 0.4 }} />
                            <div className="position-absolute text-center" style={{ backdropFilter: 'blur(5px)', padding: '20px', borderRadius: '15px', background: 'rgba(0,0,0,0.5)' }}>
                                <i className="bi bi-play-circle text-light opacity-50 display-1 mb-2"></i>
                                <h4 className="text-light fw-bold" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>Demo Video</h4>
                                <p className="text-info mb-0">Work in Progress</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Try It Action */}
                <div className="d-flex justify-content-center mb-5">
                    {project.tryItLink && (
                        <Button
                            variant="info"
                            size="lg"
                            href={project.tryItLink}
                            target={project.tryItLink === '/wip' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-pill fw-bold shadow-lg text-uppercase"
                            style={{ letterSpacing: '1px' }}
                        >
                            <i className="bi bi-rocket-takeoff me-2"></i> Launch Application
                        </Button>
                    )}
                </div>

                {/* Details Section */}
                <Row className="g-4">
                    <Col lg={4}>
                        <Card className="bg-transparent text-light h-100 border-0" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px' }}>
                            <Card.Body className="p-4">
                                <h4 className="text-info mb-3 d-flex align-items-center"><i className="bi bi-bullseye me-2"></i> Problem Statement</h4>
                                <p className="opacity-75" style={{ lineHeight: '1.8' }}>{project.details.problem}</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className="bg-transparent text-light h-100 border-0" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px' }}>
                            <Card.Body className="p-4">
                                <h4 className="text-info mb-3 d-flex align-items-center"><i className="bi bi-database me-2"></i> Data Utilization</h4>
                                <p className="opacity-75" style={{ lineHeight: '1.8' }}>{project.details.dataUsed}</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className="bg-transparent text-light h-100 border-0" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px' }}>
                            <Card.Body className="p-4">
                                <h4 className="text-info mb-3 d-flex align-items-center"><i className="bi bi-tools me-2"></i> Challenges Faced</h4>
                                <p className="opacity-75" style={{ lineHeight: '1.8' }}>{project.details.problemsFaced}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </motion.div>
        </Container>
    );
}

export default ProjectDetails;
