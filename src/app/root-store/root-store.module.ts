import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { PokemonStoreModule } from "./pokemon/pokemon-store.module";
import { environment } from "@env/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import reducers from "./root-state";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonStoreModule,
    StoreDevtoolsModule.instrument({
      name: "pokemonAPP",
      maxAge: 30,
      logOnly: !environment.production
    }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers)
  ]
})
export class RootStoreModule {}
