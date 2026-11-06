import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'

function Wishlist() {
    const {
        wishlist,
        removeFromWishlist,
        addToCart
    } = useCart()

    const handleAddToCart = (product) => {
        addToCart(product)
        alert(`${product.name} added to your cart!`)
    }

    return (
        <section className="wishlist-page">

            {/* Heading */}
            <div className="wishlist-heading">
                <p>YOUR PERSONAL COLLECTION</p>
                <h1>My Wishlist</h1>
                <span>
                    Your favourite styles, all in one place.
                </span>
            </div>

            {/* Wishlist Products */}
            {wishlist.length > 0 ? (

                <div className="wishlist-grid">

                    {wishlist.map((product) => (

                        <div
                            className="wishlist-card"
                            key={product.id}
                        >

                            <Link to={`/product/${product.id}`}>
                                <div className="wishlist-image">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </Link>

                            <div className="wishlist-info">

                                <p>{product.category}</p>

                                <h3>{product.name}</h3>

                                <h4>{product.price}</h4>

                                <div className="wishlist-actions">

                                    <button
                                        className="wishlist-cart-btn"
                                        type="button"
                                        onClick={() =>
                                            handleAddToCart(product)
                                        }
                                    >
                                        ADD TO CART
                                    </button>

                                    <button
                                        className="wishlist-remove-btn"
                                        type="button"
                                        onClick={() =>
                                            removeFromWishlist(product.id)
                                        }
                                    >
                                        REMOVE ♥
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            ) : (

                <div className="wishlist-empty">

                    <div className="wishlist-heart">
                        ♡
                    </div>

                    <h2>Your Wishlist is Empty</h2>

                    <p>
                        Save your favourite designs here
                        and find them whenever you want.
                    </p>

                    <Link
                        to="/collection"
                        className="wishlist-explore-btn"
                    >
                        EXPLORE COLLECTION
                    </Link>

                </div>

            )}

        </section>
    )
}

export default Wishlist