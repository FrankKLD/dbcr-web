import React from "react";
import Zoom from "@material-ui/core/Zoom";

import { getIconFromString } from "utils/IconFromString";

import { LinkContainer, IconArea, StyledTooltip } from "./styles";

export interface Props {
  title: string;
  link: string;
  isActive: boolean;
  icon: string;
  tooltip: string;
}

const MaterialIcon = (iconReference: string) => {
  var resolvedIcon = getIconFromString(iconReference);
  return React.createElement(resolvedIcon, { className: "IconCreated" });
};

const MenuItem: React.FC<Props> = ({
  title,
  link,
  isActive,
  icon,
  tooltip,
}) => {
  var IconCreated = MaterialIcon(icon);

  return (
    <StyledTooltip
      placement="right"
      TransitionComponent={Zoom}
      leaveDelay={200}
      title={
        <>
          {" "}
          <strong>{title}</strong>
          <br />
          <em>{tooltip}</em>{" "}
        </>
      }
      arrow
    >
      <LinkContainer to={link} className={isActive ? "active" : ""}>
        <IconArea>{IconCreated}</IconArea>
        <span>{title}</span>
      </LinkContainer>
    </StyledTooltip>
  );
};

export default MenuItem;
