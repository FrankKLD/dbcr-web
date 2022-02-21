import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { Search, UserCircle } from "styled-icons/fa-solid";
import { Schedule } from "styled-icons/material";
export const Container = styled.div`
  grid-area: SA;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const SearchInputArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: var(--white);

  padding: 14px 14px 14px 14px;
  margin: 0px 12px;
  border-radius: 12px;

  width: 100%;
`;

export const SearchInput = styled.input`
  font-size: 16px;
  color: var(--default-input-text);

  padding: 0;

  width: 100%;

  &::placeholder {
    font-size: 14px;
    font-weight: normal;
    color: var(--default-input-placeholder);
  }
`;

export const SearchIcon = styled(Search)`
  display: flex;

  width: 16px;
  margin: 0 14px;

  color: var(--principal);
  cursor: pointer;
`;

export const AvatarUserArea = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-content: center;

  padding: 12px;
`;

export const SchedulerButton = styled(Schedule)`
  transition: var(--default-transition-delay);

  display: flex;
  width: 31px;

  color: var(--default-menu-icon);
  cursor: pointer;

  margin: 0 16px;

  :hover {
    color: var(--default-menu-hover-icon);
  }
`;

export const Avatar = styled(UserCircle)`
  display: flex;

  width: 50px;

  color: var(--principal);
  cursor: pointer;

  margin: 0 16px;
`;

export const StyledTooltip = withStyles({
  tooltip: {
    padding: "12px",
    color: "var(--default-tooltip-text)",
    backgroundColor: "var(--default-tooltip-background)",
    borderRadius: "12px",
  },
  arrow: {
    color: "var(--default-tooltip-background)",
  },
})(Tooltip);
