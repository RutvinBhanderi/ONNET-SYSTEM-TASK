import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  left: 0px;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  z-index: 5;
`;
export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
`;
export const CartSummary = styled.div`
  width: 550px;
  height: 100%;
  padding: 20px;
  background-color: white;

  h1 {
    color: gray;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    th,
    td {
      padding: 15px;
    }
    th {
      font-weight: 600;
    }

    thead {
      background-color: black;
      color: white;
      font-weight: 200;
    }

    tbody {
      tr:nth-child(2n + 2) {
        background-color: #e0dfdf;
      }

      .qty div {
        margin-left: -15px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 30px;

        .icon {
          cursor: pointer;
          padding: 5px;
          border-radius: 4px;
          background-color: #adadad;
        }
      }
    }
  }

  .empty_cart {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    position: relative;
    .EmptyCartIcon {
      font-size: 200px;
      color: gray;
      opacity: 0.4;
    }

    h1 {
      z-index: 1;
      color: rgba(0, 0, 0);
      font-size: 40px;
      margin-bottom: -10px;
    }
  }
`;
export const CardTotal = styled.div`
  padding: 20px 0px;
  & > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .Total__price {
    span {
      font-size: 30px;
      font-weight: 700;
    }
    span:nth-child(2) {
      font-weight: 300;
    }
  }

  .Total__discount {
    span {
      font-size: 20px;
    }
  }
`;
