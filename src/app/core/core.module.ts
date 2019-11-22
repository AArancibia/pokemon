import { NgModule } from "@angular/core";
import { PokemonService } from "./services/pokemon.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  providers: [PokemonService]
})
export class CoreModule {}
