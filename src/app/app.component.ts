import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'node-backend';
  // public messages: any[];
  msg;
  constructor(private http: HttpClient) {
    // this.http.get('http://localhost:3000/getAPIResponse').subscribe(res => {
    //   console.log(res);
    // });
  }

  name = new FormControl('');
}
