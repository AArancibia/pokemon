import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonComponent } from "@app/pages/pokemon/pokemon.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {}
