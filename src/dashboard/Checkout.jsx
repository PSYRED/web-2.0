import React, { useState } from "react";

const Checkout = ({ product, onConfirm }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate checkout process
    setTimeout(() => {
      setLoading(false);
      if (onConfirm) onConfirm({ name, address, product });
      alert("Order placed successfully!");
    }, 1000);
  };

  if (!product) {
    return <div>No product selected.</div>;
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 24, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Checkout</h2>
      <div>
        <strong>Product:</strong> {product.name} <br />
        <strong>Price:</strong> ${product.price}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
        <div>
          <label>
            Name:
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              style={{ width: "100%", marginTop: 4, marginBottom: 12 }}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              required
              value={address}
              onChange={e => setAddress(e.target.value)}
              style={{ width: "100%", marginTop: 4, marginBottom: 12 }}
            />
          </label>
        </div>
        <button type="submit" disabled={loading} style={{ width: "100%" }}>
          {loading ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
};

export default Checkout;