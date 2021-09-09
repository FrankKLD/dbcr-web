import styled from "styled-components";
import {
  Trash,
  CheckCircle,
  Eye,
  Tags,
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from "styled-icons/bootstrap";

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
  padding: 6px 12px;

  font-size: 12px;
  color: var(--default-text);
  background: var(--mark-selecteds-background);
  border-radius: 6px;

  transition: var(--default-transition-delay);

  :hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
  }
`;

export const TableArea = styled.div`
  margin-top: 12px;

  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 16px;
  border-collapse: collapse;

  > thead tr td {
    padding: 12px;
    color: var(--table-head-title);
    border-bottom: 1px solid var(--table-body-text);
  }

  > tbody tr td {
    padding: 12px;
    color: var(--table-body-text);
  }

  tr:nth-child(2n + 1) {
    background-color: var(--table-body-background);
  }
`;

export const ActionsArea = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

export const TrashIcon = styled(Trash)`
  display: flex;
  width: 16px;
  margin: 3px;

  color: var(--table-actions-button-color);

  transition: var(--default-transition-delay);

  :hover {
    cursor: pointer;
    color: var(--table-actions-button-color-hover);
  }
`;

export const CheckIcon = styled(CheckCircle)`
  display: flex;
  width: 16px;
  margin: 3px;

  color: var(--table-actions-button-color);

  transition: var(--default-transition-delay);

  :hover {
    cursor: pointer;
    color: var(--table-actions-button-color-hover);
  }
`;

export const EyeIcon = styled(Eye)`
  display: flex;
  width: 16px;
  margin: 3px;

  color: var(--table-actions-button-color);

  transition: var(--default-transition-delay);

  :hover {
    cursor: pointer;
    color: var(--table-actions-button-color-hover);
  }
`;

export const TagsIcon = styled(Tags)`
  display: flex;
  width: 16px;
  margin: 3px;

  color: var(--table-actions-button-color);

  transition: var(--default-transition-delay);

  :hover {
    cursor: pointer;
    color: var(--table-actions-button-color-hover);
  }
`;

export const PaginationsArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 36px;
`;

export const PreviousButton = styled(ArrowLeftCircleFill)`
  display: flex;
  margin: 0 18px;
  width: 16px;
  color: var(--table-paginations-button);

  transition: var(--default-transition-delay);

  :hover {
    cursor: pointer;
    color: var(--table-paginations-button-hover);
  }
`;

export const NextButton = styled(ArrowRightCircleFill)`
  display: flex;
  margin: 0 18px;
  width: 16px;
  color: var(--table-paginations-button);

  transition: var(--default-transition-delay);

  :hover {
    cursor: pointer;
    color: var(--table-paginations-button-hover);
  }
`;

export const PagesArea = styled.div`
  display: flex;

  > div {
    margin: 0 6px;
    color: var(--table-paginations-button);

    transition: var(--default-transition-delay);

    :hover {
      cursor: pointer;
      color: var(--table-paginations-button-hover);
    }
  }
`;
