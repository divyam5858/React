import React, { useEffect, useState } from "react";
import "./FetchProducts.css";
const FetchProducts = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((e) => e.json())
      .then((data) => setProduct(data));
  }, []);

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const filteredProducts = Product.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });
  const productsToDisplay = search === "" ? Product : filteredProducts;

  return (
    <div className="Container">
      <h1>Check out for More Products!!!</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search Products by Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setSearch(input)}>Search</button>
      </div>
      <div className="can">
        {productsToDisplay.map((e, i) => {
          return (
            <div className="Cards" key={i}>
              <div className="img">
                <img src={e.image} alt="image loading......" />
              </div>
              <div className="content">
                <h3>{e.title}</h3>
                <h2>Price:{e.price}</h2>
                <h4>{e.description}</h4>
                <h6>Category: {e.category}</h6>
                <h5>Rating: {e.rating.rate}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchProducts;
