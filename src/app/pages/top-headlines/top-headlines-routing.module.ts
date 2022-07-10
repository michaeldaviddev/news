import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopHeadlinesPage } from './top-headlines.page';

const routes: Routes = [
  {
    path: '',
    component: TopHeadlinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopHeadlinesPageRoutingModule {}
