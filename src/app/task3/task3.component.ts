import { Component, OnInit } from '@angular/core';
import { ExpressService } from '../shared/express.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  task1 = [];
  task2 = [];
  combined = [];

  constructor(
    private service: ExpressService
  ) {}

  ngOnInit() {
    this.service.task2().subscribe(data => {
      this.task1 = data;
    });

    this.service.graphdata().subscribe(data => {
      this.task2.push(data);
    });
  }
}
