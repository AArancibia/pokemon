import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonComponent } from "@app/pages/pokemon/pokemon.component";
import { PokemonFormComponent } from "@app/components/pokemon/pokemon-form/pokemon-form.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PokemonComponent
  },
  {
    path: "form",
    component: PokemonFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule {}
