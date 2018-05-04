import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { Location, Query } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  locations: Observable<Location[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.locations = this.apollo.watchQuery<Query>({
      query: gql `
      query allLocations {
        allLocations {
          id
          name
          address
          description
          imageUrl
          url
        }
      }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.allLocations)
    );
  }

}
