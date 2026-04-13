import AboutUs from "@/pages/AboutUs/AboutUs";
import Home from "@/pages/Home/Home";
import MainLayout from "@/layout/MainLayout/MainLayout";
import NotFound from "@/pages/NotFound/NotFound";
import Post from "@/pages/Post/PostsList";
import PostDetail from "@/pages/PostDetail/PostDetail";
import UserDetail from "@/pages/UserDetail/UserDetail";
import Users from "@/pages/Users/Users";
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