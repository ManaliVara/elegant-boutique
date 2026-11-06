import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../CartContext'

function Cart() {
    const {
        cart,
        removeFromCart,
        updateQuantity
    } = useCart()

    const [customer, setCustomer] = useState({
        name: '',
        phone: '',
        address: ''
    })

    const totalPrice = cart.reduce((total, item) => {
        const price = Number(
            String(item.price).replace(/[₹,]/g, '')
        )

        return total + price * item.quantity
    }, 0)

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    const handleOrder = (e) => {
        e.preventDefault()

        if (!customer.name || !customer.phone || !customer.address) {
            alert('Please fill all details.')
            return
        }

        const productList = cart.map((item) => {
            return `${item.name} x ${item.quantity}`
        }).join('\n')

        const message = `
Hello, I want to place a demo order.

Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

Products:
${productList}

Total: ₹${totalPrice.toLocaleString('en-IN')}
        `

        // Replace this placeholder locally only if testing WhatsApp.
        const whatsappNumber = '91XXXXXXXXXX'

        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

        window.open(whatsappURL, '_blank')
    }

    return (
        <div className="cart-page">

            <h1 className="cart-heading">Your Shopping Cart</h1>

            {cart.length === 0 ? (

                <div className="empty-cart">
                    <h2>Your Cart is Empty</h2>

                    <p>
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <Link to="/collection" className="continue-shopping">
                        Explore Collection
                    </Link>
                </div>

            ) : (

                <div className="cart-container">

                    <div className="cart-items">

                        {cart.map((item) => (

                            <div className="cart-item" key={item.id}>

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="cart-item-info">

                                    <h3>{item.name}</h3>

                                    <p>₹{item.price}</p>

                                    <div className="quantity-control">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    Math.max(1, item.quantity - 1)
                                                )
                                            }
                                        >
                                            −
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                    <button
                                        type="button"
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>


                    <div className="cart-summary">

                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                        </div>

                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>

                        <hr />

                        <div className="summary-row total">
                            <span>Total</span>
                            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                        </div>

                        <Link
                            to="/collection"
                            className="continue-shopping"
                        >
                            Continue Shopping
                        </Link>

                    </div>


                    <div className="checkout-section">

                        <h2 className="checkout-heading">
                            Demo Checkout
                        </h2>

                        <form
                            className="checkout-form"
                            onSubmit={handleOrder}
                        >

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={customer.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={customer.phone}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                name="address"
                                placeholder="Your Address"
                                value={customer.address}
                                onChange={handleChange}
                                rows="4"
                                required
                            />

                            <button
                                type="submit"
                                className="checkout-btn"
                            >
                                Continue with WhatsApp
                            </button>

                        </form>

                    </div>

                </div>

            )}

        </div>
    )
}

export default Cart