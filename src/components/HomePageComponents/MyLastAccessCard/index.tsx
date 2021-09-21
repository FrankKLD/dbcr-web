import React from "react";

import { Container, Description, Title } from "./styles";

const MyLastAccessCard: React.FC = () => {
  return (
    <Container>
      <Title>Meu último acesso</Title>
      <Description>01/01/2021 16:35</Description>
    </Container>
  );
};

export default MyLastAccessCard;
