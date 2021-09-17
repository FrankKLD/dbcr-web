import styled from "styled-components";
import {
  XCircle,
  PersonBadge,
  Clock,
  ArrowRightShort,
} from "styled-icons/bootstrap";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border-radius: 6px;

  background: var(--table-schedule-background);
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  color: var(--table-schedule-title);

  > strong {
    color: var(--table-schedule-title-description);
    margin: 0 6px;
  }

  > span {
    color: var(--table-schedule-title-description);
    margin: 0 6px;

    > strong {
      color: var(--table-schedule-title-description-value);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const BoxData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  margin-top: 12px;
  margin-right: 12px;

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

export const RescheduleButton = styled.button`
  display: flex;
  align-items: center;

  background: var(--table-schedule-backgroung-button);
  color: var(--table-schedule-text-button);
  padding: 11px;

  font-size: 14px;
  border-radius: 6px;
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

export const ArrowRightIcon = styled(ArrowRightShort)`
  display: flex;
  width: 60px;
`;

export const CancelIcon = styled(XCircle)`
  display: flex;
  width: 30px;
  margin-right: 12px;
`;

export const ClockIcon = styled(Clock)`
  display: flex;
  width: 30px;
  margin-right: 12px;
`;

export const DoTagIcon = styled(PersonBadge)`
  display: flex;
  width: 30px;
  margin-right: 12px;
`;
