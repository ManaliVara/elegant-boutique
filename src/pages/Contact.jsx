import { useState } from 'react'

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const whatsappNumber = '91XXXXXXXXXX'

    const handleSubmit = (e) => {
        e.preventDefault()

        const text = `Hello! I am ${form.name}.
Email: ${form.email}
Message: ${form.message}`

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`

        window.open(url, '_blank')
    }

    return (
        <section className="contact-page">

            <div className="contact-heading">
                <p>GET IN TOUCH</p>
                <h1>Let's Connect</h1>
                <span>We would love to hear from you.</span>
            </div>

            <div className="contact-layout">

                <div className="contact-info">
                    <h2>Let's Talk</h2>

                    <p>
                        Have a question about our collection?
                        Send us a message. We would be happy to help.
                    </p>

                    <h3>Our Boutique</h3>
                    <p>The Elegant Boutique</p>

                    <h3>Customer Support</h3>
                    <p>Contact us through WhatsApp.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <label>Your Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                    />

                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />

                    <label>Your Message</label>
                    <textarea
                        rows="5"
                        placeholder="Write your message..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                    />

                    <button type="submit" className="send-btn">
                        SEND MESSAGE
                    </button>

                </form>

            </div>

        </section>
    )
}

export default Contact