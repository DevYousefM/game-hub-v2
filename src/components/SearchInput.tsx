import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const searchText = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search games..."
        variant="filled"
        borderRadius="3xl"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </InputGroup>
  );
};

export default searchText;
