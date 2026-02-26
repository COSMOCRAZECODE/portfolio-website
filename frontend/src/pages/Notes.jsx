import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Notes() {
    const notesData = [
        {
            title: "Machine Learning Fundamentals",
            topic: "AI / ML",
            description: "Personal notes covering regression, classification, cost functions, and gradient descent based on Andrew Ng's course.",
            date: "Jan 2024",
            icon: "bi-diagram-3",
            link: "/wip" // Replace with actual PDF link later
        },
        {
            title: "Advanced Neural Networks",
            topic: "Deep Learning",
            description: "Detailed architectures of CNNs, RNNs, and Transformers. Includes TensorFlow implementation snippets.",
            date: "Feb 2024",
            icon: "bi-cpu",
            link: "/wip"
        },
        {
            title: "System Design Patterns",
            topic: "Backend",
            description: "Scalability concepts, load balancing, caching strategies, and microservices vs monoliths.",
            date: "Mar 2024",
            icon: "bi-hdd-network",
            link: "/wip"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <Container className="min-vh-100 py-5" style={{ marginTop: '80px' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-5 text-center text-md-start"
            >
                <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>KNOWLEDGE REPOSITORY</p>
                <h2 className="display-4 fw-bold text-gradient mb-3">Study Notes</h2>
                <p className="text-light opacity-50" style={{ maxWidth: '700px' }}>
                    A curated collection of my personal notes from various courses, books, and independent research.
                    Available for reference and open-source learning.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                <Row className="g-4">
                    {notesData.map((note, index) => (
                        <Col lg={4} md={6} key={index}>
                            <motion.div variants={itemVariants} className="h-100">
                                <Card
                                    className="bg-transparent text-light h-100 theme-card border-0"
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        borderRadius: '15px'
                                    }}
                                >
                                    <Card.Body className="p-4 d-flex flex-column">
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <div
                                                className="d-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 text-info"
                                                style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}
                                            >
                                                <i className={`bi ${note.icon}`}></i>
                                            </div>
                                            <Badge bg="dark" className="border border-secondary text-light fw-normal opacity-75">
                                                {note.date}
                                            </Badge>
                                        </div>

                                        <Badge bg="info" className="text-dark align-self-start mb-3 fw-bold">
                                            {note.topic}
                                        </Badge>

                                        <Card.Title className="fw-bold mb-3 fs-4 text-light theme-text">{note.title}</Card.Title>

                                        <Card.Text className="text-light opacity-50 mb-4 theme-text" style={{ fontSize: '0.95rem', flexGrow: 1, lineHeight: '1.6' }}>
                                            {note.description}
                                        </Card.Text>

                                        <div className="mt-auto d-flex gap-2">
                                            <Button
                                                variant="outline-info"
                                                size="sm"
                                                href={note.link}
                                                target={note.link === '/wip' ? '_self' : '_blank'}
                                                rel="noopener noreferrer"
                                                className="px-4 rounded-pill fw-bold w-100"
                                            >
                                                <i className="bi bi-journal-text me-2"></i> Read Notes
                                            </Button>
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

export default Notes;
