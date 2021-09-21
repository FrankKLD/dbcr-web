import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--default-card-background);

  padding: 30px;
  border-radius: 12px;

  min-width: 300px;
  min-height: 223px;

  transition: var(--default-transition-delay);

  :hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;

  color: var(--default-card-text);
`;
