import React from "react";
import { CategoryItem, CategoryWrapper } from "./Categories.style";
const categoryList: CategoryItem[] = [
  { id: "1", name: "all" },
  { id: "2", name: "documentary" },
  { id: "3", name: "comedy" },
  { id: "4", name: "horror" },
  { id: "5", name: "crime" },
];

export const Categories = () => {
  return (
    <CategoryWrapper>
      {categoryList.map(({ id, name }) => (
        <CategoryItem key={id}>{name}</CategoryItem>
      ))}
    </CategoryWrapper>
  );
};

export interface CategoryItem {
  id: string;
  name: string;
}
