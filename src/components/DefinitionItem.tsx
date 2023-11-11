import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  title: string;
  children: ReactNode;
}
const DefinitionItem = ({ title, children }: Props) => {
  return (
    <Box>
      <Heading as={"dt"} color={"gray.600"} fontSize={"md"} fontWeight={"700"}>
        {title}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
