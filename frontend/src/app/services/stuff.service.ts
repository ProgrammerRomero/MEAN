import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Stuff } from '../models/stuff';


@Injectable({
  providedIn: 'root'
})
export class StuffService {

  URL_API = 'http://localhost:4000/api/stuff'

  stuffSelected: Stuff= {
    name:      '',
    position:  '',
    office:    '',
    salary:     0
  }
  stuff : Stuff[];

  constructor( private http: HttpClient ) { }

  getStuff() {
   return this.http.get<Stuff[]>(this.URL_API);
  }

  createStuff(stuff: Stuff) {
    return this.http.post(this.URL_API, stuff )
  }

  deleteStuff( _id: string ) {
    //Create a new path
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

}
