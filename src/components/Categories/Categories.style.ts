import styled from "styled-components";
export const CategoryWrapper = styled.ul`
  list-style-type: none;
  color: white;
  font-size: 18px;
  margin: 0;
  padding: 5px;
  overflow: hidden;
`;
export const CategoryItem = styled.li`
  float: left;
  padding: 5px;
  margin: 4px;
  text-transform: uppercase;
  cursor: pointer;
  &:nth-child(1) {
    border-bottom: solid red 2px;
  }
`;
