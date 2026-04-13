import AboutUs from "@/pages/aboutUs/AboutUs";
import Home from "@/pages/home/Home";
import MainLayout from "@/layout/MainLayout";
import NotFound from "@/pages/notFound/NotFound";
import Post from "@/pages/post/PostsList";
import PostDetail from "@/pages/postDetail/PostDetail";
import UserDetail from "@/pages/userDetail/UserDetail";
import Users from "@/pages/users/Users";
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
                path: "/posts",
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
                path: "/user/:userId",
                element: <UserDetail />
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