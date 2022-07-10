import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: 20px 50px;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Card = styled.div`
  flex: 1 300px;
  max-width: 400px;
  // width: 300px;
  height: 250px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);
  position: relative;
`;
export const CardImage = styled.div`
  height: 120px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CardContent = styled.div`
  padding: 15px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  text-align: left;
`;
export const Bonus = styled.span`
  text-decoration-line: line-through;
  font-size: 11px;
  color: gray;
`;
export const Price = styled.div``;
export const PriceTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: gray;
`;
export const SPrice = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
`;

export const Featured = styled.div`
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );

  height: 30px;
  width: 30px;
  background-color: #fbc82a;
  position: absolute;
  top: -6%;
  right: -3%;
`;

export const Loader = styled.div`
  height: 50px;
  width: 50px;
  border: 3px solid blue;
  border-bottom: none;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  position: relative;
  transform: traslate(-50%, -50%);
  animation: rotate 0.5s linear infinite;
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
