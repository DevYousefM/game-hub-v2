import { Box, Heading } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading } = useTrailers(gameId);
  const first = data?.results[0];
  if (isLoading) return null;
  return first ? (
    <Box>
      <Heading marginBottom={6} textAlign={"center"}>
        Game Trailer
      </Heading>
      <video src={first.data[480]} poster={first.preview} controls />
    </Box>
  ) : null;
};

export default GameTrailer;
