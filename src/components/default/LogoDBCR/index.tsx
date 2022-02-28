import React from "react";

import { Container, First, Logo, Second, Title } from "./styles";

import SvgLogo from "components/assets/logo.svg";

const LogoDBCR: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={SvgLogo} alt="DBCR - Supermercados DB LTDA" />
        <Title>
          <First>DB</First>
          <Second>CR</Second>
        </Title>
      </Logo>
    </Container>
  );
};

export default LogoDBCR;
