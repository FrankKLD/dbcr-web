import styled from "styled-components";
import { XCircle, PersonBadge, Back, Front } from "styled-icons/bootstrap";

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

export const DataTagArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  padding: 12px;

  border: 1px solid var(--create-tags-border);
  background: var(--create-tags-form-data-tag-background);
  border-radius: 6px;
`;

export const TotalTagConfigArea = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
`;

export const TagConfigArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 49%;
  color: var(--create-tags-form-text);
  font-size: 14px;
`;

export const TitleDataArea = styled.div`
  width: 100%;

  color: var(--default-title);
  font-size: 16px;
  font-weight: bold;

  margin-bottom: 6px;
`;

export const Form = styled.form`
  color: var(--create-tags-form-text);
  font-size: 14px;
`;

export const LineInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-content: center;

  .full-width {
    grid-column: 1 / 3;
  }
`;

export const LineConfigInput = styled.div`
  display: flex;
  align-content: center;
`;

export const ColLineInput = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    margin-top: 12px;
    font-size: 10.24px;
  }
`;

export const AloneColLineInput = styled.div`
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

export const Select = styled.select`
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

export const BoxData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  margin-top: 12px;
  margin-left: 12px;

  > label {
    text-align: left;
    padding: 12px 0;
  }

  > input {
    padding: 18px;
    border-radius: 6px;

    &::placeholder {
      font-size: 14px;
      font-weight: normal;
      color: var(--default-input-placeholder);
    }
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
`;
export const ButtonConfigArea = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const DoTagIconButton = styled.button`
  display: flex;
  align-items: center;

  background: var(--table-do-tag-backgroung-button);
  color: var(--table-do-tag-text-button);
  padding: 11px;

  font-size: 14px;
  border-radius: 6px;
`;

export const CancelIconButton = styled.button`
  display: flex;
  align-items: center;

  background: var(--table-close-backgroung-button);
  color: var(--table-close-text-button);
  padding: 11px;

  font-size: 14px;
  border-radius: 6px;
`;

export const FrontIconButton = styled.button`
  display: flex;
  align-items: center;

  background: var(--create-tags-form-front-tag-background);
  color: var(--create-tags-form-front-tag-bolor);
  padding: 11px;

  font-size: 14px;
  border: 1px solid var(--create-tags-form-back-tag-border);
  border-radius: 6px;
`;

export const BackIconButton = styled.button`
  display: flex;
  align-items: center;

  background: var(--create-tags-form-back-tag-background);
  color: var(--create-tags-form-back-tag-color);
  padding: 11px;

  font-size: 14px;
  border: 1px solid var(--create-tags-form-back-tag-border);
  border-radius: 6px;
`;

export const DoTagIcon = styled(PersonBadge)`
  display: flex;
  width: 30px;
  margin-right: 12px;
`;

export const CancelIcon = styled(XCircle)`
  display: flex;
  width: 30px;
  margin-right: 12px;
`;

export const FrontIcon = styled(Front)`
  display: flex;
  width: 30px;
  margin-right: 12px;
`;

export const BackIcon = styled(Back)`
  display: flex;
  width: 30px;
  margin-right: 12px;
`;
