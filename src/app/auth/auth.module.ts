import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SigninComponent } from "./signin/signin.component";
import { AuthRoutingModule } from "@app/auth/auth-routing.module";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [SigninComponent, AuthComponent],
  imports: [CommonModule, AuthRoutingModule]
})
export class AuthModule {}
