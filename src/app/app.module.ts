import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgZorroAntdModule, NZ_I18N, es_ES } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import es from "@angular/common/locales/es";
import { SigninComponent } from "@app/auth/signin/signin.component";
import { PagesModule } from "./pages/pages.module";
import { FiltroPokemonPipe } from "./shared/pipes/filtro-pokemon.pipe";
import { RootStoreModule } from "./root-store/root-store.module";
import { PokemonFormComponent } from "./components/pokemon/pokemon-form/pokemon-form.component";

registerLocaleData(es);

@NgModule({
  declarations: [AppComponent, SigninComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RootStoreModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule {}
