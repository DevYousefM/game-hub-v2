import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import { Game } from "../interfaces/Game";
import DefinitionItem from "./DefinitionItem";
import NoEnoughData from "./NoEnoughData";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  const textStyle = { fontSize: 19, fontWeight: "400" };
  return (
    <SimpleGrid as={"dl"} columns={2} spacing={6} marginTop={6}>
      <DefinitionItem title="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text style={{ ...textStyle }} key={platform.id}>
            {platform.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="Metascore">
        {game.metacritic ? (
          <CriticScore score={game.metacritic} />
        ) : (
          <NoEnoughData color="yellow" />
        )}
      </DefinitionItem>
      <DefinitionItem title="Genres">
        {game.genres.map((genre) => (
          <Text style={{ ...textStyle }} key={genre.id}>
            {genre.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem title="Publishers">
        {game.publishers.map((publisher) => (
          <Text style={{ ...textStyle }} key={publisher.id}>
            {publisher.name}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
