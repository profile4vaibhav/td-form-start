import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  selector: 'app-home',
  template: `
    <h1>I'm Home!</h1>
    <h3>{{ receivedText }}</h3>
  `
})
export class HomeComponent implements OnInit {
  receivedText: string;

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.appService.myData.subscribe(data => {
      this.receivedText = data;
    })
  }
}
