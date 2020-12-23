import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { TrelloList } from '../models/trelloList.model';
// import { TrelloList } from '../models/trelloList.model';
import { Trello } from './../models/trello.model';

// export const ADD_TRELLO = '[TRELLO] Add';
// export const UPDATE_TRELLOLISTOFLIST = '[TRELLO] Update list of list';
// export const UPDATE_TRELLOLISTOFLISTSAME = '[TRELLO] update list of list same';
// export const REMOVE_TRELLO = '[TRELLO] Remove';
// export const REMOVE_TRELLOLISTOFLIST = '[TRELLO] Remove list of list';
// export const UPDATE_TRELLO = '[TRELLO] Update';

export const LOAD_TRELLO = '[TRELLO] Load trello';
export const LOAD_TRELLO_SUCCESS = '[TRELLO] Load trello Success';
export const LOAD_TRELLO_FAILURE = '[TRELLO] Load trello Failure';

export const ADD_TRELLO = '[TRELLO] Add trello';
export const ADD_TRELLO_SUCCESS = '[TRELLO] Add trello Success';
export const ADD_TRELLO_FAILURE = '[TRELLO] Add trello Failure';

export const UPDATE_TRELLO = '[TRELLO] Update trello';
export const UPDATE_TRELLO_SUCCESS = '[TRELLO] Update trello Success';
export const UPDATE_TRELLO_FAILURE = '[TRELLO] Update trello Failure';

export const DELETE_TRELLO = '[TRELLO] Delete trello';
export const DELETE_TRELLO_SUCCESS = '[TRELLO] Delete trello Success';
export const DELETE_TRELLO_FAILURE = '[TRELLO] Delete trello Failure';

export const DELETE_TRELLOOfLIST = '[TRELLO] Delete list of list';
export const DELETE_TRELLOOfLIST_SUCCESS = '[TRELLO] Delete list of list Success';
export const DELETE_TRELLOOfLIST_FAILURE = '[TRELLO] Delete list of list Failure';

export const ADD_TRELLOLISTOFLIST = '[TRELLO] Add list of list';
export const ADD_TRELLOLISTOFLIST_SUCCESS = '[TRELLO] add list of list success';
export const ADD_TRELLOLISTOFLIST_FAILURE = '[TRELLO] Add list of list failure';

export const UPDATE_TRELLOLISTOFLIST = '[TRELLO] Update list of list';
export const UPDATE_TRELLOLISTOFLIST_SUCCESS = '[TRELLO] Update list of list success';
export const UPDATE_TRELLOLISTOFLIST_FAILURE = '[TRELLO] Update list of list failure';

export class LoadTrelloAction implements Action {
    readonly type = LOAD_TRELLO;
}
export class LoadTrelloSuccessAction implements Action {
    readonly type = LOAD_TRELLO_SUCCESS
    constructor(public payload: Array<Trello>) {} 
}
export class LoadTrelloFailureAction implements Action {
    readonly type = LOAD_TRELLO_FAILURE;
    constructor(public payload: Error) {}
}

//--------------------------------------

export class AddTrelloAction implements Action {
    readonly type = ADD_TRELLO
  
    constructor(public payload: Trello) { }
  }
  export class AddTrelloSuccessAction implements Action {
    readonly type = ADD_TRELLO_SUCCESS
  
    constructor(public payload: Trello) { }
  }
  export class AddTrelloFailureAction implements Action {
    readonly type = ADD_TRELLO_FAILURE
  
    constructor(public payload: Error) { }
  }

//-----------------------------  

export class UpdateTrelloAction implements Action {
    readonly type = UPDATE_TRELLO
  
    constructor(public payload: Trello) { }
  }
  export class UpdateTrelloSuccessAction implements Action {
    readonly type = UPDATE_TRELLO_SUCCESS
  
    constructor(public payload: Trello) { }
  }
  export class UpdateTrelloFailureAction implements Action {
    readonly type = UPDATE_TRELLO_FAILURE
  
    constructor(public payload: Error) { }
  }
  //----------------------------

export class AddTrelloOfTrelloAction implements Action {
    readonly type = ADD_TRELLOLISTOFLIST
  
    constructor(public trello: Trello, public playoad: TrelloList, public index?:number) { }
  }
  export class AddTrelloOfTrelloSuccessAction implements Action {
    readonly type = ADD_TRELLOLISTOFLIST_SUCCESS
  
    constructor(public trello: Trello, public playoad: TrelloList, public index?:number) { }
  }
  export class AddTrelloOfTrelloFailureAction implements Action {
    readonly type = ADD_TRELLOLISTOFLIST_FAILURE
  
    constructor(public payload: Error) { }
  }

  //--------------

export class UpdateTrelloOfTrelloAction implements Action {
    readonly type = UPDATE_TRELLOLISTOFLIST
  
    constructor(public trello: Trello, public playoad: TrelloList, public index?:number) { }
  }
  export class UpdateTrelloOfTrelloSuccessAction implements Action {
    readonly type = UPDATE_TRELLOLISTOFLIST_SUCCESS
  
    constructor(public trello: Trello, public playoad: TrelloList, public index?:number) { }
  }
  export class UpdateTrelloOfTrelloFailureAction implements Action {
    readonly type = UPDATE_TRELLOLISTOFLIST_FAILURE
  
    constructor(public payload: Error) { }
  }
 
//--------------------------------------------------  

  export class DeleteTrelloAction implements Action {
    readonly type = DELETE_TRELLO
  
    constructor(public payload: number) { }
  }
  
  export class DeleteTrelloSuccessAction implements Action {
    readonly type = DELETE_TRELLO_SUCCESS
  
    constructor(public payload: number) { }
  }
  export class DeleteTrelloFailureAction implements Action {
    readonly type = DELETE_TRELLO_FAILURE
  
    constructor(public payload: string) { }
  }

///-----------

  export class DeleteTrelloOfListAction implements Action {
    readonly type = DELETE_TRELLOOfLIST
  
    constructor(public payload: Trello, public id: number) { }
  }
  
  export class DeleteTrelloOfListSuccessAction implements Action {
    readonly type = DELETE_TRELLOOfLIST_SUCCESS
  
    constructor(public payload: Trello, public id: number) { }
  }
  export class DeleteTrelloOfListFailureAction implements Action {
    readonly type = DELETE_TRELLOOfLIST_FAILURE
  
    constructor(public payload: string) { }
  }

///-----------

// export class AddTrello implements Action {
//     readonly type = ADD_TRELLO;

//     constructor(public playoad: Trello){ }
// }
// export class AddTrelloListOfList implements Action {
//     readonly type = ADD_TRELLOLISTOFLIST;

//     constructor(public id: number, public playoad: TrelloList, public index?:number){ }
// }
// export class UpdateTrelloListOfList implements Action {
//     readonly type = UPDATE_TRELLOLISTOFLIST;

//     constructor(public id: number, public playoad: TrelloList){ }
// }

// export class RemoveTrello implements Action {
//     readonly type = REMOVE_TRELLO;

//     constructor(public playoad: number){ }
// }
// export class RemoveTrelloListOfList implements Action {
//     readonly type = REMOVE_TRELLOLISTOFLIST;

//     constructor(public id: number, public playoad: number){ }
// }

// export class UpdateTrello implements Action {
//     readonly type = UPDATE_TRELLO;

//     constructor(public playoad: Trello){ }
// }
// export class UpdateTrelloListOfListSameList implements Action {
//     readonly type = UPDATE_TRELLOLISTOFLISTSAME;

//     constructor(public id: number, public index: number,public preIn: number, public playoad: TrelloList){ }
// }


export type Actions = //AddTrello | RemoveTrello | UpdateTrello | AddTrelloListOfList | UpdateTrelloListOfList | RemoveTrelloListOfList | UpdateTrelloListOfListSameList |
LoadTrelloAction | LoadTrelloSuccessAction | LoadTrelloFailureAction |
AddTrelloAction | AddTrelloSuccessAction | AddTrelloFailureAction |
UpdateTrelloAction | UpdateTrelloSuccessAction | UpdateTrelloFailureAction |
UpdateTrelloOfTrelloAction | UpdateTrelloOfTrelloSuccessAction | UpdateTrelloOfTrelloFailureAction |
DeleteTrelloAction | DeleteTrelloSuccessAction | DeleteTrelloFailureAction |
DeleteTrelloOfListAction | DeleteTrelloOfListSuccessAction | DeleteTrelloOfListFailureAction |
AddTrelloOfTrelloAction | AddTrelloOfTrelloSuccessAction | AddTrelloOfTrelloFailureAction;