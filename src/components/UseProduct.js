import { useEffect, useState } from "react";

function UseProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json(); // Convert response to JSON
        console.log(data);
        setProducts(data); // Store data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return products
}

export default UseProduct;
