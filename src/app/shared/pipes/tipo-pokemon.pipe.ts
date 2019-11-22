import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tipoPokemon"
})
export class TipoPokemonPipe implements PipeTransform {
  transform(pokemon: any, args?: any): any {
    let tipos = [];
    pokemon.map((type: any, index) => {
      console.log(type);
      tipos.push(type.type.name);
    });
    pokemon.splice(0);
    pokemon.push(tipos);
    pokemon.join();
    return pokemon;
  }
}
