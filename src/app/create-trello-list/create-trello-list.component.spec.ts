import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrelloListComponent } from './create-trello-list.component';

describe('CreateTrelloListComponent', () => {
  let component: CreateTrelloListComponent;
  let fixture: ComponentFixture<CreateTrelloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTrelloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrelloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
