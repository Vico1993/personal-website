import { Link, useRouteError } from "react-router-dom"

export function ErrorPage() {
    const error = useRouteError() as RouterError

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>
                <i>{error.statusText ?? error.message}</i>
            </p>
            <Link to="/">Go back home</Link>
        </div>
    )
}

interface RouterError extends Error {
    statusText?: string
}
