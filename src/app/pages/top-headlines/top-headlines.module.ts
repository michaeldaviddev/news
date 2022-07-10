import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopHeadlinesPageRoutingModule } from './top-headlines-routing.module';

import { TopHeadlinesPage } from './top-headlines.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopHeadlinesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TopHeadlinesPage]
})
export class TopHeadlinesPageModule {}
