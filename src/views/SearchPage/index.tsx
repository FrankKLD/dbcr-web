import React from "react";
import LastSchedules from "components/HomePageComponents/LastSchedules";

import { Container, Content, LastSchedulesArea, Title } from "./styles";

const SearchPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>
          Voce está pesquisando por: <u>Frank</u>
        </Title>

        <LastSchedulesArea>
          <LastSchedules />
        </LastSchedulesArea>
      </Content>
    </Container>
  );
};

export default SearchPage;
