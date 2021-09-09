import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--default-card-background);

  padding: 30px;
  border-radius: 12px;

  min-width: 300px;
  min-height: 223px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;

  color: var(--default-card-text);
`;

export const Description = styled.div`
  display: flex;
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;

  color: var(--default-card-text);
`;
