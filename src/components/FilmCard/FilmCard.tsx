import React from "react";
import PropTypes from "prop-types";
import {
  FilmCardBlock,
  FilmCardImage,
  FilmCardWrapper,
  FilmTitle,
  FilmName,
  FilmDate,
  FilmGenre,
} from "./FilmCard.styles";
import { Card } from "../FilmsList/FilmsList";

export const FilmCard = (props: Card) => {
  return (
    <FilmCardWrapper>
      <FilmCardBlock>
        <FilmCardImage src={props.imageSrc} alt="image" />
      </FilmCardBlock>
      <FilmTitle>
        <FilmName>{props.name}</FilmName>
        <FilmDate>{props.date}</FilmDate>
      </FilmTitle>
      <FilmGenre>{props.genres}</FilmGenre>
    </FilmCardWrapper>
  );
};

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
