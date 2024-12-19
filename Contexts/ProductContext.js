import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      console.log("Fetching products...");
      const response = await axios.get(
        "https://frew-backend.onrender.com/api/products"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Somethin's Wrong! We got you! Just refresh.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const refreshProducts = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };

  return (
    <ProductContext.Provider
      value={{ products, loading, refreshing, refreshProducts, error }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
