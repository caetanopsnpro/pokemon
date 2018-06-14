import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() code: number;
  constructor() { }

  ngOnInit() {
    console.log("Get into here");
    console.log(this.code);
  }

}
