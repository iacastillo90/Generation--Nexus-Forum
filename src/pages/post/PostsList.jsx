import "./PostsList.css";

import { useEffect, useState } from "react";

import axios from "axios";

function Post() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => { 
        
        const apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=10";

        const fetchPosts = async () => {
            try {
                const response = await axios.get(apiUrl);
                setPosts(response.data);
            } catch (err) {
                setErr(err);
                console.log("Error:", err);                               
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return(
        <>
            <h1>Posts</h1>
            
            {loading && <p>Cargando publicaciones...</p>}
            {err && <p>Ocurrió un error: {err.message}</p>}
            
            {!loading && !err && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Post;