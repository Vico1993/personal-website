import * as React from "react";
import ErrorPage from "@/page/error";
import IndexPage from "@/page/index";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DEFAULT_THEME } from "@zendeskgarden/react-theming";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider theme={DEFAULT_THEME}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
