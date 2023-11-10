import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../interfaces/Genre";
import useLookup from "../hooks/useLookup";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../interfaces/Platform";
import { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useLookup<Genre, FetchResponse<Genre>>(useGenres, genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useLookup<Platform, FetchResponse<Platform>>(
    usePlatforms,
    platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginBottom={6}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
