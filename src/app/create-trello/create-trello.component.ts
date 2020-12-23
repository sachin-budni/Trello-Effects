import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AddTrelloAction } from '../actions/trello.actions';
// import { AddTrello } from '../actions/trello.actions';
import { AppState } from '../app.state';
import { Trello } from './../models/trello.model';

@Component({
  selector: 'app-create-trello',
  templateUrl: './create-trello.component.html',
  styleUrls: ['./create-trello.component.scss']
})
export class CreateTrelloComponent implements OnInit {

  trelloFormGroup: FormGroup; 
  constructor(private fb: FormBuilder, private store: Store<AppState>,
    public dialogRef: MatDialogRef<CreateTrelloComponent>) { }

  ngOnInit(): void {
    this.trelloFormGroup = this.fb.group({
      name: ['', Validators.required]
    })
  }

  addTrelloList(value: Trello) {
    if(value.name === '' || value.name === undefined || value.name === null) {
      return false;
    }
    value.id = Math.floor((Math.random()*1000000)+1);
    value.memberDetails = []
    this.store.dispatch(new AddTrelloAction(value));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }

}
