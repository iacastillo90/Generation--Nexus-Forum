import "./AboutUs.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DeveloperProfileCard from "@/components/common/DeveloperProfileCard/DeveloperProfileCard";
import ContactTerminal from "@/components/common/ContactTerminal/ContactTerminal";

function AboutUs() {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(">>> TRANSMISIÓN ENCRIPTADA ENVIADA <<<");
        e.target.reset();
    };

    return (
        <Container className="my-5 about-container">
            <h1 className="mb-5 text-neon-cyan cyber-title">// ABOUT_ME</h1>
            
            <Row className="gy-5">
                <Col lg={5}>
                    <DeveloperProfileCard />
                </Col>
                
                <Col lg={7}>
                    <ContactTerminal onSubmit={handleFormSubmit} />
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
