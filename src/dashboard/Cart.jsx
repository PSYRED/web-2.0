import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Cart() {
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

  if (!location.state) {
    return (
      <div className="p-10 text-center">
        <h2>No configuration found.</h2>

        <button
          onClick={() => navigate("/dashboard/studio")}
          className="mt-4 px-4 py-2 bg-green-600 rounded"
        >
          Configure a Rack
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center py-20">
      <div className="w-[70%] border rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Configuration Review
        </h1>

        <div className="flex gap-8">

          {/* Product Image */}
          <div className="w-1/2">
            <img
              src={image}
              alt={`${brand} ${model}`}
              className="w-full rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-1/2 space-y-4">

            <div>
              <span className="font-semibold">Brand:</span>{" "}
              {brand}
            </div>

            <div>
              <span className="font-semibold">Model:</span>{" "}
              {model}
            </div>

            <div>
              <span className="font-semibold">Bed Length:</span>{" "}
              {bedLength}
            </div>

            <div>
              <span className="font-semibold">Configuration:</span>{" "}
              {mod}
            </div>

            <div className="text-2xl font-bold pt-4">
              ${price}
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-10">

          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded"
          >
            Edit Configuration
          </button>

          <button
            onClick={() =>
              navigate("/dashboard/Shipping", {
                state: {
                  brand,
                  model,
                  bedLength,
                  mod,
                  price,
                  image,
                },
              })
            }
            className="px-6 py-2 bg-green-600 rounded"
          >
            Continue to Shipping
          </button>

        </div>
      </div>
    </div>
  );
};