import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "C", "HTML", "CSS"]
        },
        {
            title: "Frameworks & Web",
            skills: ["Flask", "Streamlit", "React", "Node.js"]
        },
        {
            title: "AI, ML & Data Science",
            skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "NLP", "LLM APIs (Gemini)"]
        },
        {
            title: "Tools & Databases",
            skills: ["SQL", "Git / GitHub", "Render (Hosting)", "Jupyter"]
        }];

    return (
        <Container className="min-vh-100 d-flex flex-column pt-5" style={{ marginTop: '80px' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-5 text-center"
            >
                <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>CAPABILITY MATRIX</p>
                <h2 className="display-4 fw-bold text-gradient">Technical Arsenal</h2>
            </motion.div>

            <Row className="justify-content-center">
                {skillCategories.map((category, index) => (
                    <Col md={6} lg={5} key={index} className="mb-4">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-50px" }}
                            className="p-4 rounded-4 h-100"
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <h4 className="text-light opacity-75 mb-4 fw-light border-bottom border-secondary pb-3">{category.title}</h4>
                            <div className="d-flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div key={skillIndex} variants={itemVariants}>
                                        <Badge
                                            bg="dark"
                                            className="p-2 fw-normal text-light border border-secondary"
                                            style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}
                                        >
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Skills;
