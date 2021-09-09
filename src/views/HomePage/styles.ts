import styled from "styled-components";

export const Container = styled.div`
  grid-area: CA;
  display: flex;

  padding: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-sections);
  border-radius: 12px;

  width: 100%;

  padding: 30px 26px;
  height: calc(100vh - 120px);
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

export const Title = styled.div`
  width: 100%;

  color: var(--default-title);
  font-size: 26px;
  font-weight: bold;
`;

export const CardArea = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LastSchedulesArea = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
