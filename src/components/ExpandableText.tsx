import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 250 }: Props) => {
  const [isExpandable, setIsExpandable] = useState(false);
  if (!children) return null;
  if (children.length <= maxChars) return <Text>{children}</Text>;
  const text = isExpandable
    ? children
    : children.substring(0, maxChars) + "...";
  return (
    <Text fontSize={22}>
      {text}
      <Button
        marginLeft={1}
        colorScheme={"yellow"}
        size={"xs"}
        fontWeight={"bold"}
        onClick={() => setIsExpandable(!isExpandable)}
      >
        {isExpandable ? "Less" : "See more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
