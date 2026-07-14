import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import ToDoPage from "../pages/ToDoPage";
import ProtectRoutes from "./ProtectRoutes";
import { getAllToDo } from "../api/toDoApi";

const router = createBrowserRouter([
    {
        index: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: LoginPage
            },
            {
                Component: ProtectRoutes,
                children: [
                    {
                        path: "/todo",
                        Component: ToDoPage,
                        loader: getAllToDo,
                    }
                ]
            }
        ]
    }
])

export default router