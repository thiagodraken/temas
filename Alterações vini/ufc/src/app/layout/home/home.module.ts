import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, PageHeaderModule],
    declarations: [HomeComponent]
})
export class HomeModule {}
