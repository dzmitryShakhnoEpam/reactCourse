import React from "react";

import {
  SearchBarHeader,
  SearchBarWrapper,
  SearchBarControl,
  SearchBarInput,
  SearchBarButton,
} from "./SearchBar.style";

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarHeader>find your movie</SearchBarHeader>
      <SearchBarControl>
        <SearchBarInput type="text" placeholder="What do you want to watch?" />
        <SearchBarButton>Search</SearchBarButton>
      </SearchBarControl>
    </SearchBarWrapper>
  );
};
