import "./PostDetail.css";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import PostDetailCard from "@/components/common/PostDetailCard/PostDetailCard";

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchPostAndAuthor = async () => {
            try {
                const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setPost(postResponse.data);
                
                const authResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${postResponse.data.userId}`);
                setAuthor(authResponse.data);   
                
            } catch (error) {
                setErr("System Error reading post: " + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPostAndAuthor();
    }, [id]);

    return (
        <Container className="my-5">
            <div className="mb-4">
                <Link to="/posts" className="text-neon-cyan text-decoration-none cyber-link">
                    &lt; Volver a Publicaciones
                </Link>
            </div>
            
            <h1 className="mb-4 text-neon-green cyber-title">System.Post_Detail</h1>

            {loading && (
                <div className="text-center my-5">
                    <Spinner animation="border" variant="success" className="neon-spinner" />
                    <p className="text-neon-green mt-3">Desencriptando archivo...</p>
                </div>
            )}
            
            {err && <p className="text-danger">{err}</p>}
            
            {!loading && !err && post && (
                <PostDetailCard post={post} author={author} />
            )}
        </Container>
    );
}

export default PostDetail;
