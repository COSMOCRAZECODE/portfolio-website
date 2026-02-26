import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', msg: '' });

        try {
            const response = await fetch('http://localhost:5000/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ type: 'success', msg: 'Transmission successful. I will respond to your frequency shortly.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                let errorMsg = 'Transmission failed. Interferences detected in the network.';
                try {
                    const errorData = await response.json();
                    errorMsg = errorData.error || errorData;
                } catch (e) { }
                setStatus({ type: 'danger', msg: `Transmission failed: ${errorMsg}` });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ type: 'danger', msg: 'Server connection lost. Unable to establish contact.' });
        }
        setIsSubmitting(false);
    };

    return (
        <Container className="min-vh-100 py-5 d-flex flex-column justify-content-center" style={{ marginTop: '50px' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-100 mx-auto"
                style={{ maxWidth: '600px' }}
            >
                <div className="text-center mb-5">
                    <p className="text-uppercase text-info opacity-75 mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>COMMUNICATIONS CHANNEL</p>
                    <h2 className="display-4 fw-bold text-gradient mb-3">Establish Contact</h2>
                    <p className="text-light opacity-50">Transmit a secure message to my personal terminal.</p>
                </div>

                {status.msg && (
                    <Alert variant={status.type} className="bg-transparent border border-secondary text-light">
                        {status.msg}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit} className="p-4 p-md-5 rounded-4" style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                }}>
                    <Form.Group className="mb-4" controlId="formName">
                        <Form.Label className="text-light opacity-75 text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>Identification String</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-transparent border-bottom border-0 border-secondary text-light rounded-0 shadow-none"
                            style={{ backdropFilter: 'blur(5px)' }}
                            placeholder="Enter your name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formEmail">
                        <Form.Label className="text-light opacity-75 text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>Return Frequency (Email)</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-transparent border-bottom border-0 border-secondary text-light rounded-0 shadow-none"
                            style={{ backdropFilter: 'blur(5px)' }}
                            placeholder="Enter your email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formMessage">
                        <Form.Label className="text-light opacity-75 text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>Payload / Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-transparent border-bottom border-0 border-secondary text-light rounded-0 shadow-none"
                            style={{ backdropFilter: 'blur(5px)' }}
                            placeholder="Enter your message"
                        />
                    </Form.Group>

                    <Button
                        variant="outline-info"
                        type="submit"
                        className="w-100 rounded-pill py-3 text-uppercase fw-bold"
                        disabled={isSubmitting}
                        style={{ letterSpacing: '2px' }}
                    >
                        {isSubmitting ? 'Transmitting...' : 'Initiate Sequence'}
                    </Button>
                </Form>
            </motion.div>
        </Container>
    );
}

export default Contact;
