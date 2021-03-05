import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const SearchBarHeader = styled.h2`
  color: white;
  font-size: 44px;
  text-transform: uppercase;
  font-family: ui-rounded;
`;
export const SearchBarControl = styled.div`
  display: flex;
  height: 50px;
  padding: 20px 0;
`;

export const SearchBarInput = styled.input`
  margin-right: 15px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: gray;
  padding: 0 15px;
  font-size: 24px;
  color: white;
  flex-grow: 1;
  &::placeholder {
    color: darkslategray;
  }
`;
export const SearchBarButton = styled.button`
  width: 220px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: crimson;
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  cursor: pointer;
`;
