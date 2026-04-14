import "./AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AboutUs() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(">>> TRANSMISIÓN ENCRIPTADA ENVIADA <<<");
        e.target.reset();
    };

    return (
        <Container className="my-5 about-container">
            <h1 className="mb-5 text-neon-cyan cyber-title">// ABOUT_ME</h1>
            
            <Row className="gy-5">
                {/* Developer Profile Column */}
                <Col lg={5}>
                    <Card className="hacker-card border-neon-cyan h-100">
                        <Card.Header className="bg-transparent border-bottom border-neon-cyan">
                            <h3 className="text-neon-green mb-0">&gt; DEVELOPER_PROFILE</h3>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center mb-4">
                                <div className="dev-avatar me-4">
                                    <span className="text-neon-cyan fs-2 fw-bold">IC</span>
                                </div>
                                <div>
                                    <h4 className="text-neon-green fw-bold mb-1">Iván Castillo</h4>
                                    <h6 className="text-neon-cyan mb-0">Lead Frontend Engineer</h6>
                                </div>
                            </div>
                            
                            <p className="text-muted-hacker terminal-text mb-4">
                                Arquitecto de interfaces y operador de la red descentralizada. Especializado en React, arquitecturas escalables y experiencias web de alta inmersión. 
                            </p>
                            
                            <div className="skills-matrix">
                                <h6 className="text-neon-cyan mb-3">// LOG_HABILIDADES</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="cyber-badge">React.js</span>
                                    <span className="cyber-badge">Vite</span>
                                    <span className="cyber-badge">JavaScript</span>
                                    <span className="cyber-badge">Bootstrap 5</span>
                                    <span className="cyber-badge">Git</span>
                                    <span className="cyber-badge">UI/UX</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                
                {/* Contact Form Column */}
                <Col lg={7}>
                    <div className="contact-terminal p-4 h-100">
                        <h3 className="text-neon-green mb-4">
                            <span className="blink-cursor">_ </span>REQUEST SECURE COMMS
                        </h3>
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-4" controlId="formName">
                                <Form.Label className="text-neon-cyan text-uppercase small letter-spacing-1">
                                    Identificador [Nombre]
                                </Form.Label>
                                <Form.Control 
                                    type="text" 
                                    className="cyber-input" 
                                    placeholder="Ingresa tu alias en la red..." 
                                    required 
                                />
                            </Form.Group>
                            
                            <Form.Group className="mb-4" controlId="formEmail">
                                <Form.Label className="text-neon-cyan text-uppercase small letter-spacing-1">
                                    Punto de Enlace [Email]
                                </Form.Label>
                                <Form.Control 
                                    type="email" 
                                    className="cyber-input" 
                                    placeholder="Operador@network.com..." 
                                    required 
                                />
                            </Form.Group>

                            <Form.Group className="mb-5" controlId="formMessage">
                                <Form.Label className="text-neon-cyan text-uppercase small letter-spacing-1">
                                    Mensaje Cifrado
                                </Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={4} 
                                    className="cyber-input" 
                                    placeholder="Escribe el cuerpo de tu transmisión..." 
                                    required 
                                />
                            </Form.Group>
                            
                            <Button 
                                variant="outline-neon" 
                                type="submit" 
                                className="cyber-btn w-100 py-3"
                            >
                                [ INICIAR TRANSMISIÓN ]
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
