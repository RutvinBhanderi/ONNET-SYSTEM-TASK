import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 60px;
  background-color: #3b3b3b;
  padding: 0 50px;
`;
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const CartIcon = styled.div`
  color: white;
  font-size: 30px;
  position: relative;
  cursor: pointer;
  &::after {
    font-size: 10px;
    content: "${(props) => props.qty}";
    position: absolute;
    top: 2px;
    right: -7px;
    background-color: red;
    color: white;
    border-radius: 50%;
    height: 15px;
    width: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
`;
export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background-color: #dddddd;
  border-radius: 50%;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: gray;
`;

export const Search = styled.div`
  input {
    outline: none;
    border: none;
    padding: 10px;
    margin-right: 20px;
    border-radius: 10px;
  }
`;
