import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor(private http: HttpClient) {
  }

  myEvent() {
    alert('In myEvent');
    this.http.post('/account', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
      res => {
        console.log('Response in ts :' + res);
        alert('Response logged!!');
      },
      err => {
        console.log('Error occured');
      }
      );
  }
}
