import { Component, OnInit } from '@angular/core';
import { IResults, ITypes } from 'src/app/model/types.interfaces';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.sass']
})
export class TypesComponent implements OnInit {
  public types!: IResults[]
  constructor(
    private apiService: ApiService
  ) { }
  ngOnInit(): void {
    this.apiService.getAllTypes().subscribe({
      next: (value: ITypes) => {
        this.types = value.results
      },
      error: () => { }
    })
  }
}
