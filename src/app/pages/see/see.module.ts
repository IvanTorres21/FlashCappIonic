import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeePageRoutingModule } from './see-routing.module';

import { SeePage } from './see.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeePageRoutingModule
  ],
  declarations: [SeePage]
})
export class SeePageModule {}
