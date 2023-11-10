import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
