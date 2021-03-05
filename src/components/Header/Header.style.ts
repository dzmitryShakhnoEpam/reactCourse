import styled from "styled-components";
import background from "../../images/header.jpg";

export const HeaderWrapper = styled.div`
  height: 400px;
  background: url(${background});
  background-size: contains;
`;

export const HeaderContent = styled.div`
  height: 100%;
  backdrop-filter: blur(2px) brightness(0.5);
  padding: 20px 50px;
  box-sizing: border-box;
`;

export const HeaderTopPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddMovie = styled.div`
  color: crimson;
  padding: 0 12px;
  display: flex;
  align-content: center;
  text-transform: uppercase;
  background-color: gray;
  line-height: 44px;
  border-radius: 5px;
  font-size: 25px;
`;
