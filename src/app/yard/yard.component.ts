import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yard',
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.css']
})
export class YardComponent implements OnInit {
  cars:any;
  images:any;
  constructor() { }

  ngOnInit(): void {
  }

}
