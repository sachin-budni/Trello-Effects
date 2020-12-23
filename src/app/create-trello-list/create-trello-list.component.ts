import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddTrelloOfTrelloAction, UpdateTrelloOfTrelloAction } from '../actions/trello.actions';
// import { AddTrelloListOfList, UpdateTrelloListOfList } from './../actions/trello.actions';
import { AppState } from '../app.state';
import { Trello } from '../models/trello.model';
import { TrelloList } from '../models/trelloList.model';
import { Process } from '../trello-listoflist/trello-listoflist.component';

@Component({
  selector: 'app-create-trello-list',
  templateUrl: './create-trello-list.component.html',
  styleUrls: ['./create-trello-list.component.scss']
})
export class CreateTrelloListComponent implements OnInit {

  trelloListOfListFormGroup: FormGroup;
  constructor(private dialogRef: MatDialogRef<CreateTrelloListComponent>,
    private store: Store<AppState>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Process) { }

  ngOnInit(): void {
    this.trelloListOfListFormGroup = this.fb.group({
      name:['', Validators.required]
    })
    if(this.data.update) {
      this.trelloListOfListFormGroup.controls['name']
      .setValue(this.data.value!.name);
    }
  }
  close() {
    this.dialogRef.close();
  }
  addTrelloList(value: TrelloList) {
    if(value.name === '' || value.name === undefined || value.name === null) {
      return false;
    }
    if(!this.data.update) {
      let trelloList: TrelloList = {
        id: Math.floor((Math.random()*1000000)+1),
        name: value.name
      };

      this.store.dispatch(new AddTrelloOfTrelloAction(this.data.trello, trelloList));
    } else {
      this.store.dispatch(new UpdateTrelloOfTrelloAction(this.data.trello , {
        id: this.data.value.id,
        name: value.name
      }));
    }
    this.close()
  }

}
