import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-model',
  templateUrl: './display-model.component.html',
  styleUrls: ['./display-model.component.scss']
})
export class DisplayModelComponent implements OnInit {
  public sourceMessage:string;
  public codeResponse:string = "Tiny🕹️ Gett'g ready for you 🚀";

  constructor() { }

  ngOnInit(): void {
  }

}
