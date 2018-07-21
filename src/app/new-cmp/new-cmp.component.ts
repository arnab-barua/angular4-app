import { Component, OnInit } from '@angular/core';
import {TestserviceService} from '../testservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  newComponentText = "this is new component";
  months = ["January", "Feburary", "March", "April", "May",
            "June", "July", "August", "September",
            "October", "November", "December"];
  isAvailable = true;
  todayDateNewCmp;
  email = "me@example.com";

  constructor(private thisservice:TestserviceService) { }

  ngOnInit() {
    this.todayDateNewCmp = this.thisservice.showTodayDate();
  }

  onKeyUp()
  {
    console.log(this.email);
  }

}
