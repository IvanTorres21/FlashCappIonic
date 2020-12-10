import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyHubPageRoutingModule } from './study-hub-routing.module';

import { StudyHubPage } from './study-hub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyHubPageRoutingModule
  ],
  declarations: [StudyHubPage]
})
export class StudyHubPageModule {}
