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

export const TagArea = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 36px;
`;

export const DataArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  padding: 12px;

  border: 1px solid var(--create-tags-border);
  border-radius: 6px;
`;

export const TitleDataArea = styled.div`
  width: 100%;

  color: var(--default-title);
  font-size: 16px;
  font-weight: bold;
`;

export const LineInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: stretch;
`;

export const ColLineInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckColLineInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 6px;
`;

export const Label = styled.label`
  margin-top: 12px;
`;

export const Input = styled.input`
  margin-top: 12px;
  padding: 18px;
  border: 1px solid var(--create-tags-input-border);
  border-radius: 6px;

  &::placeholder {
    font-size: 14px;
    font-weight: normal;
    color: var(--default-input-placeholder);
  }
`;
