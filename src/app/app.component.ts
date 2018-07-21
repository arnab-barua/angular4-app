import { Component } from '@angular/core';
import {TestserviceService} from './testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 App';
  todayDate;
  constructor(private thisservice:TestserviceService){}
  ngOnInit()
  {
    this.todayDate = this.thisservice.showTodayDate();
  }
}
