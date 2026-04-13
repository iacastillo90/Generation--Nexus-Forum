import "./MainLayout";

import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";
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