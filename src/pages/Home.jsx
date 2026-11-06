import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home-page">

            {/* HERO SECTION */}
            <section className="hero" id="home">

                <div className="hero-content">

                    <p className="subtitle">
                        WELCOME TO OUR BOUTIQUE
                    </p>

                    <h1>
                        Elegance in<br />
                        Every Thread.
                    </h1>

                    <p className="description">
                        Discover beautiful styles that make every moment special.
                    </p>

                    <Link
                        to="/collection"
                        className="shop-btn"
                    >
                        EXPLORE COLLECTION
                    </Link>

                </div>

            </section>

            {/* INTRO SECTION */}
            <section className="home-intro">

                <p>THE ART OF ELEGANCE</p>

                <h2>Fashion Made Beautiful</h2>

                <p>
                    Discover timeless styles and express your unique personality
                    with our beautiful collections.
                </p>

            </section>

        </div>
    )
}

export default Home