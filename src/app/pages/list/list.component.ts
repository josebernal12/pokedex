import { Component, OnInit } from '@angular/core';
import { ITypes, Name, Pokemon } from 'src/app/model/types.interfaces';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router'
import { Types } from '../../model/types.interfaces';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public type!: Pokemon[]
  public name!: string | null;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('type')

    this.apiService.getType(this.name).subscribe({
      next: (value: Types) => {
        this.type = value.pokemon
      },
      error:() => {
      },
    })
  }
}
