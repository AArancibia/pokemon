import { NgModule } from "@angular/core";
import { PokemonComponent } from "./pokemon.component";
import { CommonModule } from "@angular/common";
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { NopagefoundComponent } from "@app/shared/nopagefound/nopagefound.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CoreModule } from "@app/core/core.module";
import { PokemonItemComponent } from "@app/components/pokemon/pokemon-item/pokemon-item.component";
import { BuscadorComponent } from "@app/components/buscador/buscador.component";
import { TipoPokemonPipe } from "@app/shared/pipes/tipo-pokemon.pipe";
import { FiltroPokemonPipe } from "@app/shared/pipes/filtro-pokemon.pipe";
import { FormsModule } from "@angular/forms";
import { PokemonTagsComponent } from '@app/components/pokemon/pokemon-tags/pokemon-tags.component';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonItemComponent,
    BuscadorComponent,
    TipoPokemonPipe,
    FiltroPokemonPipe,
    PokemonTagsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    NgZorroAntdModule,
    CoreModule,
    FormsModule
  ],
  providers: [TipoPokemonPipe],
  exports: [PokemonComponent, PokemonItemComponent, BuscadorComponent, PokemonTagsComponent]
})
export class PokemonModule {}
