import { Component, OnInit } from "@angular/core";
import { PokemonService } from "@app/core/services/pokemon.service";
import { Pokemon } from "@app/core/models/pokemon.model";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  filtro: string;
  dataToShow: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe(
      (pokemons: Pokemon) => {
        this.pokemons = [...this.pokemons, pokemons];
        this.dataToShow = this.pokemons;
      },
      error => console.log(error),
      () => {
        this.pokemons.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
    );
  }

  filtrarPokemon(event: string) {
    this.dataToShow = this.pokemons;
    this.dataToShow = this.dataToShow.filter(pokemon =>
      pokemon.name.toLowerCase().includes(event.toLowerCase())
    );
  }

  filtrarTipo(tiposSeleccionados: string[]) {
    let pokemonTemp: Pokemon[] = [];
    const temp = [];
    if (tiposSeleccionados.length < 1)
      return (this.dataToShow = [...this.pokemons]);
    this.pokemons.map(pokemon => {
      pokemon.types.forEach((tipo, idx) => {
        tiposSeleccionados.forEach(valor => {
          if (tipo.type.name === valor) {
            temp.push(pokemon);
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
    this.dataToShow = [...pokemonTemp];
  }
}
