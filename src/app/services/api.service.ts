import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { IPokemon, ITypes, Types } from '../model/types.interfaces';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://pokeapi.co/api/v2/type'
  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon'
  constructor(
    private http: HttpClient
  ) { }

  getAllTypes(): Observable<ITypes> {
    return this.http.get<ITypes>(this.url)
  }
  getType(name: string | null): Observable<Types> {
    return this.http.get<Types>(`${this.url}/${name}`)
  }
  getPokemon(name:string | null): Observable<IPokemon>{
    return this.http.get<IPokemon>(`${this.urlPokemon}/${name}`)
  }

}
