import styled from "styled-components";
export const FilmCardWrapper = styled.div`
  width: 300px;
`;

export const FilmCardBlock = styled.div`
  position: relative;
  display: grid;
  overflow: hidden;
  width: 300px;
  height: 450px;
`;

export const FilmCardImage = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: center;
  z-index: 1;
`;

export const FilmTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px 0 10px 0;
`;

export const FilmName = styled.p`
  font-family: "Lato-Regular", sans-serif;
  color: #ffffff80;
  letter-spacing: 0.5px;
  font-size: 19px;
  margin: 0;
`;

export const FilmDate = styled.p`
  font-family: "Lato-Regular", sans-serif;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.8px;
  color: #ffffff60;
  border: 1px solid #ffffff80;
  border-radius: 3.5px;
  width: 64px;
  height: 24px;
  margin: 0;
`;

export const FilmGenre = styled.div`
  font-family: "Lato-Light", sans-serif;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.8px;
  color: #ffffff60;
  text-align: left;
`;
