import { Trello } from './models/trello.model';
import { TrelloState } from './reducers/trello.reducer';
export interface AppState {
    readonly trello: TrelloState;
}
