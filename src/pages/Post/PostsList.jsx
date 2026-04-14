import "./PostsList.css";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import PostCard from "@/components/common/PostCard/PostCard";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useFetch } from "@/hooks/useFetch";
import PaginationItems from "@/components/common/Pagination/PaginationItems";

function Post() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // JSONPlaceholder tiene 100 posts, a 10 por página son 10.
    
    const { data: posts, loading, err } = useFetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`);

    const handlePageChange = (pageNumber) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(pageNumber);
    };

    return(
        <Container className="my-5">
            <h1 className="mb-4 text-neon-green cyber-title">System.Publicaciones</h1>
            
            {loading && (
                <div className="text-center my-5">
                    <Spinner animation="border" variant="success" className="neon-spinner" />
                    <p className="text-neon-green mt-3">Descargando paquetes de datos...</p>
                </div>
            )}
            {err && <p className="text-danger">Error del Sistema: {err}</p>}
            
            {!loading && !err && posts && (
                <>
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

                    <div className="d-flex justify-content-center mt-5">
                        <PaginationItems 
                            currentPage={currentPage} 
                            totalPages={totalPages} 
                            onPageChange={handlePageChange} 
                        />
                    </div>
                </>
            )}
        </Container>
    );
}

export default Post;