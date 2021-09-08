import styled from "styled-components";

// LD - Logo DBCR
// SA - Search Area
// SB - Side Bar
// CA - Content Area

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 1fr 3fr;
  grid-template-rows: 96px 3fr;

  grid-template-areas:
    "LD SA"
    "SB CA";

  height: 100%;
`;
