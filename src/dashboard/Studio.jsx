import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export const Studio = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [brand] = useState(location.state?.brand || "Toyota");
  const [products, setProducts] = useState([]);

  const [selectedModel, setSelectedModel] = useState("");

  const [selectedBed, setSelectedBed] = useState("");
   

  // 1. Fetch products once
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("car_brand", brand);

      setProducts(data || []);
    };

    fetchProducts();
  }, [brand]);

  useEffect(()=> {
    console.log("Raw_productArray:",products)
    
    
  },[products])

  // 2. Get unique models
  const models = useMemo(() => {
    const unique = [...new Set(products.map(p => p.car_model))];
    return unique;
  }, [products]);

  // 3. Set defaults safely
  useEffect(() => {
    if (models.length && !selectedModel) {
      setSelectedModel(models[0]);
    }
  }, [models]);

  // 4. Filter selected model products
  const modelProducts = useMemo(() => {
    return products.filter(p => p.car_model === selectedModel);
  }, [products, selectedModel]);

  // 5. Bed sizes
  const bedSizes = useMemo(() => {
    return [...new Set(modelProducts.map(p => p.bed_size))];
  }, [modelProducts]);

  useEffect(() => {
    if (bedSizes.length && !selectedBed) {
      setSelectedBed(bedSizes[0]);
    }
  }, [bedSizes]);

  // 6. Selected product
  const selectedProduct = useMemo(() => {
    return modelProducts.find(
      p => p.bed_size === selectedBed
    );
  }, [modelProducts, selectedBed]);

  // 7. Images from Supabase Storage
  const images = useMemo(() => {
    if (!selectedProduct?.image_id) return [];

    return selectedProduct.image_id.map(path =>
      supabase.storage
        .from("BRP/BRP/Standard")
        .getPublicUrl(path)
        .data.publicUrl
    );
  }, [selectedProduct]);

  useEffect(()=>{
    console.log("IMAGE ARRAY",images)
  ,[images]})

  useEffect(() => {
  if (modelProducts.length) {
    setSelectedBed(modelProducts[0].bed_size);
  }
}, [selectedModel]);

  if (!selectedProduct) return <div className="text-white p-10">Loading...</div>;

  const logoPath = `/imgclone/LOGOS/${brand.toLowerCase()}.svg`;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-bl from-black via-red-900 to-slate-900 bg-black text-white p-10">

      <div className="w-[70%] items-center bg-black border rounded-xl p-6 flex gap-6">

        {/* IMAGE */}
        <div className="w-1/2">
          <img
            src={images[0]}
            className="w-full rounded-lg"
          />
        </div>

        {/* CONFIG */}
        <div className="w-1/2 flex flex-col gap-4">
          <div>
            <img src={logoPath} alt="" srcset="" />
          </div>
          {/* MODEL */}
          <select
            className="bg-black border rounded p-2"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            {models.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          {/* BED SIZE */}
          <select
            className="bg-black border rounded p-2"
            value={selectedBed}
            onChange={(e) => setSelectedBed(e.target.value)}
          >
            {bedSizes.map(b => (
              <option key={b} value={b}>
                {b} ft
              </option>
            ))}
          </select>

          {/* INFO */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold">
              {selectedProduct.car_model}
            </h2>

            <p>{selectedProduct.storage_mode}</p>

            <p className="text-lg font-semibold">
              ${selectedProduct.base_price}
            </p>
          </div>

          {/* NEXT */}
          <button
            onClick={() =>
              navigate("/dashboard/cart", {
                state: {
                  brand,
                  model: selectedProduct.car_model,
                  bedLength: selectedProduct.bed_size,
                  mod: selectedProduct.storage_mode,
                  price: selectedProduct.base_price,
                  image: images[0],
                },
              })
            }
            className="bg-green-600 py-2 rounded"
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
};