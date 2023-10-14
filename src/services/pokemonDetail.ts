import axios from "axios";
import { POKEMON_BASE_URL } from "@/utils/constant";
import { IPokemonDetailResponse } from "@/interface/pokemonDetail";
import { IRespones, handleResponse } from "@/utils/handleResponse";

interface IGetPokemonDetailResponse extends IRespones {
  status: number | undefined;
  data?: IPokemonDetailResponse;
}

export const pokemonDetailSevices = {
  getPokemonDetail: async (
    name: string
  ): Promise<IGetPokemonDetailResponse> => {
    try {
      const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`);
      return handleResponse.success(response);
    } catch (error: any) {
      return handleResponse.error(error);
    }
  },
};
