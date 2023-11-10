import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => (
  <>
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingX={4}>
          <GameHeading />
          <Flex gap={3} marginBottom={6}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  </>
);

export default HomePage;
