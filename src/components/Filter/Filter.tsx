import React from "react";
import { FilterWrapper, TitleWrapper, OptionsWrapper } from "./Filter.style";
const selectOptions: SelectOption[] = [
  { id: "1", name: "release date" },
  { id: "2", name: "second" },
  { id: "3", name: "third" },
];
export const Filter = () => {
  return (
    <FilterWrapper>
      <TitleWrapper>sort by</TitleWrapper>
      <OptionsWrapper defaultValue={selectOptions[1].name}>
        {selectOptions.map(({ id, name }, index) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </OptionsWrapper>
    </FilterWrapper>
  );
};

interface SelectOption {
  id: string;
  name: string;
}
