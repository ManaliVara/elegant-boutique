import { Link, useParams } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../CartContext'

function ProductDetails() {

    const { id } = useParams()

    const {
        addToCart,
        toggleWishlist,
        isInWishlist
    } = useCart()

    const product = products.find(
        item => item.id === Number(id)
    )

    const handleImageError = (e) => {
        e.currentTarget.onerror = null

        e.currentTarget.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="700">
                <rect width="100%" height="100%" fill="#F4F0E7"/>
                <text x="50%" y="47%" text-anchor="middle"
                    fill="#657B69" font-size="28"
                    font-family="Georgia">
                    The Elegant Boutique
                </text>
                <text x="50%" y="54%" text-anchor="middle"
                    fill="#657B69" font-size="20">
                    Image Coming Soon
                </text>
            </svg>
        `)}`
    }

    if (!product) {
        return (
            <div className="not-found">
                <h2>Product Not Found</h2>
                <Link to="/collection">Back to Collection</Link>
            </div>
        )
    }

    const alreadyAdded = isInWishlist(product.id)

    return (
        <div className="product-details">

            <div className="details-image">
                <img
                    src={product.image}
                    alt={product.name}
                    onError={handleImageError}
                />
            </div>

            <div className="details-content">

                <p>{product.category}</p>

                <h1>{product.name}</h1>

                <h2>₹{product.price.toLocaleString('en-IN')}</h2>

                <p>{product.description}</p>

                <button
                    className="send-btn"
                    onClick={() => addToCart(product)}
                >
                    ADD TO CART
                </button>

                <button
                    className="details-wishlist-btn"
                    onClick={() => toggleWishlist(product)}
                >
                    {alreadyAdded
                        ? '♥ Added to Wishlist'
                        : '♡ Add to Wishlist'}
                </button>

                <br />

                <Link to="/collection" className="back-link">
                    ← Back to Collection
                </Link>

            </div>

        </div>
    )
}

export default ProductDetails