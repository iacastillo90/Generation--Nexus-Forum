import "./Footer.css";

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
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold text-neon-green">
                                        NX-Forum Corp
                                    </h6>
                                    <p className="text-muted-hacker">
                                        Decentralized node network for elite cybernet operations. Welcome to the grid.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none border-neon-cyan" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold text-neon-green">Protocols</h6>
                                    <p>
                                        <a className="cyber-link text-neon-cyan text-decoration-none">TCP/IP</a>
                                    </p>
                                    <p>
                                        <a className="cyber-link text-neon-cyan text-decoration-none">WebSockets</a>
                                    </p>
                                    <p>
                                        <a className="cyber-link text-neon-cyan text-decoration-none">Encryption</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none border-neon-cyan" />

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold text-neon-green">Comms</h6>
                                    <p className="text-muted-hacker"><i className="fas fa-home mr-3 text-neon-cyan"></i> Server 10012, US</p>
                                    <p className="text-muted-hacker"><i className="fas fa-envelope mr-3 text-neon-cyan"></i> root@nx-forum.net</p>
                                    <p className="text-muted-hacker"><i className="fas fa-phone mr-3 text-neon-cyan"></i> + 01 234 567 88</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div
                        className="text-center p-3 text-neon-green"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        © 2077 Copyright: 
                        <a className="text-neon-cyan text-decoration-none fw-bold ms-2" href="#">
                            NX-Forum
                        </a>
                    </div>
                </footer>
        </div>
    );
}

export default Footer;