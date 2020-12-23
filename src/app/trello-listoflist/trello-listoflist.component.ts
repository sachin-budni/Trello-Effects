import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { DeleteTrelloOfListAction, UpdateTrelloAction } from '../actions/trello.actions';
// import { AddTrelloListOfList, RemoveTrelloListOfList, UpdateTrelloListOfListSameList } from '../actions/trello.actions';
import { CreateTrelloListComponent } from '../create-trello-list/create-trello-list.component';
import { Trello } from '../models/trello.model';
import { TrelloList } from '../models/trelloList.model';
import { AppState } from './../app.state';

interface DropListData {
  id: string;
  tasks: TrelloList[];
}

export interface Process {
  trello?: Trello;
  update?: boolean;
  value?: TrelloList;
}

interface TransferData {
  prevTaskList: DropListData;
  currTaskList: DropListData;
  previousIndex: number;
  currentIndex: number;
}

@Component({
  selector: 'app-trello-listoflist',
  templateUrl: './trello-listoflist.component.html',
  styleUrls: ['./trello-listoflist.component.scss']
})
export class TrelloListoflistComponent implements OnInit {
  @Input() trelloListOfList: Trello;
  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  edit(value: TrelloList) {
    this.openDialog(value);
  }
  
  openDialog(value: TrelloList) {
    this.dialog.open(CreateTrelloListComponent, {
      width: '300px',
      data: { trello: this.trelloListOfList, update: true, value: value } as Process
    })
  }

  deleteTrelloList(id: number) {
    this.store.dispatch(new DeleteTrelloOfListAction(this.trelloListOfList, id));
  }

  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
}

  drop({
    item,
    container,
    previousContainer,
    currentIndex,
    previousIndex
  }: CdkDragDrop<any>) {
    let data: TrelloList = item.data;
    let prevTrello: Trello = previousContainer.data;
    let newTrello: Trello = container.data;
    if (prevTrello.id !== newTrello.id) {
        const mem =  newTrello.memberDetails.map(d => d);
        mem.splice(currentIndex, 0, data);
        const obj: Trello = {
          id: newTrello.id,
          name: newTrello.name,
          memberDetails: mem
        }
        this.store.dispatch(new UpdateTrelloAction(obj));
        this.store.dispatch(new DeleteTrelloOfListAction(prevTrello, data.id));
    } else {
      const mem =  newTrello.memberDetails.map(d => d);
      const mems = this.array_move(mem, previousIndex, currentIndex);
      const obj: Trello = {
        id: newTrello.id,
        name: newTrello.name,
        memberDetails: mems
      }
      this.store.dispatch(new UpdateTrelloAction(obj));
    }
  }


  trackByFn(index: number, { id }: TrelloList): string | number {
    return id || index;
  }

}
