import React from "react";
import { Categories } from "../Categories/Categories";
import { MainMenu, MainWrapper } from "./Main.style";

export const Main = () => {
  return (
    <MainWrapper>
      <MainMenu>
        <Categories></Categories>
      </MainMenu>
      <p>Main</p>
    </MainWrapper>
  );
};
