import { Component, OnInit } from '@angular/core';
import { StuffService } from '../../services/stuff.service';
import { NgForm } from "@angular/forms";
import { Stuff } from '../../models/stuff';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.css']
})

export class StuffComponent implements OnInit {



  constructor( public stuffService: StuffService ) {

   }

  ngOnInit(): void {
    this.getStuff();
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  getStuff() {
      this.stuffService.getStuff().subscribe(
      res => {
        this.stuffService.stuff = res;
      },
      err => console.error(err)
      )
  }

  addStuff(form: NgForm){
    if (form.value._id) {
      this.stuffService.updateStuff(form.value).subscribe(
        (res) => console.log(res),
        (err) => console.error(err)
      )
    } else {
      this.stuffService.createStuff(form.value).subscribe(
        res => {
          this.getStuff();
          form.reset();
        },
        err => console.error(err)
      )
    }
  }

  deleteStuff( id: string ){
    if (confirm('Are youn sure')) {
      this.stuffService.deleteStuff(id).subscribe(
        (res) => {
          this.getStuff();
        },
        (err) => console.error(err)
      );
  }
}

  editStuff(stuff: Stuff) {
    this.stuffService.stuffSelected = stuff;
  }
}
