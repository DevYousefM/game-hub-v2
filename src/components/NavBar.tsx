import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <HStack marginLeft={2} padding="10px" spacing={5}>
      <Link to={"/"}>
        <Image src={logo} boxSize="50px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
