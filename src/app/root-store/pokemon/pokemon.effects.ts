import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PokemonService } from "@app/core/services/pokemon.service";
import { PokemonActionTypes } from "./pokemon.types";
import {
  FetchPokemonStartAction,
  FetchPokemonSuccessAction,
  FetchPokemonFailureAction
} from "./pokemon.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonEffects {
  constructor(
    private action$: Actions,
    private pokemonService: PokemonService
  ) {}

  loadPokemons$ = createEffect(() =>
    this.action$.pipe(
      ofType<FetchPokemonStartAction>(PokemonActionTypes.FETCH_POKEMON_START),
      mergeMap(() =>
        this.pokemonService.getPokemons().pipe(
          map(pokemons => new FetchPokemonSuccessAction(pokemons)),
          catchError(error => of(new FetchPokemonFailureAction(error)))
        )
      )
    )
  );
}
