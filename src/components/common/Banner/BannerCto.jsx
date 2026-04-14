import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BannerCto() {

    return (
        <div className="info-banner bg-black border-bottom border-neon-cyan py-4">
            <Container>
                <Row className="text-center align-items-center flex-column flex-md-row gap-4 gap-md-0">
                    <Col md={4} className="border-end border-dark">
                        <h4 className="text-neon-cyan mb-2 fw-bold">100+</h4>
                        <span className="text-muted-hacker text-uppercase cyber-subtitle small">Nodos Activos</span>
                    </Col>
                    <Col md={4} className="border-end border-dark">
                        <h4 className="text-neon-green mb-2 fw-bold">AES-256</h4>
                        <span className="text-muted-hacker text-uppercase cyber-subtitle small">Cifrado Nativo</span>
                    </Col>
                    <Col md={4}>
                        <h4 className="text-white mb-2 fw-bold">24/7</h4>
                        <span className="text-muted-hacker text-uppercase cyber-subtitle small">Uptime Garantizado</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BannerCto;