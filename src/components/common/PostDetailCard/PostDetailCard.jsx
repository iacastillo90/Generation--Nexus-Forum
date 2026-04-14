import "./PostDetailCard.css";
import Card from "react-bootstrap/Card";

function PostDetailCard({ post, author }) {
    if (!post) return null;

    return (
        <Card className="hacker-card">
            <Card.Body>
                <Card.Title className="text-neon-cyan fs-2">{post.title}</Card.Title>
                <hr className="neon-divider" />
                <Card.Text className="text-muted-hacker fs-5 py-3">
                    {post.body}
                </Card.Text>
                <Card.Footer className="bg-transparent border-top border-neon-green">
                    <small className="text-neon-green">
                        Auth_ID: {author ? author.username : "DESCONOCIDO"} | File_ID: {post.id} | Acceso: CONCEDIDO
                    </small>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default PostDetailCard;
