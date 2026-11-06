import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section className="not-found-page">

            <p className="not-found-brand">
                THE ELEGANT BOUTIQUE
            </p>

            <h1>404</h1>

            <h2>Page Not Found</h2>

            <p>
                Oops! The page you are looking for
                doesn't exist or has been moved.
            </p>

            <Link to="/" className="not-found-btn">
                BACK TO HOME
            </Link>

        </section>
    )
}

export default NotFound