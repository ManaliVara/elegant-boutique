import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'
import products from '../data/products'

function Collection() {

    const [search, setSearch] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')
    const [sortBy, setSortBy] = useState('featured')

    const { toggleWishlist, isInWishlist } = useCart()

    const categories = [
        'All',
        'Sarees',
        'Kurtis',
        'Salwar Suits',
        'Lehenga',
        'Dresses',
        'Western Wear',
        'Tops & Shirts',
        'Co-ord Sets',
        'Bottom Wear',
        'Special Collection'
    ]

    const filteredProducts = products.filter((product) => {

        const searchText = search.trim().toLowerCase()

        const searchMatch =
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText)

        const categoryMatch =
            activeCategory === 'All' ||
            product.category === activeCategory

        return searchMatch && categoryMatch
    })

    const sortedProducts = [...filteredProducts].sort((a, b) => {

        const priceA = Number(a.price.replace(/[₹,]/g, ''))
        const priceB = Number(b.price.replace(/[₹,]/g, ''))

        if (sortBy === 'low-high') return priceA - priceB
        if (sortBy === 'high-low') return priceB - priceA
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name)
        }

        return a.id - b.id
    })

    const resetFilters = () => {
        setSearch('')
        setActiveCategory('All')
        setSortBy('featured')
    }

    const handleImageError = (e) => {
        e.currentTarget.onerror = null

        e.currentTarget.src =
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="600" height="750">
                    <rect width="100%" height="100%" fill="#F4F0E7"/>
                    <text x="50%" y="47%" text-anchor="middle"
                        font-family="Georgia" font-size="28"
                        fill="#657B69">The Elegant Boutique</text>
                    <text x="50%" y="54%" text-anchor="middle"
                        font-family="Arial" font-size="17"
                        fill="#657B69">Image Coming Soon</text>
                </svg>
            `)
    }

    return (

        <section className="collection-page">

            <div className="collection-heading">

                <p>THE ELEGANT BOUTIQUE</p>

                <h1>Our Collection</h1>

                <span>
                    Discover timeless elegance and beautiful styles.
                </span>

            </div>


            <div className="collection-search">

                <span>⌕</span>

                <input
                    type="search"
                    placeholder="Search saree, kurti, dress..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {search && (

                    <button
                        type="button"
                        onClick={() => setSearch('')}
                        aria-label="Clear search"
                    >
                        ✕
                    </button>

                )}

            </div>


            <div className="collection-toolbar">

                <div className="collection-toolbar-title">

                    <p>EXPLORE BY STYLE</p>

                    <h3>Find Your Favourite</h3>

                </div>


                <div className="collection-filters">

                    {categories.map((category) => (

                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            className={
                                activeCategory === category ? 'active' : ''
                            }
                        >
                            {category}
                        </button>

                    ))}

                </div>

            </div>


            <div className="collection-result">

                <span>
                    Showing {sortedProducts.length} products
                </span>


                <div className="sort-control">

                    <label htmlFor="product-sort">
                        Sort By:
                    </label>

                    <select
                        id="product-sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >

                        <option value="featured">Featured</option>

                        <option value="low-high">
                            Price: Low to High
                        </option>

                        <option value="high-low">
                            Price: High to Low
                        </option>

                        <option value="name">
                            Name: A to Z
                        </option>

                    </select>

                </div>

            </div>


            {sortedProducts.length > 0 ? (

                <div className="product-grid">

                    {sortedProducts.map((product) => (

                        <div className="product-card" key={product.id}>

                            <div className="product-image">

                                <Link to={`/product/${product.id}`}>

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        decoding="async"
                                        onError={handleImageError}
                                    />

                                </Link>


                                <button
                                    type="button"
                                    className={`wishlist-heart-btn ${isInWishlist(product.id)
                                            ? 'selected'
                                            : ''
                                        }`}
                                    onClick={() => toggleWishlist(product)}
                                    aria-label={
                                        isInWishlist(product.id)
                                            ? 'Remove from wishlist'
                                            : 'Add to wishlist'
                                    }
                                >

                                    {isInWishlist(product.id) ? '♥' : '♡'}

                                </button>

                            </div>


                            <div className="product-info">

                                <p>{product.category}</p>

                                <h3>{product.name}</h3>

                                <h4>{product.price}</h4>

                                <Link
                                    to={`/product/${product.id}`}
                                    className="view-btn"
                                >
                                    VIEW DETAILS
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            ) : (

                <div className="collection-empty">

                    <h2>No Designs Found</h2>

                    <p>
                        We couldn't find any matching products.
                        Try another search.
                    </p>

                    <button
                        type="button"
                        onClick={resetFilters}
                    >
                        VIEW ALL PRODUCTS
                    </button>

                </div>

            )}

        </section>

    )

}

export default Collection