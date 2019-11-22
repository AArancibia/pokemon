import { Component, OnInit, Input } from "@angular/core";
import { Pokemon } from "@app/core/models/pokemon.model";

@Component({
  selector: "app-pokemon-item",
  templateUrl: "./pokemon-item.component.html",
  styleUrls: ["./pokemon-item.component.scss"]
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor() {}

  ngOnInit() {}
}
