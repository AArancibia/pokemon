import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NopagefoundComponent } from "@app/shared/nopagefound/nopagefound.component";
import { SigninComponent } from "./auth/signin/signin.component";

const routes: Routes = [
  {
    path: "sigin",
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
