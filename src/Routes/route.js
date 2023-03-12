import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";
import Projects from "../Pages/Projects";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/experiences',
                element: <Experiences></Experiences>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/project/:id',
                element: <ProjectDetails></ProjectDetails>
            }
        ]
    }
])