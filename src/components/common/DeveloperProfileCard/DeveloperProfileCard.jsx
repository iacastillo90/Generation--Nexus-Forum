import Card from "react-bootstrap/Card";

function DeveloperProfileCard() {
    return (
        <Card className="hacker-card border-neon-cyan h-100">
            <Card.Header className="bg-transparent border-bottom border-neon-cyan">
                <h3 className="text-neon-green mb-0">&gt; DEVELOPER_PROFILE</h3>
            </Card.Header>
            <Card.Body>
                <div className="d-flex align-items-center mb-4">
                    <div className="dev-avatar me-4">
                        <span className="text-neon-cyan fs-2 fw-bold">IC</span>
                    </div>
                    <div>
                        <h4 className="text-neon-green fw-bold mb-1">Iván Castillo</h4>
                        <h6 className="text-neon-cyan mb-0">Lead Frontend Engineer</h6>
                    </div>
                </div>
                
                <p className="text-muted-hacker terminal-text mb-4">
                    Arquitecto de interfaces y operador de la red descentralizada. Especializado en React, arquitecturas escalables y experiencias web de alta inmersión. 
                </p>
                
                <div className="skills-matrix">
                    <h6 className="text-neon-cyan mb-3">// LOG_HABILIDADES</h6>
                    <div className="d-flex flex-wrap gap-2">
                        <span className="cyber-badge">React.js</span>
                        <span className="cyber-badge">Vite</span>
                        <span className="cyber-badge">JavaScript</span>
                        <span className="cyber-badge">Bootstrap 5</span>
                        <span className="cyber-badge">Git</span>
                        <span className="cyber-badge">UI/UX</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default DeveloperProfileCard;
