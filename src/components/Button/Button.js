import React from "react";
import styled from "styled-components";

const Buton = styled.button`
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #1565c0;
  cursor: pointer;
  background-color: ${(props) => (props.added ? "#1565C0" : "#ffffff")};
  color: ${(props) => (props.added ? "#ffffff" : "#1565C0")};
  border-radius: 5px;
  font-weight: 100;
  margin-top: 5px;
`;

const Button = ({ onClick, added, children }) => {
  return (
    <Buton onClick={onClick} added={added}>
      {children}
    </Buton>
  );
};

export default Button;
