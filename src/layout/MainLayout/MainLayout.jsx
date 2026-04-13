import "./MainLayout";

import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import { Outlet } from "react-router-dom";

function MainLayout () {

    return(
        <div className="app-shell">
            <Header />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default MainLayout;