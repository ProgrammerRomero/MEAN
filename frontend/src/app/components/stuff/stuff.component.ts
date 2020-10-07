import { Component, OnInit } from '@angular/core';
import { StuffService } from '../../services/stuff.service';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})
export class StuffComponent implements OnInit {

  constructor( private stuffService: StuffService ) {

   }

  ngOnInit(): void {
    console.log(this.stuffService.getStuff().subscribe()
    res => console.log(res),
    err => console.error(err)
    )
  }

}
