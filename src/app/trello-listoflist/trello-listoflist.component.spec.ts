import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloListoflistComponent } from './trello-listoflist.component';

describe('TrelloListoflistComponent', () => {
  let component: TrelloListoflistComponent;
  let fixture: ComponentFixture<TrelloListoflistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrelloListoflistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloListoflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
