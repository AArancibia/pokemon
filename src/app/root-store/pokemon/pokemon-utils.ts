import { PokemonState } from "./pokemon.state";

export const addPokemonToCollection = (state: PokemonState, pokemon) => {
  state.collections.push(pokemon);
  return state.collections;
};
