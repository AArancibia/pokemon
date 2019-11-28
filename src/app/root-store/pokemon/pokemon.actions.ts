import { Action } from "@ngrx/store";
import { PokemonActionTypes } from "./pokemon.types";
import { Pokemon } from "@app/core/models/pokemon.model";

export class FetchPokemonStartAction implements Action {
  readonly type = PokemonActionTypes.FETCH_POKEMON_START;
}

export class FetchPokemonSuccessAction implements Action {
  readonly type = PokemonActionTypes.FETCH_POKEMON_SUCCESS;
  constructor(public payload: Pokemon[]) {}
}

export class FetchPokemonFailureAction implements Action {
  readonly type = PokemonActionTypes.FETCH_POKEMON_FAILURE;
  constructor(public payload: any) {}
}

export type PokemonActions =
  | FetchPokemonStartAction
  | FetchPokemonSuccessAction
  | FetchPokemonFailureAction;
