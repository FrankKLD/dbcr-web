import React, { useEffect } from "react";

import { Grid } from "./styles";

import { BrowserRouter } from "react-router-dom";
import LogoDBCR from "components/default/LogoDBCR";
import NavBar from "components/NavBar";
import SystemRoutes from "Routes/SystemRoutes";
import GlobalStyles from "styles/GlobalStyles";
import SideBar from "components/SideBar";

const AdminTemplate: React.FC = () => {
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

export default AdminTemplate;
