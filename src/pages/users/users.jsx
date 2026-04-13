import "./Users.css";

import { useEffect, useState } from "react";

import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        const fetchUsers = async () => {
            try {
                const response = await axios.get(apiUrl);
                setUsers(response.data);
            } catch (error) {
                setErr("Hubo un error al cargar los usuarios: " + error.message);
                console.log("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <h1>Users</h1>
            {loading && <p>Cargando usuarios...</p>}
            {err && <p>{err}</p>}

            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    );
}

export default Users;
