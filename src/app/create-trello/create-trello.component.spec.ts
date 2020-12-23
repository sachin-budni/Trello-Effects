import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrelloComponent } from './create-trello.component';

describe('CreateTrelloComponent', () => {
  let component: CreateTrelloComponent;
  let fixture: ComponentFixture<CreateTrelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTrelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
