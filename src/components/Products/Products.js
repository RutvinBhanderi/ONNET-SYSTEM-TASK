import React, { useEffect, useReducer, useState } from "react";
import Product from "./Product";
import { Container, Wrapper, Loader } from "./Products.style";

const initialState = {
  isLoading: false,
  error: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH__START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH__END":
      return {
        ...state,
        isLoading: false,
      };
    case "ERROR":
      return {
        ...state,
        error: true,
      };
  }
};
const Products = ({ open, search }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "FETCH__START" });
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://web-poc.onnetsystems.in/products");
        let data = await res.json();
        data = data.map((item) => ({ ...item, qty: 1 }));
        setProducts(data);
        dispatch({ type: "FETCH__END" });
      } catch (error) {
        dispatch({ type: "ERROR" });
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((item) =>
      item.product__name.toLowerCase().includes(search)
    );
    setFilteredProducts(filteredProducts);
  }, [search]);

  if (state.error) {
    return <div>Something went wrong</div>;
  }
  return (
    <Container style={{ overflow: open && "hidden", height: "100vh" }}>
      {state.isLoading ? (
        <Loader />
      ) : (
        <Wrapper>
          {filteredProducts.length
            ? filteredProducts?.map((item) => (
                <Product key={item.product__id} {...item} />
              ))
            : products?.map((item) => (
                <Product key={item.product__id} {...item} />
              ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default Products;
