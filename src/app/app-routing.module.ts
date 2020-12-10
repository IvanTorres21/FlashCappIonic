import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'add/:id',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'study/:id',
    loadChildren: () => import('./pages/study/study.module').then( m => m.StudyPageModule)
  },
  {
    path: 'see',
    loadChildren: () => import('./pages/see/see.module').then( m => m.SeePageModule)
  },
  {
    path: 'add-group/:id',
    loadChildren: () => import('./pages/add-group/add-group.module').then( m => m.AddGroupPageModule)
  },
  {
    path: 'add-group',
    loadChildren: () => import('./pages/add-group/add-group.module').then( m => m.AddGroupPageModule)
  },
  {
    path: 'select-study-card',
    loadChildren: () => import('./pages/select-study-card/select-study-card.module').then( m => m.SelectStudyCardPageModule)
  },
  {
    path: 'study-hub',
    loadChildren: () => import('./pages/study-hub/study-hub.module').then( m => m.StudyHubPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
