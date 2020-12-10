import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectStudyCardPageRoutingModule } from './select-study-card-routing.module';

import { SelectStudyCardPage } from './select-study-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectStudyCardPageRoutingModule
  ],
  declarations: [SelectStudyCardPage]
})
export class SelectStudyCardPageModule {}
