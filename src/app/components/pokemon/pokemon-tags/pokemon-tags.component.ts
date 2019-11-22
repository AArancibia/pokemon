import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pokemon-tags",
  templateUrl: "./pokemon-tags.component.html",
  styleUrls: ["./pokemon-tags.component.scss"]
})
export class PokemonTagsComponent implements OnInit {
  @Output("tipo") selecionTipos: EventEmitter<string[]> = new EventEmitter();
  dataTemp: string[] = [];
  constructor() {}

  ngOnInit() {}

  elegirTipo(tipo: string) {
    const findFunc = () => {
      const findIndexTipo = this.dataTemp.findIndex(item => item === tipo);
      this.dataTemp.splice(findIndexTipo, 1);
    };
    !this.dataTemp.find(item => item === tipo)
      ? this.dataTemp.push(tipo)
      : findFunc();

    this.selecionTipos.emit(this.dataTemp);
  }
}
