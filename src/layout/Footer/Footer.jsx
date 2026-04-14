import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="container-fluid mt-5 p-0">
                <footer
                    className="text-center text-lg-start bg-black border-top border-neon-cyan"
                    style={{ color: '#0ff' }}
                >
                    <div className="container p-4 pb-0">
                        <section className="">
                            <div className="row">
                                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold text-neon-green">
                                        NX-Forum Corp
                                    </h6>
                                    <p className="text-muted-hacker">
                                        Red de nodos descentralizada para operadores élite y desarrolladores. Entra al sistema y descubre el código.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none border-neon-cyan" />

                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold text-neon-green">Protocolos Rápidos</h6>
                                    <p>
                                        <Link to="/posts" className="cyber-link text-neon-cyan text-decoration-none">&gt;_ Muro de Publicaciones</Link>
                                    </p>
                                    <p>
                                        <Link to="/users" className="cyber-link text-neon-cyan text-decoration-none">&gt;_ Camaradas en Red</Link>
                                    </p>
                                    <p>
                                        <Link to="/about" className="cyber-link text-neon-cyan text-decoration-none">&gt;_ Contactar Arquitecto</Link>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none border-neon-cyan" />

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold text-neon-green">Comms</h6>
                                    <p className="text-muted-hacker"><i className="fas fa-home mr-3 text-neon-cyan"></i> Sector 7G, Matrix</p>
                                    <p className="text-muted-hacker"><i className="fas fa-envelope mr-3 text-neon-cyan"></i> iacastillo.ili2@gmail.com</p>
                                    <p className="text-muted-hacker"><i className="fas fa-code mr-3 text-neon-cyan"></i> Desarrollado por Iván Castillo</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div
                        className="text-center p-3 text-neon-green"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        © 2077 NX-Forum: 
                        <span className="text-neon-cyan text-decoration-none fw-bold ms-2">
                            Sistema 100% Cifrado
                        </span>
                    </div>
                </footer>
        </div>
    );
}

export default Footer;