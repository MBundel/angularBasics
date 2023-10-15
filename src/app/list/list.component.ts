import {Component, OnInit} from '@angular/core';
import {PeopleService} from "../people.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  peoples: any = [];
  private errorMsg: any;

  constructor(private _peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.peoples = this._peopleService.getPeoples()
      .subscribe(data => this.peoples = data,
                // error => this.errorMsg = error  is not working like that
      );
  }

}
