import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordTestComponent } from './word-test/word-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WordListComponent,
    WordTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
