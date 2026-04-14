import "./UserDetail.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import PostCard from "@/components/common/PostCard/PostCard";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDetailCard from "@/components/common/UserDetailCard/UserDetailCard";

function UserDetail() {
    
    const { userId } = useParams();
    const [ user, setUser] = useState(null);
    const [ posts, setPosts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ err, setErr ] = useState(null);

    useEffect(() => {

        const fetchUser = async () => {
            try{
                
                const userResponse = `https://jsonplaceholder.typicode.com/users/${userId}`;
                const postsResponse = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
                
                const [ userData, postsData] = await Promise.all([
                    axios.get(userResponse),
                    axios.get(postsResponse)
                ]);

                setPosts(postsData.data);
                setUser(userData.data);

            } catch(error) {
                setErr("System Error fetching User: " + error.message)
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
        
    }, [userId]);

    return(
        <Container className="my-5">
            <h1 className="text-neon-cyan cyber-title mb-4">Command_Line: User_Profile</h1>
        
            { loading && (
                <div className="text-center my-5">
                    <Spinner animation="border" variant="success" className="neon-spinner" />
                    <p className="text-neon-green mt-3">Syncing data...</p>
                </div>
            )}
            {err && <p className="text-danger">{err}</p>}

            <UserDetailCard user={user} />

            {posts.length > 0 && (
                <div>
                    <h2 className="text-neon-cyan mb-4">_Author_Logs</h2>
                    <Row>
                        {posts.map((post) => (
                            <Col md={6} lg={4} key={post.id}>
                                <PostCard 
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </Container>
    );
}

export default UserDetail;
