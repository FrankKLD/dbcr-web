import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

export const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  cursor: pointer;
  margin-bottom: 6px;

  padding: 18px;
  color: var(--default-menu-text);
  font-size: 16px;

  transition: var(--default-transition-delay);

  text-decoration: none;

  &.active {
    border-radius: 12px;
    color: var(--default-menu-active-text);
    background-color: var(--default-menu-active-background);
  }

  &:hover {
    border-radius: 12px;
    color: var(--default-menu-hover-text);
    background-color: var(--default-menu-hover-background);
  }
`;

export const IconArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;

  .IconCreated {
    display: flex;
    max-width: 24px;
    max-height: 24px;
    margin-right: 12px;
  }
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
