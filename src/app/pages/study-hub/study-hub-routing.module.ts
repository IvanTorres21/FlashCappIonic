import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyHubPage } from './study-hub.page';

const routes: Routes = [
  {
    path: '',
    component: StudyHubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyHubPageRoutingModule {}
