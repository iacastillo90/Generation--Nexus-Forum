import "./Users.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

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

    // Función auxiliar para obtener las iniciales del nombre
    const getInitials = (name) => {
        return name
            .split(" ")
            .map(word => word[0])
            .slice(0, 2)
            .join("")
            .toUpperCase();
    };

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
                        <Card className="hacker-card h-100 position-relative">
                            <Card.Body className="d-flex flex-column align-items-center text-center">
                                
                                <div className="avatar-circle mb-3 border-neon-cyan">
                                    <span className="avatar-text text-neon-cyan">
                                        {getInitials(user.name)}
                                    </span>
                                </div>
                                
                                <Card.Title className="text-neon-green fw-bold">
                                    {user.name}
                                </Card.Title>
                                
                                <Card.Subtitle className="mb-3 text-muted-hacker">
                                    <span className="text-neon-cyan">&gt;_</span> @{user.username}
                                </Card.Subtitle>
                                
                                <div className="user-details mb-4 text-start w-100">
                                    <p className="text-neon-cyan small mb-1">
                                        <i className="fas fa-envelope me-2"></i>{user.email}
                                    </p>
                                    <p className="text-muted-hacker small mb-1">
                                        <span className="text-neon-green me-1">//</span> {user.company.name}
                                    </p>
                                    <p className="text-muted-hacker small mb-0">
                                        <span className="text-neon-green me-1">[LOC]</span> {user.address.city}
                                    </p>
                                </div>
                                
                                <Link to={`/user/${user.id}`} className="mt-auto w-100">
                                    <button className="btn btn-outline-neon cyber-btn w-100">
                                        [ACCEDER AL PERFIL]
                                    </button>
                                </Link>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Users;
