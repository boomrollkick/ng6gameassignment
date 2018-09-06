import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gameComponent';
  oddCount = [];
  evenCount = [];

  watchTheTime(whatTimeIsIt) {
    console.log(whatTimeIsIt);
    if ((whatTimeIsIt % 2) === 0) {
      this.evenCount.push(whatTimeIsIt);
    } else {
      console.log('that is odd');
      this.oddCount.push(whatTimeIsIt);
      console.log(this.oddCount);
    }
  }
}
