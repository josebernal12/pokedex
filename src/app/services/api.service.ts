import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ITypes, Types } from '../model/types.interfaces';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://pokeapi.co/api/v2/type'
  constructor(
    private http: HttpClient
  ) { }

  getAllTypes(): Observable<ITypes> {
    return this.http.get<ITypes>(this.url)
  }
  getType(name: string | null): Observable<Types> {
    return this.http.get<Types>(`${this.url}/${name}`)
  }
}
