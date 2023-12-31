import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../interfaces/Game";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("/games");
const useGames = (pageSize = 10) => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery, pageSize],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page_size: pageSize,
          page: pageParam,
        },
      }),
    staleTime: ms("24h"),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
  });
};
export default useGames;
