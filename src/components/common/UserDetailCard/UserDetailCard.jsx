import "./UserDetailCard.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserDetailCard({ user }) {
    if (!user) return null;

    return (
        <Card className="hacker-card mb-5 border-neon-green">
            <Card.Body>
                <Card.Title className="text-neon-green fs-2">{user.name}</Card.Title>
                <Card.Text as="div" className="text-muted-hacker">
                    <Row>
                        <Col md={6}>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Website:</strong> {user.website}</p>
                        </Col>
                        <Col md={6}>
                            <p><strong>Company:</strong> {user.company.name}</p>
                            <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                            <p><strong>City:</strong> {user.address.city}</p>
                            <p><strong>ZipCode:</strong> {user.address.zipcode}</p>
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default UserDetailCard;
