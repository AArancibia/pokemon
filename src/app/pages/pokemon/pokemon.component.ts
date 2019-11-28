import { Component, OnInit } from "@angular/core";
import { PokemonService } from "@app/core/services/pokemon.service";
import { Pokemon } from "@app/core/models/pokemon.model";
import { Store, select } from "@ngrx/store";
import * as fromPokemon from "@app/root-store/pokemon/pokemon.state";
import {
  selectAllPokemons,
  pokemonsIsLoading,
  filterPokemonsByName,
  filterPokemonsByType
} from "@app/root-store/pokemon/pokemon.selector";
import { Observable } from "rxjs";
import { FetchPokemonStartAction } from "@app/root-store/pokemon/pokemon.actions";
import { PokemonActionTypes } from "@app/root-store/pokemon/pokemon.types";
import { map } from "rxjs/operators";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
  filtro: string;
  $pokemonsFetch: Observable<Pokemon[]>;
  showPokemons: Observable<boolean>;

  constructor(
    private pokemonService: PokemonService,
    private store: Store<fromPokemon.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(new FetchPokemonStartAction());
    this.showPokemons = this.store.pipe(select(pokemonsIsLoading));
    this.$pokemonsFetch = this.store.pipe(select(selectAllPokemons));
  }

  getPokemons() {
    // this.pokemons.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  filtrarPokemon(event: string) {
    this.$pokemonsFetch = this.store.pipe(
      select(filterPokemonsByName, { name: event })
    );
  }

  filtrarTipo(tiposSeleccionados: string[]) {
    this.$pokemonsFetch = this.store.pipe(
      select(filterPokemonsByType, { types: tiposSeleccionados })
    );
  }
}
