import * as React from "react";
import Zoom from "@material-ui/core/Zoom";

import {
  Container,
  SearchInputArea,
  SearchInput,
  SearchIcon,
  AvatarUserArea,
  Avatar,
  StyledTooltip,
  SchedulerButton,
} from "./styles";

const SearchArea: React.FC = () => {
  return (
    <Container>
      <SearchInputArea>
        <StyledTooltip
          TransitionComponent={Zoom}
          leaveDelay={300}
          title="Pesquisar"
          arrow
        >
          <SearchIcon />
        </StyledTooltip>

        <SearchInput
          onKeyUp={(e: any) => {
            if (e.key === "Enter") {
              console.log("Este é um alert!");
            }
          }}
          placeholder="Pesquisar Funcionário..."
        />
      </SearchInputArea>

      <AvatarUserArea>
        <StyledTooltip
          TransitionComponent={Zoom}
          leaveDelay={300}
          title="Frank Matos"
          arrow
        >
          <SchedulerButton />
        </StyledTooltip>
      </AvatarUserArea>
      <AvatarUserArea>
        <StyledTooltip
          TransitionComponent={Zoom}
          leaveDelay={300}
          title="Frank Matos"
          arrow
        >
          <Avatar />
        </StyledTooltip>
      </AvatarUserArea>
    </Container>
  );
};

export default SearchArea;
