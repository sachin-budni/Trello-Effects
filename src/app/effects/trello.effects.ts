import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TrelloService } from './../trello.service';
import { 
  LOAD_TRELLO,
  ADD_TRELLO,
  DELETE_TRELLO,
  UPDATE_TRELLO,
  LoadTrelloAction,
  LoadTrelloSuccessAction,
  LoadTrelloFailureAction,
  DeleteTrelloFailureAction,
  AddTrelloAction,
  AddTrelloFailureAction,
  DeleteTrelloAction,
  DeleteTrelloSuccessAction,
  UpdateTrelloAction,
  UpdateTrelloFailureAction,
  UpdateTrelloSuccessAction,
  AddTrelloSuccessAction,
  AddTrelloOfTrelloAction,
  AddTrelloOfTrelloSuccessAction,
  ADD_TRELLOLISTOFLIST,
  UpdateTrelloOfTrelloAction,
  UpdateTrelloOfTrelloSuccessAction,
  UPDATE_TRELLOLISTOFLIST,
  DeleteTrelloOfListAction,
  DELETE_TRELLOOfLIST,
  DeleteTrelloOfListSuccessAction
} from '../actions/trello.actions'
import { of } from 'rxjs';

@Injectable()
export class TrelloEffects {

  @Effect() 
  loadShopping$ = this.actions$
    .pipe(
      ofType<LoadTrelloAction>(LOAD_TRELLO),
      mergeMap(
        () => this.trelloService.$trellos
          .pipe(
            map(data => {
              return new LoadTrelloSuccessAction(data)
            }),
            catchError(error => of(new LoadTrelloFailureAction(error)))
          )
      ),
  );

  @Effect() addTrello$ = this.actions$
    .pipe(
      ofType<AddTrelloAction>(ADD_TRELLO),
      mergeMap(
        (data) => {
          return this.trelloService.addTrello(data.payload)
          .pipe(
            map(() => new AddTrelloSuccessAction(data.payload)),
            catchError(error => of(new AddTrelloFailureAction(error)))
          )}
      )
  )

  @Effect() updateTrello$ = this.actions$
    .pipe(
      ofType<UpdateTrelloAction>(UPDATE_TRELLO),
      mergeMap((data) => {
          return this.trelloService.updateTrello(data.payload)
          .pipe(
            map(() => new UpdateTrelloSuccessAction(data.payload)),
            catchError(error => of(new UpdateTrelloFailureAction(error)))
          )}
      )
  )

  @Effect() addTrelloListOfList$ = this.actions$
    .pipe(
      ofType<AddTrelloOfTrelloAction>(ADD_TRELLOLISTOFLIST),
      mergeMap((data) => {
          return this.trelloService.addTrelloListOfList(data.trello, data.playoad)
          .pipe(
            map(() => new AddTrelloOfTrelloSuccessAction(data.trello, data.playoad)),
            catchError(error => of(new UpdateTrelloFailureAction(error)))
          )}
      )
  )

  @Effect() updateTrelloListOfList$ = this.actions$
    .pipe(
      ofType<UpdateTrelloOfTrelloAction>(UPDATE_TRELLOLISTOFLIST),
      mergeMap((data) => {
          return this.trelloService.updateTrelloListOfList(data.trello, data.playoad)
          .pipe(
            map(() => new UpdateTrelloOfTrelloSuccessAction(data.trello, data.playoad)),
            catchError(error => of(new UpdateTrelloFailureAction(error)))
          )}
      )
  )
  
  @Effect() deleteTrello$ = this.actions$
    .pipe(
      ofType<DeleteTrelloAction>(DELETE_TRELLO),
      mergeMap(
        (data) => {
          return this.trelloService.deleteTrello(data.payload)
          .pipe(
            map(() => new DeleteTrelloSuccessAction(data.payload)),
            catchError(error => of(new DeleteTrelloFailureAction(error)))
          )}
      )
    )
  
  @Effect() deleteListOfList$ = this.actions$
    .pipe(
      ofType<DeleteTrelloOfListAction>(DELETE_TRELLOOfLIST),
      mergeMap(
        (data) => {
          return this.trelloService.deleteTrelloOfList(data.id, data.payload)
          .pipe(
            map(() => new DeleteTrelloOfListSuccessAction(data.payload, data.id)),
            catchError(error => of(new DeleteTrelloFailureAction(error)))
          )}
      )
    )

  constructor(
    private actions$: Actions,
    private trelloService: TrelloService
  ) { }
}