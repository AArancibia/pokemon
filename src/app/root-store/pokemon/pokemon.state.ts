import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";
import { Pokemon } from "@app/core/models/pokemon.model";
import * as fromRoot from "../root-state";

export interface PokemonState {
  collections: Pokemon[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export interface State extends fromRoot.State {
  pokemon: PokemonState;
}

export const initialState: PokemonState = {
  collections: [],
  loaded: false,
  loading: false,
  error: null
};

// export const pokemonAdapter: EntityAdapter<Pokemon> = createEntityAdapter<
//   Pokemon
// >({
//   selectId: pokemon => pokemon.id,
//   sortComparer: (a: Pokemon, b: Pokemon): any =>
//     b.name.toString().localeCompare(a.name.toString())
// });

// export interface PokemonState extends EntityState<Pokemon> {
//   isLoading?: boolean;
//   error?: any;
// }

// export const initialState: PokemonState = pokemonAdapter.getInitialState({
//   isLoading: false,
//   error: null
// });
