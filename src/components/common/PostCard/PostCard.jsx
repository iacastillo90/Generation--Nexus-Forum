import "./PostCard.css";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function PostCard({ id, title, body, authorName }) {
    return(
        <Card className="hacker-card mb-4">
            <Card.Body>
                <Card.Title className="text-neon-cyan">{title}</Card.Title>
                <Card.Text className="text-muted-hacker">
                    {body.length > 100 ? `${body.substring(0, 100)}...` : body}
                </Card.Text>
                {authorName && <Card.Subtitle className="mb-3 text-neon-green">By: {authorName}</Card.Subtitle>}
                <Link to={`/post/${id}`}>
                    <Button variant="outline-neon" className="w-100">Read Data</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default PostCard;
