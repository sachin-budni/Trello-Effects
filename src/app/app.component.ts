import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { CreateTrelloComponent } from './create-trello/create-trello.component';
// import { selectVisibleBooks } from './models/trello.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trello';
  trelloCards: Observable<any>
  searchValue: string;
  constructor(private dialog: MatDialog,private store: Store<AppState>) {}

  createTrello() {
    this.dialog.open(CreateTrelloComponent, { width: '300px' });
  }
  search() {
    // this.trelloCards = this.store.select(selectVisibleBooks(this.searchValue));
  }
}
