import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NopagefoundComponent } from "@app/shared/nopagefound/nopagefound.component";
import { PokemonComponent } from "./pokemon/pokemon.component";

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        redirectTo: "pokemon",
        pathMatch: "full"
      },
      {
        path: "pokemon",
        loadChildren: "@app/pages/pokemon/pokemon.module#PokemonModule"
      }
    ]
  },
  {
    path: "**",
    component: NopagefoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
