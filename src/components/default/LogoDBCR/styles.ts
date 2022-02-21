import styled from "styled-components";

export const Container = styled.div`
  grid-area: LD;
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-content: center;

  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;

  justify-items: center;
  align-items: center;

  > img {
    width: 50px;
  }
`;

export const Title = styled.div`
  display: flex;

  color: var(--principal);
  font-weight: 500;
  font-size: 26px;
  font-style: italic;

  margin-left: 12px;
`;

export const First = styled.span`
  color: var(--logo-first-color);
`;

export const Second = styled.span`
  color: var(--logo-second-color);
`;
