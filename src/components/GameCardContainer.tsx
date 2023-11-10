import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      marginTop={3}
      _hover={{
        transform: "scale(1.03)",
        transition: ".2s ease",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
