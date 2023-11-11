import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import { Game } from "../interfaces/Game";
import DefinitionItem from "./DefinitionItem";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  const textStyle = { fontSize: 20, fontWeight: "300" };
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
        <CriticScore score={game.metacritic} />
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
