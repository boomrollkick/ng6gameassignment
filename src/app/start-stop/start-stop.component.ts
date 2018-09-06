import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-stop',
  templateUrl: './start-stop.component.html',
  styleUrls: ['./start-stop.component.css']
})
export class StartStopComponent implements OnInit {
  interval;
  timer = 0;

  @Output() bigCount = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit() {
  }

  startCount(): void {
    this.interval = setInterval(() => {
      this.bigCount.emit(this.timer++);
    }, 1000);
   }

  stopCount(): void {
    clearInterval(this.interval);
  }

}
