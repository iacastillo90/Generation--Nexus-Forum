import "./PostDetail.css";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

function PostDetail() {

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResponse = `https://jsonplaceholder.typicode.com/posts/${id}`;
                const authResponse = `https://jsonplaceholder.typicode.com/users/${postData.data.userId}`;
                
                const [ postData, authData] = await Promise.all([
                    axios.get(postResponse),
                    axios.get(authResponse)
                ]);
                
                setPost(postData.data);
                setAuthor(authData.data);   
                
            } catch (error) {
                setErr("Hubo un error al obtener el post" + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
        
    }, [id]);

    return (
        <>

            <Link to="/posts">⬅ Volver a la lista</Link>
            <h1> Post Detail</h1>

            {loading && <p>Cargando post...</p>}
            {err && <p>{err}</p>}
            
            {!loading && !err && post && (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <hr />
                    <small>Autor ID: {author ? author.name : "Cargando autor ..."} | Post ID: {post.id}</small>
                </div>
            )}
        </>
    );
}

export default PostDetail;
