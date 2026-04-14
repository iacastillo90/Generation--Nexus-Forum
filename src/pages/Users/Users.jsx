import "./Users.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import UsersCard from "@/components/common/UsersCard/UsersCard";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(response.data);
            } catch (error) {
                setErr("System Error fetching Users: " + error.message);
            } finally { 
                setLoading(false); 
            }
        };
        fetchUsers();
    }, []);

    return (
        <Container className="my-5">
            <h1 className="mb-4 text-neon-cyan cyber-title">// NODOS_DE_RED</h1>
            
            {loading && (
                <div className="text-center my-5">
                    <Spinner animation="border" variant="success" className="neon-spinner" />
                    <p className="text-neon-green mt-3">Escaneando red en busca de nodos activos...</p>
                </div>
            )}
            
            {err && <p className="text-danger">{err}</p>}
            
            <Row>
                {!loading && !err && users.map((user) => (
                    <Col xs={12} md={6} lg={4} key={user.id} className="mb-4">
                        <UsersCard user={user} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Users;
