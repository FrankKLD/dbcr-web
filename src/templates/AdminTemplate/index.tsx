import React, { useEffect } from "react";
import LogoDBCR from "../../components/default/LogoDBCR";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

import { Grid } from "./styles";
import SystemRoutes from "../../Routes/SystemRoutes";

import GlobalStyles from "../../styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "DBCR - Home Page";
  }, []);

  return (
    <>
      <BrowserRouter>
        <Grid>
          <LogoDBCR />

          <NavBar />

          <SideBar idSelectedMenuItem={1} />

          <SystemRoutes />
        </Grid>

        <GlobalStyles />
      </BrowserRouter>
    </>
  );
};

export default HomePage;
