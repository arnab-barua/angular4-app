import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor() { }
  showTodayDate()
  {
    let nDate = new Date();
    return nDate;
  }
}
