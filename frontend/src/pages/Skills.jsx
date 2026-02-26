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
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    const skillCategories = [
        {
            title: "AI, ML & Data Science",
            icon: "bi-robot",
            skills: [
                { name: "Python", icon: "bi-filetype-py", level: "Expert", useCase: "Used in 5+ projects" },
                { name: "Scikit-learn", icon: "bi-diagram-3", level: "Beginner", useCase: "Used in 3 projects" },
                { name: "NumPy / Pandas", icon: "bi-table", level: "Advanced", useCase: "Data manipulation" },
                { name: "PyTorch/TensorFlow", icon: "bi-layers", level: "Learning", useCase: "Currently learning" }
            ]
        },
        {
            title: "Backend & Systems",
            icon: "bi-hdd-network",
            skills: [
                { name: "Node.js", icon: "bi-server", level: "Learning", useCase: "Core APIs" },
                { name: "Flask", icon: "bi-lightning", level: "Intermediate", useCase: "Used in 2 projects" },
                { name: "C", icon: "bi-braces", level: "Advanced", useCase: "System-level dev" },
                { name: "SQL (SQLite/Postgres)", icon: "bi-database", level: "Intermediate", useCase: "Data persistence" }
            ]
        },
        {
            title: "Frontend & UI",
            icon: "bi-browser-edge",
            skills: [
                { name: "React", icon: "bi-moon-stars", level: "Learning", useCase: "SPA Development" },
                { name: "HTML / CSS", icon: "bi-filetype-html", level: "Advanced", useCase: "Styling & Layout" },
                { name: "Streamlit", icon: "bi-bar-chart", level: "Beginner", useCase: "Used in 3 projects" },
            ]
        },
        {
            title: "Tools & Deployment",
            icon: "bi-tools",
            skills: [
                { name: "Git / GitHub", icon: "bi-github", level: "Intermediate", useCase: "Version Control" },
                { name: "Render / Vercel", icon: "bi-cloud-arrow-up", level: "Learning", useCase: "Hosting / CI-CD" },
                { name: "Jupyter", icon: "bi-journal-code", level: "Advanced", useCase: "Notebooks / EDA" },
                { name: "Docker", icon: "bi-box-seam", level: "Planning", useCase: "Containerization" }
            ]
        }
    ];

    return (
        <Container className="min-vh-100 d-flex flex-column pt-5 pb-5" style={{ marginTop: '80px' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-5 text-center"
            >
                <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>CAPABILITY MATRIX</p>
                <h2 className="display-4 fw-bold text-gradient mb-3">Visual Tech Stack</h2>
                <p className="text-light opacity-50 mx-auto" style={{ maxWidth: '600px' }}>
                    A comprehensive overview of my technical proficiencies, categorized by domain and level of expertise.
                </p>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" animate="show" className="row g-4 justify-content-center">
                {skillCategories.map((category, index) => (
                    <Col lg={6} xl={5} key={index}>
                        <div
                            className="p-4 rounded-4 h-100 theme-card"
                            style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <h4 className="text-light mb-4 d-flex align-items-center border-bottom border-secondary pb-3">
                                <i className={`bi ${category.icon} text-info me-3 fs-3`}></i>
                                {category.title}
                            </h4>

                            <div className="d-flex flex-column gap-3">
                                {category.skills.map((skill, sIndex) => (
                                    <motion.div
                                        key={sIndex}
                                        variants={itemVariants}
                                        className="d-flex align-items-center justify-content-between p-3 rounded-3"
                                        style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.02)' }}
                                    >
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-dark border border-secondary" style={{ width: '40px', height: '40px' }}>
                                                <i className={`bi ${skill.icon} text-light opacity-75 fs-5`}></i>
                                            </div>
                                            <div>
                                                <div className="text-light fw-bold m-0" style={{ fontSize: '1.05rem' }}>{skill.name}</div>
                                                <div className="text-info opacity-75 m-0" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>{skill.useCase}</div>
                                            </div>
                                        </div>
                                        <Badge bg={
                                            skill.level === 'Expert' ? 'success' :
                                                skill.level === 'Advanced' ? 'info' :
                                                    skill.level === 'Intermediate' ? 'warning' : 'secondary'
                                        } className="bg-opacity-25 border text-light fw-normal rounded-pill px-3 py-2"
                                            style={{ backdropFilter: 'blur(5px)', borderColor: 'rgba(255,255,255,0.2) !important' }}
                                        >
                                            {skill.level}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </Col>
                ))}
            </motion.div>
        </Container>
    );
}

export default Skills;
