import { PokemonState, initialState } from "./pokemon.state";
import { PokemonActions } from "./pokemon.actions";
import { PokemonActionTypes } from "./pokemon.types";
import { addPokemonToCollection } from "./pokemon-utils";
export const pokemonReducer: (
  state: PokemonState,
  action: PokemonActions
) => PokemonState = (state = initialState, action: PokemonActions) => {
  switch (action.type) {
    case PokemonActionTypes.FETCH_POKEMON_START: {
      return {
        ...state,
        loading: true
      };
    }
    case PokemonActionTypes.FETCH_POKEMON_SUCCESS: {
      return {
        ...state,
        collections: addPokemonToCollection(state, (action as any).payload),
        loaded: true,
        loading: false
      };
    }
    case PokemonActionTypes.FETCH_POKEMON_FAILURE: {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: (action as any).payload.error
      };
    }
    default: {
      return state;
    }
  }
};
