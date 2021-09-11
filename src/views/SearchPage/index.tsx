import React from "react";
import MyActivitiesCard from "../../components/HomePageComponents/MyActivitiesCard";
import MyLastAccessCard from "../../components/HomePageComponents/MyLastAccessCard";
import MyLastCreatedTagsCard from "../../components/HomePageComponents/MyLastCreatedTagsCard";
import LastSchedules from "../../components/HomePageComponents/LastSchedules";

import {
  CardArea,
  Container,
  Content,
  LastSchedulesArea,
  Title,
} from "./styles";

const SearchPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Voce está pesquisando por: Frank</Title>

        <CardArea>
          <MyLastAccessCard />
          <MyLastCreatedTagsCard />
          <MyActivitiesCard />
        </CardArea>

        <LastSchedulesArea>
          <LastSchedules />
        </LastSchedulesArea>
      </Content>
    </Container>
  );
};

export default SearchPage;
