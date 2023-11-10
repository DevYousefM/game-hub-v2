import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Game } from "../interfaces/Game";
const apiClient = new APIClient<Game>(`/games`);
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getOne(slug),
    staleTime: ms("24h"),
  });

export default useGame;
