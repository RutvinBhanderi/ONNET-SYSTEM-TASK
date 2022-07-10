import React, { useState } from "react";
import Button from "../Button/Button";
import {
  Card,
  CardContent,
  CardImage,
  Price,
  Bonus,
  Title,
  PriceTitle,
  SPrice,
  Featured,
} from "./Products.style";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../Reducer/CartSlice";
import { useEffect } from "react";

const Product = ({ ...item }) => {
  const [add, setAdd] = useState(false);
  const product = useSelector((state) =>
    state.cart.products.filter((p) => p.product__id === item.product__id)
  );

  useEffect(() => {
    //Check if Product is Present inside cart
    if (product.length) {
      setAdd(true);
    }
  }, []);

  const dispatch = useDispatch();
  const handleAdd = (item) => {
    setAdd((prev) => !prev);
    if (add) {
      dispatch(removeProduct(item));
    } else {
      dispatch(addProduct(item));
    }
  };
  return (
    <Card>
      <CardImage>
        <img src={item.product__banner} />
      </CardImage>
      <CardContent>
        <Title>{item.product__name}</Title>

        <Price>
          <PriceTitle>Price : </PriceTitle>
          <Bonus>Rs {item.list__price}</Bonus>
          <SPrice>Rs {item.selling__price}</SPrice>
        </Price>
        <Button onClick={() => handleAdd(item)} added={add}>
          {add ? "REMOVE FROM CART" : "ADD TO CART"}
        </Button>
      </CardContent>
      {item.is__trending && <Featured />}
    </Card>
  );
};

export default Product;
