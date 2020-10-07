import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Stuff } from '../models/stuff';


@Injectable({
  providedIn: 'root'
})
export class StuffService {

  URL_API = 'http://localhost:4000/api/stuff'

  stuff : Stuff[];

  constructor( private http: HttpClient ) { }

  getStuff() {

   return this.http.get<Stuff[]>(this.URL_API);

  }

}
