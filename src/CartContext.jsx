import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {

    // CART
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('boutique-cart')
            return savedCart ? JSON.parse(savedCart) : []
        } catch {
            return []
        }
    })

    // WISHLIST
    const [wishlist, setWishlist] = useState(() => {
        try {
            const savedWishlist = localStorage.getItem('boutique-wishlist')
            return savedWishlist ? JSON.parse(savedWishlist) : []
        } catch {
            return []
        }
    })

    // ADD TO CART
    const addToCart = (product) => {
        setCart((previousCart) => {
            const existingProduct = previousCart.find(
                (item) => item.id === product.id
            )

            const updatedCart = existingProduct
                ? previousCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                : [...previousCart, { ...product, quantity: 1 }]

            localStorage.setItem(
                'boutique-cart',
                JSON.stringify(updatedCart)
            )

            return updatedCart
        })
    }

    // REMOVE FROM CART
    const removeFromCart = (id) => {
        setCart((previousCart) => {
            const updatedCart = previousCart.filter(
                (item) => item.id !== id
            )

            localStorage.setItem(
                'boutique-cart',
                JSON.stringify(updatedCart)
            )

            return updatedCart
        })
    }

    // UPDATE QUANTITY
    const updateQuantity = (id, quantity) => {
        setCart((previousCart) => {
            const updatedCart = previousCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )

            localStorage.setItem(
                'boutique-cart',
                JSON.stringify(updatedCart)
            )

            return updatedCart
        })
    }

    // ADD TO WISHLIST
    const addToWishlist = (product) => {
        setWishlist((previousWishlist) => {
            if (previousWishlist.some((item) => item.id === product.id)) {
                return previousWishlist
            }

            const updatedWishlist = [...previousWishlist, product]

            localStorage.setItem(
                'boutique-wishlist',
                JSON.stringify(updatedWishlist)
            )

            return updatedWishlist
        })
    }

    // REMOVE FROM WISHLIST
    const removeFromWishlist = (id) => {
        setWishlist((previousWishlist) => {
            const updatedWishlist = previousWishlist.filter(
                (item) => item.id !== id
            )

            localStorage.setItem(
                'boutique-wishlist',
                JSON.stringify(updatedWishlist)
            )

            return updatedWishlist
        })
    }

    // CHECK WISHLIST
    const isInWishlist = (id) => {
        return wishlist.some((item) => item.id === id)
    }

    // TOGGLE WISHLIST
    const toggleWishlist = (product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id)
        } else {
            addToWishlist(product)
        }
    }

    // COUNTS
    const cartCount = cart.reduce(
        (total, item) => total + item.quantity,
        0
    )

    const wishlistCount = wishlist.length

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                cartCount,

                wishlist,
                addToWishlist,
                removeFromWishlist,
                toggleWishlist,
                isInWishlist,
                wishlistCount
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}