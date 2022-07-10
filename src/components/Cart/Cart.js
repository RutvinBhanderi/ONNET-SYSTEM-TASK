import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTotal, CartSummary, Container, Wrapper } from "./Cart.style";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { TbMoodEmpty } from "react-icons/tb";
import { addQuantity, removeQuantity } from "../../Reducer/CartSlice";
const Cart = ({ open }) => {
  //Selection Cart from Store
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantity = (type, item) => {
    //Handles the Quantity of Product
    if (type === "increment") {
      console.log("add :" + item.product__id);
      dispatch(addQuantity(item));
    } else {
      if (item.qty > 1) {
        dispatch(removeQuantity(item));
      }
    }
  };

  return (
    <Container style={{ visibility: open ? "visible" : "hidden" }}>
      <Wrapper>
        <CartSummary>
          {cart.products.length ? (
            <>
              <h1>Cart Summary</h1>
              <table>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products?.map((item) => (
                    <tr key={item.product__id}>
                      <td>{item.product__name}</td>
                      <td className='qty'>
                        <div>
                          <div className='icon'>
                            <AiOutlineMinus
                              onClick={() => handleQuantity("decrement", item)}
                            />
                          </div>
                          <div>{item.qty}</div>
                          <div className='icon'>
                            <AiOutlinePlus
                              onClick={() => handleQuantity("increment", item)}
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        {(item.list__price - item.selling__price) * item.qty}
                      </td>
                      <td>{item.selling__price * item.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />
              <CardTotal>
                <div className='Total__price'>
                  <span>Total Amount </span>
                  <span>Rs {cart.totalPrice}</span>
                </div>
                <div className='Total__discount'>
                  <span>You saved </span>
                  <span>Rs {cart.saved}</span>
                </div>
              </CardTotal>
            </>
          ) : (
            <div className='empty_cart'>
              <h1>Cart is Empty!!</h1>
              <TbMoodEmpty className='EmptyCartIcon' />
            </div>
          )}
        </CartSummary>
      </Wrapper>
    </Container>
  );
};

export default Cart;
