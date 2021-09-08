import React, { useEffect } from "react";
import LogoDBCR from "../../components/default/LogoDBCR";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

import { Grid } from "./styles";
import AdminRoutes from "../../Routes/adminRoutes";

import GlobalStyles from "../../styles/GlobalStyles";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "DBCR - Home Page";
  }, []);

  return (
    <>
      <Grid>
        <LogoDBCR />

        <NavBar />

        <SideBar idSelectedMenuItem={1} />

        <AdminRoutes />
      </Grid>

      <GlobalStyles />
    </>
  );
};

export default HomePage;
