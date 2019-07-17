import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './home/home.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordTestComponent } from './word-test/word-test.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'wordList', component: WordListComponent},
  { path: 'wordTest', component: WordTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}

)
export class AppRoutingModule {}
