import React from "react";

import { Container, Description, Title } from "./styles";

const MyLastAccessCard: React.FC = () => {
  return (
    <Container>
      <Title>Últimos crachás emitidos</Title>
      <Description>
        150 <span>Crachás</span>
      </Description>
    </Container>
  );
};

export default MyLastAccessCard;
