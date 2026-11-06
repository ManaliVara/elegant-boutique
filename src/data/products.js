const products = [
    // ==================== SAREES ====================

    {
        id: 1,
        name: "Elegant Traditional Saree",
        price: "₹1,499",
        category: "Sarees",
        image: "https://images.pexels.com/photos/2905873/pexels-photo-2905873.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A beautiful traditional saree with an elegant ethnic look, perfect for festive occasions and family celebrations."
    },
    {
        id: 2,
        name: "Classic Silk Style Saree",
        price: "₹1,799",
        category: "Sarees",
        image: "https://images.pexels.com/photos/18534102/pexels-photo-18534102.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A graceful saree inspired by classic Indian fashion, designed for a timeless and sophisticated appearance."
    },
    {
        id: 3,
        name: "Royal Festive Saree",
        price: "₹2,199",
        category: "Sarees",
        image: "https://images.pexels.com/photos/28943610/pexels-photo-28943610.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A festive traditional saree that brings elegance and charm to special celebrations."
    },
    {
        id: 4,
        name: "Graceful Ethnic Saree",
        price: "₹1,599",
        category: "Sarees",
        image: "https://images.pexels.com/photos/9496725/pexels-photo-9496725.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A graceful ethnic outfit for traditional functions, celebrations and special gatherings."
    },
    {
        id: 5,
        name: "Designer Celebration Saree",
        price: "₹2,499",
        category: "Sarees",
        image: "https://images.pexels.com/photos/31540068/pexels-photo-31540068.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A designer-inspired saree with a statement traditional look for memorable occasions."
    },

    // ==================== KURTIS ====================

    {
        id: 6,
        name: "Elegant Red Kurti",
        price: "₹899",
        category: "Kurtis",
        image: "https://images.pexels.com/photos/35521738/pexels-photo-35521738.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A beautiful red ethnic kurti suitable for casual outings and festive styling."
    },
    {
        id: 7,
        name: "Green Chikankari Kurti",
        price: "₹1,099",
        category: "Kurtis",
        image: "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A refreshing green kurti with a delicate ethnic-inspired look for everyday elegance."
    },
    {
        id: 8,
        name: "Classic Blue Kurti",
        price: "₹999",
        category: "Kurtis",
        image: "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A stylish blue ethnic kurti designed for comfortable everyday wear."
    },

    // ==================== SALWAR SUITS ====================

    {
        id: 9,
        name: "Traditional White Ethnic Outfit",
        price: "₹1,499",
        category: "Salwar Suits",
        image: "https://images.pexels.com/photos/28512766/pexels-photo-28512766.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A graceful white ethnic-inspired outfit with a simple and elegant traditional appearance."
    },
    {
        id: 10,
        name: "Elegant White Festive Outfit",
        price: "₹1,699",
        category: "Salwar Suits",
        image: "https://images.pexels.com/photos/28512776/pexels-photo-28512776.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A light and elegant ethnic look for family functions and festive gatherings."
    },
    {
        id: 11,
        name: "Classic Black Ethnic Outfit",
        price: "₹1,399",
        category: "Salwar Suits",
        image: "https://images.pexels.com/photos/20702672/pexels-photo-20702672.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A classic black ethnic-inspired outfit with a sophisticated traditional style."
    },
    {
        id: 12,
        name: "Blue Traditional Outfit",
        price: "₹1,599",
        category: "Salwar Suits",
        image: "https://images.pexels.com/photos/13178920/pexels-photo-13178920.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A blue traditional-inspired outfit for a graceful and comfortable ethnic look."
    },

    // ==================== LEHENGA ====================

    {
        id: 13,
        name: "Royal Wedding Lehenga",
        price: "₹3,999",
        category: "Lehenga",
        image: "https://images.pexels.com/photos/38876954/pexels-photo-38876954.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A beautiful bridal-inspired lehenga look for weddings and grand celebrations."
    },
    {
        id: 14,
        name: "Designer Festive Lehenga",
        price: "₹3,499",
        category: "Lehenga",
        image: "https://images.pexels.com/photos/38876958/pexels-photo-38876958.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A festive lehenga-inspired outfit for celebrations, traditional events and parties."
    },
    {
        id: 15,
        name: "Classic Traditional Lehenga",
        price: "₹2,999",
        category: "Lehenga",
        image: "https://images.pexels.com/photos/8752674/pexels-photo-8752674.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A traditional lehenga look inspired by Indian festive fashion."
    },

    // ==================== DRESSES ====================

    {
        id: 16,
        name: "Elegant Party Dress",
        price: "₹1,899",
        category: "Dresses",
        image: "https://images.pexels.com/photos/8538848/pexels-photo-8538848.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A stylish dress for parties, celebrations and special evening occasions."
    },
    {
        id: 17,
        name: "Classic Green Dress",
        price: "₹1,699",
        category: "Dresses",
        image: "https://images.pexels.com/photos/8989492/pexels-photo-8989492.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A graceful green dress with a fresh and elegant appearance."
    },
    {
        id: 18,
        name: "Modern Casual Dress",
        price: "₹1,499",
        category: "Dresses",
        image: "https://images.pexels.com/photos/20079676/pexels-photo-20079676.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A modern casual dress for comfortable everyday styling and outings."
    },
    {
        id: 19,
        name: "Stylish Everyday Dress",
        price: "₹1,799",
        category: "Dresses",
        image: "https://images.pexels.com/photos/38765058/pexels-photo-38765058.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A fashionable everyday dress for a simple yet polished look."
    },

    // ==================== WESTERN WEAR ====================

    {
        id: 20,
        name: "Casual Denim Outfit",
        price: "₹1,499",
        category: "Western Wear",
        image: "https://images.pexels.com/photos/6417947/pexels-photo-6417947.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A relaxed denim-inspired outfit for casual days and everyday fashion."
    },
    {
        id: 21,
        name: "Classic Blue Jeans Look",
        price: "₹1,299",
        category: "Western Wear",
        image: "https://images.pexels.com/photos/22223037/pexels-photo-22223037.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A classic jeans outfit that gives a versatile and modern casual look."
    },
    {
        id: 22,
        name: "Modern Denim Style",
        price: "₹1,599",
        category: "Western Wear",
        image: "https://images.pexels.com/photos/36951576/pexels-photo-36951576.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A contemporary denim look suitable for outings and relaxed occasions."
    },
    {
        id: 23,
        name: "Everyday Casual Wear",
        price: "₹1,399",
        category: "Western Wear",
        image: "https://images.pexels.com/photos/33169544/pexels-photo-33169544.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A comfortable casual outfit for daily wear and effortless styling."
    },

    // ==================== TOPS & SHIRTS ====================

    {
        id: 24,
        name: "Trendy Casual Top",
        price: "₹799",
        category: "Tops & Shirts",
        image: "https://images.pexels.com/photos/25956224/pexels-photo-25956224.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A trendy top that pairs beautifully with jeans, trousers and skirts."
    },
    {
        id: 25,
        name: "Classic Stylish Shirt",
        price: "₹999",
        category: "Tops & Shirts",
        image: "https://images.pexels.com/photos/7432236/pexels-photo-7432236.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A versatile shirt-inspired style for a neat and modern everyday look."
    },

    // ==================== CO-ORD SETS ====================

    {
        id: 26,
        name: "Elegant Matching Co-ord Set",
        price: "₹1,899",
        category: "Co-ord Sets",
        image: "https://images.pexels.com/photos/8433523/pexels-photo-8433523.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A coordinated outfit designed for a stylish and effortless matching look."
    },
    {
        id: 27,
        name: "Modern Printed Co-ord Set",
        price: "₹2,099",
        category: "Co-ord Sets",
        image: "https://images.pexels.com/photos/6580495/pexels-photo-6580495.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A modern matching set with a fashionable coordinated appearance."
    },

    // ==================== BOTTOM WEAR ====================

    {
        id: 28,
        name: "Classic Denim Jeans",
        price: "₹1,199",
        category: "Bottom Wear",
        image: "https://images.pexels.com/photos/28994670/pexels-photo-28994670.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A versatile denim bottom suitable for tops, shirts and casual outfits."
    },
    {
        id: 29,
        name: "Stylish Casual Trousers",
        price: "₹1,099",
        category: "Bottom Wear",
        image: "https://images.pexels.com/photos/4440876/pexels-photo-4440876.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A modern bottom-wear style for creating comfortable everyday outfits."
    },

    // ==================== SPECIAL COLLECTION ====================

    {
        id: 30,
        name: "Special Bridal Collection",
        price: "₹4,999",
        category: "Special Collection",
        image: "https://images.pexels.com/photos/19891766/pexels-photo-19891766.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "A special traditional-inspired collection for weddings and unforgettable celebrations."
    }
]

export default products