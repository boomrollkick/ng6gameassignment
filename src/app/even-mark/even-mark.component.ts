import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-mark',
  templateUrl: './even-mark.component.html',
  styleUrls: ['./even-mark.component.css']
})
export class EvenMarkComponent implements OnInit {
  @Input() evenNumber: number;
  constructor() { }

  ngOnInit() {
  }

}
