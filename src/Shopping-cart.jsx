import { useState } from "react";
function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState("");
    const products = [
        { id: 1, name: "Laptop", price: 85000 },
        { id: 2, name: "Phone", price: 35000 },
        { id: 3, name: "Tablet", price: 50000 },
        {id: 4, name: "Headphones", price: 15000 },
        {id: 5, name: "Watch", price: 12000 }
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
    return (
        <div style={{ border: "1px solid black", padding: "20px", margin: "20px" }}>
            <h3>Products: </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {products.map(product => (
                    <li key={product.id} style={{ border: "1px solid black", padding: "20px", margin: "20px" }}>
                        {product.name} - ${product.price.toLocaleString()}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h3>Shopping Cart: </h3>
            <ul  style={{ border: "1px solid black", padding: "20px", margin: "20px" }}>
                {cart.map( item => (
                    <div key={item.id} style={{ border: "1px solid black", padding: "20px", margin: "20px" }}>
                        {item.name} - ${item.price.toLocaleString()}
                        <button onClick={() => removeFromCart(item)}>Remove</button>    
                    </div>
                ))}
                <h3>Cart Total: ${cart.reduce((total, item) => total + item.price, 0).toLocaleString()}</h3>
                <h3>Cart Count: 🛒 {cart.length} items</h3>
                <h3>{cart.length === 0 ? "Cart is empty 🛒" : ""}</h3>
            </ul>
            {message && <p style={{ color: cart.find(item => item.id === products.id) ? "green" : "red" }}>{message}</p>}
        </div>
    )
}
export { ShoppingCart };