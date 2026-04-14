import "./Home.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Hero from "@/components/common/Hero/Hero";
import PostCard from "@/components/common/PostCard/PostCard";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useFetch } from "@/hooks/useFetch";
import Banner from "@/components/common/Banner/Banner";

function Home() {
    const { data: posts, loading, err } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=6");

    return (
        <div className="home-container">
            <Hero />

            {/* Info Banner Section */}
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
            
            <Container className="my-5">
                <h2 className="mb-4 text-neon-cyan cyber-title">// ULTIMAS_TRANSMISIONES</h2>
                
                {loading && (
                    <div className="text-center my-5">
                        <Spinner animation="border" variant="success" className="neon-spinner" />
                        <p className="text-neon-green mt-3">Decodificando transmisiones...</p>
                    </div>
                )}
                
                {err && <p className="text-danger">Error del Sistema: {err}</p>}
                
                {!loading && !err && posts && (
                    <Row>
                        {posts.map((post) => (
                            <Col key={post.id} md={6} lg={4}>
                                <PostCard 
                                    id={post.id}
                                    title={post.title} 
                                    body={post.body} 
                                />
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
}

export default Home;