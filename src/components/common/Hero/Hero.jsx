import "./Hero.css";
import Banner from "@/components/common/Banner/Banner";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero-section position-relative overflow-hidden d-flex align-items-center justify-content-center">
            {/* Background Matrix Effect */}
            <Banner />
            
            {/* Overlay and Content */}
            <div className="hero-overlay d-flex flex-column align-items-center justify-content-center text-center p-4">
                <span className="system-status mb-3">
                    // ESTADO SISTEMA: <span className="text-neon-green">EN LÍNEA</span>
                </span>
                
                <h1 className="hero-title mb-3">
                    <span className="typing-effect">&gt; INICIALIZANDO NX-FORUM...</span>
                    <span className="cursor">_</span>
                </h1>
                
                <p className="hero-subtitle text-muted-hacker mb-5">
                    Red descentralizada para operadores élite. Acceso concedido.
                </p>
                
                <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <Link to="/posts" className="btn btn-outline-neon cyber-btn px-4 py-2">
                        [EXPLORAR POSTS]
                    </Link>
                    <Link to="/users" className="btn btn-outline-neon cyber-btn px-4 py-2">
                        [VER CAMARADAS]
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
