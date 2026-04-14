import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactTerminal({ onSubmit }) {
    
    // Si no pasan función, usa una por defecto
    const handleSubmit = onSubmit || ((e) => {
        e.preventDefault();
        alert(">>> TRANSMISIÓN ENCRIPTADA ENVIADA <<<");
        e.target.reset();
    });

    return (
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
    );
}

export default ContactTerminal;
