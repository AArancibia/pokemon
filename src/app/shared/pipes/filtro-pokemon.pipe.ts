import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filtroPokemon"
})
export class FiltroPokemonPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value, args);

    if (args === undefined) return value;
    return value.filter(function(cne) {
      return cne.name.toLowerCase().includes(args.toLowerCase());
    });
  }
}
