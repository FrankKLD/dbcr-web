import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`;
export const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;

  color: var(--default-title);
  font-size: 20px;
`;

export const MarksArea = styled.div`
  display: flex;
`;

export const MarksSelectedArea = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--default-text);
`;
