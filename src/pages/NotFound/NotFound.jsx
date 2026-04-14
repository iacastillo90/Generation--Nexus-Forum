import "./NotFound.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <Container className="notfound-container d-flex align-items-center justify-content-center text-center my-5">
            <Row>
                <Col>
                    <div className="mb-4">
                        <span className="glitch-text" data-text="404">404</span>
                    </div>
                    <h2 className="text-neon-cyan cyber-title mb-4">// ERROR DEL SISTEMA</h2>
                    <p className="text-muted-hacker terminal-text d-inline-block text-start mb-5 fs-5">
                        <span className="text-danger">&gt;</span> ALERTA: Ruta no encontrada en el servidor.<br/>
                        <span className="text-danger">&gt;</span> DATOS: Posible sector corrupto o enlace caído.<br/>
                        <span className="text-neon-green">&gt;</span> ACCIÓN_SUGERIDA: Abortar y volver a la raíz.
                    </p>
                    <div className="mt-2">
                        <Link to="/">
                            <button className="btn btn-outline-neon cyber-btn px-5 py-3">
                                [ REINICIAR AL INICIO ]
                            </button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default NotFound;