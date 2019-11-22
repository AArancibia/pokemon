import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { AuthComponent } from "./auth.component";

const authRoutes: Routes = [
  // {
  //   path: "auth",
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: "",
  //       redirectTo: "signin",
  //       pathMatch: "full"
  //     },
  //     {
  //       path: "signin",
  //       component: SigninComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
