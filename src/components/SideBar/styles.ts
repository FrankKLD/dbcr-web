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

  border-radius: 12px;
  background-color: white;

  width: 100%;
  min-height: calc(100vh - 120px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    float: right;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--default-scroll);
    border-radius: 4px;

    :hover {
      background-color: var(--default-background-scroll-hover);
    }
  }
  ::-webkit-scrollbar-track {
    background-color: var(--default-background-scroll);
    border-radius: 4px;
  }
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
  padding: 20px 0;

  > p > span {
    font-weight: 500;

    cursor: pointer;
  }
`;
