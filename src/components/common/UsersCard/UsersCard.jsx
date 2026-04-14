import "./UsersCard.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function UsersCard({ user }) {
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
                        <span className="text-neon-green me-1">// Compañia: </span> {user.company.name}
                    </p>
                    <p className="text-muted-hacker small mb-0">
                        <span className="text-neon-green me-1">[Ciudad]</span> {user.address.city}
                    </p>
                </div>
                
                <Link to={`/user/${user.id}`} className="mt-auto w-100">
                    <button className="btn btn-outline-neon cyber-btn w-100">
                        [ACCEDER AL PERFIL]
                    </button>
                </Link>
                
            </Card.Body>
        </Card>
    );
}

export default UsersCard;
