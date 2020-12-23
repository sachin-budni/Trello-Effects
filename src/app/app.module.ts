import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TrelloListComponent } from './trello-list/trello-list.component';
import { TrelloListoflistComponent } from './trello-listoflist/trello-listoflist.component';
import { CreateTrelloComponent } from './create-trello/create-trello.component';
import { CreateTrelloListComponent } from './create-trello-list/create-trello-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrelloService } from './trello.service';

import { reducer } from './reducers/trello.reducer';
import { TrelloEffects } from './effects/trello.effects';
import { HttpClientModule } from '@angular/common/http';
const Materials = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatDialogModule,
  DragDropModule,
  MatAutocompleteModule,
  HttpClientModule
]
@NgModule({
  declarations: [
    AppComponent,
    TrelloListComponent,
    TrelloListoflistComponent,
    CreateTrelloComponent,
    CreateTrelloListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ trello: reducer},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }),
    EffectsModule.forRoot([TrelloEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    Materials
  ],
  providers: [TrelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
