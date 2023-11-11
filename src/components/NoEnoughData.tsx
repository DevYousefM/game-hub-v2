import { Badge } from "@chakra-ui/react";

interface Props {
  color: string;
}

const NoEnoughData = ({ color }: Props) => {
  return (
    <Badge
      colorScheme={color}
      paddingX={2}
      paddingY={1}
      marginTop={1}
      borderRadius={2}
    >
      No Enough Data
    </Badge>
  );
};

export default NoEnoughData;
