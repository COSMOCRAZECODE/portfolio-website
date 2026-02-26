import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Certifications() {
    const certifications = [
        {
            title: "Supervised Machine Learning: Regression and Classification",
            issuer: "Andrew Ng, Coursera",
            date: "2024",
            description: "Built machine learning models in Python using NumPy and scikit-learn to predict and classify data.",
            link: "/certificates/supervised-ml.pdf",
            thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
        },
        {
            title: "Advanced Learning Algorithms",
            issuer: "Andrew Ng, Coursera",
            date: "2024",
            description: "Built and trained neural networks with TensorFlow and improved decision trees.",
            link: "/certificates/advanced-learning.pdf",
            thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
        },
        {
            title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
            issuer: "Andrew Ng, Coursera",
            date: "2024",
            description: "Implemented k-means, PCA, recommender systems, and reinforcement learning.",
            link: "/wip", // Placeholder for ongoing course
            thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80"
        },
        {
            title: "Neural Networks and Deep Learning",
            issuer: "Andrew Ng, Coursera",
            date: "2024",
            description: "Studied the foundational concepts of neural networks and deep learning.",
            link: "/certificates/neural-networks.pdf",
            thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80"
        },
        {
            title: "ML and Neural Networks Workshop",
            issuer: "IEEE, DAIICT",
            date: "Workshop",
            description: "Participated in a 4-day intensive workshop covering fundamentals of Machine Learning and Neural Networks.",
            link: "/certificates/ieee-workshop.pdf",
            thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
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
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <Container className="min-vh-100 py-5" style={{ marginTop: '80px' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-5 text-center text-md-start"
            >
                <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>ACCREDITATIONS</p>
                <h2 className="display-4 fw-bold text-gradient">Certifications</h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                <Row>
                    {certifications.map((cert, index) => (
                        <Col lg={4} md={6} key={index}>
                            <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="h-100">
                                <Card className="bg-transparent border-0 h-100 theme-card d-flex flex-column" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', overflow: 'hidden' }}>
                                    <div style={{ height: '220px', minHeight: '220px', overflow: 'hidden', position: 'relative', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Card.Img variant="top" src={cert.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1 }} />
                                    </div>
                                    <Card.Body className="d-flex flex-column">
                                        <h6 className="text-info opacity-75 mb-1" style={{ fontSize: '0.85rem' }}>{cert.date}</h6>
                                        <Card.Title className="fw-bold mb-2 fs-5 text-light theme-text">{cert.title}</Card.Title>
                                        <h6 className="text-gradient mb-3">{cert.issuer}</h6>
                                        <Card.Text className="text-light opacity-50 theme-text" style={{ fontSize: '0.9rem', flexGrow: 1 }}>
                                            {cert.description}
                                        </Card.Text>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-info btn-sm mt-3 align-self-start"
                                        >
                                            View Certificate
                                        </a>
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

export default Certifications;
