import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StuffService {

  URL_API = 'http://localhost:4000/api/stuff'

  constructor( private http: HttpClient ) { }

  getStuff() {

   return this.http.get(URL_API);

  }

}
