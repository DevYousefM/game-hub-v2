import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box paddingY={3} paddingX={8}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
