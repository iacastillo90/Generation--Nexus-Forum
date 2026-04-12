import AboutUs from "@/pages/aboutUs/aboutUs";
import Home from "@/pages/home/home";
import MainLayout from "@/layout/MainLayout";
import NotFound from "@/pages/notFound/notFound";
import Post from "@/pages/post/post";
import PostDetail from "@/pages/postDetail/postDetail";
import Users from "@/pages/users/users";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/post",
                element: <Post />
            },
            {
                path: "/post/:id",
                element: <PostDetail />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])