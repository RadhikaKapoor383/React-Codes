import { useState } from "react";

const products = [
        { id: 1, name: "Laptop", price: 85000, image: "https://th.bing.com/th/id/OIP.x7qj-W40V_tTUs4AYjpCiQHaEU?w=231&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 2, name: "Phone", price: 35000, image: "https://th.bing.com/th/id/OIP.nm6FznMuZMqbrxsF6g_NRwHaEK?w=308&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 3, name: "Tablet", price: 50000, image: "https://th.bing.com/th/id/OIP.6eTm9m0H5BtUCymOMhwqbQHaFy?w=216&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 4, name: "Headphones", price: 15000, image: "https://th.bing.com/th/id/OIP.qzMJK19Irn-xDRraMnN6_QHaE7?w=213&h=150&c=6&o=7&pid=1.7&rm=3" },
        { id: 5, name: "Watch", price: 12000, image: "https://th.bing.com/th/id/OIP.93reHSsfb97jxCbiDQH8HAHaEB?w=327&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 6, name: "Camera", price: 45000, image: "https://th.bing.com/th/id/OIP.v7dfTKeJFOun9ck_UgXeOgHaEq?w=274&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 7, name: "Printer", price: 20000, image: "https://th.bing.com/th/id/OIP.vUBk67CPXHeF9Bzkdtfd9gHaHa?w=165&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 8, name: "Monitor", price: 30000, image: "https://th.bing.com/th/id/OIP.iQvDmDK7g4klxrgpV8tDegHaHa?w=175&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 9, name: "Keyboard", price: 5000, image: "https://th.bing.com/th/id/OIP.M90tdjXardZX_vGARJWrSAHaED?w=322&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 10, name: "Mouse", price: 3000, image: "data:image/webp;base64,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" },
        { id: 11, name: "Speaker", price: 8000, image: "data:image/webp;base64,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" },
        { id: 12, name: "External Hard Drive", price: 10000, image: "data:image/webp;base64,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" },
        { id: 13, name: "USB Flash Drive", price: 2000, image: "https://th.bing.com/th/id/OIP.UVZW3bJwGP2DbOjFwEBOIAHaE8?w=299&h=200&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 14, name: "Webcam", price: 7000, image: "https://th.bing.com/th/id/OIP.hOHssWkT1vK6Fwzsew_NoQHaFP?w=289&h=204&c=7&r=0&o=7&pid=1.7&rm=3" },
        { id: 15, name: "Microphone", price: 6000, image: "https://th.bing.com/th/id/OIP.1rw9ZfPkneTCsCXlem1A2AHaEK?w=256&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
    ];

function ShoppingCart() {
  const [cart, setCart]       = useState([]);
  const [message, setMessage] = useState("");

  function addToCart(product) {
    if (cart.find(item => item.id === product.id)) {
      setMessage(`${product.name} already in cart! ⚠️`);
      return;
    }
    setCart(prev => [...prev, product]);
    setMessage(`${product.name} added! ✅`);
  }

  function removeFromCart(product) {
    setCart(prev => prev.filter(item => item.id !== product.id));
    setMessage(`${product.name} removed 🗑️`);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const isInCart = (product) => cart.find(item => item.id === product.id);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h2 style={{ textAlign: "center", color: "#1E3A8A" }}>
        🛍️ Shop
      </h2>

      {/* ─── PRODUCTS GRID ─── */}
      <ul style={{
        display: "flex",         // ← same line
        flexWrap: "wrap",        // ← wrap to next line if needed
        gap: "20px",
        listStyle: "none",
        padding: "20px",
        justifyContent: "center"
      }}>
        {products.map(product => (
          <li key={product.id} style={{
            display: "flex",
            flexDirection: "column",  // ← upar se neeche
            alignItems: "center",
            width: "160px",
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            padding: "15px",
            gap: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            backgroundColor: isInCart(product) ? "#F0FDF4" : "white"
          }}>

            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            {/* Naam */}
            <p style={{
              fontWeight: "bold",
              textAlign: "center",
              margin: 0,
              fontSize: "14px"
            }}>
              {product.name}
            </p>

            {/* Price */}
            <p style={{ color: "#16A34A", margin: 0, fontSize: "14px" }}>
              Rs. {product.price.toLocaleString()}
            </p>

            {/* Button */}
            <button
              onClick={() => addToCart(product)}
              style={{
                backgroundColor: isInCart(product) ? "#86EFAC" : "#2563EB",
                color: isInCart(product) ? "#166534" : "white",
                border: "none",
                padding: "8px 0",
                borderRadius: "6px",
                cursor: "pointer",
                width: "100%",
                fontSize: "13px"
              }}
            >
              {isInCart(product) ? "Added ✅" : "Add to Cart 🛒"}
            </button>
          </li>
        ))}
      </ul>

      {/* ─── CART SECTION ─── */}
      <div style={{
        border: "2px solid #2563EB",
        borderRadius: "12px",
        padding: "20px",
        marginTop: "20px"
      }}>
        <h3 style={{ color: "#1E3A8A" }}>
          🛒 Cart — {cart.length} items
        </h3>

        {cart.length === 0 ? (
          <p style={{ color: "gray", textAlign: "center" }}>
            Cart is empty 🛒
          </p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #E5E7EB"
              }}>
                <span>{item.name}</span>
                <span style={{ color: "#16A34A" }}>
                  Rs. {item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => removeFromCart(item)}
                  style={{
                    backgroundColor: "#FEE2E2",
                    color: "red",
                    border: "none",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  Remove ❌
                </button>
              </div>
            ))}

            <p style={{
              fontWeight: "bold",
              color: "#1E3A8A",
              marginTop: "10px",
              fontSize: "16px"
            }}>
              Total: Rs. {total.toLocaleString()}
            </p>
          </>
        )}
      </div>

      {/* ─── MESSAGE ─── */}
      {message && (
        <p style={{
          backgroundColor: message.includes("✅") ? "#DCFCE7"
                         : message.includes("⚠️") ? "#FEF3C7"
                         : "#FEE2E2",
          color: message.includes("✅") ? "green"
               : message.includes("⚠️") ? "orange" : "red",
          padding: "10px",
          borderRadius: "6px",
          marginTop: "10px",
          textAlign: "center"
        }}>
          {message}
        </p>
      )}
    </div>
  );
}

export { ShoppingCart };