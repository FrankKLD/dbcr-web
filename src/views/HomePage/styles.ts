import styled from "styled-components";

export const Container = styled.div`
  grid-area: CA;
  display: flex;

  padding: 12px 12px 12px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-sections);
  border-radius: 24px;

  width: 100%;

  padding: 30px 26px;

  overflow-y: auto;
`;

export const Title = styled.div`
  width: 100%;

  color: var(--default-title);
  font-size: 26px;
  font-weight: bold;
`;
