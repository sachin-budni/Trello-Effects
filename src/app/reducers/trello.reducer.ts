import { Action } from '@ngrx/store';
import { Trello } from './../models/trello.model';
import * as TrelloActions from './../actions/trello.actions';
import { TrelloList } from '../models/trelloList.model';

// const initialState: Trello[] = [
    //     {
    //         "name": "One",
    //         "id": 1,
    //         "memberDetails": [
    //             {
    //                 "name": "One-One",
    //                 "id": 1
    //             },
    //             {
    //                 "name": "One-Two",
    //                 "id": 2
    //             }
    //         ]
    //     },
    //     {
    //         "name": "Two",
    //         "id": 2,
    //         "memberDetails": [
    //             {
    //                 "name": "One-Three",
    //                 "id": 3
    //             }
    //         ]
    //     },
    //     {
    //         "name": "Three",
    //         "id": 3,
    //         "memberDetails": []
    //     }
    // ]

export interface TrelloState {
    list: Trello[],
    loading: boolean,
    error: Error
  }
  
  const initialState: TrelloState = {
    list: [],
    loading: false,
    error: undefined
  };
  

function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
}

export function reducer(state: TrelloState = initialState, action: TrelloActions.Actions) {

    switch(action.type) {
        case TrelloActions.LOAD_TRELLO :
            return {
                ...state,
                loading: false
            }
        case TrelloActions.LOAD_TRELLO_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false
            }
            
        case TrelloActions.LOAD_TRELLO_FAILURE: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        // -------

        case TrelloActions.UPDATE_TRELLO :
            return {
                ...state,
                loading: true
            }
        case TrelloActions.UPDATE_TRELLO_SUCCESS :
            const data = state.list.map(item => {
                if(item.id === action.payload.id) {
                    // const updateData: Trello = {
                    //     id: action.payload.id,
                    //     name:action.payload.name,
                    //     memberDetails: action.payload.memberDetails
                    // }
                    return action.payload;
                }
                return item;
            });
            return {
                ...state,
                list: [...data],
                loading: false
            };
        case TrelloActions.UPDATE_TRELLO_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        // ----------

        case TrelloActions.ADD_TRELLO :
            return {
                ...state,
                loading: true
            }
        case TrelloActions.ADD_TRELLO_SUCCESS :
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case TrelloActions.ADD_TRELLO_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        ///------------

        case TrelloActions.DELETE_TRELLO:
            return {
                ...state,
                loading: true
            };
        case TrelloActions.DELETE_TRELLO_SUCCESS:
            return {
                ...state,
                list: state.list.filter(item => item.id !== action.payload),
                loading: false
            }
        case TrelloActions.DELETE_TRELLO_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        ///------------

        case TrelloActions.DELETE_TRELLOOfLIST:
            return {
                ...state,
                loading: true
            };
        case TrelloActions.DELETE_TRELLOOfLIST_SUCCESS:
            const memss = action.payload.memberDetails.filter(f => f.id !== action.id);
            const listData = state.list.map(d => {
                if(d.id === action.payload.id) {
                    return {
                        id: action.payload.id,
                        name: action.payload.name,
                        memberDetails: memss
                    }
                }
                return d;
            })
            return {
                ...state,
                list: listData,
                loading: false
            }
        case TrelloActions.DELETE_TRELLOOfLIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

//---------------------------

    case TrelloActions.UPDATE_TRELLOLISTOFLIST :
        return {
            ...state,
            loading: true
        }
    case TrelloActions.UPDATE_TRELLOLISTOFLIST_SUCCESS :
        const data1 = state.list.filter(s => s.id === action.trello.id)[0].memberDetails.map((item: TrelloList) => {
                    if(item.id === action.playoad.id) {
                        return action.playoad;
                    }
                    return item;
                })
                const list = state.list.map(item => {
                    if(item.id === action.trello.id) {
                        const updateData: Trello = {
                            id: action.trello.id,
                            name: item.name,
                            memberDetails: data1
                        }
                        return updateData;
                    }
                    return item;
                });
        return {
            ...state,
            list: list,
            loading: false
        };
    case TrelloActions.UPDATE_TRELLOLISTOFLIST_FAILURE:
        return {
            ...state,
            error: action.payload,
            loading: false
        };

// ----

        case TrelloActions.ADD_TRELLOLISTOFLIST :
            return {
                ...state,
                loading: true
            }
        case TrelloActions.ADD_TRELLOLISTOFLIST_SUCCESS :
            const mems = state.list.filter(s => s.id === action.trello.id)[0].memberDetails.map(d => d);
            let l = [];
            if(typeof action.index === "number") {
                mems.splice(action.index, 0, action.playoad);
                l = mems;
            } else {
                l = [...mems, action.playoad];
            }
            const states = state.list.map(item => {
                if(item.id === action.trello.id) {
                    const updateData: Trello = {
                        id: action.trello.id,
                        name: item.name,
                        memberDetails: l
                    }
                    return updateData;
                }
                return item;
            });
            return {
                ...state,
                list: states,
                loading: false
            };
        case TrelloActions.ADD_TRELLOLISTOFLIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;

        // case TrelloActions.ADD_TRELLO :
        //     return [...state, action.playoad];
        // case TrelloActions.ADD_TRELLOLISTOFLIST :
        //     const mems = state.filter(s => s.id === action.id)[0].memberDetails.map(d => d);
        //     let l = [];
        //     if(typeof action.index === "number") {
        //         mems.splice(action.index, 0, action.playoad);
        //         l = mems;
        //     } else {
        //         l = [...mems, action.playoad];
        //     }
        //     return state.map(item => {
        //         if(item.id === action.id) {
        //             const updateData: Trello = {
        //                 id: action.id,
        //                 name: item.name,
        //                 memberDetails: l
        //             }
        //             return updateData;
        //         }
        //         return item;
        //     });
        // case TrelloActions.UPDATE_TRELLOLISTOFLIST :
        //     const data1 = state.filter(s => s.id === action.id)[0].memberDetails.map((item: TrelloList) => {
        //         if(item.id === action.playoad.id) {
        //             return {
        //                 id: action.playoad.id,
        //                 name:action.playoad.name
        //             } as TrelloList;
        //         }
        //         return item;
        //     })
        //     return state.map(item => {
        //         if(item.id === action.id) {
        //             const updateData: Trello = {
        //                 id: action.id,
        //                 name: item.name,
        //                 memberDetails: data1
        //             }
        //             return updateData;
        //         }
        //         return item;
        //     });
        // case TrelloActions.REMOVE_TRELLO :
        //     return state.filter(item => item.id !== action.playoad);
        // case TrelloActions.UPDATE_TRELLO :
        //     const data = state.map(item => {
        //         if(item.id === action.playoad.id) {
        //             const updateData: Trello = {
        //                 id: action.playoad.id,
        //                 name:action.playoad.name,
        //                 memberDetails: action.playoad.memberDetails
        //             }
        //             return updateData;
        //         }
        //         return item;
        //     })
        //     return [...data];
        // case TrelloActions.REMOVE_TRELLOLISTOFLIST :
        //     const data3 = state.map(item => {
        //         if(item.id === action.id) {
        //             const updateData: Trello = {
        //                 id: action.id,
        //                 name: item.name,
        //                 memberDetails: item.memberDetails.filter(d => d.id !== action.playoad)
        //             }
        //             return updateData;
        //         }
        //         return item;
        //     })
        //     return [...data3];
        // case TrelloActions.UPDATE_TRELLOLISTOFLISTSAME :
        //     let com = [];
        //     let index = action.index;
        //     let prevIndex = action.preIn;
        //     const members = array_move(state.find(s => s.id === action.id).memberDetails.map(d => d), prevIndex, index);
            
        //     return state.map(item => {
        //         if(item.id === action.id) {
        //             const updateData: Trello = {
        //                 id: action.id,
        //                 name: item.name,
        //                 memberDetails: members
        //             }
        //             return updateData;
        //         }
        //         return item;
        //     });
        // default: 
        //     return state;
    }
}