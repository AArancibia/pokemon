import { NgModule } from "@angular/core";
// import { PAGES_ROUTES } from "./pages-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";
import { NopagefoundComponent } from "@app/shared/nopagefound/nopagefound.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  declarations: [DashboardComponent, PagesComponent, NopagefoundComponent],
  imports: [PagesRoutingModule, NgZorroAntdModule],
  exports: [PagesComponent, DashboardComponent, NopagefoundComponent]
})
export class PagesModule {}
