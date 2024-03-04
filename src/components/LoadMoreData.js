import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    console.log("cdm")
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) {
      setDisableButton(true);
    }
  }, [products]);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );
      const result = await response.json();
      console.log(result);
      // debugger;

      if (result && result.products.length) {
        // setProducts([...result.products]);
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  
  if (loading) {
    return <div>Items are loading. Please wait</div>;
  }

  return (
    <div className="container">
      <div className="product-conatiner flex flex-wrap">
        {products.map((item) => {
          return (
            <div className="product w-72 m-2 p-2 " key={item.id}>
              <img
                className="rounded-lg"
                src={item.images[0]}
                alt={item.title}
              />
              <div>{item.title}</div>
              <div>${item.price}</div>
            </div>
          );
        })}
      </div>
      <div>
        <button className="focus:ring-blue-600 focus:ring-4 rounded border border-blue-500 p-2 m-2 shadow-lg text-white bg-blue-500 ring-1 hover:bg-blue-600 "
          disable={disableButton.toString()}
          onClick={() => setCount(count + 1)}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;
