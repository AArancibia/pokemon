import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { pokemonReducer } from "./pokemon.reducer";
import { EffectsModule } from "@ngrx/effects";
import { PokemonEffects } from "./pokemon.effects";
import { PokemonService } from "@app/core/services/pokemon.service";

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature("pokemon", pokemonReducer),
    EffectsModule.forFeature([PokemonEffects])
  ],
  providers: [PokemonService]
})
export class PokemonStoreModule {}
