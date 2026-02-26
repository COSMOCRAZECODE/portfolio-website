import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Learning() {
    // Array of books. Progress is pagesRead / totalPages.
    const books = [
        {
            title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
            author: "Aurélien Géron",
            status: "Reading",
            pagesRead: 200,
            totalPages: 856,
            thumbnail: "https://learning.oreilly.com/library/cover/9781098125967/250w/"
        }
    ];

    // Array of courses. Progress is modulesCompleted / totalModules.
    const courses = [
        {
            title: "The Web Developer Bootcamp 2026",
            provider: "Udemy",
            status: "Doing",
            modulesCompleted: 50,
            totalModules: 100,
            thumbnail: "https://img-c.udemycdn.com/course/480x270/625204_436a_3.jpg"
        },
        {
            title: "Generative AI Course With Langchain and Huggingface",
            provider: "Udemy",
            status: "Doing",
            modulesCompleted: 20,
            totalModules: 100,
            thumbnail: "https://img-c.udemycdn.com/course/480x270/6010764_b4b1_8.jpg"
        },
        {
            title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp",
            provider: "Udemy",
            status: "Doing",
            modulesCompleted: 15,
            totalModules: 100,
            thumbnail: "https://img-c.udemycdn.com/course/480x270/5993822_2c2a_7.jpg"
        },
        {
            title: "Python Data Structures & Algorithms + LEETCODE",
            provider: "Udemy",
            status: "Doing",
            modulesCompleted: 10,
            totalModules: 100,
            thumbnail: "https://img-c.udemycdn.com/course/480x270/4094340_0609_17.jpg"
        },
        {
            title: "Complete Computer Vision Bootcamp With PyTorch & TF",
            provider: "Udemy",
            status: "Doing",
            modulesCompleted: 5,
            totalModules: 100,
            thumbnail: "https://img-c.udemycdn.com/course/480x270/6278133_3630.jpg"
        }
    ];

    const listVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <Container className="min-vh-100 py-5" style={{ marginTop: '80px' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-5 text-center text-md-start"
            >
                <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>KNOWLEDGE ACQUISITION</p>
                <h2 className="display-4 fw-bold text-gradient">Continuous Learning</h2>
            </motion.div>

            <Row className="g-4 mb-5">
                <Col xs={12}>
                    <h3 className="text-light mb-4 d-flex align-items-center theme-text"><i className="bi bi-book me-2 text-info"></i> Books</h3>
                </Col>

                {books.map((book, index) => {
                    const progress = Math.round((book.pagesRead / book.totalPages) * 100);
                    const isFinished = book.status === "Finished";
                    return (
                        <Col lg={4} md={6} key={index}>
                            <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                                <Card className="bg-transparent border-0 h-100 theme-card" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', overflow: 'hidden' }}>
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <Card.Img variant="top" src={book.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h5 className="text-light theme-text mb-0">{book.title}</h5>
                                            <span className={`badge ${isFinished ? 'bg-success' : 'bg-info text-dark'}`}>{book.status}</span>
                                        </div>
                                        <p className="text-info opacity-75 mb-3" style={{ fontSize: '0.9rem' }}>{book.author}</p>
                                        <ProgressBar variant={isFinished ? "success" : "info"} now={progress} label={`${progress}%`} style={{ height: '10px' }} className="bg-dark border border-secondary" />
                                        <small className="text-light opacity-50 d-block mt-2 text-end theme-text" style={{ fontSize: '0.75rem' }}>{book.pagesRead} / {book.totalPages} pages</small>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    );
                })}
            </Row>

            <Row className="g-4">
                <Col xs={12}>
                    <h3 className="text-light mb-4 d-flex align-items-center theme-text"><i className="bi bi-laptop me-2 text-info"></i> Courses</h3>
                </Col>

                {courses.map((course, index) => {
                    const progress = Math.round((course.modulesCompleted / course.totalModules) * 100);
                    const isFinished = course.status === "Finished";
                    return (
                        <Col lg={4} md={6} key={index}>
                            <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                                <Card className="bg-transparent border-0 h-100 theme-card" style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '15px', overflow: 'hidden' }}>
                                    <div style={{ height: '150px', overflow: 'hidden' }}>
                                        <Card.Img variant="top" src={course.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <h5 className="text-light theme-text mb-0" style={{ fontSize: '1.1rem' }}>{course.title}</h5>
                                            <span className={`badge ${isFinished ? 'bg-success' : 'bg-info text-dark'}`}>{course.status}</span>
                                        </div>
                                        <p className="text-info opacity-75 mb-3" style={{ fontSize: '0.9rem' }}>{course.provider}</p>
                                        <ProgressBar variant={isFinished ? "success" : "info"} now={progress} label={`${progress}%`} style={{ height: '10px' }} className="bg-dark border border-secondary" />
                                        <small className="text-light opacity-50 d-block mt-2 text-end theme-text" style={{ fontSize: '0.75rem' }}>{course.modulesCompleted} / {course.totalModules} modules</small>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Learning;
