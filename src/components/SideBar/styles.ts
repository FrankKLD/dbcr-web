import styled from "styled-components";

export const Container = styled.div`
  grid-area: SB;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

export const SideBarArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 24px;
  background-color: white;

  width: 100%;
  height: 100%;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 12px;
`;

export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--default-credits-text);
  font-size: 12px;
  padding: 48px 0;

  > p > span {
    font-weight: 500;
    text-decoration: underline;

    cursor: pointer;
  }
`;
