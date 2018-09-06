import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-mark',
  templateUrl: './odd-mark.component.html',
  styleUrls: ['./odd-mark.component.css']
})
export class OddMarkComponent implements OnInit {
  @Input() oddNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
