import React from "react";
import { Categories } from "../Categories/Categories";
import { FilmsList } from "../FilmsList/FilmsList";
import { Filter } from "../Filter/Filter";
import { MainMenu, MainWrapper } from "./Main.style";

export const Main = () => {
  return (
    <MainWrapper>
      <MainMenu>
        <Categories></Categories>
        <Filter></Filter>
      </MainMenu>
      <FilmsList></FilmsList>
    </MainWrapper>
  );
};
