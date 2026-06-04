import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Shipping = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    brand,
    model,
    bedLength,
    mod,
    price,
    image,
  } = location.state || {};

  const [shippingData, setShippingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    setShippingData({
      ...shippingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    navigate("/dashboard/payment", {
      state: {
        product: {
          brand,
          model,
          bedLength,
          mod,
          price,
          image,
        },
        shipping: shippingData,
      },
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 flex justify-center">
      <div className="w-[80%] grid grid-cols-2 gap-10">

        {/* Shipping Form */}
        <div>
          <h1 className="text-3xl font-bold mb-8">
            Shipping Information
          </h1>

          <div className="space-y-4">

            <input
              name="fullName"
              placeholder="Full Name"
              value={shippingData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-zinc-900"
            />

            <input
              name="email"
              placeholder="Email"
              value={shippingData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-zinc-900"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={shippingData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-zinc-900"
            />

            <input
              name="city"
              placeholder="City"
              value={shippingData.city}
              onChange={handleChange}
              className="w-full p-3 rounded bg-zinc-900"
            />

            <input
              name="address"
              placeholder="Address"
              value={shippingData.address}
              onChange={handleChange}
              className="w-full p-3 rounded bg-zinc-900"
            />

          </div>
        </div>

        {/* Order Summary */}
        <div className="border border-zinc-700 rounded-xl p-6">

          <h2 className="text-2xl font-semibold mb-6">
            Order Summary
          </h2>

          <img
            src={image}
            alt={model}
            className="w-full rounded-lg mb-6"
          />

          <div className="space-y-3">

            <p>
              <strong>Brand:</strong> {brand}
            </p>

            <p>
              <strong>Model:</strong> {model}
            </p>

            <p>
              <strong>Bed Length:</strong> {bedLength}
            </p>

            <p>
              <strong>Configuration:</strong> {mod}
            </p>

            <p className="text-xl font-bold">
              ${price}
            </p>

          </div>

          <button
            onClick={handleContinue}
            className="mt-8 w-full bg-green-600 py-3 rounded-lg"
          >
            Continue to Payment
          </button>

        </div>

      </div>
    </div>
  );
};