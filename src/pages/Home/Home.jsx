import "./Home.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Hero from "@/components/common/Hero/Hero";
import PostCard from "@/components/common/PostCard/PostCard";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useFetch } from "@/hooks/useFetch";
import BannerCto from "@/components/common/Banner/BannerCto";

function Home() {
    const { data: posts, loading, err } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=6");

    return (
        <div className="home-container">
            <Hero />
            <BannerCto />

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