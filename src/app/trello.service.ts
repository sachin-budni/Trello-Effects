import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trello } from './models/trello.model';
import { TrelloList } from './models/trelloList.model';

@Injectable()
export class TrelloService {
  private TRELLO_URL = "http://localhost:3000/trello"
  constructor(private http: HttpClient) { }

  get $trellos(): Observable<Trello[]> {
    return this.http.get<Trello[]>(this.TRELLO_URL);
  }

  addTrello(trello: Trello) {
    return this.http.post(this.TRELLO_URL, trello);
  }

  deleteTrello(id: number) {
    return this.http.delete(`${this.TRELLO_URL}/${id}`);
  }

  updateTrello(trello: Trello) {
    return this.http.put(`${this.TRELLO_URL}/${trello.id}`, trello);
  }

  addTrelloListOfList(trello: Trello, payload: TrelloList) {
    const mems = trello.memberDetails.map(d => d);
    mems.push(payload);
    const obj: Trello = {
      id: trello.id,
      name: trello.name,
      memberDetails: mems
    }
    return this.http.put(`${this.TRELLO_URL}/${trello.id}`, obj);
  }

  updateTrelloListOfList(trello: Trello, payload: TrelloList) {
    const obj: Trello = {
      memberDetails:  trello.memberDetails.map(d => {
        if(d.id === payload.id) return payload;
        return d;
      })
    }
    return this.http.patch(`${this.TRELLO_URL}/${trello.id}`, obj);
  }

  deleteTrelloOfList(id: number, trello: Trello) {
    const obj: Trello = {
      memberDetails:  trello.memberDetails.filter(d => d.id !== id)
    }
    return this.http.patch(`${this.TRELLO_URL}/${trello.id}`, obj);
  }

}
