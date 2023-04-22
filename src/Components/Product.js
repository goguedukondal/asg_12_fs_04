import React from "react";
import "./Product.css";
import { useEffect, useState } from "react";


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "red" }}>Products </h2>
      
      {products.length > 0 ? (
        <div className="container">
          {products.map((product) => {
            // {console.log(product)}
            return (
              <div className="cardStyle">
                <img
                  src={product.image}
                  alt="product_image"
                  width="200"
                  height="200"
                />
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
               
              </div>
            );
          })}
        </div>
      ) : (
        <h2>No Products to Display</h2>
      )}
    </div>
  );
}

export default Products;