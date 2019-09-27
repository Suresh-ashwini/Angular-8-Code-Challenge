import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { AllUsers, Query } from 'src/app/all-users.model';
import { ExpressService } from '../shared/express.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  allUsers = [];

  constructor(private apollo: Apollo,
    private service: ExpressService) { }

  ngOnInit() {
    this.service.task2().subscribe(data => {
      this.allUsers = data;
    });

  }

}
