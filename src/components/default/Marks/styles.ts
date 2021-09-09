import styled from "styled-components";
import {
  AccessTime,
  Pending,
  Cancel,
  Check,
} from "styled-icons/material-outlined";
import { Check2All } from "styled-icons/bootstrap";

export const MarkAll = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  padding: 6px;
  margin-left: 6px;
  font-size: 12px;

  color: var(--mark-all-text);
  background: var(--mark-all-background);
  border: 1px solid var(--mark-all-border);

  border-radius: 12px;
  cursor: pointer;

  transition: var(--default-transition-delay);

  > span {
    display: flex;
    align-items: baseline;
  }

  &:hover {
    color: var(--mark-all-background);
    background-color: var(--mark-all-border);
  }
`;

export const MarkWaiting = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  padding: 6px;
  margin-left: 6px;
  font-size: 12px;

  color: var(--mark-waiting-text);
  background: var(--mark-waiting-background);
  border: 1px solid var(--mark-waiting-border);

  border-radius: 12px;
  cursor: pointer;

  transition: var(--default-transition-delay);

  > span {
    display: flex;
    align-items: baseline;
  }

  &:hover {
    color: var(--mark-waiting-background);
    background-color: var(--mark-waiting-border);
  }
`;

export const MarkPending = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  padding: 6px;
  margin-left: 6px;
  font-size: 12px;

  color: var(--mark-pending-text);
  background: var(--mark-pending-background);
  border: 1px solid var(--mark-pending-border);

  border-radius: 12px;
  cursor: pointer;

  transition: var(--default-transition-delay);

  > span {
    display: flex;
    align-items: baseline;
  }

  &:hover {
    color: var(--mark-pending-background);
    background-color: var(--mark-pending-border);
  }
`;

export const MarkCanceled = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  padding: 6px;
  margin-left: 6px;
  font-size: 12px;

  color: var(--mark-canceled-text);
  background: var(--mark-canceled-background);
  border: 1px solid var(--mark-canceled-border);

  border-radius: 12px;
  cursor: pointer;

  transition: var(--default-transition-delay);

  > span {
    display: flex;
    align-items: baseline;
  }

  &:hover {
    color: var(--mark-canceled-background);
    background-color: var(--mark-canceled-border);
  }
`;

export const MarkSuccess = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  padding: 6px;
  margin-left: 6px;
  font-size: 12px;

  color: var(--mark-success-text);
  background: var(--mark-success-background);
  border: 1px solid var(--mark-success-border);

  border-radius: 12px;
  cursor: pointer;

  transition: var(--default-transition-delay);

  > span {
    display: flex;
    align-items: baseline;
  }

  &:hover {
    color: var(--mark-success-background);
    background-color: var(--mark-success-border);
  }
`;

export const CheckAllIcon = styled(Check2All)`
  display: flex;
  align-content: center;
  margin-left: 3px;
  width: 12px;
`;
export const AccessTimeIcon = styled(AccessTime)`
  display: flex;
  align-content: center;
  margin-left: 3px;
  width: 12px;
`;
export const PendingIcon = styled(Pending)`
  display: flex;
  align-content: center;
  margin-left: 3px;
  width: 12px;
`;
export const CancelIcon = styled(Cancel)`
  display: flex;
  align-content: center;
  margin-left: 3px;
  width: 12px;
`;
export const CheckIcon = styled(Check)`
  display: flex;
  align-content: center;
  margin-left: 3px;
  width: 12px;
`;
