import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPeople} from "./people";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) {
  }

  _url: string = "/assets/data/people.json";
  getPeoples() {
    return this.http.get<IPeople[]>(this._url)
      .pipe(catchError(error => {console.error("oh Boy"+ error); throw error}));
  }



}
