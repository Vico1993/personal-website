import * as React from "react"
import { ErrorPage } from "@/page/error"
import { IndexPage } from "@/page/index"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "@/styles/globals.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
        errorElement: <ErrorPage />,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
