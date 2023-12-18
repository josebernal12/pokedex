import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router'
import { IPokemon } from 'src/app/model/types.interfaces';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {
  public pokemon!: IPokemon 
  public name! : string | null
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name')

    this.apiService.getPokemon(this.name).subscribe({
      next: (value: IPokemon) => {
        this.pokemon = value
        console.log(this.pokemon.types)
      },
    })
  }
}
