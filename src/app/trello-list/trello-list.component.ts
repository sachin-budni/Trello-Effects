import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadTrelloAction, DeleteTrelloAction, AddTrelloAction, UpdateTrelloAction } from '../actions/trello.actions';
import { CreateTrelloListComponent } from '../create-trello-list/create-trello-list.component';
import { CreateTrelloComponent } from '../create-trello/create-trello.component';
import { Trello } from '../models/trello.model';
import { Process } from '../trello-listoflist/trello-listoflist.component';
import { AppState } from './../app.state';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloListComponent implements OnInit {

  trelloList: Observable<Array<Trello>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newShoppingItem: Trello = { id: undefined, name: '', memberDetails: [] };

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    this.trelloList = this.store.select(store => store.trello.list);
    this.loading$ = this.store.select(store => store.trello.loading);
    this.error$ = this.store.select(store => store.trello.error);
    this.store.dispatch(new LoadTrelloAction());
  }

  ngOnInit(): void {
  }

  deleteCard(id: number) {
    this.store.dispatch(new DeleteTrelloAction(id));
  }
  addCard(trello: Trello) {
    this.dialog.open(CreateTrelloListComponent, {
      width: "300px",
      data: { update: false, trello: trello } as Process
    })
  }

  updateName(event, value: Trello) {
    const name = event.target.innerHTML;
    if (name == '' || name == undefined || name == null) {
      alert('this field is required');
      event.target.innerHTML = value.name;
      return false;
    }
    const data: Trello = {
      id: value.id,
      name: name,
      memberDetails: value.memberDetails
    }
    this.store.dispatch(new UpdateTrelloAction(data));
  }
  createTrello() {
    this.dialog.open(CreateTrelloComponent, { width: '300px' });
  }

}
