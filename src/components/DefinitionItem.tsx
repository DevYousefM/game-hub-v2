import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import NoEnoughData from "./NoEnoughData";
interface Props {
  title: string;
  children: ReactNode;
}
const DefinitionItem = ({ title, children }: Props) => {
  const count = React.Children.count(children);
  return (
    <Box>
      <Heading as={"dt"} color={"gray.600"} fontSize={"md"} fontWeight={"700"}>
        {title}
      </Heading>
      {count > 0 ? <dd>{children}</dd> : <NoEnoughData color="yellow" />}
    </Box>
  );
};

export default DefinitionItem;
