import React from "react";

import { Container, Logo, Title } from "./styles";

import SvgLogo from "../../assets/logo.svg";

const LogoDBCR: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={SvgLogo} alt="DBCR - Supermercados DB LTDA" />
        <Title>DBCR</Title>
      </Logo>
    </Container>
  );
};

export default LogoDBCR;
