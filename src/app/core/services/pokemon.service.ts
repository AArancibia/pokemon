import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { map, concatMap, filter } from "rxjs/operators";
import { Pokemon } from "../models/pokemon.model";
import { environment } from "@env/environment";

@Injectable()
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    const url = `${environment.urlApi}${endpoint}`;
    return this.httpClient.request(method, url, { body });
  }

  getImageFromPokemon(pokemon: []): Observable<Pokemon> {
    return from(pokemon).pipe(
      concatMap(
        ({ name }) => <Observable<any>>this.request("GET", `pokemon/${name}`)
      )
    );
  }

  getPokemons(): Observable<any> {
    return this.request("GET", "pokemon").pipe(
      map(response => response.results),
      concatMap(pokemon => {
        return this.getImageFromPokemon(pokemon);
      })
      // filter((pokemon, index) => index < 10)
    );
  }
}
