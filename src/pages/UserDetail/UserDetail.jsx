import "./UserDetail.css";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

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
                setErr("Hubo un error al obtener el Usuario: " + error.message)
            } finally {
                setLoading(false);
            }
        };
        
        fetchUser();
        
    }, [userId]);

    return(

        <>
            <h1>User Detail</h1>
        
            { loading && <p>Cargando informacion ...</p>}
            {err && <p>{err}</p>}

            {user && (
                <div className="user-detail">
                    <h3>{user.name}</h3>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Telefono: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>City: {user.address.city}</p>
                    <p>Street: {user.address.street}</p>
                    <p>Suite: {user.address.suite}</p>
                    <p>ZipCode: {user.address.zipcode}</p>
                    <p>Latitud: {user.address.geo.lat}</p>
                    <p>Longitud: {user.address.geo.lng}</p>
                    <p>Company Name: {user.company.name}</p>
                    <p>Company Catch Phrase: {user.company.catchPhrase}</p>
                    <p>Company BS: {user.company.bs}</p>
                </div>
            )}

            {posts.length > 0 && (
                <div>
                    <h2>Posts</h2>
                    {posts.map((post) => (
                        <div key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </div>
                    ))}
                </div>
            )}
        </>

    );
}

export default UserDetail;
