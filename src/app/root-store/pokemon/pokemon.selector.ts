import { createSelector, createFeatureSelector } from "@ngrx/store";
import { PokemonState } from "./pokemon.state";
import { Pokemon } from "@app/core/models/pokemon.model";

export const getError = (state: PokemonState) => state.error;

const pokemonSelector = createFeatureSelector<PokemonState>("pokemon");

export const pokemonsIsLoading = createSelector(
  pokemonSelector,
  (state: PokemonState) => state.loading
);

export const selectAllPokemons = createSelector(
  pokemonSelector,
  (state: PokemonState) => state.collections
);

export const filterPokemonsByName = createSelector(
  selectAllPokemons,
  (collections: Pokemon[], props) => {
    return collections.filter(pokemon =>
      pokemon.name.toLowerCase().includes(props.name.toLowerCase())
    );
  }
);

export const filterPokemonsByType = createSelector(
  selectAllPokemons,
  (collections: Pokemon[], props) => {
    const { types } = props;
    if (types.length < 1) return collections;

    let pokemonTemp: Pokemon[] = [];
    const temp = [];
    collections.map(pokemon => {
      pokemon.types.forEach((tipo, idx) => {
        types.forEach(valor => {
          if (tipo.type.name === valor) {
            temp.push(pokemon);
            return pokemon;
          }
        });
      });
    });
    temp.map((pokemon, idx, array) => {
      const { name: beforeValue } = array[idx !== 0 ? idx - 1 : 0];
      const { name: currentValue } = pokemon;
      if (idx === 0 || beforeValue !== currentValue) {
        pokemonTemp.push(pokemon);
      }
    });

    return pokemonTemp;
  }
);
