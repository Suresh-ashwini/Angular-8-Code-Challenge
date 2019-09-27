import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Query } from '../all-users.model';

@Injectable()
export class ExpressService {

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) {
    console.log('hiiiii');


  }
  public graphdata() {
    return this.http.get('http://localhost:3000/getAPIResponse');
  }
  public task2() {
    return  this.apollo.watchQuery<Query>({
      query: gql `
      query {
        allUsers {
          id
          email
          name
        }
      }
    `
    })
      .valueChanges
      .pipe(
        map(result => result.data.allUsers)
      );

  }
}
