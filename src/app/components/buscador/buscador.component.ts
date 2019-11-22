import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls: ["./buscador.component.scss"]
})
export class BuscadorComponent implements OnInit {
  inputValue: string;
  filteredOptions: string[] = [];
  options = [];
  @Output("buscar") filtro: EventEmitter<string> = new EventEmitter();

  constructor() {
    // this.filteredOptions = this.options;
  }

  ngOnInit() {}

  onChange(value: string): void {
    // this.filteredOptions = this.options.filter(
    //   option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1
    // );
    this.filtro.emit(value);
  }
}
