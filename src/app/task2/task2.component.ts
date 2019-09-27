import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { List, FullList } from 'src/app/shared/task2.model';
// import { ExpressService } from '../shared/express.service';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  // displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  // dataSource = new MatTableDataSource<FullList[]>(this.list);
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public list = [];

  constructor(private http: HttpClient,
    // private service: ExpressService
    ) {
    this.http.get('http://localhost:3000/getAPIResponse').subscribe(res => {
      this.list.push(res);

    });
    // this.service.graphdata().subscribe(data => {
    //   console.log(data);
    // });


  }

  ngOnInit() {

  }

}
