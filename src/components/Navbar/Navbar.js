import React, { useState } from "react";
import { Container, Wrapper, CartIcon, Logo, Search } from "./Navabr.style";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { BsCart3, BsFillPersonFill } from "react-icons/bs";

const Navbar = ({ setOpen, setSearch }) => {
  //Select TotalQuantity
  const qty = useSelector((state) => state.cart.totalQty);

  return (
    <Container>
      <Wrapper>
        <Search>
          <input type='text' onChange={(e) => setSearch(e.target.value)} />
        </Search>
        <CartIcon qty={qty}>
          <BsCart3 onClick={() => setOpen((prev) => !prev)} />
        </CartIcon>
        <Logo>
          <BsFillPersonFill />
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
