import { NavLink, useRouteError } from "react-router-dom"

function ErrorPage() {
    let { statusText, status, message } = useRouteError()

    if (status === 404) {
        return (
            <div className="flex items-center justify-center h-screen flex-col gap-3">
                <h1 className="text-4xl text-black">Page not found <span className="font-black">404</span></h1>
                <NavLink to="/" className="btn text-2xl">Back to home</NavLink>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center flex-col gap-5 py-20 text-black">
            <h1 className="text-4xl font-black">Somethingth wrong</h1>
            <p className="text-2xl w-[80%] text-center">{message}</p>
            <p className="text-4xl font-black">Developers fixing</p>
            <NavLink to="/" className="btn text-2xl">Back to home</NavLink>
        </div>
    )
}

export default ErrorPage
