import React from "react";
import { Logo } from "../Logo/Logo";
import { SearchBar } from "../SearchBar/SearchBar";
import {
  AddMovie,
  HeaderContent,
  HeaderTopPanel,
  HeaderWrapper,
} from "./Header.style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderTopPanel>
          <Logo></Logo>
          <AddMovie>+Add Movie</AddMovie>
        </HeaderTopPanel>
        <SearchBar></SearchBar>
      </HeaderContent>
    </HeaderWrapper>
  );
};
