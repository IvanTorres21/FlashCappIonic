import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectStudyCardPage } from './select-study-card.page';

const routes: Routes = [
  {
    path: '',
    component: SelectStudyCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectStudyCardPageRoutingModule {}
