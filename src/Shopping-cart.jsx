import { useState } from "react";
function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState("");
    const products = [
        { id: 1, name: "Laptop", price: 85000 },
        { id: 2, name: "Phone", price: 35000 },
        { id: 3, name: "Tablet", price: 50000 },
        { id: 4, name: "Headphones", price: 15000 },
        { id: 5, name: "Watch", price: 12000 },
        { id: 6, name: "Camera", price: 45000 },
        { id: 7, name: "Printer", price: 20000 },
        { id: 8, name: "Monitor", price: 30000 },
        { id: 9, name: "Keyboard", price: 5000 },
        { id: 10, name: "Mouse", price: 3000 },
        { id: 11, name: "Speaker", price: 8000 },
        { id: 12, name: "External Hard Drive", price: 10000 },
        { id: 13, name: "USB Flash Drive", price: 2000 },
        { id: 14, name: "Webcam", price: 7000 },
        { id: 15, name: "Microphone", price: 6000 },
    ];
    function addToCart(product) {
        if (cart.find(item => item.id === product.id)) {
            setMessage(`${product.name} is already in the cart! ⚠️`);
            return;
        }
        setCart(prev => [...prev, product]);
        setMessage(`${product.name} added to cart ✅`);
    }
    function removeFromCart(product) {
        if (!cart.find(item => item.id === product.id)) {
            setMessage(`${product.name} is not in the cart! ⚠️`);
            return;
        }
        setCart(prev => prev.filter(item => item.id !== product.id));
        setMessage(`${product.name} removed from cart 🗑️`);
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div style={{ border: "1px solid thistle", padding: "20px", margin: "20px", borderRadius: "8px", backgroundColor: "snow" }}>
            <h2 style={{ color: "purple", textAlign: "center", border: "1px solid thistle", borderRadius: "6px", backgroundColor: "lavenderblush" }}>🛍️ Products</h2>

            {/* ✅ Fix 1 — div inside ul hata ke li use kiya */}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {products.map(product => (
                    <li key={product.id} style={{
                        border: "1px solid pink",
                        padding: "10px 20px",
                        margin: "8px 0",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "6px",
                        backgroundColor: "floralwhite"
                    }}>
                        <span>{product.name}</span>
                        <span>Rs. {product.price.toLocaleString()}</span>
                        <button onClick={() => addToCart(product)} style={{ backgroundColor: "lavenderblush", border: "1px solid thistle", padding: "4px 10px", borderRadius: "4px", cursor: "pointer", color: cart.find(i => i.id === product.id) ? "deeppink" : "mediumvioletred" }}>
                            {cart.find(i => i.id === product.id) ? "Added ✅" : "Add to Cart"}
                        </button>
                    </li>
                ))}
            </ul>

            <h2 style={{ color: "purple", textAlign: "center", border: "1px solid thistle", borderRadius: "6px", backgroundColor: "lavenderblush", height: "40px", text: "center" }}>🛒 Cart</h2>

            {cart.length === 0 ? (
                <p style={{ textAlign: "center", color: "gray" }}>Cart is empty 🛒</p>) : 
                ( <ul style={{ listStyle: "none", padding: 0 }}>
                    {cart.map(item => (
                        <li key={item.id} style={{
                            border: "1px solid pink",
                            padding: "10px 20px",
                            margin: "8px 0",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderRadius: "6px",
                            backgroundColor: "floralwhite"
                        }}>
                            <span>{item.name}</span>
                            <span>Rs. {item.price.toLocaleString()}</span>
                            <button onClick={() => removeFromCart(item)}
                                style={{
                                    backgroundColor: "lavenderblush", color: "deeppink", border: "1px solid thistle",
                                    padding: "4px 10px", borderRadius: "4px", cursor: "pointer"
                                }}>
                                Remove ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <div style={{
                marginTop: "15px", padding: "10px",
                backgroundColor: "#F3F4F6", borderRadius: "8px"
            }}>
                <p style={{ color: "purple", fontWeight: "bold" }}>
                    🛒 {cart.length} items in cart
                </p>
                <p style={{ color: "purple", fontWeight: "bold" }}>
                    Total: Rs. {total.toLocaleString()}
                </p>
            </div>

            {message && (
                <p style={{
                    backgroundColor: message.includes("✅") ? "#f9e3fd"
                        : message.includes("⚠️") ? "#fdf6da"
                            : "lavenderblush",
                    color: message.includes("✅") ? "deeppink"
                        : message.includes("⚠️") ? "orange"
                            : "red",
                    padding: "10px",
                    borderRadius: "5px",
                    marginTop: "10px"
                }}>
                    📢 {message}
                </p>
            )}
        </div>
    );
}
export { ShoppingCart };