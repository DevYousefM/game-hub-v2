import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const searchText = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search games..."
        variant="filled"
        borderRadius="3xl"
        onChange={(e) => {
          setSearchText(e.target.value);
          navigate("/");
        }}
      />
    </InputGroup>
  );
};

export default searchText;
